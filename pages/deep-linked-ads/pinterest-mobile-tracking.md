## Overview

![Pinterest](https://cdn.branch.io/branch-assets/ad-partner-manager/388787843096400122/pinterest-1539022582075.png)

This guide will walk you through how to setup your campaigns with **[Pinterest](https://www.pinterest.com/)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-enable.png)

{! ingredients/deep-linked-ads/add-credentials.md !}

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

!!! warning "Platform Specific Links"
	It's important to create platform specific tracking links by adding a platform specific macro to the tracking link itself.

	![image](/_assets/img/pages/deep-linked-ads/pinterest/pinterest-links.png)

	Make sure that you are using a direct link to the Apple Store or Google Play Store in the **Destination URL** field.

	Add the following URL parameter to iOS/Android links:

	- **iOS**: `$idfa_sha1={sha1_advertising_id}`

	- **Android**: `$aaid_sha1={sha1_advertising_id}`

	**NOTE**: if you are using TUNE links - please remove `$`

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

{! ingredients/deep-linked-ads/people-based-attribution.md !}

{! ingredients/deep-linked-ads/view-through-attribution.md !}

{! ingredients/deep-linked-ads/granting-partner-access.md !}

## Advanced

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/whitelist-ip.md !}

{! ingredients/deep-linked-ads/edit-postbacks.md !}

{! ingredients/deep-linked-ads/tracking-link-params.md !}

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/reset-ad-settings.md !}

{! ingredients/deep-linked-ads/support.md !}
