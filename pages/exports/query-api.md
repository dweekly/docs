## Overview

The Query API is an HTTP API that can be used for programmatically querying pre-aggregated analytics. It can be used to fetch the same data displayed in your Branch dashboard, without having to access the Dashboard itself.

!!! warning "Self Attributing Network Click/Impression Data Not Available"
    The Query API does not return click/impression data associated with SANs; i.e. Google Ads, Snap, Twitter, Facebook Ads and Apple Search Ads.

An individual query is constructed from three types of parameters:

- Authentication parameters that control the access to the data
- Data selection keys which define which events are eligible to be counted in the results (eg, filters)
- Result format specifiers that define which results are included in the HTTP response, and how the result is returned (eg, sorting)

!!! tip "Getting started"
    For newcomers to this API, we strongly suggest you check out our [Query Recipe Book](/exports/query-recipe-book/). It has screenshots of Dashboard visualizations, accompanied by what queries you need to make to pull the same data. It's a quick way to get up and running with this API.

## Endpoint Definition
```
POST /v1/query/analytics
Content-Type: application/json
Host: api2.branch.io
```

## Parameters

### Authentication

<notranslate>**branch_key**</notranslate>
 <notranslate>_description_</notranslate>: The Branch key of the app analytics information is being pulled for.
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_format_</notranslate>: string

_location_: body

_format_: string

<notranslate>**branch_secret**</notranslate>
 <notranslate>_description_</notranslate>: The Branch secret of the app, used for authentication.
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_format_</notranslate>: string

### Data selection

<notranslate>**start_date**</notranslate>
 <notranslate>_description_</notranslate>: A timestamp representing the oldest date to return data for.
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_restrictions_</notranslate>: Cannot be before 2017-10-14
 <notranslate>_format_</notranslate>: An ISO-8601 compliant date-time string. Eg: "2017-10-24T16:00:00-08:00"

<notranslate>**end_date**</notranslate>
 <notranslate>_description_</notranslate>: The last timestamp (exclusive) to return data for. No events that triggered after the end_date will be counted in the query results.
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_restrictions_</notranslate>: Cannot be more than 7 days after the start_date
 <notranslate>_format_</notranslate>: An ISO-8601 compliant date-time string. Eg: "2017-10-24T16:00:00-08:00"

<notranslate>**data_source**</notranslate>
 <notranslate>_description_</notranslate>: The type of event to query for, prefixed with the source (eg 'eo_' + 'open' pulls Branch app opens)
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_valid values_</notranslate>:
Branch data sources
```
[
  "eo_impression",
  "eo_click",
  "eo_web_to_app_auto_redirect",
  "eo_branch_cta_view",
  "eo_sms_sent",
  "eo_open",
  "eo_install",
  "eo_reinstall",
  "eo_web_session_start",
  "eo_pageview",
  "eo_commerce_event",
  "eo_custom_event",
  "eo_content_event",
  "eo_user_lifecycle_event",
  "cost"
]
```

<notranslate>**aggregation**</notranslate>
 <notranslate>_description_</notranslate>: How to count events towards the final result count. When using unique_count, each event is only counted if an event by that user has not already been seen. Eg, if 10 users each trigger 3 opens:
```
total_count = 30
unique_count = 10
```
When querying with a datasource of <notranslate>"eo_commerce_event"</notranslate>, the aggregation may also be specified as <notranslate>"revenue"</notranslate>, in which case the counts returned are the sum of revenue from matching events, and not the number of events themselves.
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_format_</notranslate>: string
 <notranslate>_possible values_</notranslate>:
```
[
  "unique_count",
  "total_count",
  "revenue",
  "cost"
]
```

<notranslate>**dimensions**</notranslate>
 <notranslate>_description_</notranslate>: List of event fields to use as splits for the query. Results counts are returned grouped with other events that have matchings values for each key provided in "dimensions".
 <notranslate>_required_</notranslate>: true
 <notranslate>_location_</notranslate>: body
 <notranslate>_format_</notranslate>: array<string>
 <notranslate>_possible element values_</notranslate>:
