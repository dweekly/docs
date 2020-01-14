## Overview

![Amazon](https://cdn.branch.io/branch-assets/ad-partner-manager/adnetwork_logos/amazon.png)

This guide will walk you through how to setup your campaigns with **[Amazon](https://advertising.amazon.com/products/display-ads)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}
4. Configuring the Branch Dashboard

## Setup

!!! info "Fire OS Support"
	Please implement the Branch SDK for Android [4.1.1](/version-histories/android-version-history/#v411) to ensure support for Fire OS devices.

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/amazon/amazon-enable.png)

{! ingredients/deep-linked-ads/add-credentials.md !}

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/amazon/amazon-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

#### Platform-specific Ad Links

Create separate links to track campaigns for Fire TV devices vs Tablet devices. Make sure to  append the following mandatory key-values for tracking ad links on Amazon Fire Tablet/TV Devices:

- <notranslate>**Fire Tablet**</notranslate>: %24os=AMAZON_FIRE
- <notranslate>**Fire TV**</notranslate>: %24os=AMAZON_FIRE_TV

Implement these links for platform-specific Fire OS ad campaigns on the Amazon Advertising platform.

So if you are advertising on Amazon Fire TV, your final ad link may look like this:

```
https://abcd.app.link/1234567890?%243p=a_amazon&%24aaid=__AAX_IDFA__&a_android_sha1_udid=__AAX_SHA1_UDID__&a_postback=__AAX_POSTBACK_URL__&aax_site_name=__AAX_SITE_NAME__&aax_source_id=__AAX_SOURCE_NAME__&amazon_app_id=__CS_APP_ID__&amazon_tracking_id=__AAX_TRACKING_ID__&amzn_ad_tracking=__AAX_AD_TRACKING__&creative_size=__CS_AD_SIZE__&~ad_set_name=__CS_AD_NAME__&~campaign=__CS_CAMPAIGN_NAME__&~cost_currency=__AAX_COST_CURRENCY__&~cost_model=__AAX_COST_MODEL__&~cost_value=__AAX_COST__&~creative_id=__CS_CREATIVE_ID__&~secondary_publisher=__CS_MSR_PARTNER__&%24os=AMAZON_FIRE_TV
```

### Configuring the Branch Dashboard

#### Checking your URI

Please ensure your Amazon Fire app(s) for TV and Tablet use the same URI scheme as your main Android app. This URI is then entered on the Branch Dashboard's Link Settings Page as the Android URI:

![image](/_assets/img/pages/deep-linked-ads/amazon/android settings 1.png)

#### Adding your Amazon Fire app's SHA256 fingerprints

In order for Android App Links to work properly, be sure to add your Amazon Fire app's SHA256 fingerprints to the SHA256 fingerprints field. You likely already have one or more values for your Android app(s). This field is comma separated, as seen below:

 ![image](/_assets/img/pages/deep-linked-ads/amazon/android settings 2.png)

#### Adding your Amazon Fire ASIN

Amazon issues an Amazon Standard Identification Numbers (ASIN) for every app listed on its store. You need to provide this to Branch in order for Branch to fall back to the Amazon Fire Store when your app is not installed. You can find this on your publicly listed app store page under <notranslate>"Product details" -> "ASIN"</notranslate>.

![image](/_assets/img/pages/deep-linked-ads/amazon/android settings 3.png)

#### Testing Links

The easiest way to test is to put Branch links into a simple HTML page that you then load up in the Amazon Fire TV's Silk browser. You can even create a Branch link to this test page to shorten the URL that you need to type into the Silk URL bar.

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

{! ingredients/deep-linked-ads/people-based-attribution.md !}

{! ingredients/deep-linked-ads/view-through-attribution.md !}

{! ingredients/deep-linked-ads/granting-partner-access.md !}

## Advanced

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/whitelist-ip.md !}

{! ingredients/deep-linked-ads/edit-postbacks.md !}

{! ingredients/deep-linked-ads/tracking-link-params.md !}

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/reset-ad-settings.md !}

{! ingredients/deep-linked-ads/support.md !}
mnh
