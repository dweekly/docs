## Overview

A product feed or catalog is essentially an inventory of all your products and contain information like images, prices, descriptions and more. These attributes are used to define each one of your products in a unique way. Your product feed or catalog should reflect your business type, consisting of different attributes that are specific to your products.

Your Branch link ensures your users are taken to the correct product feed or catalog content and when used as part of your dynamic and responsive marketing efforts, they allow you to effectively engage with users who have expressed interest in a wide range of your products across both web and app.  

## Prerequisites for Product Feeds

*   Deep Link Routing set up in your Branch dashboard
*   Universal Links and/or App Links enabled in your iOS or Android app
*   Facebook and/or Google Ads integrations enabled in your Branch Dashboard

## Facebook Data Feeds

### Creating Branch Links for Facebook Data Feeds

As each product in your product feed is unique, each requires its own Branch link to ensure the user is not only taken to the correct content, but for Branch to correctly attribute the event.

The best way to create Branch deep links for your product feed is to create a ["long link"](https://docs.branch.io/links/integrate/#long-links) for each product feed item.

To create a Branch link:

1. Start with your base domain.
    1.  e.g. `https://example.app.link`
2. Add your deep link data as query parameters. NOTE: Be sure to URI encode each query parameter.
    2. e.g. `https://example.app.link?product_id=123&category=shoes`
3. Add any [fallback URLs](https://docs.branch.io/links/integrate/#fallback-to-a-specific-url) to ensure proper routing if the app isn't installed.
    3. e.g. `https://example.app.link?product_id=123&category=shoes&$fallback_url=https%3A%2F%2Fbranch.io%2Funiversal-ads%2F`
4. Finally, add the following analytics parameters needed to categorize your data accurately.
    1. [Generic Branch Analytics Parameters](https://docs.branch.io/links/integrate/#analytical-labels)
    2. Facebook Analytics Parameters:
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

### Placing your Branch Link in the Facebook Product Feed

Once you’ve created a Branch link for each item in your product feed, you need to include these links in your product feed file before uploading it to Facebook or Google Ads.

When creating your product feed, one of the required parameters is the `link` parameter.  The `link` parameter is typically a URL link to merchant's site (website landing page) where you can purchase or learn more about the item.

When using Branch links - that already contain all of the proper routing given multiple scenarios - you must substitute your website landing page URL with your Branch link.

### Uploading Your Feed to Facebook

We recommend using [Facebook’s Product Feed Debug Tool](https://business.facebook.com/ads/product_feed/debug) to test and debug your Product Feed format. The largest file size accepted by the tool is 50MB.

To upload your product feed to Facebook, please follow Facebook’s help document on [Add Catalog Items with a Data Feed](https://www.facebook.com/business/help/125074381480892).

## Google Feeds

As Google Feeds do not allow third party links as the product link itself, you need to create and add Branch links at the campaign level of your Google Ads campaign.

!!! warning "Web Only vs Web + App Routing"
    Depending on the intended functionality, please follow either the **Web Only Routing** instructions OR the **Web + App Routing** instructions.

### Web Only Routing

If you are running any Web-based (non-UAC) Google Ads campaigns and want to leverage the power of Branch for **desktop and mobile web** conversions, please make sure you complete the following:

* [x] Branch SDK integrated into your app.
* [x] Collect the IDFA on iOS, or the AAID on Android. For specifics, refer to the set up guide for [iOS](/apps/ios/#install-branch) and [Android](/apps/android/#install-branch) respectively.
* [x] Track all necessary events through the SDKs, with instructions [here](#forwarding-events-to-google-ads).
* [x] Have admin access to your Google Ads account; required for generating Link IDs in Google Ads.
* [x] [Branch Web SDK v2.48.0+](/web/integrate/)
* [x] [Measurement of relevant v2 events](/web/integrate/#track-events)
* [x] Requires [Branch Ad link](/deep-linked-ads/google-ads-customization/#create-a-branch-ad-link) in the campaign's **Tracking Template**.

Please follow Google Ads' documentation on how to [set up a Campaign](https://support.google.com/google-ads/answer/6324971?hl=en&ref_topic=3121941).

### Web + App Routing

If you are running any Web-based (non-UAC) Google Ads campaigns and want to leverage the full power of Branch's routing capabilities for **desktop/mobile web conversions AND deep linking into apps via Branch links**, please make sure you also complete the following:

* [x] Branch SDK integrated into your app.
* [x] Collect the IDFA on iOS, or the AAID on Android. For specifics, refer to the set up guide for [iOS](/apps/ios/#install-branch) and [Android](/apps/android/#install-branch) respectively.
* [x] Track all necessary events through the SDKs, with instructions [here](#forwarding-events-to-google-ads).
* [x] Have admin access to your Google Ads account; required for generating Link IDs in Google Ads.
* [x] [Branch Web SDK v2.48.0+](/web/integrate/)
* [x] [Measurement of relevant v2 events](/web/integrate/#track-events)
* [x] Branch Deep Linking enabled via either:
	* [x] Adding `$uri_redirect_mode=1` to link's data.  If app link settings `URI Deep Link Mode` is set to `Intelligent`, then this link key is unnecessary.
* [x] [App links (Android)](/deep-linking/android-app-links/) and/or [Universal Links (iOS)](/deep-linking/universal-links/) as the campaign's **Destination URL**.
* [x] [Branch Ad link](/deep-linked-ads/google-ads-customization/#create-a-branch-ad-link) in the campaign's **Tracking Template**.
* [x] Place your [modified Branch link](#modifying-your-final-url-to-include-your-branch-link-as-a-query-parameter) in the `Final URL` field during Google Ads campaign setup.

### Create a Branch Ad Link

1. Create a Branch Ad link from the [Partner Management page](https://dashboard.branch.io/ads/partner-management)'s `Create Google Ads Link` button under the Google Ads Partner and select `Create Search/Display Link` depending on the type of Google Ads campaign you are running.
![image](/_assets/img/pages/deep-linked-ads/reusable-images/create-link-display.png)
1. Under the Define Section, pick a Link Name for later reference
1. Configure the link with the Ad Format set to **Search** or **Display** and the Ad Partner set to **Google Ads**.
![Create Ad Link](/_assets/img/pages/deep-linked-ads/google-xplatform-display-ads/link-setup.png)
1. Under the Configure Options tab, navigate to the Redirects sub section and ensure that the Web redirect is set to the desired final website promoted by the ad campaign.
![Create Ad Link](/_assets/img/pages/deep-linked-ads/reusable-images/example-link-redirect.png)
1. Under the Analytics Tags sub section additional tags can be set. It is recommended to fill in these fields as they can be used as filters in Branch's Ads Analytics view. To best connect your ad link with your Adwords Campaign:
 	1. Set the `Channel` field to Google Ads
	1. Set the `Campaign` field to the same ad campaign name used in Google Ads
	1. Add a new tag - `~campaign_id` - to the same campaign ID in Google Ads
![Analytics Tags](/_assets/img/pages/deep-linked-ads/reusable-images/adwords-analytics-tags.png)

!!! warning "Analytics Tags"
	In order to line up *impressions*, *clicks* and *cost* with all downstream events, analytics tags must be present on the link and the values must *exactly* match the values in the Ad Network's dashboard.

!!! note "Optional: Deep Link Data"
	You can use this configuration section to specify custom link parameters that will be deep linked into the app after install. These could include a coupon code or a page identifier to route the user. Visit the [Deep Link Routing](/deep-linking/routing/) page to learn more.

#### Modifying your Final URL to Include Your Branch Link as a Query Parameter

!!! note "For Branch Deep Linking into App Only"
	Because the **Final URL** for your campaigns must match your display URL and not contain any cross-domain redirects, you cannot put a Branch link directly in that box. However, you can append query parameters to the Final URL in order to pass the required data needed for Branch to route and attribute your users properly.

1. Copy your Branch Ad Link from the last section and ensure the copied link has the appropriate additional params (~campaign_id, ~ad_set_id, lpurl, etc.) which should be automatically generated on your Branch dashboard.
1. Remove `%24always_deeplink=false` from the Branch link.
1. URL encode the Branch Ad Link you just created, but leave any "{" or "}" unencoded. This will ensure these valuetrack params are properly filled in by Google.  If you leave the ampersands before the valuetrack parameters unencoded, they will be parsed by the web browser.  If you encode the ampersands, the valuetrack parameters will be sent into the app.
1. Append `&branchify_url=`PARTIALLY URL ENCODED BRANCH LINK to your Final URL.

### Create Your Campaign

!!! warning "Campaign Types Supported"
	Please refer to the [Appendix](/deep-linked-ads/google-ads-non-uac/#appendix) for all of the web-based campaign types supported.

Please follow Google Ads help documentation on how to create a new [Google Ads campaign](https://support.google.com/google-ads/answer/6324971?co=ADWORDS.IsAWNCustomer%3Dtrue&oco=0).

!!! tip "Branch Link Placement in Google Ads Campaign"
	During campaign creation, please make sure you place the Branch link in the correct location depending on your desired user outcome.

	- **For Web Routing Only** - place your Branch link in the `Tracking Template` field during Google Ads campaign setup.
	- **For Deep Linking into App if App Installed else Routing to Web** - place your modified Branch Link in the `Final URL` field during Google Ads campaign setup & place your unencoded Branch link in the `Tracking Template` field during Google Ads campaign setup.

For additional information on Google Ads campaigns, please see [Create ads and campaigns](https://support.google.com/google-ads/topic/3119116?hl=en&ref_topic=311907).
