---
title: CleverTap
---
## Overview

With a push of a button you can send your Branch data to your CleverTap dashboard, helping you understand the power of Branch as an acquisition pathway.

### How does it work?

Once the Branch SDK is integrated into an app, Branch can detect which links are leading to installs, re-opens, and users' actions. Enabling this integration will result in Branch automatically forwarding referred events to CleverTap, in the exact format CleverTap expects.

### What events does Branch send?

- Installs
- Lifecycle Events
- Commerce Events
- Content Events
- Custom Events

Non-referred events, clicks, web session starts, and pageviews will be excluded. Branch also sends all the data that is attached to the link that drove the referred event. This will allow you to analyze which campaigns, channels, etc. are helping you acquire and engage users.

## Setup

### Prerequisites

- This guide requires you to have integrated the Branch SDK in your mobile apps.
- You also need to be an CleverTap customer and have the [CleverTap SDK installed](https://support.clevertap.com/docs.html) in your app.

### Retrieve your CleverTap Credentials

Find your CleverTap Account Credentials. Later, you'll enter them into the Branch Dashboard.

1. Log in to your [CleverTap account](https://dashboard.clevertap.com/){:target="\_blank"}  and navigate to Settings by clicking the cog at the top of the screen, then `Settings Dashboard`.

    ![image](/_assets/img/pages/integrations/clevertap/clevertap-settings.png)

1. Ensure you're looking at the correct app for your integration, then click the eye icon to show your account credentials.

    ![image](/_assets/img/pages/integrations/clevertap/clevertap-account-credentials.png)

1. Copy these account credentials into the Branch dashboard as instructed below.


{! ingredients/data-integrations/enable-partner.md !}

{! ingredients/data-integrations/add-credentials.md !}

### Capture IDFA/GAID

Ensure that you are capturing both the Google Advertising Identifier (GAID) on Android, and the IDFA on iOS.

!!! warning "Google Advertising ID is required"
    CleverTap requires the Google Advertising ID to be sent. Android ID (the hardware ID) alone is not enough.

### CleverTap identity support

You must use the following code to send your CleverTap identity to Branch so that user identities are correctly assigned in CleverTap.

#### iOS
**Objective-C**
Inside `didFinishLaunchingWithOptions`

```obj-c
Branch *branch = [Branch getInstance];
[CleverTap autoIntegrate];
[[Branch getInstance] setRequestMetadataKey:@"$clevertap_attribution_id"
value:[[CleverTap sharedInstance] profileGetCleverTapAttributionIdentifier]];
```

**Swift**
Inside `didFinishLaunchingWithOptions`:

```swift
CleverTap.autoIntegrate()
if let branch = Branch.getInstance() {
	branch.setRequestMetadataKey("$clevertap_attribution_id", value:CleverTap.sharedInstance()?profileGetCleverTapAttributionIdentifier() as NSObject!);
}
```

#### Android
Before you initialize in your Application `#onCreate` or Deep Link Activity’s `#onCreate`.

```java
Branch branch = Branch.getInstance();
branch.setRequestMetadata("$clevertap_attribution_id",
cleverTapInstance.getCleverTapAttributionIdentifier());
```


### Upgrade to the latest SDKs [if necessary]

Please ensure you're using the Branch iOS SDK 0.19.5 or greater, and Android SDK v2.12.1 or greater. If you implemented Branch after October 11th 2017, you are likely already on this version or later.

## Support

### Testing your CleverTap integration

The simplest way to test your integration is working end to end is to open your app **from a Branch link** then verify the data appears in CleverTap. After doing this, you will know how you to test more advanced scenarios.

1. Create a Branch Quick Link at [https://dashboard.branch.io/quick-links](https://dashboard.branch.io/quick-links){:target="\_blank"}.
1. Click that Branch link to open your app.
1. In your Branch dashboard, verify you see the open event show as a <notranslate>"referred session"</notranslate> with a <notranslate>"session referring link URL"</notranslate> in your Branch dashboard under <notranslate>"Liveview > Events"</notranslate>

#### Screenshots of where data should appear in the CleverTap Dashboard

![image](/_assets/img/pages/integrations/clevertap/clevertap-people.png)

![image](/_assets/img/pages/integrations/clevertap/clevertap-events.png)
