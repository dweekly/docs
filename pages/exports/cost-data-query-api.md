## Overview

The Query API is an HTTP API that can be used for programmatically querying pre-aggregated analytics. It can be used to fetch the same data displayed in your Branch dashboard, without having to access the Dashboard itself.

Please refer to the [Query API](/query-api) for full reference documentation.

## Cost Data

!!! info "BETA ACCESS ONLY"
    Cost data is now available! This feature is in BETA, please submit issues or feedback to [Support](mailto:support@branch.io).

The recommended use of pulling cost data via API is "pull all the cost by partner and campaign". You can attempt to drill down to things like keyword and OS, but you should definitely plan to handle nulls, as the breakdowns provided by partner APIs are not be consistent from partner to partner. If the dashboard returns you zeros for certain cost breakdowns, so will the API.

**Top tips**:

- `Aggregation` must be `cost` (for other dimensions it could be "total_count" or "unique_count" but those are not applicable for cost).

- Cost is always returned in USD, where the exchange rate is stored at the time we retrieve from an API (virtually always the day of the campaign, e.g. we pull data for a campaign that ran Dec 17th 2020 into the Branch system on Dec 17th 2020 and the exchange rate will be the exchange rate on Dec 17th 2020).

- Click & impressions not supported today, coming with new API (2020, time TBD)

- We will only return the parameters available from the ad partner API, so often dimensions will appear "null" for cost. For example, Snap data has virtually no device breakdowns (e.g. OS)

- Supported partners: FB, Google, Snap, Apple.

- Cost data is generally available in Branch within 6-12 hours of being available in the partner API.

- Cost data may change over time as we do accuracy checks against partner APIs up to 30 days before today's date and refresh cost.

### Cost Per Ad Partner/Campaign

```
curl -X POST 'http://api.branch.io/v1/query/analytics' -H 'content-type: application/json' -d '{
  "start_date": "2019-12-06",
  "end_date": "2019-12-11",
  "branch_key": "<branch_live_key>",
  "branch_secret": "<secret_key>,
  "data_source": "cost",
  "dimensions": [
    "last_attributed_touch_data_tilde_advertising_partner_name",
    "last_attributed_touch_data_tilde_campaign"
  ],                      
  "ordered": "descending",
  "aggregation": "cost"
}'
```

Example Results:

```
{
  "results" : [ {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "fb_zeit",
      "cost" : 23636.767182316362,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Facebook"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "google_zeit",
      "cost" : 12475.522455796843,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Google AdWords"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName8",
      "cost" : 202.59,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName1",
      "cost" : 158.07999999999998,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName2",
      "cost" : 158.14,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName0",
      "cost" : 100.65,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName7",
      "cost" : 98.57,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName5",
      "cost" : 98.21000000000001,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName6",
      "cost" : 96.42,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName3",
      "cost" : 55.13,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  }, {
    "timestamp" : "2019-12-01T00:00:00.000-08:00",
    "result" : {
      "last_attributed_touch_data_tilde_campaign" : "CampaignName4",
      "cost" : 53.57,
      "last_attributed_touch_data_tilde_advertising_partner_name" : "Apple Search Ads"
    }
  } ],
  "paging" : {
    "total_count" : 11
  }
}
```
