import { baseUrl, password, username } from '../../index.js';
import Navbar from '../../page-objects/components/navbar.js';
import { waitForAngular } from 'testcafe-angular-selectors';
const { Selector, Role, ClientFunction, t } = require('testcafe');
const { expect } = require('chai');
const navbar = new Navbar();

const endPoint = [
    '/consultation-reminders',
    '/daily-sales',
    '/orders',
    '/patients',
    '/patients/690/information',
    '/patients/690/medical-authorizations',
    '/patients/690/orders',
    '/patients/690/medications',
    '/patients/690/consultations',
    '/patients/690/notes',
    '/patients/690/attachments',
    '/hcps',
    '/medical-authorizations',
    '/products',
    '/licensed-sellers',
    '/virtual-care',
];

const userOne = Role(
    `${baseUrl()}/home`,
    async ()=> {
        await t
            .typeText('input[name="loginfmt"]', username)
            .click('[type="submit"]')
            .typeText('input[name="passwd"]', password)
            .click('[type="submit"]');
    },
    { preserveUrl: true }
);

const ct = endPoint.length;

for (let i = 0; i < ct; i++) {
    const title = endPoint[i];

    // console.log(title);
    const userTwo = Role(
        `${baseUrl()}/home`,
        async ()=> {
            await t
                .typeText('input[name="loginfmt"]', username)
                .click('[type="submit"]')
                .typeText('input[name="passwd"]', password)
                .click('[type="submit"]');
        },
        { preserveUrl: true }
    );

    fixture`E2E - C/R/I/S End Points`.page(`${baseUrl()}${title}`);

    test('Test ' + `${title}` + ' endPoint on 36eight', async ()=> {
        await t.maximizeWindow();
        await t.useRole(userTwo);
        // await t.openWindow(`${baseUrl()}${title}`);
        await t.navigateTo(`${baseUrl()}${title}`);
        await t.setNativeDialogHandler(() => true);
        await t.maximizeWindow();
        // const currentWindow = await t.getCurrentWindow();
        const getUrl = ClientFunction(() => document.location.href);

        await t.expect(getUrl()).contains(title);
        await t.takeScreenshot({
            path:     'test-reports/' + `${title}` + '.png',
            fullPage: true,
        });
    }).disablePageCaching;
}

// fixture.only`Selector.addCustomMethods propagation`
//     .page`https://devexpress.github.io/testcafe/example/`;

// test('Propagate custom properties', async t => {
//     const fieldSet = Selector('fieldset').addCustomMethods({
//         getInput: (el, idx) => {
//             return el[0].querySelectorAll('input')[idx];
//         },
//     }, {
//         returnDOMNodes: true,
//     });

//     await t
//         .typeText(fieldSet.getInput(0), 'Peter Parker')
//         .click(fieldSet.withText('Operating System').getInput(2))
//         .click(fieldSet.withAttribute('id', 'tried-section').getInput(0));
// });

fixture`E2E - C/R/I/S HOME PAGE Elements`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async ()=> {
        await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async ()=> {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
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
test('Test PRACTITIONERS button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('PRACTITIONERS');
}).disablePageCaching;
test('Test Medical Authorizations button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
}).disablePageCaching;
test('Test PRODUCTS button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('PRODUCTS');
}).disablePageCaching;
test('Test DRUG INTERACTIONS button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('DRUG INTERACTIONS');
    await waitForAngular();
    await t
        .setNativeDialogHandler(() => true)
        .expect(navbar.diModal.exists)
        .ok('oops, it doesnt exist')
        .hover(navbar.diModal);

    await t.wait(1000).click(navbar.diModal).switchToMainWindow();
}).disablePageCaching;
test('Test LICENSED SELLERS button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('LICENSED SELLERS');
}).disablePageCaching;
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async ()=> {
    await navbar.confirmMenuOptionExists('CONTINUING EDUCATION');
}).disablePageCaching;
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async ()=> {
    await navbar.selectMenuOption('VIRTUAL CARE');
}).disablePageCaching;

fixture`E2E - C/R/I/S HOME PAGE Elements`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async ()=> {
        await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async ()=> {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test('Log in CRIS and verify that the logo link points to home page', async () => {
    const title = await Selector(
        'body > app-root > div > top-nav > nav > a'
    ).getAttribute('href');

    expect(title).to.contain('#/home');
});

test('Verify user is logged in CRIS', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const userNm = await Selector('body > app-root > div > top-nav > nav > div')
        .innerText;

    expect(userNm).to.equal('Nicolae Lapuste');
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

test('Verify going to the wrong URL, should redirect the user to 404 page)', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const crisNotif = await Selector('div.section-header').nth(1).innerText;

    expect(crisNotif).to.equal('CRIS Notifications');
    // const daylySales = await Selector('a.report-link').nth(1);

    const getLocation = ClientFunction(() => document.location.href);

    await t
        .navigateTo(`${baseUrl()}/daily-sales`)
        .wait(1000)
        .expect(getLocation())
        .contains('/daily-sales');

    await t
        .navigateTo(`${baseUrl()}/daily-sale`)
        .wait(1000)
        .expect(Selector('#statusCode-label').innerText)
        .contains('404')
        .expect(getLocation())
        .contains('/#/error-handling/404');

    await t
        .click('#btnBackToCris')
        .wait(1000)
        .expect(getLocation())
        .contains('/#/home');
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
