// webdriverio as W3C capabilities
import wdio from "webdriverio";
import assert from "assert";

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    //platformVersion: "9",
    "appium:deviceName": "Nexus_S_API_30",
    "appium:app": "./app-debug.apk",
    "appium:appPackage": "com.example.myapplication",
    "appium:appActivity": ".MainActivity",
    "appium:automationName": "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Edit");
  const value = await field.getText();
  assert.strictEqual(value, "Edit");

  await client.deleteSession();
}

main();