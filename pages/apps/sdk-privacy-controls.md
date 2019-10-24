## Overview

What. We take our customers’ privacy very seriously. To enable our customers to honor opt-out requests from their end-users or comply with laws that allow end users to restrict processing of their data, we provide mechanisms for disabling certain data collection features, which are identified below. This way, if a user indicates that they want to limit collection of their data on your app or website, or if you otherwise determine that a particular end user’s should not be collected or otherwise processed, you can continue to make use of the Branch’s SDK (e.g. for creating and sharing Branch links) while not tracking that end user.

Why? You can learn more about the types of data that we need to collect through our services here: https://branch.io/policies/#privacy. We collect limited device information to power our deep linking technology and to provide attribution and analytics services. However, we understand that some end-users would like to opt out of this data processing; and, in other cases, the law (or Branch’s policies) do not permit that certain types of personal data for certain end users be provided to Branch (for example, data relating to children under the age of 13). For these reasons, we make available to our customers the SDK Privacy Controls feature.

How It Works. Through the Branch SDK Privacy Controls, a app or website customer can request that Branch cease certain personal data processing for a particular end-user. When the SDK Privacy Controls are enabled for a particular end-user, it is still possible for that user to generate and share Branch links. Additionally, basic deep linking to route the end user to the right place will still continue to work. However, since all data collection for that end user must cease to honor the opt out request, further end user engagement activities (e.g. has visited the app, completed event) must occur without passing any identifiable user information on to Branch. As a result, these end users will no longer benefit from the seamless customer journeys Branch helps you build with cross-platform engagement data.

!!! info "End-User Opt Out"
	If you are an end user looking to opt out of the Branch Services, please visit [Branch’s Opt-Out](https://branch.app.link/optout) page for available methods.

## Enabling / Disabling SDK Privacy Controls

If you would like to enable the SDK Privacy Controls for a particular user (for example, pursuant to a data subject request, or to comply with certain privacy laws), utilize this field to prevent Branch from sending network requests.

By default, tracking is enabled (opt-in).

### Android SDK

```
Branch.getInstance().disableTracking(true);
```
### iOS SDK

```
Branch.setTrackingDisabled(true)
```
### Web SDK

**NOTE**: This state is persistent, meaning that it’s saved for the user across browser sessions for the web site. This setting can also be enabled across all users for a particular link, or across your Branch links.

```
branch.init( 'BRANCH_KEY',
    {
        ‘tracking_disabled’ : true
    }
);
```

!!! info "Impact on Journeys"
	To learn how these privacy controls impact our Journey’s product, please see [Journeys & GDPR](https://docs.branch.io/web/journeys/#journeys-and-gdpr).
