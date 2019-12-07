## Overview

![Amazon](https://cdn.branch.io/branch-assets/ad-partner-manager/adnetwork_logos/amazon.png)

This guide will walk you through how to setup your campaigns with **[Amazon](https://advertising.amazon.com/products/display-ads)** using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

!!! info "Fire OS Support"
	Please implement the Branch SDK for Android [4.1.1](/version-histories/android-version-history/#v411) to ensure support for Fire OS devices.

{! ingredients/deep-linked-ads/integrate-branch-sdk.md !}

{! ingredients/deep-linked-ads/conversion-events-tracking.md !}

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/amazon/amazon-enable.png)

{! ingredients/deep-linked-ads/add-credentials.md !}

{! ingredients/deep-linked-ads/enable-partner-tip.md !}

![image](/_assets/img/pages/deep-linked-ads/amazon/amazon-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

!!! warning "Platform-specific Ad Links"
	Create separate links to track campaigns for Fire TV devices vs Tablet devices. Make sure to  append the following mandatory key-values for tracking ad links on Amazon Fire Tablet/TV Devices:

	- **Fire Tablet**: %24os=AMAZON_FIRE
	- **Fire TV**: %24os=AMAZON_FIRE_TV

	Implement these links for platform-specific Fire OS ad campaigns on the Amazon Advertising platform.

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
mnh
