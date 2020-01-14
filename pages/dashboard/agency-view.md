!!! warning "Invite Required"
	For any Agency to access a customer Branch account, an invitation from an Admin user at the [Organization](/dashboard/organization-view/#adding-an-agency) or [App](/dashboard/app-view/#adding-an-agency) entity level of access is required. All Agency Admins on the agency account will receive an invitation email, and any of those Agency Admins can accept the invitation on behalf of their agency.

	Within a customer account, an Agency does not have access to change their own permissions, access billing or SSO.

The "Agency" view of a Branch account is another additional level of entity access and is intended for Branch accounts that work with agencies - both full AORs and limited - that buy media on their behalf. Agency view allows the Agency to manage its own team within the Branch dashboard. Agency team members can switch between the Agency view and the App view at any time.

**The Agency view is for managing account-level functionality; e.g. managing agency team members and access.  Toggle to the [App view](app-view.md) to access the majority of your day-to-day needs for creating links and viewing reporting.**

!!! info "Agencies in App View"
	Due to the nature of allowing third parties access to your data, we've included certain restrictions for Agency users when in App View.  For more detail, please see [Agencies in App View](/dashboard/app-view/#agencies-in-app-view)

## Agency View Overview

When viewing your Branch account via the Agency entity, you can access (either edit or read-only) the following functionality:

<table>
  <tr>
    <th rowspan="5"><img src="/_assets/img/pages/dashboard/access-levels/agency-nav.png"></th>
  </tr>
	<tr>
		<th><b>Agency Entity Access</b></th>
		<th></th>
		<th></th>
		<th></th>
		<th></th>
	</tr>
  <tr>
		<th></th>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<th></th>
		<td></td>
    <td></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
		<th><b>Account<br/>Settings</b></th>
		<td><a href="/dashboard/agency-view/#managing-your-agency-profile">Profile</a></td>
		<td><a href="/dashboard/agency-view/#managing-your-user-profile">User</a></td>
    <td><a href="/dashboard/agency-view/#managing-your-agency-team">Team</a></td>
		<td></td>
  </tr>
</table>

## Account Settings

### Managing your Agency Profile

If you are an Agency Admin, you have edit access to the <notranslate>**Profile**</notranslate> tab.

![image](/_assets/img/pages/dashboard/access-levels/agency-profile.png)

- <notranslate>**Agency Name**</notranslate> - provided by you; editable.
- <notranslate>**Agency ID**</notranslate> - assigned by Branch; not editable.

### Managing your User Profile

Any user type - Agency Admin, Agency Team Member - has the ability to edit the <notranslate>**User**</notranslate> tab.

![image](/_assets/img/pages/dashboard/access-levels/agency-user.png)

- <notranslate>**Dashboard UID**</notranslate> - assigned by Branch; not editable.
- <notranslate>**First and Last Names**</notranslate> - provided by you; editable.
- <notranslate>**Email Address**</notranslate> - provided by you; editable.
- <notranslate>**Change Password**</notranslate> - provided by you; editable.

### Managing Your Agency Team

If you are an Agency Admin, you have edit access to the <notranslate>**Agencies**</notranslate> tab.

![image](/_assets/img/pages/dashboard/access-levels/agency-team-add.gif)

#### Adding an Agency User

To add a new Agency (Admin or Team Member) User:

1. Click the <notranslate>**Add Agency Team Member**</notranslate> button.
2. In the <notranslate>**Add Agency Team Member**</notranslate> modal:
	1. Provide the user's <notranslate>**Email Address**</notranslate>
	1. Provide the user's <notranslate>**First**</notranslate> and <notranslate>**Last**</notranslate> names
	1. Select the appropriate <notranslate>**Access Level**</notranslate>
		- <notranslate>**Agency Admin**</notranslate> - Full access to Account Settings tab, including the ability to add, edit, and remove team members.
		- <notranslate>**Agency Team Member**</notranslate> - Read-only access Account Settings tab.
	1. Click <notranslate>**Invite**</notranslate>.

#### Modifying an Agency Team Member

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

### Default Agency Restrictions

Due to the nature of allowing third parties access to your data -  as well as what data you don't want them to access - when an Agency team member is in App view, they will not be able to access certain aspects of the Branch account regardless of the access levels applied to the user.

- Agency users cannot add/remove team members to/from their customers’ dashboards.
- Agency users are not allowed to reset app keys or delete apps.
- Agency users are not allowed to add/remove agency access.
- Agency users are allowed to create apps in the Organization view, but not stand-alone apps in the App view.
	- This means agencies don’t actually “own” apps; rather they’ll just be able to manage the apps of others.
- Agency users do not have access to the Billing and SSO sections of their customers’ dashboards.

!!! info "Disabled Functionality"
	Any restricted functionality - either due to default Agency restrictions or selected access levels - in the Branch dashboard will be (1) grayed out, (2) not clickable, (3) include a pop up modal informing the user about restricted access.
