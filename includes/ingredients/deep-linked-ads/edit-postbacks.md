#### Editing Templates

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

!!! tip "Reset Postbacks"
    We all make mistakes from time to time. If you need to reset your postbacks and your credentials, navigate to the **Account Settings** tab and look for the **Reset all settings** button. Be careful though! This will disable the ad partner, clear out all credentials and postbacks that you've set up, and return the ad partner to its basic configuration. You can then start afresh.
