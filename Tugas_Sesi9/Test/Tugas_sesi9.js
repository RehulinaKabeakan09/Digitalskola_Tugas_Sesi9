const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Tugas sesi9 - Testing WEB Sauce Demo', function () {
    let driver;

//before(async function () {
    //driver = await new Builder().forBrowser('chrome').build();
//});

    it('Visit SauceDemo dan login', async function () {
        options = new chrome.Options();
        driver = await new Builder().forBrowser('chrome').build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        // assert: memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        // inputs
        let inputUsername = await driver.findElement(By.xpath('//*[@id="user-name"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@id="password"]'))
        let buttonLogin = await driver.findElement(By.xpath('//*[@id="login-button"]'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()
        
        // tunggu element tampil
        let buttonCart = await driver.wait(
            until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')), 
            10000
        );
        await driver.wait(until.elementIsVisible(buttonCart), 5000, 'Shopping cart harus tampil');
        
        // assert: elememt ada
        await buttonCart.isDisplayed()

        // assert: text dalam element benar
        let textAppLogo = await driver.findElement(By.className('app_logo'))
        let logotext = await textAppLogo.getText()
        assert.strictEqual(logotext, 'Swag Labs')    

        await driver.sleep(1700)
       
    })

     // Sort Z to A
    it('Sort Z to A', async function () { 
        let dropdown1 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select'))
        let dropdownZtoA = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'))
       
        // Action Sort Z to A
        await dropdown1.click()
        await dropdownZtoA.click()

      })

      // SOrt A to Z
    it('Sort A to Z', async function () { 
        let dropdown2 = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select'))
        let dropdownAtoZ = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]'))

    // Action Sort A to Z
        await dropdown2.click()
        await dropdownAtoZ.click()


        after(async function () {
    await driver.quit();
});

      })
         });

