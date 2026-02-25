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
  await page.locator('.card-body').first().waitFor();
  const Titles = await page.locator('.card-body b').allTextContents();
  console.log(Titles);
  await page.screenshot({ path: '../Screenshot/HomeScreen.png', fullPage: true });
  console.log(await ProdNameTitle.allTextContents());

  const count = await ProdNameTitle.count();

  for (let i = 0; i < count; i++) {

    if (await ProdNameTitle.nth(i).locator("b").textContent() === ProductName) {
      await ProdNameTitle.nth(i).locator("text= Add To Cart").click();
      break;
    }

  }

  // await cartIcon.nth(1).click();
  await cartBtn.click();

  await page.locator("div li").first().waitFor();

  const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(bool).toBeTruthy();

  // console.log(await page.locator('.cartSection h3').textContent());
  // await expect(page.locator('.cartSection h3')).toHaveText("iphone 13 pro");
  await checkoutBtn.click();

  await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
  const counrtydropdown = page.locator(".ta-results");
  await counrtydropdown.waitFor();
  const dropdownCount = await counrtydropdown.locator("button").count();
  for (let i = 0; i < dropdownCount; ++i) {
    const text = await counrtydropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await counrtydropdown.locator("button").nth(i).click();
      break;
    }
  }
  await page.screenshot({ path: '../Screenshot/CheckoutScreen.png', fullPage: true });
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderConfirmation = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderConfirmation);
  const orderConfirmationID = orderConfirmation.split(" ")[2];
  console.log(orderConfirmationID);

  await page.locator("button[routerlink='/dashboard/myorders']").click();


  const orderIDInMyOrders = await page.locator(".table tbody tr th").first().textContent();

  expect(orderIDInMyOrders).toBe(orderConfirmationID);


  for (let i = 0; i < orderIDInMyOrders.length; ++i) {
    const orderID = await page.locator(".table  tbody tr th").nth(i).textContent();

    if (orderID === orderConfirmationID) {

      console.log("Order ID Matched");
       await page.locator("td button[class='btn btn-primary']").nth(i).locator("text= View").click();

      break;
    } else {

      console.log("Order ID Not Matched");
    }
  }

   const finalorderid = await page.locator("div.col-text").textContent();
   console.log("finalorderid: " + finalorderid);
   await expect(page.locator("div.col-text")).toHaveText(orderConfirmationID);
  await page.pause();



});