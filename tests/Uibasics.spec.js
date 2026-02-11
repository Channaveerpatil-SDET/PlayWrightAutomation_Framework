const {test}= require('@playwright/test');



test('First playwright test', async ({browser}) => 

    {
     // chrome -Plugins/ cookies
      //edge -Plugins/ cookies
      const context= await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/learning-paths/");

      

    });

    test.only('Second playwright test', async ({page}) => 

    {
      
      await page.goto("https://www.irctc.co.in/nget/train-search/");

      

    });