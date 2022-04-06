const { Selector, Role, t } = require("testcafe");
const { expect } = require("chai");
import {baseUrl, pwd, user} from '../config.js';


const userOne = Role(baseUrl(), async t => {
    await t
        .typeText('input[name="loginfmt"]', user)
        .click( '[type="submit"]')
        .typeText('input[name="passwd"]', pwd)
        .click( '[type="submit"]');
});

fixture`E2E on CRIS`
    .page(baseUrl())
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async t => {
        await t
            .maximizeWindow();
        await t.useRole(userOne);
        // t.fixtureCtx.siteName = random.randomDept + ' QA SITE';
        // t.fixtureCtx.appName = random.randomProd + 'QA APP';
        // t.fixtureCtx.buildAppUrl = '/Admin/Assets/assets.cfm?siteID=1#apps';
        // const ua = await getUA();
        //
        // t.fixtureCtx.browserAlias = uaParser(ua).browser.name;

    })
    .afterEach(async t => {
        await t.maximizeWindow();
    })
    .after(async () => {
        console.log('Test si Done!');
    });

test("Log in CRIS and verify that the logo link points to home page", async () => {

    const title = await Selector("body > app-root > div > top-nav > nav > a").getAttribute('href');

    expect(title).to.contain("#/home");
});

test("Verify user is logged in CRIS", async () => {
    await t.maximizeWindow()
    await t.switchToMainWindow();

    const userNm = await Selector("body > app-root > div > top-nav > nav > div").innerText;
    expect(userNm).to.equal("Nicolae Lapuste");
});

test("Verify that there are two subpages on CRIS homepage", async () => {

    const sectionHeader = await Selector(".section-header").innerText;
    const reminders = await Selector("a.report-link").nth(0).innerText;
    const remindersTxt = await Selector("body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > ul > li > div.report-text").innerText;
    const daylySales = await Selector("a.report-link").nth(1).innerText;
    const daylySalesTxt = await Selector("body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > ul > li > div.report-text").innerText;
    await t.switchToMainWindow();
    expect(sectionHeader).to.equal("My Reports");
    expect(reminders).to.equal("Consultation Reminders");
    expect(remindersTxt).to.equal("Patients to be contacted for scheduled consultations");
    expect(daylySales).to.equal("Daily Sales");
    expect(daylySalesTxt).to.equal("All medical cannabis sales completed in this store every day");

});
