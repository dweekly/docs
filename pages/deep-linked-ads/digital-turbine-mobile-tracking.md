## Overview

![Digital-Turbine](https://cdn.branch.io/branch-assets/ad-partner-manager/386574786681131050/digital_turbine-1528502999872.png)

This guide will walk you through how to setup your campaigns with **[Digital Turbine](http://digitalturbine.com)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/digital-turbine/digital-turbine-enable.png)

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/digital-turbine/digital-turbine-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

!!! info "Advanced Setup"
    Please refer to our [Advanced Universal Ads](/deep-linked-ads/branch-universal-ads-advanced/) guide for advanced options when enabling a Universal Ads partner.

## Journeys with SingleTap™

This guide will walk you through how to set up Branch links that can be used in SingleTap™  Journeys with [Digital Turbine](https://www.digitalturbine.com/) and track resulting conversions.

### Device Requirements

*   Android 6.0 (API 23) or above
*   Digital Turbine Client running v5.7 or above


### Integrating the SDKs and Tracking In-app Events

The Branch SDK for Android allow you to get up and running quickly.

If you haven't already integrated Branch SDK into your application, please follow our integration guide to integrate Branch SDK into your application:

- Documentation for [Android](https://docs.branch.io/apps/android/)

**Limitations with setDebug and seeing data in Branch**

When integrating the SDKs, it's often useful to use setDebug to verify that your app is able to communicate with Branch servers, and is receiving deep link data. However, our upstream systems don't register test events sent using setDebug, so events will not appear in Liveview or Analytics, nor will they fire postbacks. You should disable setDebug when looking at Liveview or testing postbacks.

#### Track Conversion Events

Install and open events are automatically tracked using just the Branch SDK integration. However, to track custom events, such as registration or purchase, you will need to integrate them into your application.

**Sending event metadata from your application**

Please make sure that you setup and pass event metadata from the application to the ad partner. Follow up with your ad partner to get the list of required parameters.

Please reference the general [V2 Event Tracking Guide](https://docs.branch.io/apps/v2event/#overview). This will help ensure that you've integrated the right Branch events with the correct metadata.

**Testing your events with Liveview**

You can test your integration by going to our [Liveview page](https://dashboard.branch.io/liveview/events). Set a filter with the event name to verify that the Branch SDK is recording each event.

### Create your Branch Link

Start from the [Quick Links](dashboard.branch.io/quick-links/qlc/define) page of your Branch dashboard.

#### Define

1. On the next Define screen, fill in the following fields:
    *   **Name your link**: Give your link a name so you can find it in the dashboard later. Try to stick to a naming convention if creating multiple quick links
    *   **Enter a corresponding URL (OPTIONAL)**: Entering a URL to your site in this field will grab social information like Title, Description and Image when shared on social media (more on this later). It will also automatically set the provided URL as the $canonical_url which is useful if that is your routing mechanism.
    *   **Where will you post this link?**: The channel this will be used in. For example, Facebook, Twitter, Instagram, Snapchat, etc. It’s important to keep the spelling of channels consistent so you can analyze the performance of these channels in aggregate.
    *   **What campaign is it part of?**: Another analytics tag you can set as it relates to a campaign you are running. “Cyber Monday”, for example.
    *   When finished, select the Configure Options button
2. If the link will be shared and visible to the user, you have the ability to set a vanity alias for your quick link. The vanity alias on a link cannot be changed after link creation. When left empty, random string of characters will be assigned for the vanity alias.

#### Configure Options

1. The next section contains information pertaining to the various sub-tabs you see under the vanity URL:
    *   **DEEP LINKING** - Information passed from web to app to control routing, promo codes, open graph tags, etc.
        1. Routing - The mechanism in which users are routed from web to app so you can direct users to the correct content. For example, this may be via $canonical_url or $deeplink_path
            *   $canonical_url will be automatically populated from step 3a if filled out
        2. Promo codes - If your app is configured to use a promo code or discount from the Branch data dictionary, you can enter that here. You’ll need to know the exact key-value syntax. Talk to your mobile app developers if you’re unfamiliar.
        3. OG Tags - Control how your links will look when shared on social media platforms. In-depth customizable options here. **You will not set title, description or image in this section of the dashboard.**
    *   **REDIRECTS** - Links you create will automatically inherit redirects on iOS, Android, and Desktop per the default settings applied at your account level. Here you have the ability to override those defaults and direct users to specific locations if the app is not installed.
        4. Default Redirect - Set at the account level within Link Settings. Typically set to the relevant mobile stores
        5. Web URL - Send users to a specific web page if they don’t have to the app to avoid any unexpected flow to the app store
        6. Deepview - Send users to a specific deepview you may have created within the branch dashboard. Copy the key and paste it into the text box. Useful if you want to present the user with a preview of the content before taking them directly to the app store. Should not be set for Desktop option
    *   **ANALYTICS TAGS** - Setting tags on links in order to view performance on them in the dashboard
        7. Channel - For example, Facebook, Twitter, Instagram, Snapchat, etc. Keep the spelling of names consistent
        8. Campaign -“Cyber Monday”, for example
        9. Tags - Further tagging granularity. For example, “US”, “UK”, Social influencer name, blog poster, etc.
    *   **SOCIAL MEDIA** - Setting Title, Description and Image for instances when this link is shared on social platforms. This will be automatically populated from OG Tags included on the redirection URL. Use the previewer on the right side of the screen.

### Making your Branch Link compatible with SingleTap™

1. Retrieve your base SingleTap™ link from your Digital Turbine Account Manager.
2. Add `&dvURL=` followed by your URL encoded Branch link to the end of your Digital Turbine URL.

Example:

Base SingleTap URL:
```
https://delivers.dtignite.com/v2/delivers/clickAd.jsp?siteId=11365&campaignId=28394
```

Branch Link:

```
https://skdm3.app.link/pzBYIfsilZ
```

Resulting URL:

```
https://delivers.dtignite.com/v2/delivers/clickAd.jsp?siteId=11365&campaignId=28394&dvURL=https%3A%2F%2Fskdm3.app.link%2FpzBYIfsilZ
```
