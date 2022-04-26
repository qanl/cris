import { baseUrl, pwd, user } from "../../config.js";

const { Selector, Role, ClientFunction, t } = require("testcafe");
const { expect } = require("chai");

const endPoint = [
  "/consultation-reminders",
  "/daily-sales",
  "/orders",
  "/patients",
  "/patients/365/information",
  "/patients/365/medical-authorizations",
  "/patients/365/orders",
  "/patients/365/medications",
  "/patients/365/consultations",
  "/patients/365/notes",
  "/patients/365/attachments",
  "/hcps",
  "/medical-authorizations",
  "/products",
  "/licensed-sellers",
  "/virtual-care",
];

const userOne = Role(
  `${baseUrl()}/#/home`,
  async (t) => {
    await t
      .typeText('input[name="loginfmt"]', user)
      .click('[type="submit"]')
      .typeText('input[name="passwd"]', pwd)
      .click('[type="submit"]');
  },
  { preserveUrl: true }
);

const ct = endPoint.length;

for (let i = 0; i < ct; i++) {
  const title = endPoint[i];

  // console.log(title);
  const userTwo = Role(
    "https://cris-web-int.36eighttechnologies.com" + `${title}`,
    async (t) => {
      await t
        .typeText('input[name="loginfmt"]', user)
        .click('[type="submit"]')
        .typeText('input[name="passwd"]', pwd)
        .click('[type="submit"]');
    },
    { preserveUrl: true }
  );

  fixture`E2E - C/R/I/S End Points`.page(`${baseUrl()}${title}`);
  // .disablePageCaching;

  test(
    "Test " + `${title}` + " endPoint on 36eighttechnologies.com site",
    async (t) => {
      await t.maximizeWindow();
      await t.useRole(userTwo);
      await t.openWindow(`${baseUrl()}${title}`);
      await t.maximizeWindow().switchToMainWindow().wait(1000);
      const getUrl = ClientFunction(() => document.location.href);
      await t.expect(getUrl()).contains(title);
      await t.closeWindow();
    }
  ).disablePageCaching;
}

fixture`E2E - C/R/I/S HOME PAGE Elements`
  .page(`${baseUrl()}/home`)
  .before(async () => {
    console.log("Test begins");
  })
  .beforeEach(async (t) => {
    await t.maximizeWindow();
    await t.useRole(userOne);
  })
  .afterEach(async (t) => {
    await t.maximizeWindow();
  })
  .disablePageCaching.after(async () => {
    console.log("Test is Done!");
  });

test("Log in CRIS and verify that the logo link points to home page", async () => {
  const title = await Selector(
    "body > app-root > div > top-nav > nav > a"
  ).getAttribute("href");

  expect(title).to.contain("#/home");
});

test("Verify user is logged in CRIS", async () => {
  await t.maximizeWindow();
  await t.switchToMainWindow();

  const userNm = await Selector("body > app-root > div > top-nav > nav > div")
    .innerText;
  expect(userNm).to.equal("Nicolae Lapuste");
});

test("Verify that there are two subpages on CRIS homepage", async () => {
  const sectionHeader = await Selector(".section-header").innerText;
  const reminders = await Selector("a.report-link").nth(0).innerText;
  const remindersTxt = await Selector(
    "body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > ul > li > div.report-text"
  ).innerText;
  const daylySales = await Selector("a.report-link").nth(1).innerText;
  const daylySalesTxt = await Selector(
    "body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > ul > li > div.report-text"
  ).innerText;
  await t.switchToMainWindow();
  expect(sectionHeader).to.equal("My Reports");
  expect(reminders).to.equal("Consultation Reminders");
  expect(remindersTxt).to.equal(
    "Patients to be contacted for scheduled consultations"
  );
  expect(daylySales).to.equal("Daily Sales");
  expect(daylySalesTxt).to.equal(
    "All medical cannabis sales completed in this store every day"
  );
});
test("Verify that you can see CRIS notifications (created by admin portal)", async () => {
  await t.maximizeWindow();
  await t.switchToMainWindow();

  const crisNotif = await Selector("div.section-header").nth(1).innerText;
  expect(crisNotif).to.equal("CRIS Notifications");
});

test("Verify going to the wrong URL, should redirect the user to 404 page)", async () => {
  await t.maximizeWindow();
  await t.switchToMainWindow();

  const crisNotif = await Selector("div.section-header").nth(1).innerText;
  expect(crisNotif).to.equal("CRIS Notifications");
  const daylySales = await Selector("a.report-link").nth(1);

  const getLocation = ClientFunction(() => document.location.href);

  await t
    .navigateTo(`${baseUrl()}/#/daily-sales`)
    .wait(1000)
    .expect(getLocation())
    .contains("/#/daily-sales");

  await t
    .navigateTo(`${baseUrl()}/#/daily-sales`)
    .wait(1000)
    .expect(Selector("#statusCode-label").innerText)
    .contains("404")
    .expect(getLocation())
    .contains("/#/error-handling/404");

  await t
    .click("#btnBackToCris")
    .wait(1000)
    .expect(getLocation())
    .contains("/#/home");
});

test("Verify that by default when the user logs in to CRIS, privacy should be ON", async () => {
  await t.maximizeWindow();
  await t.switchToMainWindow();

  const privacyON = await Selector("button.btn.btn-toggle.active").exists;
  await t
    .wait(1000)
    .expect(privacyON)
    .ok("Oops, the Privacy button is toggles OFF");
});

test("Verify that the user should sign out from CRIS by clicking on sign out button", async () => {
  await t.maximizeWindow();
  await t.switchToMainWindow();
  const getLocation = ClientFunction(() => document.location.href);
  const signOut = await Selector(
    "#signOutBtn > div > div:nth-child(2) > strong"
  );
  await t
    .wait(1000)
    .click("button#dropdownMenuButton > img")
    .wait(500)
    .click(signOut)
    .wait(1000)
    .expect(getLocation())
    .contains("https://login.microsoftonline.com/");
});
