---
title: Universal Ads Basics
---
This guide will walk you through how to setup your campaigns using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

!!! note "Paid Product"
    Ads is a premium product priced on Monthly Active Users. [Sign up](https://branch.io/universal-ads/) for the Ads product to enable this functionality.

!!! warning "Branch SDK Required"
    Before enabling the partner integration, please make sure you've implemented the [Branch SDK](/resources/native-sdks-and-plugins/) in your application.  This is required to ensure deep linking and attribution. We also highly recommend implementing [event measurement](/apps/v2event/#overview) and passing event metadata to your partner.

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/noname/noname-enable.png)

!!! note "Providing Account Credentials"
	Not all integrations require providing account credentials. When prompted to, enter any credentials that may be required, and click <notranslate>**Save and Enable**</notranslate> in the bottom right hand corner. If you do not know your account credentials for said partner, please ask your ad partner for this information.

![image](/_assets/img/pages/deep-linked-ads/noname/noname-credentials.png)

### Enabling Postbacks

Basic postbacks will automatically be activated for events like _Install_ and _Purchase_ when you enable your ad partner. You can then [add additional postbacks](#adding-more-postbacks), for example, if you wanted to add postbacks for custom events that are specific to your app like _Account Created_. You can also [edit postbacks](#advanced-editing-postbacks) if there's additional data you really need to pass along to your ad partner.

![image](/_assets/img/pages/deep-linked-ads/noname/noname-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

!!! info "Advanced Setup"
    Please refer to our [Advanced Universal Ads](/deep-linked-ads/branch-universal-ads-advanced/) guide for advanced options when enabling a Universal Ads partner.
