!!! info "BETA ACCESS ONLY"
	The ability to configure event mappings for Self Attributing Networks is currently in BETA.  

## Overview

Branch accepts different naming conventions for the conversion events we measure. For example, maybe Uber sends a custom event called “RiderFirstBooking.” Most people who see this name would understand what it means. If they sent it as “PURCHASE” it wouldn’t be the same event, nor would it be clear.

However, Self-Attributing Networks (SANs) such as Facebook do not allow customers to optimize against custom events or show custom events in their UI. Therefore, if you want Facebook to auto-optimize against your RiderFirstBooking event, you’ll need to send it to Facebook as a “fb_mobile_purchase” event.

## Supported SANs

!!! info "Event Mapping Support"
	The ability to configure event mappings is available only for integrations with SANs.  For all other ad partners, Branch uses standard event mappings for postbacks.

You can configure event mappings for the following Self-Attributing Networks:

*   **Facebook**
*   **Google Ads (formerly Google AdWords)**
*   **Google Marketing Platform**
*   **Oath**
*   **Snap**
*   **Twitter**

!!! info "Apple Search Ads Not Supported"
	Configuring event mappings for Apple Search Ads - although a SAN - is not supported due to the inability to send events server side.

## Default Event Mappings

Your events will be mapped by default to ad partner event names for the purposes of campaign optimization and reporting.

Please refer to the following respective documents for our default event mappings per SAN:

*   [Facebook](https://docs.branch.io/deep-linked-ads/facebook-ads-overview/#event-names)
*   [Google Ads](https://docs.branch.io/deep-linked-ads/google-ads-overview/#forwarding-events-to-google-ads)
*   [Google Marketing Platform](https://docs.branch.io/deep-linked-ads/google-marketing-platform-app-conversion-tracking/#forwarding-events-to-google-marketing-platform)
*   [Oath](https://docs.branch.io/deep-linked-ads/oath-mobile-tracking/#event-names)
*   [Snap](https://docs.branch.io/deep-linked-ads/snap-mobile-tracking/#event-names)
*   [Twitter](https://docs.branch.io/deep-linked-ads/twitter-ads-app-install/#forwarding-events-to-twitter-ads)

## Configuring Event Mappings

If you do not want to use the default event mappings, you can configure how Branch maps the events it tracks with those of the Self-Attributing Network.

To configure a SAN’s event mappings:

1. In the left-hand navigation, under <notranslate>**Ads**</notranslate>, click <notranslate>**Partner Management**</notranslate>.
2. Find and select the SAN for which you want to configure the event mappings.
3. Click the <notranslate>**Events Config**</notranslate> tab.
4. Click the <notranslate>**Add Event Mappings**</notranslate> button.
5.  Map your event by providing the following:
    1. <notranslate>**Your Event Name**</notranslate> - The app event you want mapped; only app events you are tracking with the Branch SDK are available to be mapped.
    2. <notranslate>**Your Customer Event Alias**</notranslate> - Your custom name for your app event; only available if you’ve already implemented `customer_event_alias` in the Branch or TUNE SDK.
    3. <notranslate>**Ad Partner Event Name**</notranslate> - The ad partner’s name for the app events they support; see default event mappings above.
6. Click <notranslate>**Save**</notranslate>.

![image](/_assets/img/pages/partner-management/event-mappings.gif)

## Things to Keep in Mind

*   Branch defines an “event” as a combination of Your Event Name + Customer Event Alias.
*   You cannot configure more than one of the same event; i.e. the same combination of event name and customer event alias.
*   You **cannot** map to a single Branch event to two different Ad Partner events.
    *   You **can** map two different Branch events to a single Ad Partner Event.
*   You can only configure at the event level; sub-parameters (e.g. order_id or revenue) cannot be mapped to ad partner events.
    *   If you use a [custom event,](https://docs.branch.io/apps/v2event/) you can still attach specific event_data metadata to that event.
*   If you start to measure a new app event after you’ve enabled the SAN integration, you must manually configure the event.
*   Some SANs accept custom events.  For those that do, it’s indicated in the Ad Partner Event Name drop-down.
*   If you have not configured any event mappings, Branch will use the default mappings outlined above for all events.
*   If you have **at least one event mapped, only the mapped events visible in the UI will be sent.**
