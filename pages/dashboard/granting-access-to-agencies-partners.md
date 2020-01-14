
If you are an Organization Admin, you have full edit access to all of the Account Settings mentioned above including the ability to add an Agency/Partner to your Branch account.

!!! info "Additional Info"
	You can only add agencies/partners via the <notranslate>**Agencies**</notranslate> tab. Trying to add agencies via the <notranslate>**Team**</notranslate> tab will throw an error as only non-agency users should be added via the Team Tab.

!!! warning "Agencies vs. Partners"
	While your relationship with an agency is different than with an ad partner, they way in which these two entities access your Branch app data is the same.  When granting either of these entities access, you will always see the term "Agency" even when granting an Ad Partner access.

#### Adding an Agency/Partner

To add an Agency/Partner:

1. Go to <notranslate>**Account Settings**</notranslate> and click on the <notranslate>**Agencies**</notranslate> tab.
1. On the <notranslate>**Agencies**</notranslate> tab, click the <notranslate>**Add New Agency**</notranslate> button.
1. In the <notranslate>**Add New Agency**</notranslate> modal:
	1. Select the Agency name from the drop-down.
	1. Select the appropriate level of access.
		- <notranslate>**Admin**</notranslate> - Edit access to all settings and export access to all data.
		- <notranslate>**Team Member**</notranslate> - Edit access to channels and links, read-only access to app settings, and access to aggregate data.
		- <notranslate>**Full Read**</notranslate> - Read-only access to all settings and access to aggregate data.
		- <notranslate>**Limited Read**</notranslate>  - Access to aggregate data only.
		- <notranslate>**Custom**</notranslate> - Customize settings and data access.
		- <notranslate>**No Access**</notranslate> - no dashboard access.
	1. Click "Invite".
	1. All Agency Admins on the agency account will receive an invitation email, and any of those Agency Admins can accept the invitation on behalf of their agency.

!!! warning "Granting agencies Sensitive Data & App-Level Settings permissions"
	Agencies with Sensitive Data & App-Level Settings permissions to an Org or App will have access to that Org/App's API keys, which can be used to access Branch's [HTTP](https://docs.branch.io/apps/deep-linking-api/) and [Data Export](https://docs.branch.io/exports/api-v3/#__search) APIs. Agency data filters (e.g. Only Show Agency-tagged Data) will not apply to data accessed via the Daily Export API, so we recommend against granting agencies these permissions and providing them with API keys.

#### Defining Permissions

Each access level - as defined above - comes with predefined permissions which you can edit if you choose.

!!! tip "Modifying Permissions"
	If you want to modify a predefined access level, click the pencil icon to (de)select the available options.

- <notranslate>**Link-level Settings**</notranslate> - Settings or features that can impact functionality for single links.
- <notranslate>**Channel-level Settings**</notranslate> - Settings or features that can impact functionality across a marketing channel.
- <notranslate>**App-level Settings**</notranslate> - Settings or features that can impact functionality app-wide.
- <notranslate>**Aggregate Data**</notranslate> - Summary data that contains no granular data.
- <notranslate>**Sensitive Data**</notranslate> - Data that can contain user-identifying, payment-related, or secret information.
- <notranslate>**Fraud Settings & Data**</notranslate> - Settings or data associated with fraud detection and prevention.

#### Additional Data Filters

During the process of granting an agency/partner access to your Branch account, you can also impose limitations around what data is available to the agency/partner at any given time.

!!! warning "Filter to Only Show Agency-Tagged Data"
  	When giving an agency access to your Branch account, please make sure you toggle the `Only Show Agency-Tagged Data` to on and select the agency you are giving access to.

!!! warning "Filter to Only Show Data from Specific Ad Networks"
  	When giving an ad partner access to your Branch account, please make sure you toggle the <notranslate>**Only Show Data from Specific Ad Networks**</notranslate> to on and select the ad partner you are giving access to.

![image](/_assets/img/pages/dashboard/agency-ad-partner-invite.png)

- <notranslate>**Only Show Agency-tagged Data**</notranslate> - When toggled on, agency users can only see events tagged with their Agency ID.
- <notranslate>**Restrict Access to Revenue Data**</notranslate> - When toggled on, agency users cannot view revenue data.
- <notranslate>**Only Show Data from Specific Ad Networks**</notranslate> - When toggled on, agency users can only view events from a specific list of ad networks.
- <notranslate>**Only Show Data from Specific Locations**</notranslate> - When toggled on, agency users can only view events that have taken place in a specific list of countries.

!!! warning "Agency Invitation"
	Once you've defined the appropriate levels of access for your Agency, you must <notranslate>**Invite**</notranslate> them to access the Branch dashboard. Only Organization Admins can invite an Agency to access the Branch dashboard.

#### Modifying an Agency/Partner Team Member

To modify an existing Agency Team member:

1. Find the Agency Team member you want to modify and click the <notranslate>**...**</notranslate> button in the <notranslate>**Actions**</notranslate> column for that user.
1. To edit the Agency member:
	1. Click <notranslate>**Edit**</notranslate> and modify any of the following:
		- Email
		- First and Last names
		- Access Level
	1. Click <notranslate>**Save**</notranslate>.
1. To resend the invitation to join the Agency account:
	1. Click <notranslate>**Resend Invite**</notranslate>.
1. To delete the Agency member:
	1. Click <notranslate>**Delete**</notranslate>.
	1. In the <notranslate>**Are you sure you want to delete?**</notranslate> modal, click <notranslate>**Yes, Delete**</notranslate>.
