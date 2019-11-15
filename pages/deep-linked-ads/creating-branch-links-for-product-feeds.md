## Overview

A product feed or catalog is essentially an inventory of all your products and contain information like images, prices, descriptions and more. These attributes are used to define each one of your products in a unique way. Your product feed or catalog should reflect your business type, consisting of different attributes that are specific to your products.
Your Branch link ensures your users are taken to the correct product feed or catalog content and when used as part of your dynamic and responsive marketing efforts, they allow you to effectively engage with users who have expressed interest in a wide range of your products across both web and app.

## Prerequisites for Product Feeds

*   Branch SDK
*   Branch Web SDK
*   Deep Link Routing set up in your Branch dashboard
*   Facebook and/or Google Ads integrations enabled in your Branch Dashboard
*   Link per product feed item

**If you want to support routing to your app (not just web) for Google Ads**

*   Universal Links and/or App Links enabled in your iOS and/or Android app

OR

* Branchified Ad Links

## Google Feeds

### Creating Branchified Ad Links

!!! warning "Required for Web + App Routing Only"
    If you want your ads to route to either web or app (if installed), you must complete this section.  If you want your ads to only route to the web, skip this section.

!!! info "Not Necessary if Using Universal Links or App Links"
    If your app supports universal links and/or app links, you do not need to create Branchified Ad links for your product feeds.  Please skip to the next step.

!!! info "No Cross-Domain Redirects"
    Since your product feed items' landing pages must match your display URL and not contain any cross-domain redirects, you cannot put a Branch link directly in that box. However, you can append query parameters to the Final URL in order to pass the required data needed for Branch to route and attribute your users properly.

As each product in your product feed is unique, each requires its own link to ensure the user is not only taken to the correct content, but for Branch to correctly attribute the event.

Creating Branchified ad links for your product feed includes three steps:

- Create a Branch "long link"
- URL encode said Branch long link
- Append the url-encoded Branch long link to your Product Item's landing page URL

**Step 1 - Create a Branch long link**:

1. Start with your base domain.
    1.  e.g. `https://example.app.link`
2. Add your deep link data as query parameters. NOTE: Be sure to URI encode each query parameter.
    2. e.g. `https://example.app.link?product_id=123&category=shoes`
