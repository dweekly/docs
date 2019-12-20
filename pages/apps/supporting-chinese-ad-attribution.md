!!! warning "DO NOT USE OUTSIDE CHINA"
	This guide is specific to China and cannot used for the attribution of Android devices outside of China.  

## Overview

The mobile app market in China is unique in that there are hundreds of app stores with Google being a minor one. This requires a unique approach to supporting attribution for apps downloaded in China.

As attribution providers mainly rely on Google's advertising identifier (GAID) for attribution - which is not available via any other app store in China - a different device identifier must be used to accurately attribute installs in the Chinese mobile app market.

To this end, Branch built an Android plugin specifically to capture the IMEI (International Mobile Equipment Identity) of Open Source Android devices.

!!! warning "NOT COMPATIBLE WITH GOOGLE PLAY"
	Using this module in apps that are listed on the Play Store can cause the app to removed from the store.

## Enabling China Features

Please contact your Account Manager to enable this feature.  Once enabled, you will need to accept Terms of Service before being able to gain access to the Github repo containing the Android plugin.

## SDK Implementation

!!! warning "GITHUB REPO ACCESS RESTRICTED"
	Before you can implement the Branch Android IMEI module, you must contact your account manager and accept the Terms of Service for using this feature.

The Android IMEI module is used by the main [Branch Android SDK](/apps/android) to inject IMEI data of the device in the requests.

The module checks whether Google Play Services is linked to the app. If yes, then it will not fetch the IMEI. Otherwise, it will pass the IMEI in the requests.

!!! info "NOTE"
	If Google Play Services is present, but not linked, the request for IMEI will result in an error.

1. To build the `.jar` file, run the task `makeJar`.
2. To read the IMEI of the device, you need to add the following permission in the Manifest file:
```
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
```
3. Download the `.aar` file from the main dir and use with the main Branch SDK as follows.

4. Copy the `.aar` file in your app root directory -> libs -> Branch-IMEI-release-latestVersion.aar (create libs if needed)

5. Add the support for libs inside your project/build.gradle:
```
allprojects {
    repositories {
        flatDir {
            dirs 'libs'
        }
    }
}
```
6. Add the support for the Inside your app/build.gradle.
```
implementation (name:'Branch-IMEI-release-latestVersion', ext:'aar')
```

7. Call the following in your Application Class -> onCreate(): import BranchDeviceImei
```
import io.branch.referral.deviceimei.BranchDeviceImei;
```
```
Branch.getInstance().addModule(BranchDeviceImei.get(this));
```
