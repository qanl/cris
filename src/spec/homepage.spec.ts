import { Config } from '../../config/config.interface';
import { getCurrentConfig } from '../../config/testcafe-config';
import { baseUrl, password, username } from '../../index.js';
import { PatientNav } from '../../page-objects/components/patientnav';
import { OrdersNav } from '../../page-objects/components/ordersnav';
import { Navbar } from '../../page-objects/components/navbar';
// import { waitForAngular } from 'testcafe-angular-selectors';
import { Selector, Role, ClientFunction, t, fixture } from 'testcafe';
const { expect } = require('chai');
const navbar = new Navbar();

const endPoint = [
    '/consultation-reminders',
    '/daily-sales',
    '/orders',
    '/patients',
    '/patients/714/information',
    '/patients/714/medical-authorizations',
    '/patients/714/orders',
    '/patients/714/medications',
    '/patients/714/consultations',
    '/patients/714/notes',
    '/patients/714/attachments',
    '/hcps',
    '/medical-authorizations',
    '/products',
    '/licensed-sellers',
    '/virtual-care',
];

const config: Config = getCurrentConfig();


const userOne = Role(

    config.env?.url,

    async () => {
        await t
            .typeText('input[name="loginfmt"]', config.user?.login)
            .click('[type="submit"]')
            .typeText('input[name="passwd"]', config.user?.password)
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
        async () => {
            await t
                .typeText('input[name="loginfmt"]', username)
                .click('[type="submit"]')
                .typeText('input[name="passwd"]', password)
                .click('[type="submit"]');
        },
        { preserveUrl: true }
    );

    fixture`E2E - C/R/I/S End Points`.page(`${baseUrl()}${title}`);

    test('Test ' + `${title}` + ' endPoint on 36eight', async () => {
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
    });
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

fixture.only`E2E - C/R/I/S HOME PAGE`
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

test('7184: Verify that under my reports there are two subpages: Consultation Reminders and Daily Sales', async () => {
    await navbar.selectHome('HOME');

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
        'All medical cannabis sales completed in this store every day');

    await t.takeElementScreenshot('body > app-root > div > div > div:nth-child(2) > div:nth-child(2)', 'homepage/7184_twosubpageslnks.png' );

});
test('7185: Verify that you can see CRIS notifications (created by admin portal)', async () => {
    await navbar.selectHome('HOME');
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const crisNotif = await Selector('div.section-header').nth(1).innerText;

    expect(crisNotif).to.equal('CRIS Notifications', 'Oops there is NO notification. Add at least one notification! in Admin Portal');
    await t.takeElementScreenshot('.notification-box.p-4', 'homepage/7185_crisnotifications.png' );
});


test('7186: Verify if the user duplicates the windows tab, CRIS should log you out of the original tab. New tab remains signed in.', async () => {
    await navbar.selectHome('HOME');
    await t
        .openWindow('https://cris-web-int.36eighttechnologies.com')
        .resizeWindow(1024, 768)
        .takeScreenshot('homepage/7186_crisNewWindow.png' );


    const url = await t.eval(() => document.documentURI);

    await t
        .wait(1000)
        .switchToParentWindow()
        .expect(url.toString()).contains('https://login.microsoftonline.com/');

    /**refresh*/

    await t.switchToPreviousWindow();
    navbar.refresh;
    await t
        .wait(2000)
        .resizeWindow(1024, 768);
    await t.takeScreenshot( 'homepage/7186_crisOldWindowSignedOut.PNG' );

});

test('7187: Verify going to the wrong URL, should redirect the user to 404 page', async () => {
    await navbar.selectHome('HOME');
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
        .contains('/#/error-handling/404')
        .resizeWindow(1024, 768)
        .takeScreenshot('homepage/7187_CRIS_404Page.png' );


    await t
        .click('#btnBackToCris')
        .wait(1000)
        .expect(getLocation())
        .contains('/#/home');

    await t
        .resizeWindow(1024, 768)
        .takeElementScreenshot('body > app-root > div > div > div:nth-child(2)', 'homepage/7187_crisBackHomeindow.png');
});

test('7188: Verify that the user should extend the session timeout by clicking extend my session', async () => {
    await navbar.selectHome('HOME');
    await t
        .resizeWindow(1024, 768)
        .takeElementScreenshot('body > app-root > div > div > div:nth-child(2)', 'homepage/7188_BeforeTimeOut.png' ); // needs 20 minutes way too longTimeout
});

test('7189: Verify that the user should sign out from CRIS by clicking on sign out button', async () => {
    await navbar.selectHome('HOME');
    // await t.maximizeWindow();
    await t.switchToMainWindow();
    const getLocation = ClientFunction(() => document.location.href);
    const signOut = Selector('#signOutBtn > div > div:nth-child(2)');

    await t
        .wait(1000)
        .click('button#dropdownMenuButton > img')
        .wait(500)
        .hover(signOut)
        .takeElementScreenshot('#signOutBtn', 'homepage/7189_SignOutBtn.png' )
        .click(signOut)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');

    await t.switchToMainWindow();
    await t.takeScreenshot('homepage/7189_SignedOut.png' );
});
test('7190: Verify that by default when the user logs in to CRIS, privacy should be OFF', async () => {
    await navbar.selectHome('HOME');
    await t.switchToMainWindow();

    await t
        .wait(1000)
        .expect(navbar.privacyIsOff.exists)
        .ok('Oops, the Privacy button is toggles ON!!')
        .resizeWindow(1024, 768)
        .takeScreenshot('homepage/7190_PrivacyIsOff.png' );

});
test('7191: Verify that if the user clicks on the CRIS logo anywhere in the app, the user should be redirected to the home page', async () => {
    await navbar.selectHome('HOME');
    const getLocation = ClientFunction(() => document.location.href);
    /**Navigate to a different page eg. Orders*/

    await navbar.confirmMenuOptionExists('ORDERS');
    /**Click the CRIS Logo */
    await t
        .click('img[src="assets/images/Logo.svg"]')
        .wait(1000)
        .expect(getLocation())
        .contains('/#/home');

});
test('Test ORDERS button on 36eighttechnologies.com site', async () => {
    await navbar.confirmMenuOptionExists('ORDERS');
});
test('Test PATIENTS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PATIENTS');
});
test('Test PRACTITIONERS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PRACTITIONERS');
});
test('Test Medical Authorizations button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
});
test('Test PRODUCTS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PRODUCTS');
});
test('Test DRUG INTERACTIONS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('DRUG INTERACTIONS');
    // await waitForAngular();
    await t
        .setNativeDialogHandler(() => true)
        .expect(navbar.diModal.exists)
        .ok('oops, it doesnt exist')
        .hover(navbar.diModal);

    await t.wait(1000).click(navbar.diModal).switchToMainWindow();
});
test('Test LICENSED SELLERS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('LICENSED SELLERS');
});
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async () => {
    await navbar.confirmMenuOptionExists('CONTINUING EDUCATION');
});
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('VIRTUAL CARE');
});

fixture`E2E - C/R/I/S HOME PAGE Elements`
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

test('Verify that by default when the user logs in to CRIS, privacy should be OFF', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privacyON = await Selector('button.btn.btn-toggle.active').exists;

    await t
        .wait(1000)
        .expect(privacyON)
        .notOk('Oops, the Privacy button is toggles ON');
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
