---
title: Universal Ads Advanced
---
!!! warning "Universal Ads Basics Guide"
	Please refer to our [Universal Ads Basics](/deep-linked-ads/branch-universal-ads-mobile-tracking/) guide before using any the advanced options below.

### Setup

{! ingredients/deep-linked-ads/view-through-attribution.md !}

#### Testing with setDebug

When integrating the SDKs, it's often useful to use setDebug to verify that your app is able to communicate with Branch servers, and is receiving deep link data. However, our upstream systems don't register test events sent using setDebug, so events will not appear in Liveview or Analytics, nor will they fire postbacks. You should disable setDebug when looking at Liveview or testing postbacks.

#### Server to Server Ad Links

If you have a server to server integration you must provide specific requirements for attribution. Make sure to append the following mandatory key-values into tracking ad links to ensure they are not rejected or blocked:

- <notranslate>**Server to Server Parameter**</notranslate>: Add server-to-server click macro URL parameter at the end of your link, so we know it's a server to server link:
    - `%24s2s=true`

- <notranslate>**Device ID Macro Value**</notranslate>: Pass user Advertising Identifier via click macro URL parameter:
    - `%24idfa={IDFA}` for iOS devices
    - `%24aaid={AAID}` for Android devices

- <notranslate>**IP address**</notranslate>:  Pass user IP information in the header OR click macro URL parameter to override on click:
    - HTTP header `x-ip-override: {IP_ADDRESS}`
    - Click macro URL parameter: `device_ip={IP_ADDRESS}`

- <notranslate>**User Agent**</notranslate>:  Pass User Agent information in the header OR click macro URL parameter to override on click:
    - HTTP header `User-Agent: {USER_AGENT}`
    - Click macro URL parameter: `user_agent={USER_AGENT}`

!!! warning "Update Partner-specific URL macros"
    Please make sure that you are using your macros instead of {IDFA}. {AAID}, {IP_ADDRESS}, {USER_AGENT}

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/edit-postbacks.md !}

### Granting Agency Access

{! ingredients/deep-linked-ads/granting-partner-access.md !}

### Tracking Link Parameters

{! ingredients/deep-linked-ads/tracking-link-params.md !}

### Attribution Windows

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/people-based-attribution.md !}