General info:
```
[
  "name",
  "origin",
  "timestamp",
  "deep_linked",
  "from_desktop",
]
```
User information:
```
[
  "user_data_os",
  "user_data_language",
  "user_data_platform",
  "user_data_environment",
  "user_data_geo_dma_code",
  "user_data_geo_country_code",
]
```
Last attributed touch:
```
[
  "last_attributed_touch_type",
  "last_attributed_touch_data_tilde_tags",
  "last_attributed_touch_data_tilde_secondary_publisher",
  "last_attributed_touch_data_plus_current_feature",
  "last_attributed_touch_data_plus_via_features",
  "last_attributed_touch_data_tilde_campaign",
  "last_attributed_touch_data_tilde_advertising_partner_name",
  "last_attributed_touch_data_tilde_feature",
  "last_attributed_touch_data_tilde_creative_name",
  "last_attributed_touch_data_plus_web_format",
  "last_attributed_touch_data_tilde_creative_id",
  "last_attributed_touch_data_tilde_ad_name",
  "last_attributed_touch_data_tilde_ad_id",
  "last_attributed_touch_data_tilde_campaign_id",
  "last_attributed_touch_data_tilde_stage",
  "last_attributed_touch_data_tilde_channel",
  "last_attributed_touch_data_tilde_ad_set_name",
  "last_attributed_touch_data_tilde_ad_set_id",
]
```
Last CTA view information:
```
[
  "last_cta_view_data_tilde_ad_name",
  "last_cta_view_data_tilde_secondary_publisher",
  "last_cta_view_data_tilde_campaign",
  "last_cta_view_data_tilde_advertising_partner_name",
  "last_cta_view_data_tilde_feature",
  "last_cta_view_data_tilde_ad_set_name",
  "last_cta_view_data_tilde_ad_set_id",
  "last_cta_view_data_tilde_campaign_id",
  "last_cta_view_data_tilde_creative_name",
  "last_cta_view_data_tilde_creative_id",
  "last_cta_view_data_plus_via_features",
  "last_cta_view_data_dollar_3p",
  "last_cta_view_data_tilde_tags",
  "last_cta_view_data_plus_web_format",
  "last_cta_view_data_tilde_channel",
  "last_cta_view_data_tilde_ad_id",
  "last_cta_view_data_tilde_stage"
]
```
Other:
```
[
  "days_from_last_attributed_touch_to_event",
  "days_from_last_cta_view_to_event",
  "event_data_product_categories",
  "first_event_for_user",
]
```

<notranslate>**filters**</notranslate>
 <notranslate>_description_</notranslate>: An object where each key is a valid "dimension", and each value is an array of string values. If a key is prefixed with a '!', then any event with a dimension value contained in the value of that key is excluded. Otherwise, only events with dimension values matching the filter will be counted.
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: body
 <notranslate>_format_</notranslate>: Object<String, Array<String>>, For example, a query with filters specified as:
```
{
  "filters": {
    "last_attributed_touch_data_plus_current_feature": [
      "MOBILE_DEEPVIEWS",
      "DESKTOP_DEEPVIEWS"
    ],
    "!user_data_os": [ "iOS" ]
  }
}
```
would count only events where
  - last_attributed_touch_data_plus_current_feature was equal to "MOBILE_DEEPVIEWS" or "DESKTOP_DEEPVIEWS"
 <notranslate>_and_</notranslate>

  - user_data_os was **not** equal to "iOS"
 <notranslate>_possible keys_</notranslate>: See "dimensions" definition for valid key values. Any key may also be used with a "!" prefix

### Result formatting

<notranslate>**granularity**</notranslate>
 <notranslate>_description_</notranslate>: Range of time to roll multiple events into a single result count. Eg, with a value of "day" the counts for each day are returned independently, where "all" would return a single count for the entire time range.
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: body
 <notranslate>_default value_</notranslate>: "all"
 <notranslate>_format_</notranslate>: string
 <notranslate>_possible values_</notranslate>:
```
[
  "all",
  "day"
]
```

