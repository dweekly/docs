## Overview

The Branch Cohort Exports allows you to programmatically query and export **Cohort** analytics.

*   Max number of records returned by API: 50,000.
    *    We may define dynamic record limits based on app_id/org_id.
*   Max month lookback: 24
*   Max number of dimensions: 11
*   Max number of measures: 3
*   Max number of days that can be queried at a time: 90

## Authentication

Calls to the v2 Query API require an _api_key_ query string parameter to be passed with each request. API Keys are generated on a per-user basis and are permanent.

Learn how to [retrieve your API key (a.k.a. `Access Token`)](/dashboard/organization-view/#managing-your-user-profile)

!!! warning "Organization Level Access Required"
	In order to retrieve or reset your API Key/Access Token, you must have access to the Organization level of the account.  This functionality is not present at the app level.

## Rate Limits

The v2 Query API includes the following rate limits:

- 2 requests per second
- 5 requests per minute
- 150 requests per hour

## API Access

In order to access the v2 Query API, a user will need to have both **Sensitive Data** and **Export** access.

![image](/_assets/img/pages/dashboard/access-levels/export-access.png)

For more details on how to give a user the required access, please follow [Granting a User Export Access](/dashboard/export-access/#granting-a-user-export-access).

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

### Third Party Access

Any user with access to an account’s API keys will be able to access Branch’s Custom Export API (and thus unfiltered, log-level data). As a result, we would recommend against providing third parties with the permissions required to view API keys during the invitation process.

## Export Request

```
POST /v2/analytics
Content-Type: application/json
Host: api2.branch.io
```

### Request

**HTTP Headers:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>Access-Token
   </td>
   <td>y
   </td>
   <td>Key that encapsulates the users permission w.r.t an org.
   </td>
   <td>
   </td>
  </tr>
</table>

**URL Query Parameters:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>organization_id
   </td>
   <td>y
   </td>
   <td>Unique identifier for organization of requested data.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>limit
   </td>
   <td>n
   </td>
   <td>The maximum number of results to return.
<p>
Default: 50000
<p>
Min: 50000
<p>
Max: 50000 (unless a higher limit is specified)
   </td>
   <td>Integer
   </td>
  </tr>
  <tr>
   <td>format
   </td>
   <td>n
   </td>
   <td>Format of returned data. Defaults to csv.
   </td>
   <td>csv/json
   </td>
  </tr>
</table>

**Body Parameters:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>start_date
   </td>
   <td>y
   </td>
   <td>The start of the interval time
<p>
range represented as an ISO-8601 complete date.
   </td>
   <td>YYYY-MM-DD
   </td>
  </tr>
  <tr>
   <td>end_date
   </td>
   <td>y
   </td>
   <td>The end of the interval time range represented as an ISO-8601 complete date.
   </td>
   <td>YYYY-MM-DD
   </td>
  </tr>
  <tr>
   <td>dimensions
   </td>
   <td>n
   </td>
   <td>An array representing dimension(s) to group by.
<p>
Limit is 11.
   </td>
   <td>See <a href="#dimensions">Dimensions</a> for complete list
   </td>
  </tr>
  <tr>
   <td>data_source
   </td>
   <td>y
   </td>
   <td>A string value representing the cohort type.
   </td>
   <td>One of 2 possible values:
<ul>

<li>install_cohort

<li>reengagement_cohort
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>filters
   </td>
   <td>n
   </td>
   <td>An object defining filters to match or disallow certain values.
   </td>
   <td>Object. Keys are same as dimensions. Values are an array of values to match for the dimension.
   </td>
  </tr>
  <tr>
   <td>ordered
   </td>
   <td>n
   </td>
   <td>Order of response based on ordered_by value.
<p>
Default: descending.
   </td>
   <td>descending or ascending
   </td>
  </tr>
  <tr>
   <td>ordered_by
   </td>
   <td>n
   </td>
   <td>The dimension used for sorting
   </td>
   <td>Dimension name. See <a href="#dimensions">Dimensions</a> for complete list.
   </td>
  </tr>
  <tr>
   <td>unique
   </td>
   <td>n
   </td>
   <td>Whether or not to return unique values.
<p>
Default: false
   </td>
   <td>True, false
   </td>
  </tr>
  <tr>
   <td>measures
   </td>
   <td>y
   </td>
   <td>The cohort measures to return. Limit is 3.
   </td>
   <td>Measure name. See <a href="#dimensions">Measures</a> for complete list.
   </td>
  </tr>
  <tr>
   <td>granularity_band_count
   </td>
   <td>y
   </td>
   <td> Number of time units since the cohort event to return to the user.
   </td>
   <td>Integer.
   </td>
  </tr>
  <tr>
   <td>cumulative
   </td>
   <td>n
   </td>
   <td>If true, sum across bands so that a given band value is the sum of all preceding values plus the band value. Default: false
   </td>
   <td>true/false
   </td>
  </tr>
  <tr>
   <td>per_user
   </td>
   <td>n
   </td>
   <td>If true, divide each band value by the user count. Default: false.
   </td>
   <td>true/false
   </td>
  </tr>
  <tr>
   <td>granularity
   </td>
   <td>n
   </td>
   <td>The time granularity that each band value will represent. Default: day
   </td>
   <td>day, week, or month.
   </td>
  </tr>
</table>

**Example Request:**

```
curl -X POST 'http://api2.branch.io/v2/analytics?organization_id=<organization_id>&limit=50000&format=json' -H 'Access-Token:<branch_access_token>' -H 'content-type:application/json' -d '{
        "start_date": "2019-09-23",
        "end_date": "2019-09-24",
        "dimensions": ["install_activity_touch_data_tilde_campaign"],
        "data_source": "install_cohort",
        "filters": {
                "install_activity_touch_data_tilde_campaign": ["A4G"]
        },
        "ordered": "descending",
        "ordered_by": "install_activity_touch_data_tilde_campaign",
        "measures": ["OPEN"],
        "granularity_band_count": 7,
        "cumulative": false,
        "per_user": false,
        "granularity": "day"
}'
```

### Response

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>job_id
   </td>
   <td>Unique identifier used to retrieve job status and data
   </td>
   <td>Unique UUID
   </td>
  </tr>
  <tr>
   <td>code
   </td>
   <td>HTTP code representing the outcome of the export request.
   </td>
   <td>2xx/4xx/5xx.
   </td>
  </tr>
  <tr>
   <td>status_url
   </td>
   <td>Url to curl to retrieve job status and data.
   </td>
   <td>See below
   </td>
  </tr>
  <tr>
   <td>error_message
   </td>
   <td>Error message if the export call fails
   </td>
   <td>Error message
   </td>
  </tr>
</table>

**Status_url value:**

```
https://api2.branch.io/v2/analytics/<job_id>
```

## Export Download Status

```
GET /v2/analytics/<job_id>
Host: api2.branch.io
```

### Request {#request}

**HTTP Headers:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>Access-Token
   </td>
   <td>y
   </td>
   <td>Key that encapsulates the users permission w.r.t an org.
   </td>
   <td>
   </td>
  </tr>
</table>

**URL Query Parameters:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>organization_id
   </td>
   <td>y
   </td>
   <td>Unique identifier for organization of requested data.
   </td>
   <td>
   </td>
  </tr>
</table>

**Path Parameters:**

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Required</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>job_id
   </td>
   <td>y
   </td>
   <td>Unique identifier for job
   </td>
   <td>Unique UUID
   </td>
  </tr>
</table>

**Example Request:**

```
curl 'http://api2.branch.io/v2/analytics/<job_id>?organization_id=<organization_id>' -H 'Access-Token:<branch_access_token>'
```

### Response

<table>
  <tr>
   <td><em>Parameter</em>
   </td>
   <td><em>Definition</em>
   </td>
   <td><em>Values</em>
   </td>
  </tr>
  <tr>
   <td>status
   </td>
   <td>Status of they query.
   </td>
   <td>QUEUED, RUNNING, FINISHED, ERROR
   </td>
  </tr>
  <tr>
   <td>code
   </td>
   <td>HTTP code representing the outcome of the status request.
   </td>
   <td>1xx/2xx/4xx/5xx. Note: a 1xx will denote a QUEUED or RUNNING status.
   </td>
  </tr>
  <tr>
   <td>response_url
   </td>
   <td>S3 url for downloading the response data.
   </td>
   <td>S3 url
   </td>
  </tr>
  <tr>
   <td>error_message
   </td>
   <td>Error message if the query failed
   </td>
   <td>error message corresponding to failure reason
   </td>
  </tr>
</table>

## Appendix

### Filters

Filters work based on AND at the top level. Each dimension can have multiple "or" filters e.g. { "user_data_os": ["IOS", "ANDROID"] }.

### Dimensions

Used for both dimensions and filters. For all dimensions, use the universal event ontology name (highlighted in red below).

##### Install cohort

```
{
  "install_activity_attributed": "attributed",
  "install_activity_event_name": "event name",
  "install_activity_touch_type": "type",
  "install_activity_touch_data_tilde_campaign": "campaign",
  "install_activity_touch_data_tilde_channel": "channel",
  "install_activity_touch_data_tilde_feature": "feature",
  "install_activity_touch_data_tilde_stage": "stage",
  "install_activity_touch_data_tilde_tags": "tags",
  "install_activity_touch_data_tilde_advertising_partner_name": "ad partner",
  "install_activity_touch_data_dollar_3p": "ad partner (3p)",
  "install_activity_touch_data_tilde_secondary_publisher": "secondary publisher",
  "install_activity_touch_data_tilde_creative_name": "creative name",
  "install_activity_touch_data_tilde_ad_set_name": "ad set name",
  "install_activity_touch_data_tilde_ad_name": "ad name",
  "install_activity_touch_data_tilde_keyword": "keyword",
  "install_activity_touch_data_tilde_journey_name": "journey name",
  "install_activity_touch_data_tilde_view_name": "view name",
  "install_activity_touch_data_plus_referring_domain": "referring domain",
  "install_activity_touch_data_plus_via_features": "Branch feature",
  "install_activity_touch_data_plus_web_format": "web format",
  "install_activity_data_os": "os",
  "install_activity_data_environment": "environment",
  "install_activity_data_platform": "platform",
  "install_activity_data_country_code": "country",
  "install_activity_data_has_app": "has app",
  "install_activity_data_has_clicked_email": "has clicked email",
  "install_activity_data_has_clicked_ad": "has clicked ad",
  "install_activity_timezone_adjusted_day": "date",
  "install_activity_touch_data_tilde_placement": "placement",
  "install_activity_data_device_type": "device type",
  "install_activity_touch_data_tilde_sub_site_name": "sub site name",
  "install_activity_data_brand": "brand",
  "install_activity_data_geo_country_en": "geo country",
  "install_activity_data_model": "model",
  "install_activity_data_geo_region_en": "region",
  "install_activity_touch_data_tilde_customer_secondary_publisher": "customer secondary publisher",
  "install_activity_touch_data_tilde_customer_placement": "customer placement",
  "install_activity_touch_data_tilde_customer_sub_site_name": "customer sub site name",
  "install_activity_touch_data_tilde_customer_campaign": "customer campaign",
  "install_activity_touch_data_tilde_customer_ad_set_name": "customer ad set name",
  "install_activity_touch_data_tilde_customer_ad_name": "customer ad name",
  "install_activity_touch_data_tilde_customer_keyword": "customer keyword",
  "install_activity_touch_data_tilde_agency_id": "agency id",
  "install_activity_touch_data_tilde_agency": "agency name"
}
```

#### Reengagement cohort

```
{
  "reengagement_activity_attributed": "attributed",
  "reengagement_activity_event_name": "event name",
  "reengagement_activity_touch_type": "type",
  "reengagement_activity_touch_data_tilde_campaign": "campaign",
  "reengagement_activity_touch_data_tilde_channel": "channel",
  "reengagement_activity_touch_data_tilde_feature": "feature",
  "reengagement_activity_touch_data_tilde_stage": "stage",
  "reengagement_activity_touch_data_tilde_tags": "tags",
  "reengagement_activity_touch_data_tilde_advertising_partner_name": "ad partner",
  "reengagement_activity_touch_data_dollar_3p": "ad partner (3p)",
  "reengagement_activity_touch_data_tilde_secondary_publisher": "secondary publisher",
  "reengagement_activity_touch_data_tilde_creative_name": "creative name",
  "reengagement_activity_touch_data_tilde_ad_set_name": "ad set name",
  "reengagement_activity_touch_data_tilde_ad_name": "ad name",
  "reengagement_activity_touch_data_tilde_keyword": "keyword",
  "reengagement_activity_touch_data_tilde_journey_name": "journey name",
  "reengagement_activity_touch_data_tilde_view_name": "view name",
  "reengagement_activity_touch_data_plus_referring_domain": "referring domain",
  "reengagement_activity_touch_data_plus_via_features": "Branch feature",
  "reengagement_activity_touch_data_plus_web_format": "web format",
  "reengagement_activity_data_os": "os",
  "reengagement_activity_data_environment": "environment",
  "reengagement_activity_data_platform": "platform",
  "reengagement_activity_data_country_code": "country",
  "reengagement_activity_data_has_app": "has app",
  "reengagement_activity_data_has_clicked_email": "has clicked email",
  "reengagement_activity_data_has_clicked_ad": "has clicked ad",
  "reengagement_activity_timezone_adjusted_day": "date",
  "reengagement_activity_touch_data_tilde_placement": "placement",
  "reengagement_activity_data_device_type": "device type",
  "reengagement_activity_touch_data_tilde_sub_site_name": "sub site name",
  "reengagement_activity_data_brand": "brand",
  "reengagement_activity_data_geo_country_en": "geo country",
  "reengagement_activity_data_model": "model",
  "reengagement_activity_data_geo_region_en": "region",
  "reengagement_activity_touch_data_tilde_customer_secondary_publisher": "customer secondary publisher",
  "reengagement_activity_touch_data_tilde_customer_placement": "customer placement",
  "reengagement_activity_touch_data_tilde_customer_sub_site_name": "customer sub site name",
  "reengagement_activity_touch_data_tilde_customer_campaign": "customer campaign",
  "reengagement_activity_touch_data_tilde_customer_ad_set_name": "customer ad set name",
  "reengagement_activity_touch_data_tilde_customer_ad_name": "customer ad name",
  "reengagement_activity_touch_data_tilde_customer_keyword": "customer keyword",
  "reengagement_activity_touch_data_tilde_agency_id": "agency id",
  "reengagement_activity_touch_data_tilde_agency": "agency name"
}
```

#### User

```
{
  "user_data_platform": "platform (conversion event)",
  "user_data_environment": "environment (conversion event)",
  "user_data_geo_country_code": "country (conversion event)",
  "user_data_os": "os (conversion event)",
  "user_data_has_app": "has app (conversion event)",
  "user_data_standard_events_completed": "standard events completed (conversion event)",
  "user_data_custom_events_completed": "custom events completed (conversion event)",
  "user_data_has_clicked_ad": "has clicked ad (conversion event)",
  "user_data_has_clicked_email": "has clicked email (conversion event)",
  "user_data_brand": "brand (conversion event)",
  "user_data_device_type": "device type (conversion event)",
  "user_data_model": "model (conversion event)"
}
```

#### Other

```
{
	"app_id": "app id"
}
```

### Measures

The list of measures below are supported along with any additional custom defined event names.

```
OPEN
users
Retention
ARPPU
LTV
ARPU
revenue
PURCHASE
ADD_TO_CART
ADD_TO_WISHLIST
VIEW_CART
INITIATE_PURCHASE
ADD_PAYMENT_INFO
SPENG_CREDITS
RESERVE
CLICK_AD
VIEW_AD
SEARCH
VIEW_ITEM
VIEW_ITEMS
RATE
SHARE
COMPLETE_REGISTRATION
COMPLETE_TUTORIAL
ACHIEVE_LEVEL
UNLOCK_ACHIEVEMENT
INVITE
LOGIN
SUBSCRIBE
START_TRIAL
cost
GROSS_PROFIT
ROI
ROAS
eCPA
```

### Export Format

#### JSON

```
[
   {
      "users":200,
      "cost":"1234.45",
      "metric":"revenue",
      "measure":"ARPPU",
      "per_user":false,
      "cumulative":false,
      "data":{
         "day0":"1234.45",
         "day1":"2345.56",
         "day2":"1230.34",
         "day3":"9485.23"
      },
      "user_data_platform":"ANDROID_APP",
      "install_activity_data_tilde_advertising_partner_name":"Taptica"
   },
   {
      "users":200,
      "cost":"1234.45",
      "metric":"total_count",
      "measure":"OPEN",
      "per_user":false,
      "cumulative":false,
      "data":{
         "day0":45,
         "day1":23,
         "day2":412,
         "day3":230
      },
      "user_data_platform":"ANDROID_APP",
      "install_activity_data_tilde_advertising_partner_name":"Taptica"
   }
]
```

#### CSV

Columns: measure, metric, per_user, cumulative, user, cost, <dimensions>, <granularity bands>

**Example:**

[https://drive.google.com/file/d/1CDVfwoh5eetDQ79MpU7ZAKxSPah8A2F-/view?usp=sharing](https://drive.google.com/file/d/1CDVfwoh5eetDQ79MpU7ZAKxSPah8A2F-/view?usp=sharing)


#### Filename {#filename}

start_date, end_date, data_source, granularity, job_id, random 16 character string

**Example:**

`2019-09-23-2019-09-25-install_cohort-day-6dad4289-0cab-49cb-bfab-1be70c2b6933-edeSKgkDSkrsHGdr.<json | csv>`
