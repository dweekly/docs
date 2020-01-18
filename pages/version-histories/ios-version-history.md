---
title: iOS Version History
---
### v0.31.3

**(2019-Dec-30)**

- Change type of field `cpu_type`.

### v0.31.2

**(2019-Dec-18)**

- Change type of field `cpu_type`.

### v0.31.1

**(2019-Dec-11)**

- Fix first run issue with logEvent.

### v0.31.0

**(2019-Dec-11)**

- Add fields for Tune compatibility.  
- Carrier name, connection type, cpu type.
- Add fallback for disabled module support. C++ compatibility.
- BranchEvent safety improvement.
- Add APIs for plugin support.

### v0.30.1

**(2019-Dec-3)**

- Hotfix to call FB SDK on the main thread.

### v0.30.0

**(2019-Nov-13)**

- Update Apple Search Ads behavior and API.
- Last attributed touch API now accepts attribution window.
- Add blacklist URL configuration.
- Removed deprecated Safari cookie integration.
- Fix race condition in SDK initialization.
- Fix Carthage Swift build from source.
- Fix Swift getInstance nullability.
- Fix object serialization error.

### v0.29.3

**(2019-October-16)**

- Added a check for previous Tune data; when found, data's status is set to "updated" to be used in determining new vs existing users.

### v0.29.1

**(2019-October-04)**

- Fix nullability warnings.

### v0.29.0

**(2019-September-26)**

- Added support for Cross-Platform ID (CPID) & Last Attributed Touch Data (LATD).
- Fixed a race condition on slow startup.
- Fixed a rare Keychain deadlock.

### v0.28.1

**(2019-September-06)**

- Remove deprecated `UIWebView` and replace with `WebKit`.
- Add Standard Event customer alias field.
- Cocoapods adds `iAd` by default.
- Remove deprecated Fabric integration.
- Remove Apple Search Ads debug which is redundant with Apple's existing debug.
- Collect install receipt.
- Fix bug with proxying network calls.
- Fix bug with network retry.

### v0.27.1

**(2019-June-03)**

- Fix a potential crash due to invalid key type

### v0.27.0

**(2019-April-24)**

- Allow short link creation while privacy is enabled.
- Fix Swift example and cleanup release scripts.

### v0.26.0

**(2019-March-26)**

- New standard events for improved Facebook and Tune.
- Improve handling of non-branch links while app is in foreground.
- CircleCI support.
- Carthage prebuilt binary is now built with Xcode 10 and is no longer compatible with old Xcodes.

### v0.25.11

**(2019-January-18)**

- Improved referral documentation.
- Disabled certificate pinning by default.
