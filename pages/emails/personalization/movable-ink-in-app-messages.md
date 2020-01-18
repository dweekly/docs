---
title: Movable Ink - In-App Messages
---
## Overview

This guide will walk you through how to setup your personalized campaigns with **[Movable Ink](https://movableink.com)** using Branch to automatically convert your links into **multi-platform deep links**

## Setup Message link

To create a message link, you must merge the **Branch domain** and **Movable Ink link**.

The Branch domain can be found on the <notranslate>**Link Settings**</notranslate> page of your Branch dashboard; e.g. `https://branchster.app.link`

![image](/_assets/img/pages/email/movable-ink/movable-ink-messages1.png)

Movable Ink link should be URL encoded and added to the URL parameter **`$original_url.`** e.g.:
```
$original_url=https%3A%2F%2Fbjyd1mdh.mi-msg.com%2Fp%2Fcp%2Fcbf5400e1cd062b8%2Fc%3F%24follow_redirect%3Dtrue%26%24deep_link%3Dtrue%26url%3Dhttps%253A%252F%252Fbjyd1mdh.mi-msg.com%252Fp%252Frp%252F20751a2caf35a4b6%252Furl
```

A client should also add **`/3p?$3p=e_mi&%24follow_redirect=true`** parameter to the link.

Here is an example of full link (Branch + Movable Ink):

```
https://branchster.app.link/3p?$3p=e_mi&%2524follow_redirect=true&$original_url=https%253A%252F%252Fbjyd1mdh.mi-msg.com%252Fp%252Fcp%252Fcbf5400e1cd062b8%252Fc%253F%2524follow_redirect%253Dtrue%2526%2524deep_link%253Dtrue%2526url%253Dhttps%253A%252F%252Fbjyd1mdh.mi-msg.com%252Fp%252Frp%252F20751a2caf35a4b6%252Furl
```

## Ignore Query parameter within your Movable Ink Campaign

The last step to enable deeplinking experience is to ignore the query parameter **`$follow_redirect=true`** with the Movable Ink platform.  You’ll add `$follow_redirect` to the list of ignored query parameters here:

![image](/_assets/img/pages/email/movable-ink/movable-ink-messages2.png)

### QA Testing For Movable Ink

Once you’ve ignored the query parameter within the Movable Ink platform you’ll want to test to make sure the branch url is tracking clicks within your Movable Ink campaign. To test the tracking you’ll take the finalized branch url that is placed within your email template and click the URL.  After the URL is click you’ll check to make sure the clicks are recorded within the Movable Ink campaign dashboard:

![image](/_assets/img/pages/email/movable-ink/movable-ink-messages3.png)

If clicks are recording then the setup is successful.
