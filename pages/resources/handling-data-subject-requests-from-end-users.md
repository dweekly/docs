---
title: Handling Data Subject Requests From End Users
---
## Handling Data Subject Requests from End Users

This documentation contains information on the procedure for submitting data subject requests to Branch for your end users, to support you in your compliance efforts with applicable data protection laws like GDPR. When your end users exercise their rights under applicable data protection laws, Branch is committed to working with you to fulfill these requests, provided the request comes directly from you. The purpose of this document is to outline the process in which you & Branch will coordinate to facilitate data subject requests for your end users.

## Branch Data Subject Deletion Request Process

1. **Construct a batched request in .CSV file format for all outstanding data deletion requests which contains the following information and adhere [to this file format ](/resources/gdpr-request-template.xlsx)(<notranslate>"Data Subject Deletion Request Template"</notranslate>).**
	1. <notranslate>**device_id**</notranslate> - an ID pertaining to the end user’s device. This could be a number of different identifiers depending on the user’s device type (e.g. IDFA, GAID, IDFV, AAID, MAC address, etc.)
	2. <notranslate>**developer_id**</notranslate> - an ID set by you. This is a way for you to identify your users using your own convention (e.g. unique alphanumeric ID, etc.)
	3. <notranslate>**browser_id**</notranslate> - also known as browser_fingerprint_id, which is a unique ID created by Branch to identify a specific browser
	4. <notranslate>**user_id**</notranslate> - an ID set by you. This is a way for you to identify your users using your own naming convention (e.g. unique alphanumeric ID, etc.)

2. **Submit  the batched request through our Data Subject Request Portal:**
	1. Visit the following page and fill out the online form: [https://gdpr.branch.io/hc/en-us/requests/new](https://gdpr.branch.io/hc/en-us/requests/new). 
	2. <notranslate>**Required Fields:**</notranslate>
	    1. <notranslate>**Email Address**</notranslate>: your email address
	    2. <notranslate>**Requestor**</notranslate>: Select “Someone else’s behalf”
	    3. <notranslate>**Request Type:**</notranslate> Select "Data Deletion"
	    4. <notranslate>**Original Request Date**</notranslate>: Input date of submission
	    5. <notranslate>**Subject**</notranslate>: "[Your company Name] - Deletion request - [MM/DD/YYYY]"
	    6. <notranslate>**Description**</notranslate>: "Requesting data deletion request for the list of attached IDs."
	        1. Please Include your App ID. _see below Security/Request Validation_
	    7. <notranslate>**Attachments**</notranslate>: upload .CSV file

3. **Security/ Request Validation:**
If it is the first time Branch has received a data subject request from you, we will need to validate the request for security purposes and ask that you provide the following information to carry out the request:

	1. Your Branch App ID(s) for the app(s) at issue (available at [https://dashboard.branch.io/account-settings/app](https://dashboard.branch.io/account-settings/app), under "App ID");
	2. Please copy in your reply at least one person who is listed as an admin on the app's Branch account, and have each admin reply-all to confirm that the request should be executed

4. **Branch’s Privacy Team** will confirm completion via email.
    1. **Please note that you should expect a confirmation within 7-14 business days from submission time**

## Branch Data Subject Access Request Process

1. **Construct a batched request for all outstanding data access requests which contains the following information and adheres to [this file format](https://drive.google.com/drive/u/0/folders/1oXnSpiKYjiJywGNBu0X14yGEbP5YY7GU) (" Data Subject Access Request Template")**
    1. <notranslate>**device_id**</notranslate> - an ID pertaining to the  end user’s device. This could be a number of different identifiers depending on the user’s device type (e.g. IDFA, GAID, IDFV, AAID, MAC address, etc)
    2. <notranslate>**developer_id**</notranslate> - an ID set by you. This is a way for you to identify your users using your own convention (e.g. unique alphanumeric ID, etc)
    3. <notranslate>**browser_id**</notranslate> - also known as browser_fingerprint_id, which is a unique ID created by Branch to identify a specific browser
    4. <notranslate>**user_id**</notranslate> - an ID set by you. This is a way for you to identify your users using your own naming convention (e.g. unique alphanumeric ID, etc)
2. <notranslate>**Submit a Request through our Data Subject Request Portal:**</notranslate>
    1. Visit the following page and fill out the form: [https://gdpr.branch.io/hc/en-us/requests/new](https://gdpr.branch.io/hc/en-us/requests/new). 
    2. <notranslate>**Required Fields:**</notranslate>
        1. <notranslate>**Email Address**</notranslate>: your email address/alias
        2. <notranslate>**Requestor**</notranslate> Select “Someone else’s behalf”
        3. <notranslate>**Request Type:**</notranslate> Select "Access to Data"
        4. <notranslate>**Original Request Date**</notranslate>: Input date of submission
        5. <notranslate>**Subject**</notranslate>: "[Your company Name] - Data Access Request - [MM/DD/YYYY]"
        6. <notranslate>**Description**</notranslate>: "Requesting data on the list of attached IDs."
            1. Please Include your App ID. _see below Security/Request Validation_
        7. <notranslate>**Attachments**</notranslate>: upload .CSV file

3. **Security/ Request Validation:**

    If it is the first time we have received a data subject request from you, we ask that you provide the following information to carry out the request (and for security reasons):

    3. Your Branch App ID(s) for the app(s) at issue (available at [https://dashboard.branch.io/account-settings/app](https://dashboard.branch.io/account-settings/app), under "App ID");
    4. Please copy in your reply at least one person who is listed as an admin on the app's Branch account, and have each admin reply-all to confirm that the request should be executed

4. **Branch’s Privacy Team will confirm completion of executing the request via email**
    1. **Please note that you should expect a confirmation within 7-14 business days from submission time**
    2. Branch will provide you with a file that contains the end user’s personal data subject to the request
    3. File Details:
        1. There will be one output file per submission request
        2. <notranslate>**Status:**</notranslate> if Branch possesses personal data for the end user status will be 200; if not it will be 400
        3. <notranslate>**URL**</notranslate>: if Branch possesses personal data for a particular end user subject to the data access request, the file will contain a URL for which the end user can click and a separate JSON file can be opened in browser. The generated report is available for seven days from the time of completion of the request.
