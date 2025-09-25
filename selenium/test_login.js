const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
    // Browser launch
    let driver = new Builder().forBrowser('chrome').build();

    try {
        // Website open karein
        await driver.get('https://tube-tweet-mu.vercel.app/'); 

        // Username input field fill karein
        await driver.findElement(By.name('email')).sendKeys('demo2@gmail.com');


        // Password input field fill karein
        await driver.findElement(By.name('password')).sendKeys('demo4'); 

        // Login button click karein
        await driver.findElement(By.css('button[type="submit"]')).click();


  

        console.log('Login successful!');
        await driver.sleep(30000); 

    } catch (err) {
        console.error('Login failed:', err);
    } finally {
        // Browser close
       
        await driver.quit();
    }
})();
