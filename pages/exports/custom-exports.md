## Overview

!!! info "Branch & TUNE Export Functionality"
	Custom exports are available for both Branch data points and TUNE data points.  Please make sure to view the correct tab - Branch or TUNE - when referencing the below documentation.

The Branch Custom Exports find and queue log records that match your search criteria for export. You can do so either via the <notranslate>**Custom Exports**</notranslate> section in your Branch dashboard OR via API.

Custom exports endpoints are limited to a maximum of 2 million records each and can query up to 120 days prior to the date of export.

If more records are required, please make multiple requests with smaller time intervals to pull the necessary data in "batches". In some cases, Branch can increase the number of records above 2 million. Please contact [Support](mailto:support@branch.io) to request an increase.

## Authentication

Calls to the Custom Export API require an <notranslate>**api_key**</notranslate> or <notranslate>**access token**</notranslate> parameter to be passed with each request. API Keys are generated on a per-user basis and are permanent.

Learn how to [retrieve your API key (a.k.a. `Access Token`)](/dashboard/organization-view/#managing-your-user-profile)

!!! warning "Organization Level Access Required"
	In order to retrieve or reset your API Key/Access Token, you must have access to the Organization level of the account.  This functionality is not present at the app level.

##Rate Limits

Rate limits depend on the endpoint you are making a request to.

For creating exports, the rate limit is 10 requests per minute and 25 requests per hour.

For checking the status of an export, the rate limit is 50 requests per minute and 1000 per hour.

## Export Access

In order to access Custom Exports, a user will need to have both <notranslate>**Sensitive Data**</notranslate> and <notranslate>**Export**</notranslate> access.

![image](/_assets/img/pages/dashboard/access-levels/export-access.png)

For more details on how to give a user the required access, please follow [Granting a User Export Access](/dashboard/export-access/#granting-a-user-export-access).

### Third Party Access

Any user with access to an account’s API keys will be able to access Branch’s Custom Export API (and thus unfiltered, log-level data). As a result, we would recommend against providing third parties with the permissions required to view API keys during the invitation process.


### Providing Agencies API Access

If you work with an agency that runs your advertising campaigns and want to give them access to export the subsequent data, you can provide them with access to the Custom Export API.

To provide an agency team member with access to the Custom Export API:

1. In the left-hand navigation, under <notranslate>**Setup & Testing**</notranslate>, click on <notranslate>**Account Settings**</notranslate>.
2. On the <notranslate>**Account Settings**</notranslate> page, click on the <notranslate>**Agencies**</notranslate> tab.
3. Expand the agency in question, find the agency team member you want to give access to, hover on the button in the <notranslate>**Actions**</notranslate> column and click <notranslate>**Edit**</notranslate>.
4. In the <notranslate>**Edit Agency Team Member**</notranslate> modal:
    1. Under <notranslate>**Access Level**</notranslate>, check the <notranslate>**Export**</notranslate> box.
    2. Under <notranslate>**Permissions**</notranslate>, check the <notranslate>**Sensitive Data**</notranslate> box.
5. Optional: add data filters
    1. Under <notranslate>**Data Filters**</notranslate>, toggle any necessary data filters on/blue. Exported data will be filtered accordingly.
6. Click <notranslate>**Save**</notranslate>.

![image](/_assets/img/pages/exports/agency-export-access.png)

!!! warning "Agency-Tagged Data"
	If you do not enable the Only Show Agency-Tagged Data data filter, the Agency Team Member will be able to export sensitive data associated with all of your campaigns, regardless if they are associated with them or not.

## Available Topics to Export

Please refer to the full list of available topics for [Branch](#branch-available-topics) and [TUNE](#tune-available-topics).

## Available Fields

Please refer to the full list of available fields for [Branch](#branch-available-fields) and [TUNE](#tune-available-fields).

## Accessing via Branch Dashboard

Rather than accessing the Custom Export API directly, you can use the Custom Exports section in your Branch dashboard to request the appropriate data via CSVs.

To request an export:

1. In the left-hand navigation, under the <notranslate>**Setup & Testing**</notranslate> section, click <notranslate>**Data Import & Export**</notranslate>, then click on <notranslate>**Exports**</notranslate>.
2. On the <notranslate>**Custom Exports**</notranslate> page, provide the following:
	- The appropriate <notranslate>**Date Range**</notranslate>.
	- The <notranslate>**Topic**</notranslate> type the export should include.
	- The <notranslate>**Columns**</notranslate> of fields you want included.
	- Any additional <notranslate>**Filters**</notranslate> you want included.
	- The <notranslate>**Download Type**</notranslate> for the export.

![image](/_assets/img/pages/exports/custom-exports.gif)

You can also view any requested export in the <notranslate>**Custom Exports Created**</notranslate> table which includes:

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
   <td>api_key / access token
   </td>
   <td>String
   </td>
   <td>Your API Key / Access Token; <strong>REQUIRED</strong>
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
   <td>filter
   </td>
   <td>Filter
   </td>
   <td><strong>BRANCH CALLS ONLY</strong>; Filter by fields and boolean operators against fields of the LogInstalls model; must be URI encoded and JSON parsed. Example: <code>&filter_cthulhu=%5B%22and%22%2C%5B%22eq%22%2C%22mat_id%22%2C%223bc15517-92d5-4b7f-9837-e9a30d6fb9b8%22%5D%2C%5B%22eq%22%2C%22site_event_id%22%2C1844998705%5D%5D</code>
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
   <td>api_key / acess token
   </td>
   <td>String
   </td>
   <td>Your API Key / Access Token; <strong>REQUIRED</strong>
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

## Appendix

### Branch Available Topics

|Topic                                                        |Human Readable                                          |
|-------------------------------------------------------------|--------------------------------------------------------|
| `eo_click_blocked`                                          | <notranslate>**Blocked Clicks**</notranslate>                       |
| `eo_commerce_event_blocked`                                 | <notranslate>**Blocked Commerce Events**</notranslate>              |
| `eo_content_event_blocked`                                  | <notranslate>**Blocked Content Events**</notranslate>               |
| `eo_branch_cta_view_blocked`                                | <notranslate>**Blocked CTA Views**</notranslate>                    |
| `eo_custom_event_blocked`                                   | <notranslate>**Blocked Custom Events**</notranslate>                |
| `eo_impression_blocked`                                     | <notranslate>**Blocked Impressions**</notranslate>                  |
| `eo_install_blocked`                                        | <notranslate>**Blocked Installs**</notranslate>                     |
| `eo_open_blocked`                                           | <notranslate>**Blocked Opens**</notranslate>                        |
| `eo_pageview_blocked`                                       | <notranslate>**Blocked Pageviews**</notranslate>                    |
| `eo_reinstall_blocked`                                      | <notranslate>**Blocked Reinstalls**</notranslate>                   |
| `eo_sms_sent_blocked`                                       | <notranslate>**Blocked SMS Sent**</notranslate>                     |
| `eo_user_lifecycle_event_blocked`                           | <notranslate>**Blocked User Lifecycle Events**</notranslate>        |
| `eo_web_session_start_blocked`                              | <notranslate>**Blocked Web Session Starts**</notranslate>           |
| `eo_click`                                                  | <notranslate>**Clicks**</notranslate>                               |
| `eo_commerce_event`                                         | <notranslate>**Commerce Events**</notranslate>                      |
| `eo_content_event`                                          | <notranslate>**Content Events**</notranslate>                       |
| `eo_branch_cta_view`                                        | <notranslate>**CTA Views**</notranslate>                            |
| `eo_custom_event`                                           | <notranslate>**Custom Events**</notranslate>                        |
| `eo_impression`                                             | <notranslate>**Impressions**</notranslate>                          |
| `eo_install`                                                | <notranslate>**Installs**</notranslate>                             |
| `eo_open`                                                   | <notranslate>**Opens**</notranslate>                                |
| `eo_pageview`                                               | <notranslate>**Pageviews**</notranslate>                            |
| `webhook2`                                                  | <notranslate>**Postback Records**</notranslate>                     |
| `eo_reinstall`                                              | <notranslate>**Reinstalls**</notranslate>                           |
| `eo_sms_sent`                                               | <notranslate>**SMS Sent**</notranslate>                             |
| `eo_user_lifecycle_event`                                   | <notranslate>**User Lifecycle Events**</notranslate>                |
| `eo_web_session_start`                                      | <notranslate>**Web Session Starts**</notranslate>                   |
| `eo_web_to_app_auto_redirect`                               | <notranslate>**Web To App Auto Redirects**</notranslate>            |

### TUNE Available Topics

- Clicks
- Event Items
- Events
- Impressions
- Installs
- Opens

### Branch Available Fields

!!! warning "IP Discrepancies"
	Geographic data, such as country and city, may not be available for a very small percentage of events where the IP cannot be resolved to a location.


| EO field                                                      | Human Readable                              | Type            |
|---------------------------------------------------------------|---------------------------------------------|-----------------|
| `app_id`                                                      | <notranslate>App ID (pls capitalize ID in Liveview</notranslate>)      | `Long`            |
| `content_items`                                               | <notranslate>Content Items</notranslate>                               | `ArrayStruct`     |
| `custom_data`                                                 | <notranslate>Custom Data</notranslate>                                 | `MapStringString` |
| `customer_event_alias`                                        | <notranslate>Customer Event Alias</notranslate>                        | `String`          |
| `datasource`                                                  | <notranslate>- do not expose in API or UI -</notranslate>              | `String`          |
| `days_from_last_attributed_touch_to_event`                    | <notranslate>Days From Last Attributed Touch To Event</notranslate>    | `Integer`         |
| `deep_linked`                                                 | <notranslate>Deep Linked</notranslate>                                 | `Boolean`         |
| `di_match_click_token`                                        | <notranslate>DI Match Click Token</notranslate>                        | `Long`            |
| `event_data_affiliation`                                      | <notranslate>Affiliation</notranslate>                                 | `String`          |
| `event_data_coupon`                                           | <notranslate>Coupon</notranslate>                                      | `String`          |
| `event_data_currency`                                         | <notranslate>Currency</notranslate>                                    | `String`          |
| `event_data_description`                                      | <notranslate>Event Description</notranslate>                           | `String`          |
| `event_data_exchange_rate`                                    | <notranslate>Exchange Rate</notranslate>                               | `Double`          |
| `event_data_revenue`                                          | <notranslate>Revenue</notranslate>                                     | `Double`          |
| `event_data_revenue_in_usd`                                   | <notranslate>Revenue In USD</notranslate>                              | `Double`          |
| `event_data_search_query`                                     | <notranslate>Search Query</notranslate>                                | `String`          |
| `event_data_shipping`                                         | <notranslate>Shipping</notranslate>                                    | `Double`          |
| `event_data_tax`                                              | <notranslate>Tax</notranslate>                                         | `Double`          |
| `event_data_transaction_id`                                   | <notranslate>Transaction ID</notranslate>                              | `String`          |
| `event_timestamp`                                             | <notranslate>Event Timestamp</notranslate>                             | `Long`            |
| `existing_user`                                               | <notranslate>Existing User</notranslate>                               | `Boolean`         |
| `external_intent_uri`                                         | <notranslate>External Intent URI</notranslate>                         | `String`          |
| `first_event_for_user`                                        | <notranslate>First Event For User</notranslate>                        | `Boolean`         |
| `hash_version`                                                | <notranslate>Hash Version</notranslate>                                | `String`          |
| `hours_from_last_attributed_touch_to_event`                   | <notranslate>House From Last Attributed Touch To Event</notranslate>   | `Integer`         |
| `id`                                                          | <notranslate>ID</notranslate>                                          | `String`          |
| `install_activity_timestamp`                                  | <notranslate>Install Timestamp</notranslate>                           | `Long`            |
| `install_activity_touch_data_advertising_partner_name`        | <notranslate>Install Ad Partner</notranslate>                          | `String`          |
| `last_attributed_touch_data_custom_fields`                    | <notranslate>Last Attributed Touch Custom Fields</notranslate>         | `String`          |
| `last_attributed_touch_data_dollar_3p`                        | <notranslate>Ad Partner (3p</notranslate>)                             | `String`          |
| `last_attributed_touch_data_dollar_fb_data_terms_not_signed`  | <notranslate>- do not expose in API or UI -</notranslate>              | `Boolean`         |
| `last_attributed_touch_data_plus_current_feature`             | <notranslate>Current Feature</notranslate>                             | `String`          |
| `last_attributed_touch_data_tilde_id`                         | <notranslate>Last Attributed Touch ID</notranslate>                    | `Long`            |
| `last_attributed_touch_data_plus_touch_id`                    | <notranslate>Last Attributed Touch Touch ID</notranslate>              | `String`          |
| `last_cta_view_data_tilde_id`                                 | <notranslate>Last CTA View ID</notranslate>                            | `Long`            |
| `last_cta_view_data_plus_touch_id`                            | <notranslate>Last CTA View Touch ID</notranslate>                      | `String`          |
| `last_attributed_touch_data_plus_via_features`                | <notranslate>Via Features</notranslate>                                | `ArrayString`     |
| `last_attributed_touch_data_plus_web_format`                  | <notranslate>Web Format</notranslate>                                  | `String`          |
| `last_attributed_touch_data_tilde_ad_id`                      | <notranslate>Ad ID</notranslate>                                       | `String`          |
| `last_attributed_touch_data_tilde_ad_name`                    | <notranslate>Ad Name</notranslate>                                     | `String`          |
| `last_attributed_touch_data_tilde_ad_set_id`                  | <notranslate>Ad Set ID</notranslate>                                   | `String`          |
| `last_attributed_touch_data_tilde_ad_set_name`                | <notranslate>Ad Set Name</notranslate>                                 | `String`          |
| `last_attributed_touch_data_tilde_advertising_partner_id`     | <notranslate>Ad Partner ID</notranslate>                               | `String`          |
| `last_attributed_touch_data_tilde_advertising_partner_name`   | <notranslate>Ad Partner</notranslate>                                  | `String`          |
| `last_attributed_touch_data_tilde_agency`                     | <notranslate>Agency</notranslate>                                      | `String`          |
| `last_attributed_touch_data_tilde_agency_id`                  | <notranslate>Agency ID</notranslate>                                   | `String`          |
| `last_attributed_touch_data_tilde_banner_dimensions`          | <notranslate>Banner Dimensions</notranslate>                           | `String`          |
| `last_attributed_touch_data_tilde_branch_ad_format`           | <notranslate>Branch Ad Format</notranslate>                            | `String`          |
| `last_attributed_touch_data_tilde_campaign`                   | <notranslate>Campaign</notranslate>                                    | `String`          |
| `last_attributed_touch_data_tilde_campaign_id`                | <notranslate>Campaign ID</notranslate>                                 | `String`          |
| `last_attributed_touch_data_tilde_campaign_type`              | <notranslate>Campaign Type</notranslate>                               | `String`          |
| `last_attributed_touch_data_tilde_channel`                    | <notranslate>Channel</notranslate>                                     | `String`          |
| `last_attributed_touch_data_tilde_creative_name`              | <notranslate>Creative Name</notranslate>                               | `String`          |
| `last_attributed_touch_data_tilde_creative_id`                | <notranslate>Creative ID</notranslate>                                 | `String`          |
| `last_attributed_touch_data_tilde_customer_ad_name`           | <notranslate>Customer Ad Name</notranslate>                            | `String`          |
| `last_attributed_touch_data_tilde_customer_campaign`          | <notranslate>Customer Campaign</notranslate>                           | `String`          |
| `last_attributed_touch_data_tilde_customer_keyword`           | <notranslate>Customer Keyword</notranslate>                            | `String`          |
| `last_attributed_touch_data_tilde_customer_placement`         | <notranslate>Customer Placement</notranslate>                          | `String`          |
| `last_attributed_touch_data_tilde_customer_secondary_publisher` <notranslate>Customer Secondary Publisher</notranslate>                | `String`          |
| `last_attributed_touch_data_tilde_customer_sub_site_name`     | <notranslate>Customer Sub Site Name</notranslate>                      | `String`          |
| `last_attributed_touch_data_tilde_external_touch_id`          | <notranslate>External Touch ID</notranslate>                           | `String`          |
| `last_attributed_touch_data_tilde_feature`                    | <notranslate>Feature</notranslate>                                     | `String`          |
| `last_attributed_touch_data_tilde_journey_id`                 | <notranslate>Journey ID</notranslate>                                  | `String`          |
| `last_attributed_touch_data_tilde_journey_name`               | <notranslate>Journey Name</notranslate>                                | `String`          |
| `last_attributed_touch_data_tilde_keyword`                    | <notranslate>Keyword</notranslate>                                     | `String`          |
| `last_attributed_touch_data_tilde_keyword_id`                 | <notranslate>Keyword ID</notranslate>                                  | `String`          |
| `last_attributed_touch_data_tilde_optimization_model`         | <notranslate>Optimization Model</notranslate>                          | `String`          |
| `last_attributed_touch_data_tilde_placement`                  | <notranslate>Placement</notranslate>                                   | `String`          |
| `last_attributed_touch_data_tilde_placement_id`               | <notranslate>Placement ID</notranslate>                                | `String`          |
| `last_attributed_touch_data_tilde_secondary_ad_format`        | <notranslate>Secondary Ad Format</notranslate>                         | `String`          |
| `last_attributed_touch_data_tilde_secondary_publisher`        | <notranslate>Secondary Publisher</notranslate>                         | `String`          |
| `last_attributed_touch_data_tilde_secondary_publisher_id`     | <notranslate>Secondary Publisher ID</notranslate>                      | `String`          |
| `last_attributed_touch_data_tilde_stage`                      | <notranslate>Stage</notranslate>                                       | `String`          |
| `last_attributed_touch_data_tilde_sub_site_name`              | <notranslate>Sub Site Name</notranslate>                               | `String`          |
| `last_attributed_touch_data_tilde_tags`                       | <notranslate>Tags</notranslate>                                        | `ArrayString`     |
| `last_attributed_touch_data_tilde_technology_partner`         | <notranslate>Technology Partner</notranslate>                          | `String`          |
| `last_attributed_touch_data_tilde_tilde_customer_ad_set_name` | <notranslate>Customer Ad Set Name</notranslate>                        | `String`          |
| `last_attributed_touch_data_tilde_tune_publisher_id`          | <notranslate>TUNE Publisher ID</notranslate>                           | `Long`            |
| `last_attributed_touch_data_tilde_tune_publisher_name`        | <notranslate>TUNE Publisher Name</notranslate>                         | `String`          |
| `last_attributed_touch_data_tilde_view_id`                    | <notranslate>View ID</notranslate>                                     | `String`          |
| `last_attributed_touch_data_tilde_view_name`                  | <notranslate>View Name</notranslate>                                   | `String`          |
| `last_attributed_touch_timestamp`                             | <notranslate>Last Attributed Touch Timestamp</notranslate>             | `Long`            |
| `last_attributed_touch_timestamp_iso`                         | <notranslate>Last Attributed Touch Timestamp (ISO</notranslate>)       | `String`          |
| `last_attributed_touch_type`                                  | <notranslate>Last Attributed Touch Type</notranslate>                  | `String`          |
| `last_cta_view_data_custom_fields`                            | <notranslate>Last CTA View Custom Fields</notranslate>                 | `String`          |
| `last_cta_view_data_dollar_3p`                                | <notranslate>Last CTA View Ad Partner (3p</notranslate>)               | `String`          |
| `last_cta_view_data_plus_via_features`                        | <notranslate>Last CTA View Via Features</notranslate>                  | `ArrayString`     |
| `last_cta_view_data_plus_web_format`                          | <notranslate>Last CTA View Web Format</notranslate>                    | `String`          |
| `last_cta_view_data_tilde_ad_id`                              | <notranslate>Last CTA View Ad ID</notranslate>                         | `String`          |
| `last_cta_view_data_tilde_ad_name`                            | <notranslate>Last CTA View Ad Name</notranslate>                       | `String`          |
| `last_cta_view_data_tilde_ad_set_id`                          | <notranslate>Last CTA View Ad Set ID</notranslate>                     | `String`          |
| `last_cta_view_data_tilde_ad_set_name`                        | <notranslate>Last CTA View Ad Set Name</notranslate>                   | `String`          |
| `last_cta_view_data_tilde_advertising_partner_name`           | <notranslate>Last CTA View Ad Partner</notranslate>                    | `String`          |
| `last_cta_view_data_tilde_agency`                             | <notranslate>Last CTA View Agency</notranslate>                        | `String`          |
| `last_cta_view_data_tilde_banner_dimensions`                  | <notranslate>Last CTA View Banner Dimensions</notranslate>             | `String`          |
| `last_cta_view_data_tilde_branch_ad_format`                   | <notranslate>Last CTA View Branch Ad Format</notranslate>              | `String`          |
| `last_cta_view_data_tilde_campaign`                           | <notranslate>Last CTA View Campaign</notranslate>                      | `String`          |
| `last_cta_view_data_tilde_campaign_id`                        | <notranslate>Last CTA View Campaign ID</notranslate>                   | `String`          |
| `last_cta_view_data_tilde_campaign_type`                      | <notranslate>Last CTA View Campaign Type</notranslate>                 | `String`          |
| `last_cta_view_data_tilde_channel`                            | <notranslate>Last CTA View Channel</notranslate>                       | `String`          |
| `last_cta_view_data_tilde_creative_id`                        | <notranslate>Last CTA View Creative ID</notranslate>                   | `String`          |
| `last_cta_view_data_tilde_creative_name`                      | <notranslate>Last CTA View Creative Name</notranslate>                 | `String`          |
| `last_cta_view_data_tilde_external_touch_id`                  | <notranslate>Last CTA View External Touch ID</notranslate>             | `Long`            |
| `last_cta_view_data_tilde_feature`                            | <notranslate>Last CTA View Feature</notranslate>                       | `String`          |
| `last_cta_view_data_tilde_keyword_id`                         | <notranslate>Last CTA View Keyword ID</notranslate>                    | `String`          |
| `last_cta_view_data_tilde_optimization_model`                 | <notranslate>Last CTA View Optimization Model</notranslate>            | `String`          |
| `last_cta_view_data_tilde_placement`                          | <notranslate>Last CTA View Placement</notranslate>                     | `String`          |
| `last_cta_view_data_tilde_secondary_ad_format`                | <notranslate>Last CTA View Secondary Ad Format</notranslate>           | `String`          |
| `last_cta_view_data_tilde_secondary_publisher`                | <notranslate>Last CTA View Secondary Publisher</notranslate>           | `String`          |
| `last_cta_view_data_tilde_stage`                              | <notranslate>Last CTA View Stage</notranslate>                         | `String`          |
| `last_cta_view_data_tilde_tags`                               | <notranslate>Last CTA View Tags</notranslate>                          | `ArrayString`     |
| `last_cta_view_data_tilde_technology_partner`                 | <notranslate>Last CTA View Technology Partner</notranslate>            | `String`          |
| `last_cta_view_timestamp`                                     | <notranslate>Last CTA View Timestamp</notranslate>                     | `Long`            |
| `last_cta_view_timestamp_iso`                                 | <notranslate>Last CTA View Timestamp (ISO</notranslate>)               | `String`          |
| `minutes_from_last_attributed_touch_to_event`                 | <notranslate>Minutes From Last Attributed Touch To Event</notranslate> | `Integer`         |
| `name`                                                        | <notranslate>Name</notranslate>                                        | `String`          |
| `organization_id`                                             | <notranslate>Organization ID</notranslate>                             | `Long`            |
| `organization_name`                                           | <notranslate>Organization Name</notranslate>                           | `String`          |
| `origin`                                                      | <notranslate>Origin</notranslate>                                      | `String`          |
| `reengagement_activity_attributed`                            | <notranslate>Reengagement Activity Attributed</notranslate>            | `Boolean`         |
| `referrer_click_timestamp`                                    | <notranslate>Referrer Click Timestamp</notranslate>                    | `Long`            |
| `seconds_from_last_attributed_touch_to_event`                 | <notranslate>Seconds From Last Attributed Touch To Event</notranslate> | `Integer`         |
| `site_event_items_count`                                      | <notranslate>Content Items Count</notranslate>                         | `Integer`         |
| `site_event_name`                                             | <notranslate>?? isn't this customer_event_alias</notranslate>?         | `String`          |
| `store_install_begin_timestamp`                               | <notranslate>Store Install Begin Timestamp</notranslate>               | `Long`            |
| `timestamp`                                                   | <notranslate>Timestamp</notranslate>                                   | `Long`            |
| `timestamp_iso`                                               | <notranslate>Timestamp (ISO</notranslate>)                             | `String`          |
| `tune_fired_webhook`                                          | <notranslate>- do not expose in API or UI -</notranslate>              | `Boolean`         |
| `tune_site_event_id`                                          | <notranslate>TUNE Site Event ID</notranslate>                          | `Long`            |
| `tune_site_id`                                                | <notranslate>TUNE Site ID</notranslate>                                | `Long`            |
| `tune_site_name`                                              | <notranslate>TUNE Site Name</notranslate>                              | `String`          |
| `user_data_aaid`                                              | <notranslate>AAID</notranslate>                                        | `String`          |
| `user_data_android_id`                                        | <notranslate>Android ID</notranslate>                                  | `String`          |
| `user_data_app_package_name`                                  | <notranslate>App Package Name</notranslate>                            | `String`          |
| `user_data_app_version`                                       | <notranslate>App Version</notranslate>                                 | `String`          |
| `user_data_brand`                                             | <notranslate>Brand</notranslate>                                       | `String`          |
| `user_data_browser`                                           | <notranslate>Browser</notranslate>                                     | `String`          |
| `user_data_build`                                             | <notranslate>Build</notranslate>                                       | `String`          |
| `user_data_cpu_type`                                          | <notranslate>CPU Type</notranslate>                                    | `String`          |
| `user_data_cross_platform_id`                                 | <notranslate>Cross Platform ID</notranslate>                           | `String`          |
| `user_data_developer_identity`                                | <notranslate>Developer Identity</notranslate>                          | `String`          |
| `user_data_device_type`                                       | <notranslate>Device Type</notranslate>                                 | `String`          |
| `user_data_environment`                                       | <notranslate>Environment</notranslate>                                 | `String`          |
| `user_data_geo_city_code`                                     | <notranslate>City Code</notranslate>                                   | `Integer`         |
| `user_data_geo_city_en`                                       | <notranslate>City</notranslate>                                        | `Integer`         |
| `user_data_geo_country_code`                                  | <notranslate>Country Code</notranslate>                                | `String`          |
| `user_data_geo_country_en`                                    | <notranslate>Country</notranslate>                                     | `String`          |
| `user_data_geo_dma_code`                                      | <notranslate>DMA Code</notranslate>                                    | `Integer`         |
| `user_data_geo_lat`                                           | <notranslate>Latitude</notranslate>                                    | `Float`           |
| `user_data_geo_lon`                                           | <notranslate>Longitude</notranslate>                                   | `Float`           |
| `user_data_geo_postal_code`                                   | <notranslate>Postal Code</notranslate>                                 | `String`          |
| `user_data_http_referrer`                                     | <notranslate>HTTP Referrer</notranslate>                               | `String`          |
| `user_data_idfa`                                              | <notranslate>IDFA</notranslate>                                        | `String`          |
| `user_data_idfv`                                              | <notranslate>IDFV</notranslate>                                        | `String`          |
| `user_data_installer_package_name`                            | <notranslate>Installer Package Name</notranslate>                      | `String`          |
| `user_data_internet_connection_type`                          | <notranslate>Internet Connection Type</notranslate>                    | `String`          |
| `user_data_ip`                                                | <notranslate>IP Address</notranslate>                                  | `String`          |
| `user_data_is_coppa`                                          | <notranslate>- do not expose in API or UI -</notranslate>              | `Boolean`         |
| `user_data_is_jailbroken`                                     | <notranslate>Is Jailbroken</notranslate>                               | `Boolean`         |
| `user_data_kindle_id`                                         | <notranslate>Kindle ID</notranslate>                                   | `String`          |
| `user_data_language`                                          | <notranslate>Language</notranslate>                                    | `String`          |
| `user_data_limit_ad_tracking`                                 | <notranslate>Limit Ad Tracking</notranslate>                           | `Boolean`         |
| `user_data_limit_facebook_tracking`                           | <notranslate>- do not expose in API or UI -</notranslate>              | `Boolean`         |
| `user_data_model`                                             | <notranslate>Model</notranslate>                                       | `String`          |
| `user_data_os`                                                | <notranslate>OS</notranslate>                                          | `String`          |
| `user_data_os_version`                                        | <notranslate>OS Version</notranslate>                                  | `String`          |
| `user_data_os_version_android`                                | <notranslate>OS Version (Android</notranslate>)                        | `String`          |
| `user_data_past_cross_platform_ids`                           | <notranslate>Past Cross Platforms IDs</notranslate>                    | `ArrayString`     |
| `user_data_platform`                                          | <notranslate>Platform</notranslate>                                    | `String`          |
| `user_data_prob_cross_platform_ids`                           | <notranslate>Probabilistic Cross Platform IDs</notranslate>            | `ArrayStruct`     |
| `user_data_screen_height`                                     | <notranslate>Screen Height</notranslate>                               | `Integer`         |
| `user_data_screen_width`                                      | <notranslate>Screen Width</notranslate>                                | `Integer`         |
| `user_data_sdk_version`                                       | <notranslate>SDK Version</notranslate>                                 | `String`          |
| `user_data_tune_mat_id`                                       | <notranslate>TUNE MAT ID</notranslate>                                 | `String`          |
| `user_data_user_agent`                                        | <notranslate>User Agent</notranslate>                                  | `String`          |
| `user_data_windows_aid`                                       | <notranslate>Windows AID</notranslate>                                 | `String`          |
| `user_data_device_locale`                                     | <notranslate>Device Locale</notranslate>                               | `String`          |
| `user_data_carrier_name`                                      | <notranslate>Carrier Name</notranslate>                                | `String`          |
| `seconds_from_last_attributed_touch_to_store_install_begin`   | <notranslate>Seconds From Touch To Store Install Begin</notranslate>   | `Integer`         |
| `seconds_from_install_to_event`                               | <notranslate>Seconds From Install To Event</notranslate>               | `Integer`         |
| `last_attributed_touch_data_tilde_advertising_account_id`     | <notranslate>Advertising Account ID</notranslate>                      | `String`          |
| `last_attributed_touch_data_tilde_advertising_account_name`   | <notranslate>Advertising Account Name</notranslate>                    | `String`          |

### TUNE Available Fields

!!! warning "IP Discrepancies"
	Geographic data, such as country and city, may not be available for a very small percentage of events where the IP cannot be resolved to a location.

!!! warning "Discontinued Fields"
	Some fields have very limited value to our customers and as such have been discontinued. Discontinued fields will not be available via the Custom Export API. Please work with your CSM or our Support team if you have questions or concerns.

!!! info "Info"
	Branch does not support exports of the infrequently-used update and postbacks TUNE topics.


| TUNE Field                                                     | TUNE Human Readable                        |
|----------------------------------------------------------------|--------------------------------------------|
| `ad_network_id`                                                | <notranslate>Ad Network ID</notranslate>                              |
| `ad_network_name`                                              | <notranslate>Ad Network Name</notranslate>                            |
| `advertiser_id`                                                | <notranslate>Advertiser ID</notranslate>                              |
| `advertiser_name`                                              | <notranslate>Advertiser Name</notranslate>                            |
| `advertiser_opt_out`                                           | <notranslate>Advertiser Opt Out</notranslate>                         |
| `advertiser_ref_id`                                            | <notranslate>Advertiser Ref ID</notranslate>                          |
| `advertiser_sub_ad_name`                                       | <notranslate>My Ad Name</notranslate>                                 |
| `advertiser_sub_ad_ref`                                        | <notranslate>My Ad Ref</notranslate>                                  |
| `advertiser_sub_adgroup_name`                                  | <notranslate>My Adgroup Name</notranslate>                            |
| `advertiser_sub_adgroup_ref`                                   | <notranslate>My Adgroup Ref</notranslate>                             |
| `advertiser_sub_campaign_name`                                 | <notranslate>My Campaign Name</notranslate>                           |
| `advertiser_sub_campaign_ref`                                  | <notranslate>My Campaign Ref</notranslate>                            |
| `advertiser_sub_keyword_name`                                  | <notranslate>My Keyword Name</notranslate>                            |
| `advertiser_sub_keyword_ref`                                   | <notranslate>My Keyword Ref</notranslate>                             |
| `advertiser_sub_placement_name`                                | <notranslate>My Placement Name</notranslate>                          |
| `advertiser_sub_placement_ref`                                 | <notranslate>My Placement Ref</notranslate>                           |
| `advertiser_sub_publisher_name`                                | <notranslate>My Publisher Name</notranslate>                          |
| `advertiser_sub_publisher_ref`                                 | <notranslate>My Publisher Ref</notranslate>                           |
| `advertiser_sub_site_name`                                     | <notranslate>My Site Name</notranslate>                               |
| `advertiser_sub_site_ref`                                      | <notranslate>My Site Ref</notranslate>                                |
| `agency_id`                                                    | <notranslate>Agency ID</notranslate>                                  |
| `agency_name`                                                  | <notranslate>Agency Name</notranslate>                                |
| `app_version`                                                  | <notranslate>App Version</notranslate>                                |
| `attribute_sub1`                                               | <notranslate>Attribute Sub1</notranslate>                             |
| `attribute_sub2`                                               | <notranslate>Attribute Sub2</notranslate>                             |
| `attribute_sub3`                                               | <notranslate>Attribute Sub3</notranslate>                             |
| `attribute_sub4`                                               | <notranslate>Attribute Sub4</notranslate>                             |
| `attribute_sub5`                                               | <notranslate>Attribute Sub5</notranslate>                             |
| `branch_app_id`                                                | <notranslate>Branch App ID</notranslate>                              |
| `click_created`                                                | <notranslate>Click Created</notranslate>                              |
| `country_code`                                                 | <notranslate>Country Code</notranslate>                               |
| `country_name`                                                 | <notranslate>Country Name</notranslate>                               |
| `created`                                                      | <notranslate>Created</notranslate>                                    |
| `currency_code`                                                | <notranslate>Currency Code</notranslate>                              |
| `device_brand`                                                 | <notranslate>Device Brand</notranslate>                               |
| `device_carrier`                                               | <notranslate>Device Carrier</notranslate>                             |
| `device_ip`                                                    | <notranslate>Device IP</notranslate>                                  |
| `device_model`                                                 | <notranslate>Device Model</notranslate>                               |
| `device_type`                                                  | <notranslate>Device Type</notranslate>                                |
| `download_date`                                                | <notranslate>Download Date</notranslate>                              |
| `event_type`                                                   | <notranslate>Event Type</notranslate>                                 |
| `existing_user`                                                | <notranslate>Existing User</notranslate>                              |
| `google_ad_tracking`                                           | <notranslate>Google Ad Tracking Enabled</notranslate>                 |
| `google_aid`                                                   | <notranslate>Google Advertising ID</notranslate>                      |
| `id`                                                           | <notranslate>ID</notranslate>                                         |
| `impression_created`                                           | <notranslate>Impression Created</notranslate>                         |
| `install_created`                                              | <notranslate>Install Created</notranslate>                            |
| `install_date`                                                 | <notranslate>Install Date</notranslate>                               |
| `install_publisher_name`                                       | <notranslate>Install Publisher Name</notranslate>                     |
| `ios_ad_tracking`                                              | <notranslate>iOS Ad Tracking Enabled</notranslate>                    |
| `ios_ifa`                                                      | <notranslate>iOS IDFA</notranslate>                                   |
| `ios_ifv`                                                      | <notranslate>iOS IDFV</notranslate>                                   |
| `ip`                                                           | <notranslate>IP</notranslate>                                         |
| `is_view_through`                                              | <notranslate>Is View Through</notranslate>                            |
| `language`                                                     | <notranslate>Language</notranslate>                                   |
| `latitude`                                                     | <notranslate>Latitude</notranslate>                                   |
| `longitude`                                                    | <notranslate>Longitude</notranslate>                                  |
| `mat_id`                                                       | <notranslate>Mat ID</notranslate>                                     |
| `metro_code`                                                   | <notranslate>Metro Code</notranslate>                                 |
| `os_id`                                                        | <notranslate>OS ID</notranslate>                                      |
| `os_jailbroke`                                                 | <notranslate>Jailbroken</notranslate>                                 |
| `os_version`                                                   | <notranslate>OS Version</notranslate>                                 |
| `package_name`                                                 | <notranslate>Package Name</notranslate>                               |
| `platform_aid`                                                 | <notranslate>Platform AID</notranslate>                               |
| `postal_code`                                                  | <notranslate>Postal Code</notranslate>                                |
| `publisher_adgroup_id`                                         | <notranslate>Publisher Adgroup ID</notranslate>                       |
| `publisher_click_id`                                           | <notranslate>Publisher Click ID</notranslate>                         |
| `publisher_id`                                                 | <notranslate>Publisher ID</notranslate>                               |
| `publisher_name`                                               | <notranslate>Publisher Name</notranslate>                             |
| `publisher_ref_id`                                             | <notranslate>Publisher Ref ID</notranslate>                           |
| `publisher_sub_ad_id`                                          | <notranslate>Publisher Sub Ad ID</notranslate>                        |
| `publisher_sub_ad_name`                                        | <notranslate>Publisher Sub Ad Name</notranslate>                      |
| `publisher_sub_ad_ref`                                         | <notranslate>Publisher Sub Ad Ref</notranslate>                       |
| `publisher_sub_adgroup_name`                                   | <notranslate>Publisher Sub Adgroup Name</notranslate>                 |
| `publisher_sub_adgroup_ref`                                    | <notranslate>Publisher Sub Adgroup Ref</notranslate>                  |
| `publisher_sub_campaign_id`                                    | <notranslate>Publisher Sub Campaign ID</notranslate>                  |
| `publisher_sub_campaign_name`                                  | <notranslate>Publisher Sub Campaign Name</notranslate>                |
| `publisher_sub_campaign_ref`                                   | <notranslate>Publisher Sub Campaign Ref</notranslate>                 |
| `publisher_sub_channel`                                        | <notranslate>Publisher Sub Channel</notranslate>                      |
| `publisher_sub_feature`                                        | <notranslate>Publisher Sub Feature</notranslate>                      |
| `publisher_sub_keyword_id`                                     | <notranslate>Publisher Sub Keyword ID</notranslate>                   |
| `publisher_sub_keyword_name`                                   | <notranslate>Publisher Sub Keyword Name</notranslate>                 |
| `publisher_sub_keyword_ref`                                    | <notranslate>Publisher Sub Keyword Ref</notranslate>                  |
| `publisher_sub_placement_id`                                   | <notranslate>Publisher Sub Placement ID</notranslate>                 |
| `publisher_sub_placement_name`                                 | <notranslate>Publisher Sub Placement Name</notranslate>               |
| `publisher_sub_placement_ref`                                  | <notranslate>Publisher Sub Placement Ref</notranslate>                |
| `publisher_sub_publisher_id`                                   | <notranslate>Publisher Sub Publisher ID</notranslate>                 |
| `publisher_sub_publisher_name`                                 | <notranslate>Publisher Sub Publisher Name</notranslate>               |
| `publisher_sub_publisher_ref`                                  | <notranslate>Publisher Sub Publisher Ref</notranslate>                |
| `publisher_sub_site_name`                                      | <notranslate>Publisher Sub Site Name</notranslate>                    |
| `publisher_sub1`                                               | <notranslate>Publisher Sub1</notranslate>                             |
| `publisher_sub2`                                               | <notranslate>Publisher Sub2</notranslate>                             |
| `publisher_sub3`                                               | <notranslate>Publisher Sub3</notranslate>                             |
| `publisher_sub4`                                               | <notranslate>Publisher Sub4</notranslate>                             |
| `publisher_sub5`                                               | <notranslate>Publisher Sub5</notranslate>                             |
| `publisher_sub_stage`                                          | <notranslate>Publisher Sub Stage</notranslate>                        |
| `publisher_sub_tags`                                           | <notranslate>Publisher Sub Tags</notranslate>                         |
| `region_name`                                                  | <notranslate>Region Name</notranslate>                                |
| `revenue`                                                      | <notranslate>Revenue</notranslate>                                    |
| `revenue_usd`                                                  | <notranslate>Revenue USD</notranslate>                                |
| `sdk`                                                          | <notranslate>SDK</notranslate>                                        |
| `sdk_version`                                                  | <notranslate>SDK Version</notranslate>                                |
| `search_string`                                                | <notranslate>Search String</notranslate>                              |
| `session_datetime`                                             | <notranslate>Session Datetime</notranslate>                           |
| `site_event_id`                                                | <notranslate>Site Event ID</notranslate>                              |
| `site_event_name`                                              | <notranslate>Site Event Name</notranslate>                            |
| `site_event_type`                                              | <notranslate>Site Event Type</notranslate>                            |
| `site_id`                                                      | <notranslate>Site ID</notranslate>                                    |
| `site_name`                                                    | <notranslate>Site Name</notranslate>                                  |
| `stat_click_id`                                                | <notranslate>Click ID</notranslate>                                   |
| `stat_impression_id`                                           | <notranslate>Impression ID</notranslate>                              |
| `transaction_id`                                               | <notranslate>Transaction ID</notranslate>                             |
| `user_agent`                                                   | <notranslate>User Agent</notranslate>                                 |
| `user_id`                                                      | <notranslate>User ID</notranslate>                                    |
| `windows_aid`                                                  | <notranslate>Windows Advertising ID</notranslate>                     |
| `wurfl_brand_name`                                             | <notranslate>Brand Name</notranslate>                                 |
| `wurfl_device_os`                                              | <notranslate>Device OS</notranslate>                                  |
| `wurfl_device_os_version`                                      | <notranslate>Device OS Version</notranslate>                          |
| `wurfl_model_name`                                             | <notranslate>Model Name</notranslate>                                 |
| `branch_app_id`                                                | <notranslate>Branch App ID</notranslate>                              |

#### Field Value Changes

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


#### Including Fields from Related Data Objects

Related objects no longer use periods ( . ) to access the properties on the object. Rather, field names use underscores ( _ ) only.

For example, `site_event.id` will now be exported as `site_event_id`.
