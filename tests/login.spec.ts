import{test,expect} from "@playwright/test";
//check of the login page url is working 
//if working whether the controls are visible

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/login');
    const username=page.locator('input[name="name"]');
    const password=page.locator('input[name="password"]');
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    const submitbtn=page.locator('button[type="submit"]');
    await expect(submitbtn).toBeVisible();
});

test('checkif any username error message is displayed if the username field is blank',async({page})=>{

    await page.fill('input[name="password"]','testuser');
    await page.click('button[type="submit"]');

    const usernameErrorMessage=page.locator('text=username is required');
    await expect(usernameErrorMessage).toBeVisible();
    
});

test('checkif any password error message is displayed if the username field is blank',async({page})=>{
  
    await page.fill('input[name="name"]','testuser');
    await page.click('button[type="submit"]');
 

    const usernameErrorMessage=page.locator('text=Password is required');
    await expect(usernameErrorMessage).toBeVisible();
    
});

test.only('checkif both error message is displayed if the username and password field is blank',async({page})=>{
    await page.goto('http://localhost:4200/login');
    const username=page.locator('input[name="name"]');
    const password=page.locator('input[name="password"]');
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    const submitbtn=page.locator('button[type="submit"]');
    await expect(submitbtn).toBeVisible();
    
    await page.click('button[type="submit"]');
 

    const usernameErrorMessage=page.locator('text=username is required');
    await expect(usernameErrorMessage).toBeVisible();

    const ErrorMessage=page.locator('text=Password is required');
    await expect(ErrorMessage).toBeVisible();

 
});