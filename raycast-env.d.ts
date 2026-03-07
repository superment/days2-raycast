/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Default Display Mode - How to display the countdown by default */
  "displayMode": "days" | "weeks" | "months"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `days2` command */
  export type Days2 = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-calendars` command */
  export type ManageCalendars = ExtensionPreferences & {}
  /** Preferences accessible in the `background-refresh` command */
  export type BackgroundRefresh = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `days2` command */
  export type Days2 = {}
  /** Arguments passed to the `manage-calendars` command */
  export type ManageCalendars = {}
  /** Arguments passed to the `background-refresh` command */
  export type BackgroundRefresh = {}
}

