---
title: Facebook Ads Overview
---
## Overview

![Facebook](https://cdn.branch.io/branch-assets/ad-partner-manager/386574786681131050/Facebook-Logo-PNG-Clipart-1528503483289.png)

Branch links can be used together with **[Facebook](http://facebook.com/)**  ads, allowing you to track ad-driven installs on the Branch dashboard and deep link those new users directly to content the first time they open your app. Refer to [Facebook's Ad Guide](https://www.facebook.com/business/ads-guide){:target="\_blank"} to learn more.

Facebook's Ad Platform supports numerous campaign types and a shared set of advertisement formats. To help you navigate Facebook's Advertisement Platform we created this guide detailing how to use Branch links in all major Facebook ad types.

## Campaign Support

This documentation supports the following Facebook Ad Campaigns:

Facebook Campaign Category | Campaign Type/Objective | Link users to | Branch Documentation Link | Branch Ad Format
--- | --- | --- | --- | ---
Awareness | Brand Awareness | Web | **[link](/deep-linked-ads/facebook-platform-ads/#brand-awareness-campaign-setup)** | Cross-platform Display
Awareness | Reach | Web | **[link](/deep-linked-ads/facebook-platform-ads/#reach-campaign-setup)** | Cross-platform Display
Consideration | Traffic | Web or App | **[link](/deep-linked-ads/facebook-traffic-conversion-ads/#traffic-campaign-setup)** | Cross-platform Display
Consideration | App Installs | App | **[link](/deep-linked-ads/facebook-app-install-ads/)** | App Only: Installs
Consideration | Video Views | Web | **[link](/deep-linked-ads/facebook-platform-ads/#video-views-campaign-setup)** | Cross-platform Display
Consideration | Lead Generation | Web x | **[link](/deep-linked-ads/facebook-platform-ads/#lead-generation-campaign-setup)** | Cross-platform Display
Conversion | Conversions | Web or App | **[link](/deep-linked-ads/facebook-traffic-conversion-ads/#conversions-campaign-setup)** | Cross-platform Display
Conversion | Product Catalogue Sales | Web or App | **[link](/deep-linked-ads/facebook-dynamic-ads/)** | Cross-platform Product Links

[x] Facebook has indicated that links are not supported in all placements.

## Data Mapping between Branch and Facebook

### Event Names

!!! info "Standard vs Custom Events"
	Please follow the [Tracking Commerce, Content, Lifecycle and Custom Events](/apps/v2event/) guide when implementing event tracking in the Branch SDK.  When tracking any of the Facebook events that are mapped to the Branch `custom` event, use the event name from the table below; e.g. `branch.logevent('AdClick')`.


| **Facebook MMP _eventName**         | **Branch Event Name**     |
|---------------------------------|-----------------------|
| `AdClick`                         | `Custom`                |
| `AdImpression`                    | `Custom`                |
| `Contact`                         | `Custom`                |
| `CustomizeProduct`                | `Custom`                |
| `Donate`                          | `Custom`                |
| `fb_mobile_achievement_unlocked`  | `UNLOCK_ACHIEVEMENT`    |
| `MOBILE_APP_INSTALL`              | `INSTALL`               |
| `fb_mobile_activate_app`          | `OPEN`                  |
| `fb_mobile_add_payment_info`      | `ADD_PAYMENT_INFO`      |
| `fb_mobile_add_to_cart`           | `ADD_TO_CART`           |
| `fb_mobile_add_to_wishlist`       | `ADD_TO_WISHLIST`       |
| `fb_mobile_complete_registration` | `COMPLETE_REGISTRATION` |
| `fb_mobile_content_view`          | `VIEW_ITEM`             |
| `fb_mobile_initiated_checkout`    | `INITIATE_PURCHASE`     |
| `fb_mobile_level_achieved`        | `ACHIEVE_LEVEL`         |
| `fb_mobile_purchase`              | `PURCHASE`              |
| `fb_mobile_rate`                  | `RATE`                  |
| `fb_mobile_search`                | `SEARCH`                |
| `fb_mobile_spent_credits`         | `SPEND_CREDITS`         |
| `fb_mobile_tutorial_completion`   | `COMPLETE_TUTORIAL`     |
| `FindLocation`                    | `Custom`                |
| `Schedule`                        | `Custom`                |
| `StartTrial`                      | `Custom`                |
| `SubmitApplication`               | `Custom`                |
| `Subscribe`                       | `Custom`                |

### Campaign/Ad Data

| **Branch Data**                                          | **Facebook Data**      |
|------------------------------------------------------|--------------------|
| `last_attributed_touch_data_tilde_campaign`            | `campaign name`      |
| `last_attributed_touch_data_tilde_campaign_id`         | `campaign ID`        |
| `last_attributed_touch_data_tilde_secondary_publisher` | `publisher platform` |
| `last_attributed_touch_data_tilde_creative_name`       | `creative name`      |
| `last_attributed_touch_data_tilde_creative_id`         | `creative ID`        |
| `last_attributed_touch_data_tilde_ad_set_name`         | `ad set name`        |
| `last_attributed_touch_data_tilde_ad_set_id`           | `ad set ID`          |
| `last_attributed_touch_data_tilde_ad_name`             | `ad name`            |
| `last_attributed_touch_data_tilde_ad_id`               | `ad ID`              |

### Metadata

|**Branch Key-Value Pair** | **Facebook MMP Key-Value Pair** | **Facebook event(s) supported**
| --- | --- | ---
| `event_data.revenue` | `_valueToSum` | `fb_mobile_add_to_cart`, `fb_mobile_add_to_wishlist`, `fb_mobile_initiated_checkout`, `fb_mobile_purchase`, `fb_mobile_spent_credits`, `fb_mobile_content_view`
| `event_data.currency` | `fb_currency` | `fb_mobile_add_to_cart`, `fb_mobile_add_to_wishlist`, `fb_mobile_initiated_checkout`, `fb_mobile_purchase`, `fb_mobile_content_view`
| `content_items[0].$sku` | `fb_content_id` | `fb_mobile_add_to_cart`, `fb_mobile_add_to_wishlist`, `fb_mobile_tutorial_completion`, `fb_mobile_initiated_checkout`, `fb_mobile_purchase`, `fb_mobile_rate`, `fb_mobile_spent_credits`, `fb_mobile_content_view`
| `content_items[0].$product_category` | `fb_content_type` | `fb_mobile_add_to_cart`, `fb_mobile_add_to_wishlist`, `fb_mobile_initiated_checkout`, `fb_mobile_purchase`, `fb_mobile_rate`, `fb_mobile_search`, `fb_mobile_spent_credits`, `fb_mobile_content_view`
| `content_items[0].$quantity` | `fb_num_items` | `fb_mobile_initiated_checkout`, `fb_mobile_purchase`
| `content_items[0].$rating` | `_valueToSum` | `fb_mobile_rate`
| `content_items[0].$rating_max` | `fb_max_rating_value` | `fb_mobile_rate`
| `event_data.search_query` | `fb_search_string` | `fb_mobile_search`
| `content_items[0].$og_description` | `fb_description` | `fb_mobile_achievement_unlocked`
| `custom_data.fb_payment_info_available` | `fb_payment_info_available` | `fb_mobile_initiated_checkout`
| `custom_data.level` | `fb_level` | `fb_mobile_level_achieved`
| `custom_data.fb_success` | `fb_success` | `fb_mobile_add_payment_info`, `fb_mobile_tutorial_completion`, `fb_mobile_search`
| `custom_data.fb_registration_method` | `fb_registration_method` | `fb_mobile_complete_registration`

Currently Facebook appears to only support sending one fb_content_id (etc) per event, whereas Branch allows you to send many. To provide as much functionality as possible, we choose the first content_item and search it for key-value pairs that can be sent to Facebook.

## Viewing Facebook Data

{! ingredients/deep-linked-ads/reporting-dimensions-sans.md !}

You can see analytics on impressions, clicks, installs, opens and conversion events on various pages of the [Branch Dashboard](https://dashboard.branch.io).

### Facebook's Advanced Mobile Measurement Agreement

If you have signed Facebook's ["Advanced Mobile Measurement" agreement (<notranslate>"Data Use Terms for Advanced Mobile App Measurement"</notranslate>)](https://www.facebook.com/ads/manage/advanced_mobile_measurement/tos), then you can get device level data out via:

- [Webhooks](/exports/ua-webhooks/)
- [Daily Export API](/exports/api-v3/)
- [CSV Exports](https://dashboard.branch.io/data-import-export/csv-exports)

!!! warning " Agreement not Signed"
	If you have not signed this agreement, any event attributed to a Facebook ad will look like an organic event when accessed via Webhooks, the Daily Export API, and CSV Exports.

### Data Limitations

- [x] We cannot send device-level Facebook attribution data to third parties.
- [x] We cannot send events attributed to Facebook via Data Integrations. Please instead consider analyzing this data in-house (using Webhooks, the Daily Export API, or CSV Exports), or using the Branch Dashboard for all of your analytics and attribution needs.
- [x] This data is also not returned in the deeplink initSession callback within the app. If you have analytics needs that are not met by the Branch Dashboard, please [contact us](https://support.branch.io/support/tickets/new) and include "Facebook MMP + Feature Request" in the subject.

| **Branch feature** | **Facebook data included** |
| - | - |
| [Dashboard visualizations](https://dashboard.branch.io/){:target="\_blank"} | Pre-aggregated analytics |
| [Query API](/exports/query-api/) | Pre-aggregated analytics |
| [Liveview](https://dashboard.branch.io/liveview){:target="\_blank"} | Device-level analytics x |
| [Daily Export API](/exports/api-v3/) | Device-level analytics x |
| [CSV Exports](https://branch.dashboard.branch.io/data-import-export/csv-exports){:target="\_blank"} | Device-level analytics x |
| [Webhooks](/exports/ua-webhooks/) | Device-level analytics x |
| [Data Integrations](/integrations/data-integrations/) | Not supported |

[x] You must have signed you have signed Facebook's ["Advanced Mobile Measurement" agreement (<notranslate>"Data Use Terms for Advanced Mobile App Measurement"</notranslate>)](https://www.facebook.com/ads/manage/advanced_mobile_measurement/tos) to view this data.

Here is the page where you can see which ad accounts have signed the AMM agreement:

![AMM](/_assets/img/pages/deep-linked-ads/facebook-ads-faq/amm.png)

## Troubleshooting

We also have a document with [FAQs and Advanced Options](/deep-linked-ads/facebook-ads-faq/) for Facebook Ads. We recommend starting with one of the guides above, then jumping into the FAQ and Advanced Options when you have questions or need to troubleshoot.
