## Overview

[Google Ad Manager](https://www.blog.google/technology/ads/new-advertising-brands/) is a comprehensive hosted ad serving platform that streamlines your ad management, whether you deliver ads to websites, mobile webpages, mobile apps, games, or a combination. Ad Manager offers a complete toolkit to manage your ads for a multi-screen audience, including:

*   One **central place** to traffic all of your ad networks, apps, games, and sites.
*   **Advanced forecasting** to give you a better sense of how many impressions you will have available to sell to your direct advertisers.
*   Total **revenue optimization** that allows Google AdSense and Google Ad Exchange to compete against other networks in real-time, so you'll get the most revenue for every ad impression.

### Differences from Google Adsense

The basic differences between Google Ad Manager (ad server) and Google AdSense (ad network):

<table>
  <tr>
   <td><strong> </strong>
   </td>
   <td><strong>Google Ad Manager</strong>
   </td>
   <td><strong>Google AdSense</strong>
   </td>
  </tr>
  <tr>
   <td><strong>You can traffic other ad networks or directly sold ads</strong>
   </td>
   <td><strong>Yes</strong>
   </td>
   <td><strong>No</strong>
   </td>
  </tr>
  <tr>
   <td><strong>You only have to place the tags on your pages to see ads</strong>
   </td>
   <td><strong>Yes, if you allow Google AdSense to show through Ad Manager</strong>
   </td>
   <td><strong>Yes</strong>
   </td>
  </tr>
  <tr>
   <td><strong>You can make Google AdSense compete with other ad networks to maximize your revenue</strong>
   </td>
   <td><strong>Yes</strong>
   </td>
   <td><strong>No</strong>
   </td>
  </tr>
  <tr>
   <td><strong>You can have a consistent reporting among all ad serving activities</strong>
   </td>
   <td><strong>Yes</strong>
   </td>
   <td><strong>No</strong>
   </td>
  </tr>
  <tr>
   <td><strong>You will be paid by Ad Manager / Google AdSense</strong>
   </td>
   <td><strong>No, payments come from your advertisers or ad networks, such as Google AdSense</strong>
   </td>
   <td><strong>Yes</strong>
   </td>
  </tr>
</table>

## Branch Links + Ad Manager Setup

### Create a New Custom Branch Ad Partner

To manually add a custom partner in your Branch dashboard:

1. In the left-hand navigation, under <notranslate>**Channels & Links**</notranslate>, click on <notranslate>**Ads**</notranslate> and then <notranslate>**Partner Management**</notranslate>.
2. On the <notranslate>**Partner Management**</notranslate> page, under <notranslate>**More Ad Partners**</notranslate>, click <notranslate>**Add Custom Partner**</notranslate>.
3. In the <notranslate>**Add New Custom Partner**</notranslate> modal, provide a clearly identifiable name.
4. Click <notranslate>**Save and Enable**</notranslate>.

![image](/_assets/img/pages/deep-linked-ads/google-marketing-platform/google-ad-manager1.png)

### Create a Branch Link

Once you've enabled the integration it's time to create a tracking link.

1. First, select an ad format.
	- For App Install or App Engagement campaigns you'll want to select the <notranslate>**App Only**</notranslate> format.
	- For Search or Display campaigns where the user should go to web if they don't have the app, then you should select <notranslate>**Cross-Platform Search**</notranslate> or <notranslate>**Cross-Platform Display**</notranslate>.
	- <notranslate>**Product Links**</notranslate> are for shopping or dynamic re-marketing campaigns and will take you to create a Deep Linked Product Feed.

![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link.png)

2. At this point you need to name your link. Select something that will make it easy to find if you need it later. Your Ad Format and Ad Partner should be selected already, but feel free to choose one if they aren't. It's important that you select the right Ad Partner for analytics later on. Click <notranslate>**Configure Options**</notranslate> to continue.

![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link-name.png)

3. This is your chance to add deep link data and analytics tags. Analytics tags are important for later segmentation, so click the <notranslate>**Analytics**</notranslate> sub tab to add a Channel and Campaign value.

<notranslate>**Set Analytics tags**</notranslate>

It's easier to slice your data in our analytics platform if you properly assign analytics parameters to your link.

- <notranslate>**Channels**</notranslate>: generally correspond to Ad Networks Name
- <notranslate>**Campaigns**</notranslate>: correspond to marketing initiatives that you're launching.
- <notranslate>**Tags**</notranslate>: Use it to organize your link data with labels that don't fit within the bounds of the above.

For example: <notranslate>**Channel**</notranslate>: "YouTube", <notranslate>**Campaign**</notranslate>: "Summer 2017 Shoe" <notranslate>**Tag**</notranslate>: “Discount”.

<notranslate>**Links Created by Agency Users**</notranslate>

When an Agency users saves an ad link/Journey/Quick Link, that ad link/Journey/Quick Link is associated with that Agency via a unique agency_id that is included as a key-value in deep linking setup.

4. Click <notranslate>**Create Link Now**</notranslate>, and you have your tracking link!

![alt_text](/_assets/img/pages/deep-linked-ads/branch-universal-ads/create-link-completed.png)

Take the Branch link and give it to your Ad Manager 360 Technical Account Manager or paste it into the tracking section of your campaign yourself.

### Append Macros

You can append macros to your Branch Link that will be tracked with Branch and Google Ad Manager. Branch supports the following Campaign specific parameters:

<table>
  <tr>
   <td>Branch Parameter
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>~agency
   </td>
   <td>Agency name
   </td>
  </tr>
  <tr>
   <td>~secondary_publisher
   </td>
   <td>Sub Publisher
   </td>
  </tr>
  <tr>
   <td>~campaign
   </td>
   <td>Campaign name
   </td>
  </tr>
  <tr>
   <td>~campaign_id
   </td>
   <td>Campaign ID
   </td>
  </tr>
  <tr>
   <td>~channel
   </td>
   <td>Channel
   </td>
  </tr>
  <tr>
   <td>~feature
   </td>
   <td>Feature
   </td>
  </tr>
  <tr>
   <td>~stage
   </td>
   <td>Stage
   </td>
  </tr>
  <tr>
   <td>~tags
   </td>
   <td>Tags
   </td>
  </tr>
  <tr>
   <td>~creative_name
   </td>
   <td>Creative name
   </td>
  </tr>
  <tr>
   <td>~creative_id
   </td>
   <td>Creative ID
   </td>
  </tr>
  <tr>
   <td>~ad_set_name
   </td>
   <td>Ad set name
   </td>
  </tr>
  <tr>
   <td>~ad_set_id
   </td>
   <td>Ad set ID
   </td>
  </tr>
  <tr>
   <td>~ad_name
   </td>
   <td>Ad unit name
   </td>
  </tr>
  <tr>
   <td>~ad_id
   </td>
   <td>Ad unit ID
   </td>
  </tr>
  <tr>
   <td>~banner_dimensions
   </td>
   <td>Banner Dimension
   </td>
  </tr>
  <tr>
   <td>~placement
   </td>
   <td>Placement
   </td>
  </tr>
  <tr>
   <td>~keyword_id
   </td>
   <td>Keyword ID
   </td>
  </tr>
  <tr>
   <td>~keyword_text
   </td>
   <td>Keyword Text
   </td>
  </tr>
</table>

### Google Ad Manager Verification

In Google Ad Manager make sure to replace Branch Campaign Macros with the related Google Ad Manager Macros listed [here](https://support.google.com/admanager/answer/2376981?hl=en).

!!! info "Important notes about Google Ad Manager macros"
	*   Macros are case-sensitive. Use `%%CACHEBUSTER%%`, not `%%Cachebuster%%`.
	*   Unescaped and escaped macro versions expand differently. [Learn more](https://support.google.com/admanager/answer/6081628)
	*   Ad Manager inserts macros automatically for [third-party creatives](https://support.google.com/admanager/answer/1746123) or VAST tag URLs if Ad Manager recognizes the third party. For [custom creatives](https://support.google.com/admanager/answer/3180782) and [creative templates](https://support.google.com/admanager/answer/1138308), you need to add the macros manually. If you are unsure where to place a macro, contact your creative vendor.

After all modifications are done, input the Branch ad links into the related Ad Creative fields in Ad Manager 360:

1. <notranslate>**Click-through URL**</notranslate>
2. <notranslate>**Third-party impression tracking URLs (optional)**</notranslate>

Make sure to hit the <notranslate>**TEST**</notranslate> Button and verify the links are working before pushing the campaign live.

![image](/_assets/img/pages/deep-linked-ads/google-marketing-platform/google-ad-manager2.png)
