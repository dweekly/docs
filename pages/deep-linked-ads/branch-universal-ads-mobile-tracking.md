## Basics

This guide will walk you through how to setup your campaigns using Branch Universal Ads and track ad conversions across **every device, platform, and channel**.

!!! note "Paid Product"
    Ads is a premium product priced on Monthly Active Users. [Sign up](https://branch.io/universal-ads/) for the Ads product to enable this functionality.

!!! warning "Branch SDK Required"
    Before enabling the partner integration, please make sure you've implemented the [Branch SDK](/resources/native-sdks-and-plugins/) in your application.  This is required to ensure deep linking and attribution. We also highly recommend implementing [event measurement](/apps/v2event/#overview) and passing event metadata to your partner.

{! ingredients/deep-linked-ads/enable-partner.md !}

![image](/_assets/img/pages/deep-linked-ads/noname/noname-enable.png)

!!! note "Providing Account Credentials"
	Not all integrations require providing account credentials. When prompted to, enter any credentials that may be required, and click **Save and Enable** in the bottom right hand corner. If you do not know your account credentials for said partner, please ask your ad partner for this information.

### Enabling Postbacks

Basic postbacks will automatically be activated for events like _Install_ and _Purchase_ when you enable your ad partner. You can then [add additional postbacks](#adding-more-postbacks), for example, if you wanted to add postbacks for custom events that are specific to your app like _Account Created_. You can also [edit postbacks](#advanced-editing-postbacks) if there's additional data you really need to pass along to your ad partner.

![image](/_assets/img/pages/deep-linked-ads/noname/noname-postbacks.png)

{! ingredients/deep-linked-ads/create-ad-link.md !}

{! ingredients/deep-linked-ads/view-ad-link-data.md !}

## Advanced

### Setup

{! ingredients/deep-linked-ads/view-through-attribution.md !}

#### Testing with setDebug

When integrating the SDKs, it's often useful to use setDebug to verify that your app is able to communicate with Branch servers, and is receiving deep link data. However, our upstream systems don't register test events sent using setDebug, so events will not appear in Liveview or Analytics, nor will they fire postbacks. You should disable setDebug when looking at Liveview or testing postbacks.

#### Server to Server Ad Links

If you have a server to server integration you must provide specific requirements for attribution. Make sure to append the following mandatory key-values into tracking ad links to ensure they are not rejected or blocked:

- **Server to Server Parameter**: Add server-to-server click macro URL parameter at the end of your link, so we know it's a server to server link:
    - `%24s2s=true`

- **Device ID Macro Value**: Pass user Advertising Identifier via click macro URL parameter:
    - `%24idfa={IDFA}` for iOS devices
    - `%24aaid={AAID}` for Android devices

- **IP address**:  Pass user IP information in the header OR click macro URL parameter to override on click:
    - HTTP header `x-ip-override: {IP_ADDRESS}`
    - Click macro URL parameter: `device_ip={IP_ADDRESS}`

- **User Agent**:  Pass User Agent information in the header OR click macro URL parameter to override on click:
    - HTTP header `User-Agent: {USER_AGENT}`  
    - Click macro URL parameter: `user_agent={USER_AGENT}`

!!! warning "Update Partner-specific URL macros"
    Please make sure that you are using your macros instead of {IDFA}. {AAID}, {IP_ADDRESS}, {USER_AGENT}

{! ingredients/deep-linked-ads/add-more-postbacks-short.md !}

{! ingredients/deep-linked-ads/all-events-toggle.md !}

{! ingredients/deep-linked-ads/whitelist-ip.md !}

{! ingredients/deep-linked-ads/edit-postbacks.md !}

### Granting Agency Access

{! ingredients/deep-linked-ads/granting-partner-access.md !}

### Tracking Link Parameters

{! ingredients/deep-linked-ads/tracking-link-params.md !}

### Attribution Windows

{! ingredients/deep-linked-ads/attribution-windows.md !}

{! ingredients/deep-linked-ads/people-based-attribution.md !}
