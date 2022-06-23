import { baseUrl, password, username } from '../../index.js';
import Navbar from '../../page-objects/components/navbar.js';
// import PatientNav from '../../page-objects/components/patientnav.js';
// import Random from '../../page-objects/components/rand.mo';
import { waitForAngular } from 'testcafe-angular-selectors';
// import { faker } from '@faker-js/faker';
const { Selector, Role, ClientFunction, t } = require('testcafe');
// const { expect } = require('chai');
const navbar = new Navbar();
// const patientnav = new PatientNav();
// const random = new Random();
// const dob =
//     random.randomDay + '-' + faker.date.month() + '-' + random.randomYear;

const userOne = Role(
    `${baseUrl()}/home`,
    async () => {
        await t
            .typeText('input[name="loginfmt"]', username)
            .click('[type="submit"]')
            .typeText('input[name="passwd"]', password)
            .click('[type="submit"]');
    },
    { preserveUrl: true }
);

fixture`E2E - C/R/I/S Consultations Tests`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test('Verify that privacy should be OFF', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privacyON = await Selector('button.btn.btn-toggle.active').exists;

    await t
        .wait(1000)
        .expect(privacyON)
        .notOk('Oops, the Privacy button is toggled ON'); // Doesn't exist
});

test('Test Home button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectHome('HOME');
}).disablePageCaching;
test('Test ORDERS button on 36eighttechnologies.com site', async ()=> {
    await navbar.confirmMenuOptionExists('ORDERS');
}).disablePageCaching;
test('Test PATIENTS button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('PATIENTS');
}).disablePageCaching;

test('Verify that the user can Sign Out from CRIS', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();
    const getLocation = ClientFunction(() => document.location.href);
    const signOut = await Selector(
        '#signOutBtn > div > div:nth-child(2) > strong'
    );

    await waitForAngular();
    await t
        .wait(1000)
        .click('button#dropdownMenuButton > img')
        .wait(500)
        .click(signOut)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');
});
