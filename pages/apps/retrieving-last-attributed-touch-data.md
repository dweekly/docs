## Overview

Branch includes SDK methods to allow retrieval of our last attributed touch data (LATD) from the client. This results in an asynchronous call being made to Branch’s servers with LATD data returned when possible.

Last attributed touch data contains the information associated with that user's last viewed impression or clicked link.

## Fields Returned

By using the LATD SDK querying, the following fields will be returned to the client:

- last_attributed_touch_type
- last_attributed_touch_timestamp
- last_attributed_touch_data_tilde_id
- last_attributed_touch_data_tilde_campaign
- last_attributed_touch_data_tilde_campaign_id
- last_attributed_touch_data_tilde_campaign_type
- last_attributed_touch_data_tilde_customer_campaign
- last_attributed_touch_data_tilde_channel
- last_attributed_touch_data_tilde_feature
- last_attributed_touch_data_tilde_stage
- last_attributed_touch_data_tilde_tags
- last_attributed_touch_data_tilde_advertising_partner_name
- last_attributed_touch_data_tilde_advertising_partner_id
- last_attributed_touch_data_tilde_secondary_publisher
- last_attributed_touch_data_tilde_secondary_publisher_id
- last_attributed_touch_data_tilde_customer_secondary_publisher
- last_attributed_touch_data_tilde_creative_name
- last_attributed_touch_data_tilde_creative_id
- last_attributed_touch_data_tilde_ad_set_name
- last_attributed_touch_data_tilde_ad_set_id
- last_attributed_touch_data_tilde_customer_ad_set_name
- last_attributed_touch_data_tilde_ad_name
- last_attributed_touch_data_tilde_ad_id
- last_attributed_touch_data_tilde_customer_ad_name
- last_attributed_touch_data_tilde_keyword
- last_attributed_touch_data_tilde_keyword_id
- last_attributed_touch_data_tilde_customer_keyword
- last_attributed_touch_data_tilde_sub_site_name
- last_attributed_touch_data_tilde_customer_sub_site_name
- last_attributed_touch_data_tilde_branch_ad_format
- last_attributed_touch_data_tilde_technology_partner
- last_attributed_touch_data_tilde_banner_dimensions
- last_attributed_touch_data_tilde_placement
- last_attributed_touch_data_tilde_placement_id
- last_attributed_touch_data_tilde_customer_placement
- last_attributed_touch_data_tilde_agency
- last_attributed_touch_data_tilde_agency_id
- last_attributed_touch_data_tilde_tune_publisher_name
- last_attributed_touch_data_tilde_tune_publisher_id
- last_attributed_touch_data_tilde_tune_publisher_sub1
- last_attributed_touch_data_tilde_tune_publisher_sub2
- last_attributed_touch_data_tilde_tune_publisher_sub3
- last_attributed_touch_data_tilde_tune_publisher_sub4
- last_attributed_touch_data_tilde_tune_publisher_sub5
- last_attributed_touch_data_tilde_optimization_model
- last_attributed_touch_data_tilde_secondary_ad_format
- last_attributed_touch_data_tilde_external_touch_id
- last_attributed_touch_data_tilde_journey_id
- last_attributed_touch_data_tilde_journey_name
- last_attributed_touch_data_tilde_view_id
- last_attributed_touch_data_tilde_view_name
- last_attributed_touch_data_plus_referring_domain
- last_attributed_touch_data_plus_current_feature
- last_attributed_touch_data_plus_via_features
- last_attributed_touch_data_dollar_3p
- last_attributed_touch_data_dollar_fb_data_terms_not_signed
- last_attributed_touch_data_plus_web_format
- last_attributed_touch_data_plus_touch_id
- last_attributed_touch_data_custom_fields

## Enabling LATD Feature

Before you can receive Branch last attributed touch data client-side, you need to enable this functionality in your Branch dashboard. This functionality is disabled by default.

To enable LATD:

1. In the left-hand navigation, click on **Link Settings**.
2. On the **Link Settings** page, scroll down and expand **Advanced Settings**.
3. Within the **Advanced Settings** section, check the box next to **Enable retrieving Last Attributed Touch Data via SDKs**.
4. Once checked, scroll down to the bottom of the page and click **Save**.

![image](/_assets/img/pages/apps/latd-setting.png)

## Android

!!! info "Attribution Window Logic"
    When calling the LATD method, you can also provide a value for the `attributionWindow` you want applied to the data.  If you do not provide a value within the SDK, Branch will use the attribution window setting value in your Branch dashboard.

```
// init the LATD call from inside the initSession
Branch.getInstance().getLastAttributedTouchData(
    new BranchLastAttributedTouchDataListener() {
        @Override
        public void onDataFetched(JSONObject jsonObject, BranchError error) {
             // read the data from the jsonObject
        }
    }, attributionWindow);
```

## iOS

!!! info "Attribution Window Logic"
    Branch uses the attribution window setting value in your Branch dashboard. The ability to set the attribution window value via the SDK will be included in the next release.

```
[[Branch getInstance] lastTouchAttributedDataWithCompletion:^(BranchLastAttributedTouchData * _Nullable ltad) {
        ltad.lastAttributedTouchJSON; // NSDictionary  (JSON object)
        ltad.attributionWindow; // NSNumber
    }];
```

## Web

!!! info "Attribution Window Logic"
    When calling the LATD method, you can also provide a value for the `attribution_window` you want applied to the data.  If you do not provide a value within the SDK, Branch will use the attribution window setting value in your Branch dashboard.

```
branch.lastAttributedTouchData(
    attribution_window,
    callback (err, data)
);
```
