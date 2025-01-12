---
sidebar_label: 'IOS Integration'
sidebar_position: 1
---

# iOS SDK

## Getting Started

### Requirements

- iOS 14.0 and higher
- Internet connection

### Integration
<!-- - Create a group for frameworks in your project directory if it doesn't exist. 
- Add the provided .xcframework file to this group.  
- Go to Targets, Select your project's target and then in general tab, embed & sign the IDV.xcframework. -->

<!-- :::note
Make sure your project contains a Podfile. If it does not, run the bash ```pod init``` markdown following command in the root of your project directory.
::: -->

- Open Xcode: Go to the File menu and select Add Package Dependencies.
- Enter Repository URL: Paste the following URL into the search bar:
```jsx  
https://IDV-Support@bitbucket.org/idenfo-net/idv-package
```
<!-- - Authenticate: Xcode will prompt you for credentials to access the repository. Enter the following App Password in the password field:
```jsx  
ATBBuNH7N5f7njjEakPd3GWwPBGu70A1E174  
``` -->

- Authenticate: Xcode will prompt you for credentials to access the repository.
Details to get Authorization token are in [Authorization section](#authorization)

- Select Version: In the version selection dialog, choose Tag **1.0.1** from the tag selection menu. Also, make sure to select the appropriate target (usually your main app target) where the package dependency should be added.
- Download and Install: Click Download to install the IDV package as a dependency. Once installed, you can now start using the IDV framework in your project.


<!-- Add following pod to your Podfile
```jsx 
pod 'IDV' , :git => 'https://IDV-Support@bitbucket.org/idenfo-net/idv-package', :tag => '2.0.0'
 ``` -->

### Permissions
Application Info.plist must contain ```Privacy - Camera Usage Description``` with corresponding explanation to end-user about how the app will use these permissions

### Authorization
Before using the mobile SDK, follow these steps to obtain your unique API Key, Secret Key:

#### Register on Idenfo Direct:
Depending on your region, use one of the following registration links:

- UK Region: https://ukdirect.idenfo.com
- UAE Region: https://uaedirect.idenfo.com
- Pakistan Region: https://pkdirect.idenfo.com

#### Access Developer Tools:
After registering, navigate to the "Developer Tools" section on Idenfo Direct.

#### Generate Your Unique Keys:

- Go to "Application Access."
- Add your project's title in the title section and bundle id in the domain section
- Click "Add Application" to create a new application.
- Once your application is created, you can view your API Key, Secret Key and authToken by clicking "Modify" on the application.

⁠The mobile SDKs are authorized by passing the unique API Key and Secret Key in the authorization object that is to be passed to sdk launch function.

<!-- For detailed information on how to use this parameter, please refer to the documentation [here](../parameters/presets#presets). -->

<!-- ### Configuration
The mobile SDK can be configured on the basis of parameters provided in the launchIDV function. The details of parameters can be found [here](../parameters/presets#presets). -->


### Initialisation

To initialize the IDV framework, follow these steps:

- Import the Framework:
```swift
import IDV
```
- Create an IDVFramework Object:
``` swift
let idvObj = IDVFramework() 
```
- Set Up Authentication Object and create a dictionary containing your API credentials and user ID:
``` swift
let authObj = [
    "apiKey": "(Provide your API Key)",
    "apiSecret": "(Provide your API Secret)",
    "userId": UUID().uuidString // unique user id or uuid string
]
```
- Set Delegate and assign the delegate to handle framework callbacks:
``` swift
idvObj.delegate = self
```
- Launch the IDV Framework and use the launchIDV method to start the IDV process:
``` swift
idvObj.launchIDV(preset: 1, authObject: authObj, viewControl: self)
```


The SDK receives callback events as a result. The callback is received via the IDVDelegate protocol.

Associated function:
```swift
func mrzString(outputObj: IDV.SDKOutputModel) {
    print(outputObj)
}
```

| **Property**    | **Type**   | **Description**                                                                 |
| --------------- | ---------- | ------------------------------------------------------------------------------- |
| `picture`       | `String?`  | Base64-encoded image of the captured document picture.                           |
| `cardFrontImage`| `String?`  | Base64-encoded image of the front of the document card.                          |
| `cardBackImage` | `String?`  | Base64-encoded image of the back of the document card.                           |
| `selfieImage`   | `String?`  | Base64-encoded selfie image of the user.                                         |
| `result`        | `Result?`  | Object containing extracted document data (see detailed table below).            |
| `sessionId`     | `String?`  | Unique session identifier for tracking purposes.                                 |

<!-- #### Result Object Details

| **Property**              | **Type**   | **Description**                                                      |
| ------------------------- | ---------- | -------------------------------------------------------------------- |
| `dateexpiry`              | `String?`  | Document expiry date.                                                |
| `dateissue`               | `String?`  | Document issue date.                                                 |
| `gender`                  | `String?`  | User’s gender.                                                       |
| `dOB`                     | `String?`  | Date of birth of the user.                                           |
| `name`                    | `String?`  | Full name of the user.                                               |
| `givenName`               | `String?`  | Given name of the user.                                              |
| `licenseNumber`           | `String?`  | License number (if applicable).                                      |
| `surname`                 | `String?`  | Surname of the user.                                                 |
| `authority`               | `String?`  | Issuing authority for the document.                                  |
| `passport_no`             | `String?`  | Passport number (if applicable).                                     |
| `code`                    | `String?`  | Document code.                                                       |
| `type`                    | `String?`  | Type of document (e.g., passport, ID).                               |
| `sex`                     | `String?`  | User’s sex (alternative to gender).                                  |
| `pob`                     | `String?`  | Place of birth of the user.                                          |
| `nationality`             | `String?`  | Nationality of the user.                                             |
| `address`                 | `String?`  | User’s address.                                                      |
| `entitlement_categories`  | `String?`  | Categories of entitlement (if applicable).                           | -->

### SDK Size
The complete size of IDV iOS SDK is 8 MB.

### Information
If you require a lightweight SDK, we can offer a version that operates exclusively on physical devices and has a size of only 4MB

