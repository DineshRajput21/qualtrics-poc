# qualtrics-poc

A POC of the Qualtrics 2.0.0 SDK running in React Native.

## Setup 

In order to run the application you will need to install node packages and ios pods.


Clone the repo to local machine, cd into the directory with `cd qualtrics-poc` and run:
`npm install` in the root of the project in order to install node packages.

run `cd ios && pod install & cd ..` to install native ios pods.

use `react-native run-ios` to launch the simulator and run the application.

## Additional Configuration

### Initialize Project:

In App.js the **Qualtrics SDK** is configured with the following block:<br><br>
`Qualtrics.initializeProject( 'BRAND ID', 'PROJECT ID');`<br><br>

### Display intercept 

`Qualtrics.evaluateIntercept('INTERCEPT_ID', async response => {
                if (response.passed) {
                    var intercept = await Qualtrics.displayIntercept('INTERCEPT_ID');
                } else {
                    console.log('failed:', response);
                }
            });`


### App Screenshots

![Screenshot 2021-07-15 at 7 25 06 PM](https://user-images.githubusercontent.com/6690041/125800021-1c38ae37-d81e-4455-ac7b-8872ea156342.png)
![Screenshot 2021-07-15 at 7 25 46 PM](https://user-images.githubusercontent.com/6690041/125800114-be819a9a-80a7-4f2e-ac5c-f888000528fb.png)
![Screenshot 2021-07-15 at 7 26 14 PM](https://user-images.githubusercontent.com/6690041/125800183-a4f33c05-47c3-4cbb-9829-b7298285328f.png)
![Screenshot 2021-07-15 at 7 32 10 PM](https://user-images.githubusercontent.com/6690041/125801071-6b820d13-5ba2-457f-a15a-169424b935d7.png)
![Screenshot 2021-07-15 at 7 32 45 PM](https://user-images.githubusercontent.com/6690041/125801153-209aefee-5697-4f58-b408-87a25ddc5911.png)

