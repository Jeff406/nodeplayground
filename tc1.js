var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://console.audiencemedia.com/issue/list');
driver.findElement(By.name('Login')).sendKeys('admin');
driver.findElement(By.name('Password')).sendKeys('vnteam');
driver.findElement(By.name('LoginButton')).click();
driver.wait(until.titleIs('Audience Media Console'), 1000);
driver.switchTo().defaultContent();
driver.findElement(By.xpath('//*[@id="content"]/div[2]/a')).click();
//driver.switchTo().frame(driver.findElement(By.xpath('//*[@class="modal-iframe"]')));

//driver.wait(until.ableToSwitchToFrame(driver.findElement(By.xpath('//*[@class="modal-iframe"]'))), 1000);
driver.wait(until.ableToSwitchToFrame({xpath:'//*[@class="modal-iframe"]'}), 1000);

driver.findElement(By.name('issue_name')).sendKeys('Le quoc thai');
driver.switchTo().defaultContent();

//driver.findElement(By.name('q')).sendKeys('webdriver');
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();
//*[@class="modal-iframe"]
//*[@id="content"]/div[2]
