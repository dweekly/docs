## Overview

![Iterable](https://cdn.branch.io/branch-assets/ad-partner-manager/386574786681131050/Iterable-1571449180903.png)

This guide will walk you through how to send your Branch data to **[Iterable](https://iterable.com/)** using Branch Data Integration.

{! ingredients/deep-linked-ads/overview-steps.md !}

## Setup

{! ingredients/data-integrations/integrate-branch-sdk.md !}

{! ingredients/data-integrations/enable-partner.md !}

{! ingredients/data-integrations/add-credentials.md !}

Please refer to [Iterable's documentation](https://support.iterable.com/hc/en-us) if you need instructions on how to find the values required to enable the integration.

### What Branch sends to Iterable

!!! warning "IMPORTANT"
	To be able to match events with your users - you must send a client's email as the <notranslate>**User Identity**</notranslate> to Branch:

	**iOS**: https://docs.branch.io/apps/ios/#track-users

	**Android**: https://docs.branch.io/apps/android/#track-users

* Installs
* Opens
* Commerce Events
* Custom Events

## Advanced

{! ingredients/data-integrations/reset-di-settings.md !}
