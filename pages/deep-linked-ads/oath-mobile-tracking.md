## Overview

![Oath](https://cdn.branch.io/branch-assets/ad-partner-manager/386574786681131050/oath-1544044998484.png)

This guide will walk you through how to setup your campaigns with **[Oath](https://gemini.yahoo.com/advertiser/home)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Campaign Support

| **Campaign Type** | **Attribution supported** |
| - | - |
| Gemini/Native/Search | Yes (using Branch links) |
| DSP | No (reporting only available in Oath) |

Oath Ad Platforms has two main products/channels relevant to mobile advertising and attribution - (Yahoo!) Gemini/Native & Search, and the (formerly Brightroll) DSP.

Branch currently attributes only Gemini inventory using Branch links, and is able to send all event data to Oath which can attribute both Gemini and DSP inventory.

## Data Mapping between Branch and Oath

### Event Names

|Branch Event Name(s)|Oath Event Name|Event category|
|--- |--- |--- |
|INSTALL|n/a - specific endpoint|n/a - specific endpoint|
|PURCHASE|Purchased|Purchase|
|INITIATE_PURCHASE|InitiatedCheckout|Initiate Checkout|
|ADD_TO_CART|AddedToCart|Add to Cart|
|VIEW_ITEM|ViewedContent|View Content|
|ADD_PAYMENT_INFO|AddedPaymentInfo|Add Payment Info|
|COMPLETE_REGISTRATION|CompletedRegistration|Others|
|SEARCH|Searched|Others|
|ACHIEVE_LEVEL|AchievedLevel|Others|
|OPEN, REINSTALL|ActivatedApp|Others|
|COMPLETE_TUTORIAL|CompletedTutorial|Others|
|ADD_TO_WISHLIST|AddedToWishlist|Add To Wishlist|
|UNLOCK_ACHIEVEMENT|UnlockedAchievement|Others|
|SHARE|n/a|Others|
|SPEND_CREDITS|SpentCredits|Others|
|RATE|Rated|Others|
|SUBSCRIBE|SignUp|Sign Up|
|N/A -- Custom -- to document|Lead|Others|

### Campaign/Ad Data

|Oath Attribution API|Branch Analytics Tag|Example Value|Notes|
|--- |--- |--- |--- |
|n/a|$3p|“a_oath”||
|n/a|~advertising_partner_name|“Oath”||
|engagement_time|last_attributed_touch_timestamp|1455675372963||
|campaign_name|~campaign|Light Bright Launch||
|campaign_id|~campaign_id|15292426||
|adgroup_name|~ad_set_name|“Example name”||
|adgroup_id|~ad_set_id|235465654654||
|creative_name|~ad_name & ~creative_name|Creative name||
|creative_id|~ad_id & ~creative_id|123456||
|demand_platform_id|~channel|1|Note that 1 is for Native Ad Platform (O&O), 2 is for Verizon Media DSP.|
|campaign_type|~tags|App Install||
|network_id|~network|456456|ID to identify Native Ad Platform to 3P Data Providers. Least important of the IDs as it doesn’t necessarily change.|
|site_id|~secondary_publisher|dhjs8723tgajshd23a||
|event_type|last_attributed_touch_type|CLICK or IMPRESSION|For Oath this can be 100: Impression, 200: Click or 300: App Install. NOTE: We will not store or attribute to 300 response. It is only for in-app events that have had an install in 6 months of click and click timestamp is not supported.|

## Setup

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/oath/oath-enable.png)

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/oath/oath-postbacks.png)

!!! warning "Send All Events"
	By default, postbacks to Oath are enabled to send all events to Oath, not just those events attributed to them. This allows Oath to attribute on Gemini and DSP inventory. Please ensure this setting remains set to `All Events`.

{! ingredients/deep-linked-ads/create-ad-link.md !}

!!! info "Using Links in Gemini"
	During campaign setup, The App Store URL needs to be used in the app URL field. Then, when the ad is created, the tracking URL can be used. You will need to specify "Other" under the MMP, and can then enter the tracking URL.
	If you are still unable to locate a tracking URL field in the UI, you may have to upload them via bulk upload functionality. Please take a look at this documentation:  https://developer.verizonmedia.com/nativeandsearch/advertiser/guide/bulk/ . There are screenshots included and a short video. If you have further issues, please reach out to your VZM contact or support team.

{! ingredients/deep-linked-ads/add-agency-prefix-san-only.md !}

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

!!! tip "Viewing Oath Attributions"
	When viewing attributions in your Oath reporting, you will notice attributions for both the Yahoo Gemini channel as well as their DSP Brightroll.  As Branch links can only be used for the Yahoo Gemini channel, Branch analytics can only show attributions specific to Yahoo Gemini.

{! ingredients/deep-linked-ads/view-through-attribution.md !}

{! ingredients/deep-linked-ads/granting-partner-access.md !}

## Advanced

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/tracking-link-params.md !}

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/reset-ad-settings.md !}

{! ingredients/deep-linked-ads/support.md !}
