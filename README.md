# flutter-appium-node

[[NPM - Latest Version]](https://npmjs.org/package/flutter-appium-node)


[flutter-appium-node](https://github.com/meetmarakana/flutter-appium-node) is a library that helps to find the flutter elements present on the flutter app build, and later any action can be perfomed on that element using the webdriverIo driver. This library helps user to create an automation framework using node, [Appium](https://appium.io) and [WebdriverIo](https://webdriver.io) for Flutter application.



## Quick start

Assuming you have an existing Appium setup using WebdriverIO:

- Install the `flutter-appium-node` package: `npm i -D flutter-appium-node`
- Use `require` function to use the package: `require('flutter-appium-node');`
- Call any finder function in your tests (for example): `byText("Next")`

index.js
```js
const wdio = require('webdriverio');
const { byText } = require('flutter-appium-node');
  
  const opts = {
    port: 4723,
    path: '/wd/hub',
    capabilities: {
        platformName: 'Android',
        deviceName: '',
        // Add your flutter apk build path here and make sure to 
        // enable the flutter driver extension by calling this 
        // enableFlutterDriverExtension() function before runApp()
        app: __dirname +  '/flutterApp.apk',
        automationName: 'Flutter'
    }
  };
  
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    const nextButton = byText("Next");
    const driver = await wdio.remote(opts);
    await driver.switchContext('FLUTTER');
    await sleep(7000);
    await driver.elementClick(nextButton);
    await sleep(10000);
    driver.deleteSession();
})();
```