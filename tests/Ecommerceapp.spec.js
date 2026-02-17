const { test, expect } = require('@playwright/test');



test('Ecommerce application', async ({ page }) => {
    
    const ProductName = "iphone 13 pro";
      const ProdNameTitle = page.locator('.card-body');
      const cartIcon = page.locator("[class*='fa-shopping-cart']");
      const cartBtn = page.locator('[routerlink="/dashboard/cart"]');
      const checkoutBtn = page.locator('.subtotal button');
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        const email = page.locator('#userEmail');
        const password = page.locator('#userPassword');
        const loginBtn = page.locator('input#login');
        await expect(page).toHaveTitle("Let's Shop");
        await email.fill("test1234@gmail.com");
        await password.fill("Test@123");
        await page.screenshot({ path: '../Screenshot/LoginScreen.png', fullPage: true });
        await loginBtn.click();
        await page.waitForLoadState('networkidle');
        await  page.locator('.card-body').first().waitFor();
          const Titles = await page.locator('.card-body b').allTextContents();
            console.log(Titles);
        await page.screenshot({ path: '../Screenshot/HomeScreen.png', fullPage: true });
        console.log(await ProdNameTitle.allTextContents());

        const count = await ProdNameTitle.count();

        for(let i=0; i<count; i++){
              
           if(await ProdNameTitle.nth(i).locator("b").textContent() === ProductName){
            await ProdNameTitle.nth(i).locator("text= Add To Cart").click();
            break;
           }

        }
        









        // // await page.pause();
        // await cartIcon.nth(1).click();
        // await cartBtn.click();
        // console.log(await page.locator('.cartSection h3').textContent());
        // await expect(page.locator('.cartSection h3')).toHaveText("ADIDAS ORIGINAL");
        // await checkoutBtn.click();
    
        // //await page.pause();


});