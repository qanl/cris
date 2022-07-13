import { baseUrl, password, username } from '../../index.js';
// import Navbar from '../../page-objects/components/navbar.js';
import PatientNav from '../../page-objects/components/patientnav.js';
import { waitForAngular } from 'testcafe-angular-selectors';
const { Selector, Role, ClientFunction, t } = require('testcafe');
const { expect } = require('chai');
// const navbar = new Navbar();
const patientnav = new PatientNav();

const userOne = Role(
    `${baseUrl()}/#/home`,
    async () => {
        await t
            .typeText('input[name="loginfmt"]', username)
            .click('[type="submit"]')
            .typeText('input[name="passwd"]', password)
            .click('[type="submit"]');
    },
    { preserveUrl: true }
);

fixture`E2E - C/R/I/S Patients tests`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async () => {
        // await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async () => {
        // await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test('Verify user is logged in CRIS', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const userNm = await Selector('body > app-root > div > top-nav > nav > div')
        .innerText;

    expect(userNm).to.equal('Nicolae Lapusta');
});

test('Verify user can select the Patients menu option', async () => {
    await t.switchToMainWindow();

    await patientnav.clickOption((patientnav as any).patBtn);
});

test('Verify user can select a patient record from the Patients menu option', async () => {
    await t.switchToMainWindow();

    await patientnav.clickOption((patientnav as any).patBtn);
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'DOE'); // select patient name starting with 'BAC'
    // await patientnav.selectFld('igx-grid-cell:nth-child(4) > div', '- 4444') // select patient telephone nding in -3333
    await waitForAngular();
    await t
    .expect((patientnav as any).patientDetailsBtnEnabled.exists)
    .ok('Oops, something went wrong!')
    .click((patientnav as any).patientDetailsBtnEnabled)
    .wait(1000)
    .expect((patientnav as any).subLastName.innerText)
    .contains('DOE', 'oops!');
});

test('Verify that there are two subpages on CRIS homepage', async () => {
    const sectionHeader = await Selector('.section-header').innerText;
    const reminders = await Selector('a.report-link').nth(0).innerText;
    const remindersTxt = await Selector(
        'body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > ul > li > div.report-text'
    ).innerText;
    const daylySales = await Selector('a.report-link').nth(1).innerText;
    const daylySalesTxt = await Selector(
        'body > app-root > div > div > div:nth-child(2) > div:nth-child(2) > ng-component > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > ul > li > div.report-text'
    ).innerText;

    await t.switchToMainWindow();
    expect(sectionHeader).to.equal('My Reports');
    expect(reminders).to.equal('Consultation Reminders');
    expect(remindersTxt).to.equal(
        'Patients to be contacted for scheduled consultations'
    );
    expect(daylySales).to.equal('Daily Sales');
    expect(daylySalesTxt).to.equal(
        'All medical cannabis sales completed in this store every day'
    );
});
test('Verify that you can see CRIS notifications (created by admin portal)', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const crisNotif = await Selector('div.section-header').nth(1).innerText;

    expect(crisNotif).to.equal('CRIS Notifications');
});

test('Verify Patients List', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privBtn = await Selector('button.btn.btn-toggle.active');

    const patBtn = await Selector('i.icon_Nav-Patients.navIcon');
    const getLocation = ClientFunction(() => document.location.href);

    await t.click(patBtn);
    await t.wait(1000);
    await t.click(privBtn);
    await t.expect(getLocation()).contains('/#/patients');
    await t.switchToMainWindow();
    await waitForAngular();

    const selRecord = await Selector(
        '#igx-grid-0 > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container > igx-grid-row:nth-child(4) > igx-display-container'
    );

    await t.expect(selRecord.exists).ok('It is not selectable');
    await t.doubleClick(selRecord);
    await t.wait(1000);
    // await t.setNativeDialogHandler(() => true);
    await waitForAngular();
    await t.switchToMainWindow();
    const patProfile = await Selector('span')
        .withExactText('Patient: DOE, Georgina')
        .filterVisible();

    await t.hover(patProfile);
    await t.click('.pencil-icon');
    await t.setNativeDialogHandler(() => true);
    const updateMenu = await Selector('div.modal-content div.text-center.h5')
        .innerText;

    expect(updateMenu).contains('UPDATE PATIENT DEMOGRAPHICS');
});

test('Verify that by default when the user logs in to CRIS, privacy should be ON', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privacyON = await Selector('button.btn.btn-toggle.active').exists;

    await t
        .wait(1000)
        .expect(privacyON)
        .ok('Oops, the Privacy button is toggles OFF');
});

test('Verify that the user should sign out from CRIS by clicking on sign out button', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();
    const getLocation = ClientFunction(() => document.location.href);
    const signOut = await Selector(
        '#signOutBtn > div > div:nth-child(2) > strong'
    );

    await t
        .wait(1000)
        .click('button#dropdownMenuButton > img')
        .wait(500)
        .click(signOut)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');
});
