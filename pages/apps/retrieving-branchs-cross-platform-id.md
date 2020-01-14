## Overview

Branch Cross-Platform ID exposes a series of fields representing app-scoped, anonymous, cross-platform identifiers you can use to stitch together events for multi-touch attribution, user journeys for state-of-the-art UX, and many other use cases.

Cross-Platform ID will be consistent across Branch touchpoints if we think those touchpoints are emitted by the same user.


!!! warning "Paid Feature"
    Cross-Platform ID is a paid product that is currently only available to Branch’s Enterprise customers. The methods described below are only available as part of the paid Cross-Platform ID product.


## Fields

- <notranslate>**user_data_cross_platform_id**</notranslate>: string, Branch’s internal Persona ID hashed by app_id
- <notranslate>**user_data_past_cross_platform_ids**</notranslate>: array of strings, which are past Cross-Platform IDs
- <notranslate>**user_data_prob_cross_platform_ids**</notranslate>: array of dicts. Each dict represents a probabilistically linked Cross-Platform ID, along with a score/probability representing how confident Branch is that this ID is associated with the main Cross-Platform ID for this event.

## Retrieving CPID via Daily Export API and UI

We have already added three new columns to the [Daily Export](https://docs.branch.io/exports/daily-exports/) CSVs accessible through the [Daily Export API](https://docs.branch.io/exports/daily-exports/#access-via-api) or [Daily Export UI](https://docs.branch.io/exports/daily-exports/#access-via-branch-dashboard).

These fields will start to populate once you have access to the Cross-Platform ID product. Backfilling of historical data pre-access is not supported.

Here is an example row, with strings truncated for readability.

| user_data_cross_platform_id | user_data_past_cross_platform_ids | user_data_prob_cross_platform_ids |
| --- | --- | --- |
| `…6c7f3` | `["…0d8d","…82cbf","…67321","…0fc16","…e328f"]` | `[{"id":"...c7510","probability":0.9092076420783997}]` |


## Retrieving CPID via Webhooks

The three Cross-Platform ID fields are accessible via Freemarker in our Custom Webhooks interface as well.

| Field Name | Postback Macro | Type | Sample Usage |
| --- | --- | --- | --- |
| `user_data_cross_platform_id` | `${(user_data.cross_platform_id)!}` | String | `cpid=${(user_data.cross_platform_id)!}` |
| `user_data_past_cross_platform_ids` | `${(user_data.past_cross_platform_ids)!}` | Array | `past_cpids=<@loop data=user_data.past_cross_platform_ids>${key}=${(val)!}<@sep>&</@sep></@loop>` |
| `user_data_prob_cross_platform_ids` | `${(user_data.prob_cross_platform_ids)!}` | Array of Dicts | `prob_cpids=<@urlencode><@jsonmap><@loop data=user_data.past_cross_platform_ids>\"${key}\":\"${(val)!}\"<@sep>,</@sep></@loop></@jsonmap></@urlencode>` |


## SDK Querying

Branch includes SDK methods to allow retrieval of our Cross Platform ID (CPID) from the client. This results in an asynchronous call being made to Branch’s servers with CPID data returned when possible.

By using the CPID SDK querying, the three Cross-Platform ID fields described above will be returned to the client.


### Android

```java
Branch.getInstance().getCrossPlatformIds(new BranchCrossPlatformIdListener() {

  @Override
  public void onDataFetched(BranchCPID branchCPID, BranchError error) {
      branchCPID.getCrossPlatformID();
      branchCPID.getPastCrossPlatformIds();
      branchCPID.getDeveloperIdentity();
      branchCPID.getProbabilisticCrossPlatformIds();
  }
});
```

### iOS

```objective-c
[[Branch getInstance] crossPlatformIdDataWithCompletion:^(BranchCrossPlatformID *cpid) {
   // NSString *
   cpid.crossPlatformID;
   // NSArray<NSString *> *
   cpid.pastCrossPlatformIDs;
   // NSArray<BranchProbabilisticCrossPlatformID *> *
   cpid.probabiliticCrossPlatformIDs;

   for (BranchProbabilisticCrossPlatformID *probID in cpid.probabiliticCrossPlatformIDs) {
       // NSString *
       probID.crossPlatformID;
       // NSNumber *
       probID.score;
   }
}];
```

### Web

```html
branch.crossPlatformIds(
      callback (err, data)
);
/*
`data` will be of the form:
{
      "cross_platform_id":"",
      "past_cross_platform_ids":[],
      "prob_cross_platform_ids":[],
      "developer_identity":""
}
*/
```
