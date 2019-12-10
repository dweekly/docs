## Overview

When Branch measures a conversion (install or other event), it determines which ad network or partner is responsible for generating the action, then attributes credit to the proper partner accordingly. Branch notifies partners of these events via postbacks which are turned on when you enable any Universal Ads integrated partner.

Branch’s postback system is highly customizable; set up postbacks for specific events, as well as specific subsections of events, filtered by link data, user data or event properties.

!!! info "Postbacks vs Webhooks"
	Both the terms `Postbacks` and `Webhooks` are used to refer to the same process of sending data to other systems. In Branch’s case, we use the term `postback` when referring to the Universal Ads product and `webhook` when referring to the Data Feeds product; though functionality is the exact same.


## Postback Templates

Universal Ads partners support pre-defined postback templates to simplify the generation of the proper postback URL.  If they require any additional information (such as an event-specific Goal ID), Branch displays empty fields for you to input that information that are automatically appended to the postback URL.


### Adding/Enabling

Basic postbacks are automatically activated for events like _Install_ and _Purchase_ when you enable your ad partner. You can then add additional postbacks, for example, if you wanted to add postbacks for custom events that are specific to your app like _Account Created_.

To add a postback:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Click the **Add New Postback** button at the bottom of the screen.
4. A modal will appear with Branch default events, as well as any commerce (reserved events like _PURCHASE)_ or custom events you've set up. Select an event, enter a postback URL if you're asked to, and click **Save**. This will be the event that triggers your new postback.
    1. NOTE: If Branch does not already have a postback template for a partner, please provide a valid URL for your partner.

![image](/_assets/img/pages/partner-management/postback-add.gif)

### Disabling

To disable any postback currently enabled for an ad partner:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Uncheck the box in the **Enable** column for the postback you want to disable.

![image](/_assets/img/pages/partner-management/postback-disable.gif)

### Deleting

To delete any postback currently enabled for an ad partner:  

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Hover on the three dots icon to the right of the postback and click **Delete Postback**.
4. Click **Save**.

![image](/_assets/img/pages/partner-management/postback-delete.gif)


!!! info "Disable vs. Delete"
	We recommend disabling postbacks versus fully deleting them.  However, you can re-add any postback you’ve previously deleted; you will need to re-add any customization you may have added originally.

### Sending All Events

If you want to send **All Events** - whether attributed to this partner or not  - you can enable this setting by checking the **All Events** box on a per postback basis.

!!! warning "Privacy Implications"
	As this setting will send **All Events** - with the name and customer event alias listed in this row, whether attributed to this partner or not - we recommend using caution when/if enabling, especially if you have enabled agencies to access your account.

![image](/_assets/img/pages/deep-linked-ads/branch-universal-ads/all-events.png)

## Advanced Configuration

### Editing Templates

In most cases, the default postback URL generated from your selections is sufficient to provide postback notification to interested parties.

But sometimes you may need/want to edit or remove a parameter from the postback URL, or append a macro expression/variable to include additional information.

