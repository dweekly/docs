## Overview

![Beeswax](https://cdn.branch.io/branch-assets/ad-partner-manager/adnetwork_logos/bees.png)

This guide will walk you through how to setup your campaigns with **[Beeswax](http://www.beeswax.com)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/beeswax/beeswax-enable.png)

{! ingredients/deep-linked-ads/add-credentials.md !}

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/beeswax/beeswax-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

!!! warning "GDPR Compliance"
	In order to comply with GDPR in EU countries, the SHA1 version of the User ID macro `{{USER_ID_SHA1}}` must be passed the Beeswax Tracking Links. Please ensure that the hashed User ID macro updated for campaigns running in the EU as specified  below:

	Non-EU compliant Campaign:
	```
	https://branchster.app.link/p6w7O3Wyw2?%243p=a_beeswax&*USER_ID={{USER_ID}}&~click_id={{AUCTION_ID}}
	```

	EU compliant campaign:
	```
	https://branchster.app.link/p6w7O3Wyw2?%243p=a_beeswax&*USER_ID={{USER_ID_SHA1}}&~click_id={{AUCTION_ID}}
	```

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
