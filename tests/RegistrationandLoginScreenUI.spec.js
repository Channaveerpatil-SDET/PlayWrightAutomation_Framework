const { test,expect} = require('@playwright/test');

test.only('Login Screen UI', async ({ page }) => {
        const RegisterHere = page.locator('.text-reset');
        const firstname = page.locator('#firstName');
        const lastname = page.locator('#lastName');
        const email = page.locator('#userEmail');
        const mobile = page.locator('#userMobile');
        const selectOccupation = page.locator('select[formcontrolname="occupation"]');
        const gender = page.locator("input[value='Male']");
        const checkbox = page.locator("input[type='checkbox']");
        const password = page.locator('#userPassword');
        const confirmPassword = page.locator('#confirmPassword');
        const registerBtn = page.locator('input#login');
        const loginBtn = page.locator('input#login');
        const cartTitle = page.locator('.card-body b');
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await expect(page).toHaveTitle("Let's Shop");
        await page.screenshot({ path: '../Screenshot/LoginScreen.png', fullPage: true });
        // await RegisterHere.click();
        // await firstname.fill("test");
        // await lastname.fill("test");
        // await email.fill("test1234@gmail.com");
        // await mobile.fill("1234567890");
        // await selectOccupation.selectOption("Engineer");
        // await gender.click();
        // await checkbox.click();
        // await password.fill("Test@123");
        // await confirmPassword.fill("Test@123");
        // await page.screenshot({ path: '../Screenshot/RegistrationScreen.png', fullPage: true });
        await registerBtn.click();
        await email.fill("test1234@gmail.com");
        await password.fill("Test@123");
        await loginBtn.click();
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: '../Screenshot/HomeScreen1.png', fullPage: true });
        console.log(await cartTitle.first().textContent());
        console.log(await cartTitle.nth(1).textContent());
       // const cartTitl = page.locator('.card-body b');
        console.log(await cartTitle.allTextContents());



});

