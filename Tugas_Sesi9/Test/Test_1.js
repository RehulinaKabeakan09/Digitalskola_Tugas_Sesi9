const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search Test', function () {
    
    it('Visit SauceDemo dan cek page title', async function () {
        driver = await new Builder().forBrowser('chrome').build();
    
            // driver = await new Builder().forBrowser('chrome').build();
    
            await driver.get('https://www.saucedemo.com');
          //  const title = await driver.getTitle();
    
        })
    });
