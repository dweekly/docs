---
title: Movable Ink - Email
---
## Overview

This guide will walk you through how to setup your email campaigns with **[Movable Ink](https://movableink.com)** using Branch Universal Email to automatically convert your email links into **multi-platform deep links**.

Universal Email allows you to automatically convert your email links into multi-platform deep links that take users directly to content in the app on mobile devices, while still maintaining the same web experience for desktop and mobile users without the app.

When a link is clicked by a user without the app, it will route that user to the original web URL (including on desktop). When a link is clicked by a user with your app, it will direct that user into the relevant in-app content regardless of platform or email client.

## Setup Email link

### Configure your ESP

You can use Movable Ink personalization links with any ESP, so before we start to configure Movable Ink, please find your ESP in this list - [Email Partners List](https://docs.branch.io/emails/email-partners-list/) - and follow the integration guide to make sure that you have configured and enabled the integration.

### Setup link behavior

Once you have completed the ESP configuration, you can start adding Movable Ink links the email body.

With your ESP make sure to add the URL parameter **`$follow_redirect=true`** to every Movable Ink link in the email body. This will indicate Branch that this link is an MI link. As soon as Branch detects this parameter Branch backend will follow the MI link, receive personalization data from MI’s servers, and send it to the mobile App/Web.

## Ignore Query parameter within your Movable Ink Campaign

The last step to enable the deep linking experience is to ignore the query parameter **`$follow_redirect=true`** within the Movable Ink platform.  You’ll add `$follow_redirect` to the list of ignored query parameters here:

![image](/_assets/img/pages/email/movable-ink/movable-ink-email1.png)

### QA Testing For Movable Ink

Once you’ve ignored the query parameter within the Movable Ink platform you’ll want to test to make sure the branch url is tracking clicks within your Movable Ink campaign. To test the tracking you’ll take the finalized branch url that is placed within your email template and click the URL.  After the URL is click you’ll check to make sure the clicks are recorded within the Movable Ink campaign dashboard:

![image](/_assets/img/pages/email/movable-ink/movable-ink-email2.png)

If clicks are recording then the setup is successful.
