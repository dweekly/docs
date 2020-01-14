## Overview

![DoubleClick](https://cdn.branch.io/branch-assets/ad-partner-manager/386574786681131050/dc_newlogo-1528503421215.png)

Track your **[Doubleclick](https://doubleclick.com)** campaigns using Branch's Universal Ads product. Branch's Ad Product will enable you to update your Doubleclick Campaign Manager (DCM) campaigns with deep links that send data back to Doubleclick's servers.

!!! info
	DoubleClick supports tracking links, and is also a self-attributing network with limited data in the response. Follow the relevant setup guide for the behavior you would like to see. Where possible, we recommend setting up *both* implementations for complete coverage, so data appears in Branch, the ad partner, and DoubleClick.

	Setup 1: You can see conversion data in *DoubleClick Campaign Manager* without using any tracking links by setting up Floodlight tags. DoubleClick will be notified of all conversions.

	Setup 2: You can see conversion data in the *Branch* dashboard by using tracking links for the ad network you are running ads with. Postbacks will be sent to the ad network.

## Setup 1: Seeing data in DoubleClick

### Doubleclick Campaign Manager Set Up

Before we start anything on the Branch side, we need to configure options on the DCM side. Start by heading to your DCM dashboard, and navigating to the advertisers section.

#### Grab Advertiser ID

First, we'll need to grab the advertiser ID. Select the advertiser you want to track with, and grab the Advertiser ID. In this example, it is 6637276. This is the advertiser you will track campaigns with. Please keep note of it.

![image](/_assets/img/pages/deep-linked-ads/doubleclick/advertiser.png)

#### Grab Server to Server Token

Once you've captured the advertiser ID and selected the advertiser, navigate to <notranslate>**Floodlight Configuration**</notranslate>. From there, go to "server to server", and make sure "in-app attribution tracking" is check-marked. Click new token, call it “Branch token”, and save it. Copy this value, as well.

![image](/_assets/img/pages/deep-linked-ads/doubleclick/server-token.png)

Now that you have <notranslate>**Advertiser ID**</notranslate> and <notranslate>**Server to Server Token**</notranslate>, the last step is to find the events you need to track.

#### Grab Tags for Events

Go to the <notranslate>**Floodlight activities**</notranslate> tab. For all the events you want to track, grab the <notranslate>**Activity tag String**</notranslate> and <notranslate>**Group tag String**</notranslate>.

![image](/_assets/img/pages/deep-linked-ads/doubleclick/cat-type.png)

In the above screenshot, the two values for <notranslate>**Activity tag String**</notranslate> are *act-ios* and *act-android*. The one value for <notranslate>**Group tag String**</notranslate> is *sales*. Do this for all activities you want to track.

Once you're done with this exercise, you should have at least 4 unique values:

- Server to Server token
- Advertiser ID
- Activity tag String (per event)
- Group tag String (per event)

### Branch Dashboard Setup

Let's take these values and place them in Branch's dashboard. Begin by navigating to the [partners page](https://dashboard.branch.io/ads/partner-management/a_doubleclick).

#### Enable

Find DoubleClick in the search box. Hit enable. In the <notranslate>**Account Settings**</notranslate> tab, insert your <notranslate>**Server to Server token**</notranslate>.

#### Map Events

At this point, you have enabled Branch to communicate with Doubleclick. Now we need to map Branch events to <notranslate>**Floodlight Activities**</notranslate> found on the Doubleclick dashboard.

1. Click the <notranslate>**Postback Config**</notranslate> tab.
1. Set <notranslate>*Send Postbacks For*</notranslate> to <notranslate>**All Events**</notranslate>
1. You should see a URL for the event <notranslate>**Install**</notranslate>. For demonstration purposes, we will assume you have a corresponding Install event on the Doubleclick dashboard, but this applies to any event you add.
1. Start by grabbing your <notranslate>**Advertiser ID**</notranslate>, <notranslate>**Activity tag String**</notranslate>, and <notranslate>**Group tag String**</notranslate>.

In the screenshot above, we have two events, "In App Activations - Android", and "In App Activations - iOS", which correspond to the Branch Install event. For this example, the <notranslate>**Activity tag Strings**</notranslate> are *act-and* and *act-ios*. The <notranslate>**Group tag String**</notranslate> is *sales*.

Copy the existing URL in Install, and replace the <notranslate>*src*</notranslate>, <notranslate>*cat*</notranslate>, and <notranslate>*type*</notranslate> variables. The "cat" example below has conditional iOS and Android information.

Your end result should look exactly like this, where there are different cat tags for iOS and Android.

`https://ad.doubleclick.net/ddm/s2s/appactivity/src=6637276;cat=<#if user_data.os=="IOS">act-ios</#if><#if user_data.os=="ANDROID">act-and</#if>;type=sales;ord=${ (id)! }`

If you don't have two different tags for iOS and Android, then it will look simpler:

`https://ad.doubleclick.net/ddm/s2s/appactivity/src=6637276;cat=act-tag;type=sales;ord=${ (id)! }`

![image](/_assets/img/pages/deep-linked-ads/doubleclick/final-postback-doubleclick.png)

## Setup 2: Seeing data in Branch, postbacks to ad partners

### Create ad link

If you're looking to see data in the Branch dashboard and postback to ad partners, create an ad link for the relevant partner.

For example, if you're running a campaign on Pandora via DoubleClick, follow the [instructions for enabling Pandora and creating a Pandora link](/deep-linked-ads/pandora-mobile-tracking/), then use that link in the click tracking URL field of your DCM creative tag.

!!! warning
	If a placement's "click" is handled *server-side* by a specific publisher and there is *no [device ID macro]*(/deep-linked-ads/branch-universal-ads-mobile-tracking/#device-information), Branch will record clicks but not attribute downstream events in Branch's dashboard (client-side clicks will attribute downstream events in Branch's dashboard). Clicks with a device ID macro or client-side handling will attribute downstream events in Branch. Please contact integrations@branch.io or contact your Account Manager for details on specific networks before implementation.