<notranslate>**ordered_by**</notranslate>
 <notranslate>_description_</notranslate>: Which key of result to sort results on. Only supports 1 sort key
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: body
 <notranslate>_default value_</notranslate>: value of query "aggregation" property, or "total_count" if not defined
 <notranslate>_format_</notranslate>: string
 <notranslate>_possible values_</notranslate>: Any element of query "dimensions" or the value of "aggregation" in the query

<notranslate>**ordered**</notranslate>
 <notranslate>_description_</notranslate>: Which direction to order the results
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: body
 <notranslate>_default value_</notranslate>: "descending""
 <notranslate>_format_</notranslate>: string
 <notranslate>_possible values_</notranslate>:
```
[
  "ascending",
  "descending"
]
```

**A note on sorts and the ordered_by parameter:**

It is not possible to provide an explicit sort method to the query, so the sort type is chosen automatically based on the value of <notranslate>"ordered_by"</notranslate>. Behavior for comparison of equal values is left undefined, and as such the sort is not considered order stable for identical values.
ordered_by value sort choices:
  - unique_count, total_count, revenue -> numerically sorted
  - timestamp -> chronologically ordered
  - everything else -> lexicographically sorted

<notranslate>**zero_fill**</notranslate>
 <notranslate>_description_</notranslate>: Whether to return result objects where the result count was 0. If set to false, results with count = 0 will be omitted from the response.
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: body
 <notranslate>_default value_</notranslate>: false
 <notranslate>_format_</notranslate>: boolean

<notranslate>**limit**</notranslate>
 <notranslate>_description_</notranslate>: Maximum number of results to return in the response. If granularity is set to day, Branch will pull results up to the limit for each day. So if limit is set to 1000 and 5 days worth of data is queried, with granularity=day, then this API will return up to 5000 results.
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: URL query
 <notranslate>_default value_</notranslate>: 100
 <notranslate>_max value_</notranslate>: 1000
 <notranslate>_format_</notranslate>: integer

<notranslate>**after**</notranslate>
 <notranslate>_description_</notranslate>: A pagination parameter indicating the index of the first result to return in the response. Eg, with 100 results returned, setting "after" to 50 would return elements 51-100
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: URL
 <notranslate>_default value_</notranslate>: 0
 <notranslate>_format_</notranslate>: integer

<notranslate>**query_id**</notranslate>
 <notranslate>_description_</notranslate>: Returned as query parameter on the "paging" object next_url and previous_url. Locks the last event to count for a query, so new events that occur between queries are not added to the results (prevents count change over time)
 <notranslate>_required_</notranslate>: false
 <notranslate>_location_</notranslate>: URL
 <notranslate>_default value_</notranslate>: null
 <notranslate>_format_</notranslate>: string

**Note:** The query id should be treated as ephemeral, and should only be used when retrieving pages of an existing query where the pagination URLs already have query_id set as a query parameter. You should not attempt to change the id between requests or include a query id with a different query request.

## Example Usage

### Installs Per Day Per OS

Basic query for pulling installs per day, split by OS of the device the user installed on, limited to 5 results:

```
curl -X POST -H "Content-Type: application/json" -d '{
  "branch_key":"<YOUR_BRANCH_KEY>",
  "branch_secret":"<YOUR_BRANCH_SECRET>",
  "start_date": "2017-12-12",
  "end_date": "2017-12-18",
  "data_source": "eo_install",
  "dimensions": [
    "user_data_os"
  ],
  "granularity": "day",
  "aggregation": "total_count"
}' "http://api2.branch.io/v1/query/analytics?limit=5"
```

Example results:

```
{
  "results": [
    {
      "result": {
        "user_data_os": "ANDROID",
        "total_count": 144
      },
      "timestamp": "2017-12-18T00:00:00.000Z"
    },
    {
      "result": {
        "user_data_os": "IOS",
        "total_count": 142
      },
      "timestamp": "2017-12-18T00:00:00.000Z"
    },
    {
      "result": {
        "user_data_os": "IOS",
        "total_count": 191
      },
      "timestamp": "2017-12-17T00:00:00.000Z"
    },
    {
      "result": {
        "user_data_os": "ANDROID",
        "total_count": 194
      },
      "timestamp": "2017-12-17T00:00:00.000Z"
    },
    {
      "result": {
        "user_data_os": "ANDROID",
        "total_count": 246
      },
      "timestamp": "2017-12-16T00:00:00.000Z"
    }
  ],
  "paging": {
    "next_url": "/v1/query/analytics?query_id=CqdBOb&limit=5&after=5",
    "total_count": 14
  }
}
```

