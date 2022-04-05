import { InjectionToken } from "@angular/core";

export class APP_CONSTS {
    private static readonly _SIDE_SHEET_DATA = new InjectionToken('SIDE_SHEET_OVERLAY_DATA');

    public static get PORTAL_OUTLET_ID() { return "portal-outlet"; }
    public static get SIDE_SHEET_DATA(): any { return APP_CONSTS._SIDE_SHEET_DATA  };
    public static get BIRTHDAY_LONG_DATE_FORMAT_OPTIONS(): any { return { year: 'numeric', month: 'long', day: 'numeric' } };
}