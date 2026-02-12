const {test,expect}= require('@playwright/test');



test('First playwright test', async ({browser}) => 

    {
     // chrome -Plugins/ cookies
      //edge -Plugins/ cookies
      const context= await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/learning-paths/");
            console.log(await page.title());
         await expect(page).toHaveTitle("QA Learning Paths | QA Automation, AI Testing & SDET Roadmaps");
      

    });

    test('Second playwright test', async ({page}) => 

    {
      
      await page.goto("https://www.irctc.co.in/nget/train-search/");
      
       console.log(await page.title());
       await expect(page).toHaveTitle("IRCTC – Official Indian Railway Catering & Tourism Corporation Portal");


      

    });