3. Add any [fallback URLs](https://docs.branch.io/links/integrate/#fallback-to-a-specific-url) to ensure proper routing if the app isn't installed.
    3. e.g. `https://example.app.link?product_id=123&category=shoes&$fallback_url=https%3A%2F%2Fbranch.io%2Funiversal-ads%2F`
4. Finally, add the following analytics parameters needed to categorize your data accurately.
    1. [Generic Branch Analytics Parameters](https://docs.branch.io/links/integrate/#analytical-labels)
    2. Google Ads Analytics Parameters:
    <table>
      <tr>
       <td><strong>Parameter</strong>
       </td>
       <td><strong>Value</strong>
       </td>
      </tr>
      <tr>
       <td>$3p
       </td>
       <td>a_google_adwords
       </td>
      </tr>
      <tr>
       <td>~advertising_partner_name
       </td>
       <td>Google Adwords
       </td>
      </tr>
      <tr>
       <td>$one_time_use
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>~branch_ad_format
       </td>
       <td>Cross-Platform Search
       </td>
      </tr>
      <tr>
       <td>~channel
       </td>
       <td>Google Adwords
       </td>
      </tr>
      <tr>
       <td>~feature
       </td>
       <td>paid advertising
       </td>
      </tr>
      <tr>
       <td>~ad_set_id
       </td>
       <td>{adgroupid}
       </td>
      </tr>
      <tr>
       <td>~campaign_id
       </td>
       <td>{campaignid}
       </td>
      </tr>
      <tr>
       <td>~keyword
       </td>
       <td>{keyword}
       </td>
      </tr>
      <tr>
       <td>~placement
       </td>
       <td>{placement}
       </td>
      </tr>
      <tr>
       <td>gclid
       </td>
       <td>{gclid}
       </td>
      </tr>
      <tr>
       <td>lpurl
       </td>
       <td>{lpurl}
       </td>
      </tr>
      <tr>
       <td>$android_deepview
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>$ios_deepview
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>$desktop_deepview
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>$android_passive_deepview
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>$ios_passive_deepview
       </td>
       <td>false
       </td>
      </tr>
    </table>

Your Branch long link for Facebook should look like this:
```
https://example.app.link?product_id=123&category=shoes&$fallback_url=https://branch.io/universal-ads/&$3p=a_facebook&~advertising_partner_name=Facebook&$one_time_use=false&branch_ad_format=App Only&~channel=Facebook&~feature=paid advertising&~campaign={{campaign.name}}&~ad_id={{ad.id}}&~ad_set_id={{ad.set.id}}&~campaign_id={{campaign.id}}
```

Your Branch long link for Google Ads should look like this:
```
https://example.app.link?product_id=123&category=shoes&$fallback_url=https://branch.io/universal-ads/&$3p=a_google_adwords&~advertising_partner_name=Google-Adwords&$one_time_use=false&branch_ad_format=Cross-Platform Search&~channel=Google Adwords&~feature=paid advertising&~ad_set_id={adgroupid}&~campaign_id={campaignid}&~keyword={keyword}&~placement={placement}&~gclid={gclid}&~lpurl={lpurl}&$android_deepview=false&$ios_deepview=false&$desktop_deepview=false&$android_passive_deepview=false&$ios_passive_deepview=false
```
**Step 2 - URL encode your Branch long link**:

1. Leave any "{" or "}" unencoded. This will ensure these valuetrack params are properly filled in by Google.
    1. If you leave the ampersands before the valuetrack parameters unencoded, they will be parsed by the web browser. If you encode the ampersands, the valuetrack parameters will be sent into the app.
2. URL encode the resulting link.

Your ENCODED Branch long link for Facebook should look like this:
```
```

Your ENCODED Branch long link for Google Ads should look like this:
```
```

**Step 3 - Append the URL-encoded Branch long link to your Product Item landing page**:

1. Take your product item's landing page URL and append `&branchify_url=your_encoded_URL`.

Your FINAL Product Item Link should look like this:
```
```

### Creating a Google Feed

The type of feed you create should match the business type you selected when creating your Dynamic remarketing campaign. Use the "Custom" feed only if the other business types don't apply to your products or services.
Please refer to Google’s [Create a feed for your responsive ads](https://support.google.com/google-ads/answer/6053288?hl=en&ref_topic=3180758) for the following:

*   About feeds
*   Get feed templates and specs for your business type
*   Create and upload a new feed
*   Fix problems with your feed

### Placing your Link in the Product Feed

!!! info "Universal Links and/or App Links"
    If you are using Universal links and or App links, include these links in the `link` column instead.

!!! info "Web Routing Only"
    If you want your ads to only route to the web, use your normal product web landing page as usual.

Once you’ve created a Branchified link for each item in your product feed, you need to include these links in your product feed file before uploading it to Facebook or Google Ads.

When creating your product feed, one of the required parameters is the `link` parameter.  The `link` parameter is typically a URL link to merchant's site (website landing page) where you can purchase or learn more about the item.

When using Branchified links - that already contain all of the proper routing given multiple scenarios - you must substitute your website landing page URL with your Branchified link.

### Uploading Your Feed to Google Ads

There are limits to the number of feeds and feed items per account. Learn more [About Google Ads account limits. ](https://support.google.com/google-ads/answer/6372658)

To upload your product feed to Google Ads, please follow Google’s help document on [Create a feed for your responsive ads](https://support.google.com/google-ads/answer/6053288?hl=en&ref_topic=3180758).

If you're a retail business, use the [Google Merchant Center to upload your product feed](https://support.google.com/merchants/answer/188477).

!!! warning "IMPORTANT - MUST COMPLETE"
    You must include the Branch long link you created (before you encoded it) in the **Tracking Template** field of your campaign settings **AFTER** you created your campaign.

To include your Branch long link in the campaign's settings:

1. Once you've created your campaign, go into the campaign's **Settings**.
2. On the **Settings** page, expand the **Campaign URL options** section.
3. In the **Campaign URL options** section, place the Branch long link in the **Tracking Template** field.
4. Click **Save**.
![image](/_assets/img/pages/deep-linked-ads/google/tracking-template.png)

## Facebook Data Feeds

### Creating Branch Links

As each product in your product feed is unique, each requires its own Branch link to ensure the user is not only taken to the correct content, but for Branch to correctly attribute the event.

The best way to create Branch deep links for your product feed is to create a "long link" for each product feed item.

To create a Branch link:

1. Start with your base domain.
  1. e.g. `https://example.app.link`
1. Add your deep link data as query parameters. NOTE: Be sure to URI encode each query parameter.
  1. e.g. `https://example.app.link?product_id=123&category=shoes`
1. Add any fallback URLs to ensure proper routing if the app isn't installed.
  1. e.g. `https://example.app.link?product_id=123&category=shoes&$fallback_url=https%3A%2F%2Fbranch.io%2Funiversal-ads%2F`
1. Finally, add the following analytics parameters needed to categorize your data accurately.
  1. [Generic Branch Analytics Parameters](/links/integrate/#analytical-labels)
  1. Facebook Analytics Parameters:
  <table>
      <tr>
       <td><strong>Parameter</strong>
       </td>
       <td><strong>Value</strong>
       </td>
      </tr>
      <tr>
       <td>$3p
       </td>
       <td>a_facebook
       </td>
      </tr>
      <tr>
       <td>~advertising_partner_name
       </td>
       <td>Facebook
       </td>
      </tr>
      <tr>
       <td>$one_time_use
       </td>
       <td>false
       </td>
      </tr>
      <tr>
       <td>~branch_ad_format
       </td>
       <td>Cross-Platform Display OR App Only
       </td>
      </tr>
      <tr>
       <td>~channel
       </td>
       <td>Facebook
       </td>
      </tr>
      <tr>
       <td>~feature
       </td>
       <td>paid advertising
       </td>
      </tr>
      <tr>
       <td>~campaign
       </td>
       <td>{{campaign.name}}
       </td>
      </tr>
      <tr>
       <td>~ad_id
       </td>
       <td>{{ad.id}}
       </td>
      </tr>
      <tr>
       <td>~ad_set_id
       </td>
       <td>{{adset.id}}
       </td>
      </tr>
      <tr>
       <td>~campaign_id
       </td>
       <td>{{campaign.id}}
       </td>
      </tr>
    </table>

Your final link for Facebook looks like this:
```
https://example.app.link?product_id=123&category=shoes&$fallback_url=https%3A%2F%2Fbranch.io%2Funiversal-ads%2F&%243p=a_facebook&~advertising_partner_name=Facebook&%24one_time_use=false&branch_ad_format=App%20Only&~channel=Facebook&~feature=paid%20advertising&~campaign=%7B%7Bcampaign.name%7D%7D&~ad_id=%7B%7Bad.id%7D%7D&~ad_set_id=%7B%7Bad.set.id%7D%7D&~campaign_id=%7B%7Bcampaign.id%7D%7D
```

### Creating a Facebook Data Feed

There are several different methods to add items to your catalog. One method is to use a data feed, which allows you to add many items to your catalog at once. A data feed is a spreadsheet file where you enter information about your inventory.
Please refer to Facebook’s Ads documentation for the following:

*   [Add Catalog Items with a Data Feed](https://www.facebook.com/business/help/125074381480892)
*   [Use a Data Feed Template](https://www.facebook.com/business/help/1898524300466211)
*   [Data Feed Columns](https://developers.facebook.com/docs/marketing-api/catalog-feed-setup#da-commerce)
*   [Troubleshoot Data Feeds](https://www.facebook.com/business/help/2041876302542944)

### Placing your Link in the Product Feed

Once you’ve created a Branch long link for each item in your product feed, you need to include these links in your product feed file before uploading it to Facebook or Google Ads.

When creating your product feed, one of the required parameters is the `link` parameter.  The `link` parameter is typically a URL link to merchant's site (website landing page) where you can purchase or learn more about the item.

When using Branch long links - that already contain all of the proper routing given multiple scenarios - you must substitute your website landing page URL with your Branch long link.

### Uploading Your Feed to Facebook

We recommend using [Facebook’s Product Feed Debug Tool](https://business.facebook.com/ads/product_feed/debug) to test and debug your Product Feed format. The largest file size accepted by the tool is 50MB.

To upload your product feed to Facebook, please follow Facebook’s help document on [Add Catalog Items with a Data Feed](https://www.facebook.com/business/help/125074381480892).