### Unique Click Counts Per Channel/Campaign/Feature

More complex query for pulling unique click counts, split by the last touch channel, campaign, feature and the +via_current_features values.

Has a filter specified to filter out any clicks where last_attributed_touch_data_plus_current_feature was MOBILE_DEEPVIEWS or DESKTOP_DEEPVIEWS.

A maximum of 5 results should be returned, in descending order of unique_count, with days that had 0 clicks returned (not filtered out):

```
curl -X POST -H "Content-Type: application/json" -d '{
  "branch_key":"<YOUR_BRANCH_KEY>",
  "branch_secret":"<YOUR_BRANCH_SECRET>",
  "start_date": "2017-12-12",
  "end_date": "2017-12-18",
  "data_source": "eo_click",
  "dimensions": [
    "last_attributed_touch_data_tilde_feature",
    "last_attributed_touch_data_tilde_channel",
    "last_attributed_touch_data_tilde_campaign",
    "last_attributed_touch_data_plus_current_feature"
  ],
  "filters": {
    "!last_attributed_touch_data_plus_current_feature": [
      "MOBILE_DEEPVIEWS",
      "DESKTOP_DEEPVIEWS"
    ]
  },
  "ordered": "descending",
  "ordered_by": "unique_count",
  "aggregation": "unique_count",
  "zero_fill": true
}' "http://api2.branch.io/v1/query/analytics?limit=5"
```

Example Results:

```
{
  "results": [
    {
      "timestamp": "2017-12-12T00:00:00.000Z",
      "result": {
        "last_attributed_touch_data_tilde_channel": "ads",
        "last_attributed_touch_data_tilde_campaign": "Xmas",
        "last_attributed_touch_data_tilde_feature": "paid advertising",
        "last_attributed_touch_data_plus_current_feature": "ADS",
        "unique_count": 750
      }
    },
    {
      "timestamp": "2017-12-12T00:00:00.000Z",
      "result": {
        "last_attributed_touch_data_tilde_channel": "taptica#1",
        "last_attributed_touch_data_tilde_campaign": "taptica#1",
        "last_attributed_touch_data_tilde_feature": "paid advertising",
        "last_attributed_touch_data_plus_current_feature": "ADS",
        "unique_count": 723
      }
    },
    {
      "timestamp": "2017-12-12T00:00:00.000Z",
      "result": {
        "last_attributed_touch_data_tilde_channel": "Journeys",
        "last_attributed_touch_data_tilde_campaign": "Default Banner",
        "last_attributed_touch_data_tilde_feature": "journeys",
        "last_attributed_touch_data_plus_current_feature": "MOBILE_JOURNEYS",
        "unique_count": 553
      }
    },
    {
      "timestamp": "2017-12-12T00:00:00.000Z",
      "result": {
        "last_attributed_touch_data_tilde_channel": "Apple App Store",
        "last_attributed_touch_data_tilde_campaign": null,
        "last_attributed_touch_data_tilde_feature": "paid advertising",
        "last_attributed_touch_data_plus_current_feature": "ADS",
        "unique_count": 432
      }
    },
    {
      "timestamp": "2017-12-12T00:00:00.000Z",
      "result": {
        "last_attributed_touch_data_tilde_channel": null,
        "last_attributed_touch_data_tilde_campaign": null,
        "last_attributed_touch_data_tilde_feature": "marketing",
        "last_attributed_touch_data_plus_current_feature": "QUICK_LINKS",
        "unique_count": 201
      }
    }
  ],
  "paging": {
    "next_url": "/v1/query/analytics?query_id=EDdBOb&limit=5&after=5",
    "total_count": 143
  }
}
```

## Rate Limits

- 5 requests per second
- 20 requests per minute
- 150 requests per hour