!!! tip "Example"
	You want to send your partner the actual items a user adds to their cart so they can optimize based off those items.  Their current `Add to Cart` postback template does not include this information.  Therefore, you need to add [Content Items](https://docs.branch.io/resources/postback-macros-and-functions/#content-items-data) macros to their URL. To do so, you’ll first need to get the correct field from the partner in which to pass this data; e.g. `cart_items`.  Finally, you’d append `&cart_item=${(content_items[0].$product_name)!}` to the postback template.

Please refer to [Postback Macros & Functions](#postback-macros-functions) when looking to append additional macros.

To edit the postback template:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. In the **Postback URL** field, add/edit/remove the key-value pairs necessary.
    1. You must include a `&` before each key-value pairs you append.
4. Click **Save**.
5. Alternatively, hover on the three dots icon to the right of the postback and click **Advanced Edit**.
6. In the **Send a Webhook to** field, add/edit/remove the key-value pairs necessary.
    2. You must include a `&` before each key-value pairs you append.
7. Click **Save**.

### Adding Filters

By default, all postbacks include the following two filters:

*   Operating System = `ROBOT`
    *   This filter ensures Branch is only sending postbacks based on real traffic.
*   Last Attributed Touch Data $3p = Currently selected Ad Partner
    *   This filter ensures Branch is only sending postbacks for events attributed to the currently selected ad partner.
    *   NOTE: Removing this filter results in Branch sending all events regardless of the attributed ad partner. This is equivalent to checking the **All Events** box.

!!! tip "Example"
	Your partner requires separate postbacks for Android purchase events vs iOS purchase events.  To achieve this, you would need to add two Purchase postbacks and add a filter for **Operating System** - **user_data.os** - **equals** - **Android **to one and **Operating System** - **user_data.os** - **equals** - **iOS **to the other.

To create a filter:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Hover on the three dots icon to the right of the postback and click **Advanced Edit**.
4. Click the **Add Filter** button
5. Select the metadata you'd like to filter on. See list of basic filters below.
    1. Select **equals** or **does not equal** from the next drop-down.
6. Finally, set the value of the key that you'd like to filter in or out.
7. Click **Save**.

![image](/_assets/img/pages/partner-management/postback-add-filter.gif)

#### Basic Filters

The following filters are available when editing your postback:

*   Campaign
*   Channel
*   Country
*   Custom - see Advanced Filters for more information
*   Feature
*   Tags
*   Last Attributed Touch ID
*   Last Attributed Touch Type
*   Operating System
*   Environment
*   Platform
*   Agency ID
*   Re-engagement Activity
*   Attributed
*   Customer Event Alias
*   First Event for User

#### Advanced Filters

Aside from the above-mentioned basic filters, you can also create Custom filters which leverage a wide variety of data points ranging from link data, user data and event data.

Make sure you've taken a look at the data format before you attempt to set advanced filters.

To create a filter:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Hover on the three dots icon to the right of the postback and click **Advanced Edit**.
4. Click the **Add Filter** button.
5. Select the metadata you'd like to filter on. For advanced filtering, choose "Custom"
6. Type in the key that you'd like to filter on. To find the key you'd like to filter on, reference our quick introduction to the [People-Based Attribution's data format](https://docs.branch.io/exports/ua-webhooks/#data-format) to figure out where your key is likely nested. Another foolproof way to find your key is looking at your data in full before setting up your filter. You can do this by doing a [CSV export](https://dashboard.branch.io/data-import-export/csv-exports), [API export](https://docs.branch.io/exports/api-v3/) or send a single postback with a POST body, and locate your key in that POST body.
7. Unless your key is part of the top level data (e.g. **timestamp** or **id**), it will likely be nested one level deep. Most keys will be of the format **object_name.key**. For example, if you want to filter for a custom key in deep link data called "product_deeplink_id", that would take the form **last_attributed_touch_data.product_deeplink_id**.

Let’s say you’re interested in receiving a postback for every **Purchase** event using a specific coupon. When you set up the Purchase event in your app or on your website, you [added a specific piece of metadata for "coupon"](https://docs.branch.io/apps/v2event/#track-commerce-events). In the [Event Ontology Schema](https://docs.branch.io/exports/event_ontology_data_schema/#full-list-of-fields) you saw that "coupon" is inside "event_data". To configure your filter to fire a postback only when **coupon** is equal to **HOLIDAYS** you will:

1. Select "Custom" from the filter key dropdown
2. Make the key **event_data.coupon**
3. Select "equals" on the equivalency dropdown
4. Enter a value of **HOLIDAYS**

![image](/_assets/img/pages/partner-management/postback-custom-filter.gif)

### Using POST HTTP Method

By default, Branch sends postbacks via the GET HTTP method.  You can, however, choose to have the postback sent via the POST HTTP method instead.

To change the HTTP method to POST:

1. Under **Partner Management**, select the partner for whom you want to add/edit their postback.
2. Click on the **Postback Config** tab on said partner’s page.
3. Hover on the three dots icon to the right of the postback and click **Advanced Edit**.
4. Change the **GET** drop-down to **POST**.
5. By default, Branch’s header settings for POST include:
    1. **Content-Type** : **application/json**
        1. Additional Content-Type values include **application/x-www-form** & **urlencoded**.

![image](/_assets/img/pages/partner-management/postback-post.gif)

## Testing Postbacks

Once you’ve enabled and/or configured new postbacks, you can test they’re working properly using the Liveview functionality in your Branch dashboard.

To test postbacks/webhooks in Liveview:

1. In the left-hand navigation, under **Setup & Testing** click on **Liveview**.
2. Click the **Webhooks Record** tab to load the Webhook/Postbacks object.
3. Click the **Add Filter** button, and select **Webhook Partner Key** from the drop-down and insert the relevant value for the partner.
4. Click the columns button to add both the **Webhook Response Code** and **Webhook Response Body** as columns.
5. Click **Update Session** to view the filtered results.

![image](/_assets/img/pages/partner-management/liveview-webhooks.png)

### How to Find a Partner’s Webhook Key

In order to filter the webhook records by partner to validate the postback is firing correctly, you need to find the partner’s webhook key.

To find the partner’s webhook key:

1. Under Partner Management, select the partner for whom you want to add/edit their postback.
2. On the Account Settings tab, under the partner’s Ad Account Information, copy and paste the Partner Identifier ($3p Value).

![image](/_assets/img/pages/partner-management/webhook-key.png)

### What to Look For When Validating

*   Check the expected macros are populated AND the response code. Most importantly, you'll want to verify the IDFA/AAID and the Click ID are populated.
*   We recommend verifying the event with the ad partner even when the Response Code is 200 (successful). To do so, send them the event name, the webhook request URL, device ID, timestamp, webhook response code and webhook response body.
*   If you can’t find the webhook you’re looking for, we recommend testing your ad link several more times to trigger the subsequent webhook/postback. If you are still unable to find the correct wehbook/postback record, please contact [support@branch.io](mailto:support@branch.io).

## Appendix

### Postback Macros & Functions

Please refer to our [Postback Macros & Functions](https://docs.branch.io/resources/postback-macros-and-functions/) document for a complete list of available postback macros and functions.

### Event Ontology Data Format

Please refer to our [Event Ontology Data Schema](https://docs.branch.io/exports/event_ontology_data_schema/) document for an in-depth explanation of Branch’s data format and a complete list of available fields.

### Using Freemarker Expressions

You can also add more advanced filters by applying [Freemarker](https://freemarker.apache.org/docs/ref_directive_alphaidx.html) to Branch’s event ontology data schema.

In addition to the expressions mentioned in the above link, Branch has created Branch-specific freemarker expressions you can use.

<table>
  <tr>
   <td><strong>Tag</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Example</strong>
   </td>
  </tr>
  <tr>
   <td><@json>
   </td>
   <td>
   </td>
   <td>JSON encodes the contents as a string.
   </td>
   <td>Input:
<p>
<@json>And then they said, "Hello, ${name}"</@json>
<p>
Output:
<p>
"And then they said, \"Hello, Dmitri\""
   </td>
  </tr>
  <tr>
   <td><@sha1>
   </td>
   <td>
   </td>
   <td>SHA1 encodes the contents
   </td>
   <td>Input:
<p>
sha1=<@sha1>${user_data.idfv}</@sha1>
<p>
Output:
<p>
sha1=d0b486885d4f2270ee6b4217ae95ee737b7b8975
   </td>
  </tr>
  <tr>
   <td><@sha256>
   </td>
   <td>
   </td>
   <td>SHA256 encodes the contents
   </td>
   <td>Input:
<p>
sha256=<@sha256>${user_data.idfv}</@sha256>
<p>
Output:
<p>
sha1=
<p>
1bb12f133f50a6a63a02c8f0ce33c5f0a61f7cbecc667acc82d3efa4c2965c26
   </td>
  </tr>
  <tr>
   <td><@md5>
   </td>
   <td>
   </td>
   <td>MD5 encodes the contents
   </td>
   <td>Input:
<p>
sha1=<@sha1>${user_data.idfv}</@sha1>
<p>
Output:
<p>
sha1=d0b486885d4f2270ee6b4217ae95ee737b7b8975
   </td>
  </tr>
  <tr>
   <td><@base64>
   </td>
   <td>
   </td>
   <td>Base64 encodes the contents
   </td>
   <td>Input:
<p>
sha1=<@sha1>${user_data.idfv}</@sha1>
<p>
Output:
<p>
sha1=d0b486885d4f2270ee6b4217ae95ee737b7b8975
   </td>
  </tr>
  <tr>
   <td><@loop>
<p>
  <@break>
<p>
  <@sep>
   </td>
   <td>data=foo (required)
<p>
val="bar" (required)
   </td>
   <td>Loops around the variable specified in data, assigning each successive one to the name specified in val. Be sure not to put quotes around data.
   </td>
   <td>TODO: fill this out
   </td>
  </tr>
  <tr>
   <td><@jsonmap>
   </td>
   <td>data=foo (required)
   </td>
   <td>JSON encodes the data (be sure not to quote), in whatever .
   </td>
   <td>Input:
<p>
sha1=<@sha1>${user_data.idfv}</@sha1>
<p>
Output:
<p>
sha1=d0b486885d4f2270ee6b4217ae95ee737b7b8975
   </td>
  </tr>
  <tr>
   <td><@urlencode>
   </td>
   <td>
   </td>
   <td>URL encodes the contents.
   </td>
   <td>Input:
<p>
sha1=<@sha1>${user_data.idfv}</@sha1>
<p>
Output:
<p>
sha1=d0b486885d4f2270ee6b4217ae95ee737b7b8975
   </td>
  </tr>
</table>

Due to security restrictions, Branch does not support the below Freemarker expressions:

*   "<#import>"
*   "<#visit>"
*   "<#include>"
*   "?eval"
*   "<#recurse>"
*   "<#setting>"
*   "<#macro>"
*   "<#function>"
*   "<#nested>"
*   "<#return>"
*   "<#list>"
