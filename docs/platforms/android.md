---
sidebar_label: "Android Integration"
sidebar_position: 2
---

# Android SDK

## Getting Started

### Requirements

- Android 7.1 and higher
- Internet 

### Permissions

The Android SDK requires the following permissions to function properly:

- Access Network State
- Internet Access
- Camera

You can include the following code in the AndroidManifest file to grant the required access:

```groovy
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-feature
    android:name="android.hardware.camera"
    android:required="false" 
/>
<uses-permission android:name="android.permission.CAMERA" />
```

### Authorization

Before utilizing the mobile SDK, you must acquire:

- API Key and Secret Key, these keys are unique for each user and are required for making API calls. You will need to generate and securely store both the API Key and Secret Key to authenticate requests to our backend services.

- The authToken is essential when fetching the SDK from JitPack. JitPack allows you to easily include the SDK in your project, but it requires authentication using this token to ensure you are authorized to access the SDK.

In order to obtain API Key, Secret Key and authToken follow the steps below:

#### Register on Idenfo Direct
Depending on your region, use one of the following registration links:

- UK Region: https://ukdirect.idenfo.com
- UAE Region: https://uaedirect.idenfo.com
- Pakistan Region: https://pkdirect.idenfo.com

#### Access Developer Tools
After registering, navigate to the "Developer Tools" section on Idenfo Direct.

#### Generate Your Unique Keys

- Go to "Application Access."
- Add your project's title in the title section and bundle id in the domain section
- Click "Add Application" to create a new application.
- Once your application is created, you can view your API Key, Secret Key and authToken by clicking "Modify" on the application.



The mobile SDKs are authorized by passing the unique API Key and Secret Key in the initialization code. This ID is specific to each client and is required for successful authorization.

### Integration

Add identity verfication library in your build.gradle:

```groovy
implementation 'org.bitbucket.idenfo-net:idv:1.3'
```

Add authToken in gradle.properties

```groovy
authToken= <codekey>
```

<!-- Add the following code in your setting.gradle: -->

<!-- ```groovy
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        jcenter()
        maven {
            url "https://jitpack.io"
            credentials { username authToken }
        }
    }
}
``` -->

Add the following code in your setting.gradle:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gdpr" label="Groovy">
    ```groovy
    dependencyResolutionManagement {
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        repositories {
            google()
            mavenCentral()
            jcenter()
            maven {
                url "https://jitpack.io"
                credentials { username authToken }
            }
        }
    }
    ```
  </TabItem>
  <TabItem value="kotlin" label="Kotlin">
    ```android
    dependencyResolutionManagement {
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        repositories {
            google()
            mavenCentral()
            jcenter()
            maven {
                url = uri("https://jitpack.io")
                credentials {
                    username = authToken
                }
            }
        }
    }

    ```
    android
  </TabItem>
</Tabs>



Instructions to get the authToken are in the [Authorization](./android#authorization) section

<!-- For detailed information on how to use this parameter, please refer to the documentation [here](../parameters/presets#presets). -->

<!-- ### Configuration
The mobile SDK can be configured on the basis of parameters provided in the launchIDV function. The details of parameters can be found [here](../parameters/presets#presets). -->

### Initialisation

Our IDV SDK can be initialized by using the following code:

```groovy
val bundle = Bundle()
val sdkIntent = Intent(this, SelectDocumentType::class.java)
StaticVarAndFuc.initialize(this)
bundle.putParcelable(
    StaticVarAndFuc.IDV_DATA,
    IDVINTIALIZEMODEL("1", null, apiKey = "<apiKey>", apiSecret = "<apiSecret>")
)
sdkIntent.putExtras(bundle)
launcher.launch(sdkIntent)

```

### Output

```groovy
private var launcher: ActivityResultLauncher<Intent> = registerForActivityResult<Intent, ActivityResult>(
    ActivityResultContracts.StartActivityForResult()
) { result: ActivityResult ->
        Log.e("SdkDataReceive", StaticVarAndFuc.outputJsonString.toString())
  }
```

| **Property**    | **Type**   | **Description**                                                                 |
| --------------- | ---------- | ------------------------------------------------------------------------------- |     
| `picture`       | `String?`  | Base64-encoded image of the captured document picture.                           |
| `cardFrontImage`| `String?`  | Base64-encoded image of the front of the document card.                          |
| `cardBackImage` | `String?`  | Base64-encoded image of the back of the document card.                           |
| `selfieImage`   | `String?`  | Base64-encoded selfie image of the user.                                         |
| `result`        | `Result?`  | Object containing extracted document data            |
| `sessionId`     | `String?`  | Unique session identifier for tracking purposes.                                 |


### SDK Size

The complete size of IDV Android SDK is 13 MB.
