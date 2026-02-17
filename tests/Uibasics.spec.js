const { test, expect } = require('@playwright/test');



test('First playwright test', async ({ browser }) => {
      // chrome -Plugins/ cookies
      //edge -Plugins/ cookies
      const context = await browser.newContext();
      const page = await context.newPage();
      const username = page.locator('input#username');
      const password = page.locator('input#password');
      const checkbox = page.locator('input[type="checkbox"]');
      const signInBtn = page.locator('input#signInBtn');
      const MobileNameTitle = page.locator('.card-body a');
      
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
      await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class', 'blinkingText');
      await username.fill("rahulshettyacademy");
      await password.fill("@830$3mK2");
      await checkbox.click();
      await signInBtn.click();
      //console.log(await page.locator("[style*='block']").textContent());
      await expect(page.locator("[style*='block']")).toContainText("Incorrect");
      await page.screenshot({ path: 'screenshot.png', fullPage: true });
      await password.fill("");
      await password.fill("Learning@830$3mK2");
      await signInBtn.click();
      console.log(await MobileNameTitle.first().textContent());
     // console.log(await MobileNameTitle.nth(1).textContent());
        const allMobileNameTitles = await MobileNameTitle.allTextContents();
        console.log(allMobileNameTitles);
      await page.screenshot({ path: 'HomeScreenpage.png', fullPage: true });

});

test.only('child window test', async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
      const documentlink = page.locator("[href*='documents-request']");
      const username = page.locator('input#username');
      console.log(await page.title());
 
      const [newPage]= await Promise.all([
      context.waitForEvent('page'),
       documentlink.click(),

      ])

     const text = await newPage.locator(".red").textContent();
     console.log(text);
     const arrayText = text.split("@")
     const Domainemailid = arrayText[1].split(" ")[0];
     console.log(Domainemailid);
     newPage.close();

    await page.locator('#username').fill(Domainemailid);
    await page.pause();
      console.log(await page.locator('#username').inputValue());

      //await page.pause();

});

test('Second playwright test', async ({ page }) => {

      await page.goto("https://www.irctc.co.in/nget/train-search/");

      console.log(await page.title());
      await expect(page).toHaveTitle("IRCTC – Official Indian Railway Catering & Tourism Corporation Portal");




});