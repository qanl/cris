const { Selector, Role, ClientFunction, t } = require("testcafe");
const { expect } = require("chai");
import {baseUrl} from '../../config.js';


// const userOne = Role(baseUrl()+'/#/home', async t => {
//     await t
//         .typeText('input[name="loginfmt"]', user)
//         .click( '[type="submit"]')
//         .typeText('input[name="passwd"]', pwd)
//         .click( '[type="submit"]');
// }, { preserveUrl: true }
// );

fixture`E2E - CANSAFE HOME PAGE`
    .page(baseUrl())
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async t => {
        await t
            .maximizeWindow();
        // await t.useRole(userOne);

    })
    .afterEach(async t => {
        await t.maximizeWindow();
    })
    .after(async () => {
        console.log('Test is Done!');
    });

test.only("Verify Cann Safe home page elements", async () => {
    const getLocation = ClientFunction(() => document.location.href);
    const title = await Selector("body > header > nav > div > a > img").getAttribute('alt');
    const logo = await Selector('body > header > nav > div > a > img');
    const welcome = await Selector('#navbarToggler > ul > li:nth-child(1) > a').innerText;
    const drugIntCheck = await Selector('#navbarToggler > ul > li:nth-child(2) > a').innerText;
    const learn = await Selector ('#navbarToggler > ul > li:nth-child(3) > a > span').innerText;

    await t
        .expect(getLocation()).contains(  'https://crisrec-web.azurewebsites.net/')
        .expect(logo.exists).ok('No logo here!!!')

    expect(title).to.contain("Logo");
    expect(welcome).to.contain("Welcome");
    expect(drugIntCheck).to.contain("Drug Interaction Check");
    expect(learn).to.contain("Learn");

});
//
// test("Verify user is logged in CRIS", async () => {
//     await t.maximizeWindow()
//     await t.switchToMainWindow();
//
//     const userNm = await Selector("body > app-root > div > top-nav > nav > div").innerText;
//     expect(userNm).to.equal("Nicolae Lapuste");
// });
//
// test("Verify that there are two subpages on CRIS homepage", async () => {
//
//     const sectionHeader = await Selector(".section-header").innerText;
//     const reminders = await Selector("a.report-link").nth(0).innerText;
//     const remindersTxt = await Selector("body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > ul > li > div.report-text").innerText;
//     const daylySales = await Selector("a.report-link").nth(1).innerText;
//     const daylySalesTxt = await Selector("body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > ul > li > div.report-text").innerText;
//     await t.switchToMainWindow();
//     expect(sectionHeader).to.equal("My Reports");
//     expect(reminders).to.equal("Consultation Reminders");
//     expect(remindersTxt).to.equal("Patients to be contacted for scheduled consultations");
//     expect(daylySales).to.equal("Daily Sales");
//     expect(daylySalesTxt).to.equal("All medical cannabis sales completed in this store every day");
//
// });
// test("Verify that you can see CRIS notifications (created by admin portal)", async () => {
//     await t.maximizeWindow()
//     await t.switchToMainWindow();
//
//     const crisNotif = await Selector("div.section-header").nth(1).innerText;
//     expect(crisNotif).to.equal("CRIS Notifications");
// });
//
// test("Verify going to the wrong URL, should redirect the user to 404 page)", async () => {
//     await t.maximizeWindow()
//     await t.switchToMainWindow();
//
//
//     const crisNotif = await Selector("div.section-header").nth(1).innerText;
//     expect(crisNotif).to.equal("CRIS Notifications");
//     const daylySales = await Selector("a.report-link").nth(1);
//
//     const getLocation = ClientFunction(() => document.location.href);
//
//     await t
//         .navigateTo(baseUrl()+ '/#/daily-sales')
//         .wait(1000)
//         .expect(getLocation()).contains('/#/daily-sales');
//
//     await t
//         .navigateTo(baseUrl()+ '/#/daily-sale')
//         .wait(1000)
//         .expect(Selector('#statusCode-label').innerText).contains('404')
//         .expect(getLocation()).contains(  '/#/error-handling/404');
//
//     await t
//         .click('#btnBackToCris')
//         .wait(1000)
//         .expect(getLocation()).contains('/#/home');
//
// });
//
// test("Verify that by default when the user logs in to CRIS, privacy should be ON", async () => {
//     await t.maximizeWindow()
//     await t.switchToMainWindow();
//
//     const privacyON = await Selector("button.btn.btn-toggle.active").exists;
//     await t
//         .wait(1000)
//         .expect(privacyON).ok('Oops, the Privacy button is toggles OFF');
// });
//
//
// test("Verify that the user should sign out from CRIS by clicking on sign out button", async () => {
//     await t.maximizeWindow()
//     await t.switchToMainWindow();
//     const getLocation = ClientFunction(() => document.location.href);
//     const signOut = await Selector("#signOutBtn > div > div:nth-child(2) > strong");
//     await t
//         .wait(1000)
//         .click('button#dropdownMenuButton > img')
//         .wait(500)
//         .click(signOut)
//         .wait(1000)
//         .expect(getLocation()).contains(  'https://login.microsoftonline.com/');
// });