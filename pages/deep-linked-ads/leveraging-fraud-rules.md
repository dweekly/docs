---
title: Fraud Rules
---
## Overview

!!! warning "Viewing Fraud Data Permissions"
	The ability to view data related to Fraud in reporting and exports requires the user to have `VIEW` access to the **Fraud Settings & Data** permission.  Learn more about Branch's [Access Levels & Permissions](/dashboard/access-level/).

Branch recommends creating fraud rules to block erroneous attribution credit in real-time. While Branch still performs last-click attribution, it will not send the ad network a postback when the attribution is flagged as fraudulent.

This has two benefits:

- You can see how many fraudulent events come from each ad partner and sub-publisher.
- You do not have to try to recoup losses from the ad network, because the payout never happened in the first place.

Blocked events are also separated from normal traffic in your Branch dashboard, so you can see all events in one place (the fraud dashboard), while healthy analytics are not distorted by bad traffic.

But not to worry, blocked events are still deep linked, so blocking would not affect the user experience of a real user.

!!! warning "Enabling Fraud Rules"
	This feature is not available via your dashboard. Please contact [Support](mailto:support@branch.io) if you want to enable fraud rules on your account.

## Recommended Fraud Rules

### Country Conflict

The click and the install occur in different countries. Theoretically this could happen for a real user, but it is extremely unlikely. It’s much more likely that the click or install was simulated.

### Device Conflict

The device information on the click and the install are different. A real user clicks and installs on the same device, so this is highly suspicious.

### Event-level Characteristics

We can block on any attribute stored at the event level. Examples:
Device Pattern: For example, “OS version + Country + Model”. It’s common for device farms to use the same devices over and over, making it easy to pick out specific device characteristics to block.

### Once Ever Capped

To be used only for those events that should only ever occur once per user.

### Suspicious IP

Branch automatically blocks events coming from TOR networks.

### Suspicious Click-to-Install Time

Very short click-to-install times are suspicious - this is typically caused by faked clicks taking attribution credit for real installs. We recommend blocking CTI times below 30 seconds, but you can configure it to be up to 60 seconds. On the Branch Fraud Dashboard, you can see CTI time distribution by ad partner to determine if this threshold seems to be working.

### Suspicious Persona

This is based on Branch’s cross-platform persona graph. We use proprietary algorithms to dynamically block attributions on browsers and devices showing suspicious behavior.
