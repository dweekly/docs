## Overview

![Pinterest](https://cdn.branch.io/branch-assets/ad-partner-manager/388787843096400122/pinterest-1539022582075.png)

This guide will walk you through how to setup your campaigns with **[Pinterest](https://www.pinterest.com/)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

### Enable the integration

1. Visit the [Ads page](https://dashboard.branch.io/ads) on the Branch dashboard.
2. Select [Partner Management](https://dashboard.branch.io/ads/partner-management) from the sidebar.
3. Search for <notranslate>**Pinterest**</notranslate> and click <notranslate>**Enable**</notranslate>.

![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-enable.png)

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-postbacks.png)

### Create an ad link

Once you've enabled an integration it's time to create a tracking link.

1. First click <notranslate>**Create Ad Link**</notranslate> and select an ad format. For App Install or App Engagement campaigns you'll want to select the <notranslate>**App Only**</notranslate> format. For campaigns where the user should go to web if they don't have the app, then you should select <notranslate>**Cross-Platform Search**</notranslate> or <notranslate>**Cross-Platform Display**</notranslate>. <notranslate>**Product Links**</notranslate> are for shopping or dynamic re-marketing campaigns and will take you to create a Deep Linked Product Feed.

    ![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link.png)

1. At this point you need to name your link. Select something that will make it easy to find if you need it later. Your Ad Format and Ad Partner should be selected already, but feel free to choose one if they aren't. It's important that you select the right Ad Partner for analytics later on. Click <notranslate>**Configure Options**</notranslate> to continue.

    ![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link-name.png)

1. This is your chance to add deep link data and analytics tags. Analytics tags are important for later segmentation, so click the <notranslate>**Analytics**</notranslate> sub tab to add a Channel and Campaign value.

    ![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link-tags.png)

    !!! tip "Set Analytics tags"

        It's easier to slice your data in our analytics platform if you properly assign analytics parameters to your link. <notranslate>_Channels_</notranslate> generally correspond to ad networks, and <notranslate>_Campaigns_</notranslate> correspond to marketing initiatives that you're launching. For example: <notranslate>_Channel_</notranslate>: "YouTube", <notranslate>_Campaign_</notranslate>: "Summer 2017 Shoe Discounts."

    !!! info "Links Created by Agency Users"
        When an Agency user saves an ad link/Journey/Quick Link, that ad link/Journey/Quick Link is associated with that Agency via a unique agency_id that is included as a key-value in deep linking setup.


1. Click <notranslate>**Create Link Now**</notranslate>, and you have your tracking link!

    ![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link-completed.png)

1. When creating your Pinterest ad campaign, make sure to:

	1. Use a direct link to the Apple Store or Google Play Store in the <notranslate>**Destination URL**</notranslate> field.
	2. Remove `$idfa_sha1={sha1_advertising_id}` from your Branch Link if your Destination URL goes to the Google Play Store.
	3. Remove `$aaid_sha1={sha1_advertising_id}` from your Branch Link if your Destination URL goes to the Apple Store.
	4. Place your Branch link in the <notranslate>**Click Tracking URL**</notranslate>.
  5. Avoid using the <notranslate>**View Tracking URL**</notranslate>  until further notice.

	![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-links.png)

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

{! ingredients/deep-linked-ads/people-based-attribution.md !}

{! ingredients/deep-linked-ads/view-through-attribution.md !}

{! ingredients/deep-linked-ads/granting-partner-access.md !}

## Advanced

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/edit-postbacks.md !}

{! ingredients/deep-linked-ads/tracking-link-params.md !}

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/reset-ad-settings.md !}

{! ingredients/deep-linked-ads/support.md !}
