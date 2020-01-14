### Return YES to continueUserActivity

When users enter your app via a Universal Link, we check to see to see if the link URL contains `app.link`. If so, `handledByBranch` will return `YES`. If not, `handledByBranch` will return `NO`. This allows us to explicitly confirm the incoming link is from Branch without making a server call.

For most implementations this will never be an issue, since your deep links will be routed correctly either way. However, if you use a custom link domain *and* you rely on `handledByBranch` to return `YES` for every incoming Branch-generated Universal Link, you can inform the Branch SDK by following these steps:

1. In your <notranslate>**Info.plist**</notranslate> file, create a new key called `branch_universal_link_domains`.
1. Add your custom domain(s) as a string. ![image](/_assets/img/pages/deep-linking/universal-links/branch-universal-link-domain.png)
1. Save the file.

!!! tip "Multiple custom domains"
	If you have an unusual situation with multiple custom link domains, you may also configure `branch_universal_link_domains` as an array of strings. ![image](/_assets/img/pages/deep-linking/universal-links/branch-universal-link-domains.png)
