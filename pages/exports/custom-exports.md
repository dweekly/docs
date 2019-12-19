## Overview

!!! info "Branch & TUNE Export Functionality"
	Custom exports are available for both Branch data points and TUNE data points.  Please make sure to view the correct tab - Branch or TUNE - when referencing the below documentation.

The Branch Custom Exports find and queue log records that match your search criteria for export. You can do so either via the **Custom Exports** section in your Branch dashboard OR via API.

Custom exports endpoints are limited to a maximum of 2 million records each and can query up to 120 days prior to the date of export.

If more records are required, please make multiple requests with smaller time intervals to pull the necessary data in "batches". In some cases, Branch can increase the number of records above 2 million. Please contact [Support](mailto:support@branch.io) to request an increase.

## Authentication

Calls to the Custom Export API require an _api_key_ parameter to be passed with each request. API Keys are generated on a per-user basis and are permanent.

Learn how to [retrieve your API key (a.k.a. `Access Token`)](/dashboard/organization-view/#managing-your-user-profile)

!!! warning "Organization Level Access Required"
	In order to retrieve or reset your API Key/Access Token, you must have access to the Organization level of the account.  This functionality is not present at the app level.

##Rate Limits

Rate limits depend on the endpoint you are making a request to.

For creating exports, the rate limit is 10 requests per minute and 25 requests per hour.

For checking the status of an export, the rate limit is 50 requests per minute and 1000 per hour.

## Export Access

In order to access Custom Exports, a user will need to have both **Sensitive Data** and **Export** access.

![image](/_assets/img/pages/dashboard/access-levels/export-access.png)

For more details on how to give a user the required access, please follow [Granting a User Export Access](/dashboard/export-access/#granting-a-user-export-access).

### Third Party Access

Any user with access to an account’s API keys will be able to access Branch’s Custom Export API (and thus unfiltered, log-level data). As a result, we would recommend against providing third parties with the permissions required to view API keys during the invitation process.


### Providing Agencies API Access

If you work with an agency that runs your advertising campaigns and want to give them access to export the subsequent data, you can provide them with access to the Custom Export API.

To provide an agency team member with access to the Custom Export API:

1. In the left-hand navigation, under **Setup & Testing**, click on **Account Settings**.
2. On the **Account Settings** page, click on the **Agencies** tab.
3. Expand the agency in question, find the agency team member you want to give access to, hover on the button in the **Actions** column and click **Edit**.
4. In the **Edit Agency Team Member** modal:
    1. Under **Access Level**, check the **Export** box.
    2. Under **Permissions**, check the **Sensitive Data** box.
5. Optional: add data filters
    1. Under **Data Filters**, toggle any necessary data filters on/blue. Exported data will be filtered accordingly.
6. Click **Save**.

![image](/_assets/img/pages/exports/agency-export-access.png)

!!! warning "Agency-Tagged Data"
	If you do not enable the Only Show Agency-Tagged Data data filter, the Agency Team Member will be able to export sensitive data associated with all of your campaigns, regardless if they are associated with them or not.

## Available Topics to Export

- *BRANCH TOPICS*

			- Blocked Clicks
			- Blocked Commerce Events
			- Blocked Content Events
			- Blocked CTA Views
			- Blocked Custom Events
			- Blocked Impressions
			- Blocked Installs
			- Blocked Opens
			- Blocked Pageviews
			- Blocked Reinstalls
			- Blocked SMS Sent
			- Blocked User Lifecycle Events
			- Blocked Web Session Starts
			- Clicks
			- Commerce Events
			- Content Events
			- CTA Views
			- Custom Events
			- Impressions
			- Installs
			- Opens
			- Pageviews
			- Postback Records
			- Reinstalls
			- SMS Sent
			- User Lifecycle Events
			- Web Session Starts
			- Web To App Auto Redirects

- *TUNE TOPICS*

			- Clicks
			- Event Items
			- Events
			- Impressions
			- Installs
			- Opens

## Available Fields

- *BRANCH FIELDS*

			| EO field                                                      | Human Readable                              | Type            |
			|---------------------------------------------------------------|---------------------------------------------|-----------------|
			| app_id                                                        | App ID (pls capitalize ID in Liveview)      | Long            |
			| content_items                                                 | Content Items                               | ArrayStruct     |
			| custom_data                                                   | Custom Data                                 | MapStringString |
			| customer_event_alias                                          | Customer Event Alias                        | String          |
			| datasource                                                    | - do not expose in API or UI -              | String          |
			| days_from_last_attributed_touch_to_event                      | Days From Last Attributed Touch To Event    | Integer         |
			| deep_linked                                                   | Deep Linked                                 | Boolean         |
			| di_match_click_token                                          | DI Match Click Token                        | Long            |
			| event_data_affiliation                                        | Affiliation                                 | String          |
			| event_data_coupon                                             | Coupon                                      | String          |
			| event_data_currency                                           | Currency                                    | String          |
			| event_data_description                                        | Event Description                           | String          |
			| event_data_exchange_rate                                      | Exchange Rate                               | Double          |
			| event_data_revenue                                            | Revenue                                     | Double          |
			| event_data_revenue_in_usd                                     | Revenue In USD                              | Double          |
			| event_data_search_query                                       | Search Query                                | String          |
			| event_data_shipping                                           | Shipping                                    | Double          |
			| event_data_tax                                                | Tax                                         | Double          |
			| event_data_transaction_id                                     | Transaction ID                              | String          |
			| event_timestamp                                               | Event Timestamp                             | Long            |
			| existing_user                                                 | Existing User                               | Boolean         |
			| external_intent_uri                                           | External Intent URI                         | String          |
			| first_event_for_user                                          | First Event For User                        | Boolean         |
			| hash_version                                                  | Hash Version                                | String          |
			| hours_from_last_attributed_touch_to_event                     | House From Last Attributed Touch To Event   | Integer         |
			| id                                                            | ID                                          | String          |
			| install_activity_timestamp                                    | Install Timestamp                           | Long            |
			| install_activity_touch_data_advertising_partner_name          | Install Ad Partner                          | String          |
			| last_attributed_touch_data_custom_fields                      | Last Attributed Touch Custom Fields         | String          |
			| last_attributed_touch_data_dollar_3p                          | Ad Partner (3p)                             | String          |
			| last_attributed_touch_data_dollar_fb_data_terms_not_signed    | - do not expose in API or UI -              | Boolean         |
			| last_attributed_touch_data_plus_current_feature               | Current Feature                             | String          |
			| last_attributed_touch_data_tilde_id                           | Last Attributed Touch ID                    | Long            |
			| last_attributed_touch_data_plus_touch_id                      | Last Attributed Touch Touch ID              | String          |
			| last_cta_view_data_tilde_id                                   | Last CTA View ID                            | Long            |
			| last_cta_view_data_plus_touch_id                              | Last CTA View Touch ID                      | String          |
			| last_attributed_touch_data_plus_via_features                  | Via Features                                | ArrayString     |
			| last_attributed_touch_data_plus_web_format                    | Web Format                                  | String          |
			| last_attributed_touch_data_tilde_ad_id                        | Ad ID                                       | String          |
			| last_attributed_touch_data_tilde_ad_name                      | Ad Name                                     | String          |
			| last_attributed_touch_data_tilde_ad_set_id                    | Ad Set ID                                   | String          |
			| last_attributed_touch_data_tilde_ad_set_name                  | Ad Set Name                                 | String          |
			| last_attributed_touch_data_tilde_advertising_partner_id       | Ad Partner ID                               | String          |
			| last_attributed_touch_data_tilde_advertising_partner_name     | Ad Partner                                  | String          |
			| last_attributed_touch_data_tilde_agency                       | Agency                                      | String          |
			| last_attributed_touch_data_tilde_agency_id                    | Agency ID                                   | String          |
			| last_attributed_touch_data_tilde_banner_dimensions            | Banner Dimensions                           | String          |
			| last_attributed_touch_data_tilde_branch_ad_format             | Branch Ad Format                            | String          |
			| last_attributed_touch_data_tilde_campaign                     | Campaign                                    | String          |
			| last_attributed_touch_data_tilde_campaign_id                  | Campaign ID                                 | String          |
			| last_attributed_touch_data_tilde_campaign_type                | Campaign Type                               | String          |
			| last_attributed_touch_data_tilde_channel                      | Channel                                     | String          |
			| last_attributed_touch_data_tilde_creative_name                | Creative Name                               | String          |
			| last_attributed_touch_data_tilde_creative_id                  | Creative ID                                 | String          |
			| last_attributed_touch_data_tilde_customer_ad_name             | Customer Ad Name                            | String          |
			| last_attributed_touch_data_tilde_customer_campaign            | Customer Campaign                           | String          |
			| last_attributed_touch_data_tilde_customer_keyword             | Customer Keyword                            | String          |
			| last_attributed_touch_data_tilde_customer_placement           | Customer Placement                          | String          |
			| last_attributed_touch_data_tilde_customer_secondary_publisher | Customer Secondary Publisher                | String          |
			| last_attributed_touch_data_tilde_customer_sub_site_name       | Customer Sub Site Name                      | String          |
			| last_attributed_touch_data_tilde_external_touch_id            | External Touch ID                           | String          |
			| last_attributed_touch_data_tilde_feature                      | Feature                                     | String          |
			| last_attributed_touch_data_tilde_journey_id                   | Journey ID                                  | String          |
			| last_attributed_touch_data_tilde_journey_name                 | Journey Name                                | String          |
			| last_attributed_touch_data_tilde_keyword                      | Keyword                                     | String          |
			| last_attributed_touch_data_tilde_keyword_id                   | Keyword ID                                  | String          |
			| last_attributed_touch_data_tilde_optimization_model           | Optimization Model                          | String          |
			| last_attributed_touch_data_tilde_placement                    | Placement                                   | String          |
			| last_attributed_touch_data_tilde_placement_id                 | Placement ID                                | String          |
			| last_attributed_touch_data_tilde_secondary_ad_format          | Secondary Ad Format                         | String          |
			| last_attributed_touch_data_tilde_secondary_publisher          | Secondary Publisher                         | String          |
			| last_attributed_touch_data_tilde_secondary_publisher_id       | Secondary Publisher ID                      | String          |
			| last_attributed_touch_data_tilde_stage                        | Stage                                       | String          |
			| last_attributed_touch_data_tilde_sub_site_name                | Sub Site Name                               | String          |
			| last_attributed_touch_data_tilde_tags                         | Tags                                        | ArrayString     |
			| last_attributed_touch_data_tilde_technology_partner           | Technology Partner                          | String          |
			| last_attributed_touch_data_tilde_tilde_customer_ad_set_name   | Customer Ad Set Name                        | String          |
			| last_attributed_touch_data_tilde_tune_publisher_id            | TUNE Publisher ID                           | Long            |
			| last_attributed_touch_data_tilde_tune_publisher_name          | TUNE Publisher Name                         | String          |
			| last_attributed_touch_data_tilde_view_id                      | View ID                                     | String          |
			| last_attributed_touch_data_tilde_view_name                    | View Name                                   | String          |
			| last_attributed_touch_timestamp                               | Last Attributed Touch Timestamp             | Long            |
			| last_attributed_touch_timestamp_iso                           | Last Attributed Touch Timestamp (ISO)       | String          |
			| last_attributed_touch_type                                    | Last Attributed Touch Type                  | String          |
			| last_cta_view_data_custom_fields                              | Last CTA View Custom Fields                 | String          |
			| last_cta_view_data_dollar_3p                                  | Last CTA View Ad Partner (3p)               | String          |
			| last_cta_view_data_plus_via_features                          | Last CTA View Via Features                  | ArrayString     |
			| last_cta_view_data_plus_web_format                            | Last CTA View Web Format                    | String          |
			| last_cta_view_data_tilde_ad_id                                | Last CTA View Ad ID                         | String          |
			| last_cta_view_data_tilde_ad_name                              | Last CTA View Ad Name                       | String          |
			| last_cta_view_data_tilde_ad_set_id                            | Last CTA View Ad Set ID                     | String          |
			| last_cta_view_data_tilde_ad_set_name                          | Last CTA View Ad Set Name                   | String          |
			| last_cta_view_data_tilde_advertising_partner_name             | Last CTA View Ad Partner                    | String          |
			| last_cta_view_data_tilde_agency                               | Last CTA View Agency                        | String          |
			| last_cta_view_data_tilde_banner_dimensions                    | Last CTA View Banner Dimensions             | String          |
			| last_cta_view_data_tilde_branch_ad_format                     | Last CTA View Branch Ad Format              | String          |
			| last_cta_view_data_tilde_campaign                             | Last CTA View Campaign                      | String          |
			| last_cta_view_data_tilde_campaign_id                          | Last CTA View Campaign ID                   | String          |
			| last_cta_view_data_tilde_campaign_type                        | Last CTA View Campaign Type                 | String          |
			| last_cta_view_data_tilde_channel                              | Last CTA View Channel                       | String          |
			| last_cta_view_data_tilde_creative_id                          | Last CTA View Creative ID                   | String          |
			| last_cta_view_data_tilde_creative_name                        | Last CTA View Creative Name                 | String          |
			| last_cta_view_data_tilde_external_touch_id                    | Last CTA View External Touch ID             | Long            |
			| last_cta_view_data_tilde_feature                              | Last CTA View Feature                       | String          |
			| last_cta_view_data_tilde_keyword_id                           | Last CTA View Keyword ID                    | String          |
			| last_cta_view_data_tilde_optimization_model                   | Last CTA View Optimization Model            | String          |
			| last_cta_view_data_tilde_placement                            | Last CTA View Placement                     | String          |
			| last_cta_view_data_tilde_secondary_ad_format                  | Last CTA View Secondary Ad Format           | String          |
			| last_cta_view_data_tilde_secondary_publisher                  | Last CTA View Secondary Publisher           | String          |
			| last_cta_view_data_tilde_stage                                | Last CTA View Stage                         | String          |
			| last_cta_view_data_tilde_tags                                 | Last CTA View Tags                          | ArrayString     |
			| last_cta_view_data_tilde_technology_partner                   | Last CTA View Technology Partner            | String          |
			| last_cta_view_timestamp                                       | Last CTA View Timestamp                     | Long            |
			| last_cta_view_timestamp_iso                                   | Last CTA View Timestamp (ISO)               | String          |
			| minutes_from_last_attributed_touch_to_event                   | Minutes From Last Attributed Touch To Event | Integer         |
			| name                                                          | Name                                        | String          |
			| organization_id                                               | Organization ID                             | Long            |
			| organization_name                                             | Organization Name                           | String          |
			| origin                                                        | Origin                                      | String          |
			| reengagement_activity_attributed                              | Reengagement Activity Attributed            | Boolean         |
			| referrer_click_timestamp                                      | Referrer Click Timestamp                    | Long            |
			| seconds_from_last_attributed_touch_to_event                   | Seconds From Last Attributed Touch To Event | Integer         |
			| site_event_items_count                                        | Content Items Count                         | Integer         |
			| site_event_name                                               | ?? isn't this customer_event_alias?         | String          |
			| store_install_begin_timestamp                                 | Store Install Begin Timestamp               | Long            |
			| timestamp                                                     | Timestamp                                   | Long            |
			| timestamp_iso                                                 | Timestamp (ISO)                             | String          |
			| tune_fired_webhook                                            | - do not expose in API or UI -              | Boolean         |
			| tune_site_event_id                                            | TUNE Site Event ID                          | Long            |
			| tune_site_id                                                  | TUNE Site ID                                | Long            |
			| tune_site_name                                                | TUNE Site Name                              | String          |
			| user_data_aaid                                                | AAID                                        | String          |
			| user_data_android_id                                          | Android ID                                  | String          |
			| user_data_app_package_name                                    | App Package Name                            | String          |
			| user_data_app_version                                         | App Version                                 | String          |
			| user_data_brand                                               | Brand                                       | String          |
			| user_data_browser                                             | Browser                                     | String          |
			| user_data_build                                               | Build                                       | String          |
			| user_data_cpu_type                                            | CPU Type                                    | String          |
			| user_data_cross_platform_id                                   | Cross Platform ID                           | String          |
			| user_data_developer_identity                                  | Developer Identity                          | String          |
			| user_data_device_type                                         | Device Type                                 | String          |
			| user_data_environment                                         | Environment                                 | String          |
			| user_data_geo_city_code                                       | City Code                                   | Integer         |
			| user_data_geo_city_en                                         | City                                        | Integer         |
			| user_data_geo_country_code                                    | Country Code                                | String          |
			| user_data_geo_country_en                                      | Country                                     | String          |
			| user_data_geo_dma_code                                        | DMA Code                                    | Integer         |
			| user_data_geo_lat                                             | Latitude                                    | Float           |
			| user_data_geo_lon                                             | Longitude                                   | Float           |
			| user_data_geo_postal_code                                     | Postal Code                                 | String          |
			| user_data_http_referrer                                       | HTTP Referrer                               | String          |
			| user_data_idfa                                                | IDFA                                        | String          |
			| user_data_idfv                                                | IDFV                                        | String          |
			| user_data_installer_package_name                              | Installer Package Name                      | String          |
			| user_data_internet_connection_type                            | Internet Connection Type                    | String          |
			| user_data_ip                                                  | IP Address                                  | String          |
			| user_data_is_coppa                                            | - do not expose in API or UI -              | Boolean         |
			| user_data_is_jailbroken                                       | Is Jailbroken                               | Boolean         |
			| user_data_kindle_id                                           | Kindle ID                                   | String          |
			| user_data_language                                            | Language                                    | String          |
			| user_data_limit_ad_tracking                                   | Limit Ad Tracking                           | Boolean         |
			| user_data_limit_facebook_tracking                             | - do not expose in API or UI -              | Boolean         |
			| user_data_model                                               | Model                                       | String          |
			| user_data_os                                                  | OS                                          | String          |
			| user_data_os_version                                          | OS Version                                  | String          |
			| user_data_os_version_android                                  | OS Version (Android)                        | String          |
			| user_data_past_cross_platform_ids                             | Past Cross Platforms IDs                    | ArrayString     |
			| user_data_platform                                            | Platform                                    | String          |
			| user_data_prob_cross_platform_ids                             | Probabilistic Cross Platform IDs            | ArrayStruct     |
			| user_data_screen_height                                       | Screen Height                               | Integer         |
			| user_data_screen_width                                        | Screen Width                                | Integer         |
			| user_data_sdk_version                                         | SDK Version                                 | String          |
			| user_data_tune_mat_id                                         | TUNE MAT ID                                 | String          |
			| user_data_user_agent                                          | User Agent                                  | String          |
			| user_data_windows_aid                                         | Windows AID                                 | String          |
			| user_data_device_locale                                       | Device Locale                               | String          |
			| user_data_carrier_name                                        | Carrier Name                                | String          |
			| seconds_from_last_attributed_touch_to_store_install_begin     | Seconds From Touch To Store Install Begin   | Integer         |
			| seconds_from_install_to_event                                 | Seconds From Install To Event               | Integer         |
			| last_attributed_touch_data_tilde_advertising_account_id       | Advertising Account ID                      | String          |
			| last_attributed_touch_data_tilde_advertising_account_name     | Advertising Account Name                    | String          |

- *TUNE FIELDS*

			| TUNE Field                                                     | TUNE Human Readable                        |
			|----------------------------------------------------------------|--------------------------------------------|
			|ad_network_id                                                   | Ad Network ID                              |
			|ad_network_name                                                 | Ad Network Name                            |
			|advertiser_id                                                   | Advertiser ID                              |
			|advertiser_name                                                 | Advertiser Name                            |
			|advertiser_opt_out                                              | Advertiser Opt Out                         |
			|advertiser_ref_id                                               | Advertiser Ref ID                          |
			|advertiser_sub_ad_name                                          | My Ad Name                                 |
			|advertiser_sub_ad_ref                                           | My Ad Ref                                  |
			|advertiser_sub_adgroup_name                                     | My Adgroup Name                            |
			|advertiser_sub_adgroup_ref                                      | My Adgroup Ref                             |
			|advertiser_sub_campaign_name                                    | My Campaign Name                           |
			|advertiser_sub_campaign_ref                                     | My Campaign Ref                            |
			|advertiser_sub_keyword_name                                     | My Keyword Name                            |
			|advertiser_sub_keyword_ref                                      | My Keyword Ref                             |
			|advertiser_sub_placement_name                                   | My Placement Name                          |
			|advertiser_sub_placement_ref                                    | My Placement Ref                           |
			|advertiser_sub_publisher_name                                   | My Publisher Name                          |
			|advertiser_sub_publisher_ref                                    | My Publisher Ref                           |
			|advertiser_sub_site_name                                        | My Site Name                               |
			|advertiser_sub_site_ref                                         | My Site Ref                                |
			|agency_id                                                       | Agency ID                                  |
			|agency_name                                                     | Agency Name                                |
			|app_version                                                     | App Version                                |
			|attribute_sub1                                                  | Attribute Sub1                             |
			|attribute_sub2                                                  | Attribute Sub2                             |
			|attribute_sub3                                                  | Attribute Sub3                             |
			|attribute_sub4                                                  | Attribute Sub4                             |
			|attribute_sub5                                                  | Attribute Sub5                             |
			|branch_app_id                                                   | Branch App ID                              |
			|click_created                                                   | Click Created                              |
			|country_code                                                    | Country Code                               |
			|country_name                                                    | Country Name                               |
			|created                                                         | Created                                    |
			|currency_code                                                   | Currency Code                              |
			|device_brand                                                    | Device Brand                               |
			|device_carrier                                                  | Device Carrier                             |
			|device_ip                                                       | Device IP                                  |
			|device_model                                                    | Device Model                               |
			|device_type                                                     | Device Type                                |
			|download_date                                                   | Download Date                              |
			|event_type                                                      | Event Type                                 |
			|existing_user                                                   | Existing User                              |
			|google_ad_tracking                                              | Google Ad Tracking Enabled                 |
			|google_aid                                                      | Google Advertising ID                      |
			|id                                                              | ID                                         |
			|impression_created                                              | Impression Created                         |
			|install_created                                                 | Install Created                            |
			|install_date                                                    | Install Date                               |
			|install_publisher_name                                          | Install Publisher Name                     |
			|ios_ad_tracking                                                 | iOS Ad Tracking Enabled                    |
			|ios_ifa                                                         | iOS IDFA                                   |
			|ios_ifv                                                         | iOS IDFV                                   |
			|ip                                                              | IP                                         |
			|is_view_through                                                 | Is View Through                            |
			|language                                                        | Language                                   |
			|latitude                                                        | Latitude                                   |
			|longitude                                                       | Longitude                                  |
			|mat_id                                                          | Mat ID                                     |
			|metro_code                                                      | Metro Code                                 |
			|os_id                                                           | OS ID                                      |
			|os_jailbroke                                                    | Jailbroken                                 |
			|os_version                                                      | OS Version                                 |
			|package_name                                                    | Package Name                               |
			|platform_aid                                                    | Platform AID                               |
			|postal_code                                                     | Postal Code                                |
			|publisher_adgroup_id                                            | Publisher Adgroup ID                       |
			|publisher_click_id                                              | Publisher Click ID                         |
			|publisher_id                                                    | Publisher ID                               |
			|publisher_name                                                  | Publisher Name                             |
			|publisher_ref_id                                                | Publisher Ref ID                           |
			|publisher_sub_ad_id                                             | Publisher Sub Ad ID                        |
			|publisher_sub_ad_name                                           | Publisher Sub Ad Name                      |
			|publisher_sub_ad_ref                                            | Publisher Sub Ad Ref                       |
			|publisher_sub_adgroup_name                                      | Publisher Sub Adgroup Name                 |
			|publisher_sub_adgroup_ref                                       | Publisher Sub Adgroup Ref                  |
			|publisher_sub_campaign_id                                       | Publisher Sub Campaign ID                  |
			|publisher_sub_campaign_name                                     | Publisher Sub Campaign Name                |
			|publisher_sub_campaign_ref                                      | Publisher Sub Campaign Ref                 |
			|publisher_sub_channel                                           | Publisher Sub Channel                      |
			|publisher_sub_feature                                           | Publisher Sub Feature                      |
			|publisher_sub_keyword_id                                        | Publisher Sub Keyword ID                   |
			|publisher_sub_keyword_name                                      | Publisher Sub Keyword Name                 |
			|publisher_sub_keyword_ref                                       | Publisher Sub Keyword Ref                  |
			|publisher_sub_placement_id                                      | Publisher Sub Placement ID                 |
			|publisher_sub_placement_name                                    | Publisher Sub Placement Name               |
			|publisher_sub_placement_ref                                     | Publisher Sub Placement Ref                |
			|publisher_sub_publisher_id                                      | Publisher Sub Publisher ID                 |
			|publisher_sub_publisher_name                                    | Publisher Sub Publisher Name               |
			|publisher_sub_publisher_ref                                     | Publisher Sub Publisher Ref                |
			|publisher_sub_site_name                                         | Publisher Sub Site Name                    |
			|publisher_sub1                                                  | Publisher Sub1                             |
			|publisher_sub2                                                  | Publisher Sub2                             |
			|publisher_sub3                                                  | Publisher Sub3                             |
			|publisher_sub4                                                  | Publisher Sub4                             |
			|publisher_sub5                                                  | Publisher Sub5                             |
			|publisher_sub_stage                                             | Publisher Sub Stage                        |
			|publisher_sub_tags                                              | Publisher Sub Tags                         |
			|region_name                                                     | Region Name                                |
			|revenue                                                         | Revenue                                    |
			|revenue_usd                                                     | Revenue USD                                |
			|sdk                                                             | SDK                                        |
			|sdk_version                                                     | SDK Version                                |
			|search_string                                                   | Search String                              |
			|session_datetime                                                | Session Datetime                           |
			|site_event_id                                                   | Site Event ID                              |
			|site_event_name                                                 | Site Event Name                            |
			|site_event_type                                                 | Site Event Type                            |
			|site_id                                                         | Site ID                                    |
			|site_name                                                       | Site Name                                  |
			|stat_click_id                                                   | Click ID                                   |
			|stat_impression_id                                              | Impression ID                              |
			|transaction_id                                                  | Transaction ID                             |
			|user_agent                                                      | User Agent                                 |
			|user_id                                                         | User ID                                    |
			|windows_aid                                                     | Windows Advertising ID                     |
			|wurfl_brand_name                                                | Brand Name                                 |
			|wurfl_device_os                                                 | Device OS                                  |
			|wurfl_device_os_version                                         | Device OS Version                          |
			|wurfl_model_name                                                | Model Name                                 |
			|branch_app_id                                                   | Branch App ID                              |


!!! warning "IP Discrepancies"
	Geographic data, such as country and city, may not be available for a very small percentage of events where the IP cannot be resolved to a location.

!!! warning "Discontinued Fields"
	Some fields have very limited value to our customers and as such have been discontinued. Discontinued fields will not be available via the Custom Export API. Please work with your CSM or our Support team if you have questions or concerns.

!!! info "Info"
	Branch does not support exports of the infrequently-used update and postbacks TUNE topics.

### Field Value Changes

When exporting the following fields, you will notice a difference between the value TUNE provides vs the value Branch provides.

*   Country Name
    *   TUNE: Korea - South
    *   Branch: Republic of Korea
*   Region Name
    *   TUNE: seoul teugbyeoisi
    *   Branch: Seoul
*   City Code
    *   TUNE: 2261 (Seoul)
    *   Branch: 1835848 (Seoul)
*   Language
    *   TUNE: ko, ko-KR, en-KR
    *   Branch: KO


### Including Fields from Related Data Objects

Related objects no longer use periods ( . ) to access the properties on the object. Rather, field names use underscores ( _ ) only.

For example, `site_event.id` will now be exported as `site_event_id`.

## Accessing via Branch Dashboard

Rather than accessing the Custom Export API directly, you can use the Custom Exports section in your Branch dashboard to request the appropriate data via CSVs.

To request an export:

1. In the left-hand navigation, under the **Setup & Testing** section, click **Data Import & Export**, then click on **Exports**.
2. On the **Custom Exports** page, provide the following:
	- The appropriate **Date Range**.
	- The **Topic** type the export should include.
	- The **Columns** of fields you want included.
	- Any additional **Filters** you want included.
	- The **Download Type** for the export.

![image](/_assets/img/pages/exports/custom-exports.gif)

You can also view any requested export in the **Custom Exports Created** table which includes:

- Date Created
- Topic / Date Range
- Row Count
- Format
- Status

## Accessing via API

### Endpoint Definitions

- *BRANCH ENDPOINTS*

        POST /v2/logs?organization_id=ORG_ID
        POST /v2/logs?app_id=APP_ID
        Headers:
          Access-Token: API_KEY
        Content-Type: application/json
        Body: JSON parameters
        Host: api2.branch.io

        GET /v2/logs/JOB_ID
        Headers:
          Access-Token: API_KEY
        Host: api2.branch.io


- *TUNE ENDPOINTS*

        POST /v3/logs/advertisers/ADVERTISER_ID/exports/
        Host: api.mobileapptracking.com/

        GET /v3/logs/advertisers/ADVERTISER_ID/exports/JOB_ID
        Host: api.mobileapptracking.com/


### Building the Export Request

Find and queue all records that match search criteria for export; returns a “handle” to be used in the download export request.

<table>
  <tr>
   <td><strong>Parameter Name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>advertiser_id
   </td>
   <td>String
   </td>
   <td>Your TUNE Advertiser ID; <strong>REQUIRED ONLY FOR TUNE CALLS</strong>
   </td>
  </tr>
	<tr>
   <td>app_id
   </td>
   <td>String
   </td>
   <td>Your Branch App ID; <strong>REQUIRED ONLY FOR BRANCH CALLS</strong>
   </td>
  </tr>
	<tr>
   <td>organization_id
   </td>
   <td>String
   </td>
   <td>Your Branch Organization ID; <strong>REQUIRED ONLY FOR BRANCH CALLS</strong>
   </td>
  </tr>
  <tr>
   <td>api_key
   </td>
   <td>String
   </td>
   <td>Your API Key; <strong>REQUIRED</strong>
   </td>
  </tr>
	<tr>
   <td>report_type
   </td>
   <td>String
   </td>
   <td>The Branch EO topic to be exported; <strong>REQUIRED</strong>
   </td>
  </tr>
  <tr>
   <td>start_date
   </td>
   <td>Date
   </td>
   <td><a href="https://en.wikipedia.org/wiki/ISO_8601">The beginning datetime for the requested results, provided in ISO-8601 format including Hours, Minutes, Seconds and Milliseconds. </a>; <strong>REQUIRED</strong>
<p>
Dates without offsets (i.e. a timezone) default to the value provided for the timezone parameter. If the timezone parameter is not specified, the dates timezone defaults to UTC. Date must be within the last 120 days. Example: 2016-01-01T00:00:00Z
   </td>
  </tr>
  <tr>
   <td>end_date
   </td>
   <td>Date
   </td>
   <td><a href="https://en.wikipedia.org/wiki/ISO_8601">The end datetime for the requested results, provided in ISO-8601 format including Hours, Minutes, Seconds and Milliseconds. </a>; <strong>REQUIRED</strong>
<p>
Dates without offsets (i.e. a timezone) default to the value provided for the timezone parameter. If the timezone parameter is not specified, the dates timezone defaults to UTC. Example: 2016-01-01T23:59:59:999Z
   </td>
  </tr>
  <tr>
   <td>timezone
   </td>
   <td>Timezone
   </td>
   <td><a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone for results. Accepts tz database strings like ‘America/Los_Angeles’. </a>
<p>
Optional parameter; results are returned in UTC if not provided.
   </td>
  </tr>
  <tr>
   <td>filter_cthulhu
   </td>
   <td>Filter
   </td>
   <td><strong>TUNE CALLS ONLY</strong>; Filter by fields and boolean operators against fields of the LogInstalls model; must be URI encoded and JSON parsed. Example: <code>&filter_cthulhu=%5B%22and%22%2C%5B%22eq%22%2C%22mat_id%22%2C%223bc15517-92d5-4b7f-9837-e9a30d6fb9b8%22%5D%2C%5B%22eq%22%2C%22site_event_id%22%2C1844998705%5D%5D</code>
   </td>
  </tr>
  <tr>
   <td>fields
   </td>
   <td>Comma Separated List
   </td>
   <td>List of comma-separated fields desired in results. Defaults to display all fields; <strong>REQUIRED</strong>
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>Integer
   </td>
   <td>Limit the number of items returned per request. Maximum allowed value is 2 million. If more than 2 million records are required, please make multiple requests with smaller time intervals to pull the data needed in “batches”; <strong>REQUIRED</strong>
   </td>
  </tr>
  <tr>
   <td>response_format
   </td>
   <td><em>Nullable String</em>
   </td>
   <td>Format of the response; can be either JSON or CSV. If not selected, defaults to CSV.
   </td>
  </tr>
</table>

#### Sample Export Request

- *BRANCH REQUEST*

			curl -X POST 'https://api2.branch.io/v2/logs?organization_id=732662944269095814'
			-H "Content-Type: application/json"
			-H "Access-Token: YOUR_ACCESS_TOKEN_HERE"  
			-d '{"report_type": "eo_open",
					"limit": 100,
					"fields": ["app_id","organization_id"],
					"start_date": "2019-12-09T00:00:00Z",
					"end_date": "2019-12-09T01:59:59Z",
					"filter": ["gt","app_id",7]
					}'

- *TUNE REQUEST*

			https://api.mobileapptracking.com/v3/logs/advertisers/ADVERTISER_ID/exports/installs?api_key=YOUR_ACCESS_TOKEN_HERE&start_date=2019-01-14T00:00:00&end_date=2019-01-15T00:00:00&timezone=UTC&fields=site.name,site.id,device_ip&limit=100&response_format=csv

#### Sample Export Response

- *BRANCH RESPONSE*

			{"handle":"1612dbb3-85ef-49f8-b1c5-5818c163600c","export_job_status_url":"http://api2.branch.io/v2/logs/1612dbb3-85ef-49f8-b1c5-5818c163600c?organization_id=732662944269095814"}

- *TUNE RESPONSE*

			{"handle":"0818e641-cd5c-4498-8a17-77152689bb94","export_job_status_url":"http://api.mobileapptracking.com/v3/logs/advertisers/ADVERTISER_ID/exports/0818e641-cd5c-4498-8a17-77152689bb94?api_key=YOUR_ACCESS_TOKEN_HERE","branch_url":"http://tlnk.branch.io/v3/logs/advertisers/ADVERTISER_ID/exports/installs?start_date=2019-01-14T00%3A00%3A00%2B00%3A00&end_date=2019-01-15T00%3A00%3A00%2B00%3A00&fields=site.name%2Csite.id%2Cdevice_ip&filter_cthulhu=%5B%22in%22%2C%20%22advertiser_id%22%2C%20ADVERTISER_ID%5D&response_format=csv&timezone=UTC&limit=100&api_key=YOUR_ACCESS_TOKEN_HERE"}

### Building the Download Export Request

Finds and exports requested queue (by handle) and provides URL location for download.

<table>
  <tr>
   <td><strong>Parameter Name</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>advertiser_id
   </td>
   <td>String
   </td>
   <td>Your TUNE Advertiser ID; <strong>REQUIRED ONLY FOR TUNE CALLS</strong>
   </td>
  </tr>
  <tr>
   <td>api_key
   </td>
   <td>String
   </td>
   <td>Your API Key; <strong>REQUIRED</strong>
   </td>
  </tr>
  <tr>
   <td>handle
   </td>
   <td>String
   </td>
   <td>The ID returned by the log export queue. <strong>REQUIRED</strong>
   </td>
  </tr>
</table>

#### Sample Download Export Request

- *BRANCH REQUEST*

			curl 'http://api2.branch.io/v2/logs/1612dbb3-85ef-49f8-b1c5-5818c163600c?organization_id=732662944269095814'
			-H "Access-Token: YOUR_ACCESS_TOKEN_HERE"

- *TUNE REQUEST*

			http://api.mobileapptracking.com/v3/logs/advertisers/ADVERTISER_ID/exports/0818e641-cd5c-4498-8a17-77152689bb94?api_key=YOUR_ACCESS_TOKEN_HERE

#### Sample Download Export Response

- *BRANCH RESPONSE*

			{"code":200,"lines_exported":2000000,"status":"complete","response_url":"https://branch-exports-web.s3.amazonaws.com/732662944269095814-eo_open-2019-12-10-2019-12-10-1612dbb3-85ef-49f8-b1c5-5818c163600c-bUlN2lwyTE10qIVH.csv?Signature=YOUR_ACCESS_TOKEN_HERE&AWSAccessKeyId=YOUR_ACCESS_TOKEN_HERE&Expires=1577305615"}

- *TUNE RESPONSE*

			{"report_schedule_id": null, "lines_exported": null, "context": "", "url": "https://branch-exports-web.s3.amazonaws.com/ADVERTISER_ID-installs-2019-01-14-2019-01-15-0818e641-cd5c-4498-8a17-77152689bb94-wxGQxyHo0Djw2ktt.csv?Signature=5XN9MRMftyQ1XafNSTW4STMpT9U%3D&AWSAccessKeyId=AKIAI7A6NRHGMRDK2LIQ&Expires=1548295211", "percent_complete": 100, "status": "complete", "branch_url": "http://tlnk.branch.io/v3/logs/advertisers/ADVERTISER_ID/exports/0818e641-cd5c-4498-8a17-77152689bb94?api_key=YOUR_ACCESS_TOKEN_HERE"}
