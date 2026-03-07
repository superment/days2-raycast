import { updateCommandMetadata } from "@raycast/api";
import { withAccessToken } from "@raycast/utils";
import { google } from "./oauth";
import { fetchCalendars, fetchUpcomingAllDayEvents } from "./google-calendar";
import { getSelectedCalendarIds } from "./storage";
import { formatCountdown } from "./utils";
import { GoogleCalendar } from "./types";

async function BackgroundRefreshCommand() {
  try {
    const calendars = await fetchCalendars();
    const calendarMap = new Map<string, GoogleCalendar>();
    for (const cal of calendars) {
      calendarMap.set(cal.id, cal);
    }

    const selectedIds = await getSelectedCalendarIds();
    const calIds = selectedIds ?? calendars.map((c) => c.id);

    if (calIds.length === 0) {
      await updateCommandMetadata({ subtitle: null });
      return;
    }

    const events = await fetchUpcomingAllDayEvents(calIds, calendarMap);

    if (events.length === 0) {
      await updateCommandMetadata({ subtitle: "No upcoming events" });
      return;
    }

    const nearest = events[0];
    const subtitle = `${nearest.title} \u2014 ${formatCountdown(nearest.daysUntil, "days")}`;
    await updateCommandMetadata({ subtitle });
  } catch (error) {
    console.error("Background refresh error:", error);
  }
}

export default withAccessToken(google)(BackgroundRefreshCommand);
