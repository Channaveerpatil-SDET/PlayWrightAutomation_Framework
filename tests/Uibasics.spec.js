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

test('Second playwright test', async ({ page }) => {

      await page.goto("https://www.irctc.co.in/nget/train-search/");

      console.log(await page.title());
      await expect(page).toHaveTitle("IRCTC – Official Indian Railway Catering & Tourism Corporation Portal");




});