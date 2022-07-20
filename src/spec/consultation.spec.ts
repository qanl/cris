import { Config } from '../../config/config.interface';
import { getCurrentConfig } from '../../config/testcafe-config';
import { baseUrl, password, username } from '../../index.js';
import { PatientNav } from '../../page-objects/components/patientnav';
import { OrdersNav } from '../../page-objects/components/ordersnav';
import { Navbar } from '../../page-objects/components/navbar';
// import { waitForAngular } from 'testcafe-angular-selectors';
import { Selector, Role, ClientFunction, t, fixture } from 'testcafe';
import { expect } from 'chai';
const { expect } = require('chai');
const navbar = new Navbar();
const patientnav = new PatientNav();

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

fixture`E2E - C/R/I/S Consultation Reminders`
    .page(`${baseUrl()}/#/home`)
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

test('7193: Verify user can refresh the page by clicking on the refresh button', async () => {
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
    /** Refresh action */
    navbar.refresh;
    await t.wait(2000);

    await t.takeElementScreenshot('body > app-root > div > div > div:nth-child(2) > div:nth-child(2)', 'consultationreminders/7193_consultationreminders.png' );

    await t
        .click('[routerlink="/consultation-reminders"]')
        .wait(1000)
        .expect(Selector('div .d-print-none.p-2.text-white.h3.mb-0.blue-tinted-bg.overflow > span').innerText).contains('Consultation Reminders', 'OOPs check this Consultation Reminders selector for this element!');
    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7193_consultationRefresh.png' );
    /** Refresh action */

    navbar.refresh;
    await t.wait(2000);

    await t.expect(Selector('div .d-print-none.p-2.text-white.h3.mb-0.blue-tinted-bg.overflow > span').innerText).contains('Consultation Reminders', 'OOPs check this Consultation Reminders selector for this element!');


});
test('7194: Verify that page is sorted by date by default and is re-sortable using column header', async () => {
    await navbar.selectHome('HOME');
    await t.maximizeWindow();
    await t.switchToMainWindow();

    await t
        .click('[routerlink="/consultation-reminders"]')
        .wait(1000);

    await t.expect(Selector('#crGroupDate').exists).ok('Oops no such Date icon exists!!');

    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7194_consultationsort.png' );

    const topRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(1).textContent;
    const lastRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(-1).textContent;

    console.log('The oldest transaction displayed in the top row is: ' + topRow.toString() + ' and the newest transaction displayed in the bottom row is: ' + lastRow.toString());

    const topRowReminder = new Date(topRow.toString());
    const lastRowReminder = new Date(lastRow.toString());

    expect(lastRowReminder).gt(topRowReminder);

    await t.expect(Selector('#consultationReminders_crGroupDate .sort-icon').exists).ok('oops Date sorting icon does NOT exists!');

    await t
        .click('#consultationReminders_crGroupDate .sort-icon')
        .wait(2000);
    const sortTopRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(1).textContent;
    const sortBottomRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(-1).textContent;
    const newestReminder = new Date(sortTopRow.toString());
    const oldestReminder = new Date(sortBottomRow.toString());

    console.log('After sorting the newest transaction displayed in the top row is: ' + sortTopRow.toString() + ' while this oldest transaction is shown at the bottom: ' + sortBottomRow.toString());

    expect(newestReminder).gt(oldestReminder);
    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7194_AfterSortingByDate.png' );


});


test('7196: Verify that all other columns sort order is working as expected within the Date Groups. This requires multiple records in a date group to test', async () => {
    await navbar.selectHome('HOME');
    await t
        .click('[routerlink="/consultation-reminders"]')
        .wait(1000);

    await t.expect(Selector('#crGroupDate').exists).ok('Oops no such Date icon exists!!');

    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7196_consultationsortByName.png' );

    const topRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(1).textContent;
    const lastRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(-1).textContent;

    console.log('The oldest transaction displayed in the top row is: ' + topRow.toString() + ' and the newest transaction displayed in the bottom row is: ' + lastRow.toString());

    const topRowReminder = new Date(topRow.toString());
    const lastRowReminder = new Date(lastRow.toString());

    expect(lastRowReminder).gt(topRowReminder);

    await t.expect(Selector('div.igx-grid__grouping-indicator > igx-icon').exists).ok('Oops, there is no patient with multiple reminders.');
    await t.hover('#consultationReminders_patientNameCR');
    await t.expect(Selector('#consultationReminders_patientNameCR .sort-icon').exists).ok('Oops, the Patient Name sorting icon is missing');
    const initPatNamesInReminders = await Selector('.igx-grid__tbody-content').textContent; // select grid's content before sorting was triggered

    console.log('The initial Patient names order is: ' + initPatNamesInReminders.toString());

    await t.doubleClick(Selector('#consultationReminders_patientNameCR .sort-icon').filterVisible()); // click the Patient Name sorting icon


    const sortPatNamesInReminders = await Selector('.igx-grid__tbody-content').textContent; // select grid's content after sorting was triggered

    console.log('The new sorted order for Patient names order is: ' + sortPatNamesInReminders.toString());

    /**The assertion verifies wether the original order has been altered. This is a blind comparision, for the exact one compare the strings visually */

    await t.expect(initPatNamesInReminders.toString()).notEql(sortPatNamesInReminders.toString(), 'Oops the names are identical, sorting has issues!');


    await t.expect(Selector('#consultationReminders_crGroupDate .sort-icon').exists).ok('oops Date sorting icon does NOT exists!');

    /** Sort by date */
    await t
        .click('#consultationReminders_crGroupDate .sort-icon')
        .wait(2000);
    const sortTopRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(1).textContent;
    const sortBottomRow = await Selector('[aria-describedby="consultationReminders_crGroupDate"] > .text-center').nth(-1).textContent;
    const newestReminder = new Date(sortTopRow.toString());
    const oldestReminder = new Date(sortBottomRow.toString());

    console.log('After sorting the newest transaction displayed in the top row is: ' + sortTopRow.toString() + ' while this oldest transaction is shown at the bottom: ' + sortBottomRow.toString());

    expect(newestReminder).gt(oldestReminder);
    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7196_AfterSortingByDate.png' );

});

test('7197: Verify that the user can see scheduled/in-progress consultations', async () => {
    await navbar.selectHome('HOME');
    await t
        .click('[routerlink="/consultation-reminders"]')
        .wait(2000);
    await t.switchToMainWindow();

    await t.expect(Selector('.icon_InProgress').exists).ok('Oops, there is no In Progress Reminders yet');
    await t.expect(Selector('.icon_Pending').exists).ok('Oops, there is no Scheduled reminders');

    await t
        .hover('.icon_InProgress')
        .takeElementScreenshot('body > app-root > div', 'consultationreminders/7198_OpenINProgress.png' );

});

test('7198: Verify that the user can open any scheduled/in-progress consultations', async () => {
    await navbar.selectHome('HOME');
    await t
        .click('[routerlink="/consultation-reminders"]')
        .wait(2000);
    await t.switchToMainWindow();

    await t.expect(Selector('.icon_InProgress').exists).ok('Oops, there is no In Progress Reminders yet');
    await t.expect(Selector('.icon_Pending').exists).ok('Oops, there is no Scheduled reminders');

    await t
        .doubleClick('.icon_InProgress')
        .wait(1000)
        .takeElementScreenshot('body > app-root > div', 'consultationreminders/7197_ReminderIcons.png' );

});

test('7199: Verify that the user can submit a consultation', async () => {
    await navbar.selectHome('HOME');
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);

    /** Navigate to Patients list */
    await t.click(patientnav.patBtn);
    await t.wait(1000);
    // await t.click(patientnav.privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');

    /** Open Create Patient modal menu */
    // await t
    //     .expect(patientnav.createPatientBtn.exists)
    //     .notOk('Create Patient button is present!');
    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectPatRow('igx-grid-cell:nth-child(1) > div', 'KNUDSEN'); // select patient name starting with the given name'
    await t.takeScreenshot('/consultationreminders/7199_patient_profile.png');

    // await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText).notEql('');
    // .contains('MOHORUK', 'oops!');

    const inputFirstName = await Selector(
        'div:nth-child(2) > div:nth-child(1) > div.pl-1.overflow'
    ).textContent;
    const inputLastName = await Selector(
        'div:nth-child(2) > div:nth-child(2) > div.pl-1.overflow'
    ).textContent;

    console.log(inputFirstName.toString());
    console.log(inputLastName.toString());

    /** Add New Order */
    await t.click(patientnav.subOrders).click(patientnav.subNewOrderBtn);
    await t.setNativeDialogHandler(() => true);
    await t.click('.align-items-center > span.ng-star-inserted > button');
    /** Enter Mx */
    await t.setNativeDialogHandler(() => true);

    /**
     * Set the Daily Quantity -0.30 Grams/Day
     */
    await t
        .typeText(
            Selector(
                'div:nth-child(2) > div.d-flex.input-group-sm.pl-2.align-items-center > div:nth-child(1) > input'
            ),
            '0.30',
            { paste: true, replace: true }
        )
        .typeText(
            Selector(
                'div:nth-child(4) > div.pl-2.w-50.d-flex.flex-column.justify-content-center > div.d-flex.align-items-center > div.input-group-sm > input'
            ),
            '2',
            { paste: true, replace: true }
        );
    await t.click(
        'mat-dialog-container#mat-dialog-1 div.d-flex.input-group-sm.pl-2.align-items-center > div:nth-child(1) > input'
    );

    /**Set the Period Of Use to 3 months */
    await t.click(
        'mat-dialog-container#mat-dialog-1 div.d-flex.align-items-center > div.input-group-sm > input'
    );
    await t.takeElementScreenshot(Selector('create-mx-modal > div'), 'orders/MXLimitationsUpd.png');
    /** Click Next */
    await t.click(
        'mat-dialog-container#mat-dialog-1 button[type="button"].btn.btn-primary.mx-2 > span'
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /** Select the first Health Practitioner available on the list */
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'KUR');

    /** Select HCP button on top*/
    await t.click(Selector('.btn.btn-link').withText('Select HCP'));
    await t.setNativeDialogHandler(() => true);
    // await waitForAngular();
    await t.hover(
        'hcp-details > div > div > div:nth-child(1) > div:nth-child(1) > div.overflow'
    );

    // await t.click(patientnav.enterMxNextBtn);

    const btnNext = Selector(
        'create-mx-modal > div > div.d-flex.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > button.btn.btn-primary.mx-2 > span'
    )
        .withExactText('NEXT')
        .filterVisible();

    /**Click Next button */
    if (btnNext.exists && btnNext.visible) await t.hover(btnNext);
    await t.click(btnNext);


    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    /**Select Health Condition eg Arthritis with Mild Pain*/
    await patientnav.selectHealthIssue(
        'igx-grid-cell > div.igx-grid__td-text.ng-star-inserted',
        'Anorexia'
        // 'Amyotrophic Lateral Sclerosis'
        // 'Arthritis (Osteoarthritis Inflammation with Mild Pain)'
    );
    await t.takeScreenshot('orders/HealthIssueMx.png');
    /**Click Create Mx */
    await t.click(
        Selector(
            'button.btn.btn-primary.mx-2.btn-success > span'
        ).withExactText('CREATE Mx')
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t.wait(1000);

    /** Click to select the new Mx */
    // await waitForAngular();
    await patientnav.selectFld(
        'igx-grid-cell:nth-child(6) > div > div.break-word.overflow',
        // 'Becotte, Gregory W Dr.'
        // 'Barzelai, Laurence P Dr.'
        'Kur, Jason K Dr.'
    );
    await t.setNativeDialogHandler(() => true);
    // await waitForAngular();
    // /** Click Select Mx the last item -1 */
    await t.takeElementScreenshot('create-order-modal.ng-star-inserted', 'orders/SelectMx.png');
    const mX = Selector('igx-display-container > igx-grid-cell:nth-child(6) > div > div.break-word.overflow').withText('Kur, Jason K Dr.').nth(-1);

    if (await mX.exists && await mX.visible)
        await t.click(mX.filterVisible());
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /**Click Next to advance to preview Patient Information. Here you can modify Mx condition and Health Issue */

    const selMx = Selector('div.col.text-right.d-flex.justify-content-end.align-items-center > button:nth-child(3) > div').withExactText('S Select Mx').filterVisible();

    if (await selMx.exists && await selMx.visible)
        await t.doubleClick(selMx);
    // await waitForAngular();
    await t.wait(1000);
    /** Click Next to advance after Confirming Patient and HCP info */
    await t.click(patientnav.newOrderNext);

    // await waitForAngular();
    await t.wait(2000);
    await t.setNativeDialogHandler(() => true);
    /** Verify if the Weight field is empty */

    await patientnav.fillHealthForm('98', '#productList > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container > igx-grid-row', 'Tilray');
    await t.takeScreenshot('/consultationreminders/7199_ReviewOrder.png');
    // await patientnav.checkProductOk('Oil');
    /**Click Review */
    await t.click(
        '.gray-modal-footer-bg-color > span > button.btn.mx-2.purple-btn.ng-star-inserted > div > span'
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    /** Click Place Order */
    await t.takeScreenshot('consultationreminders/7199_PlaceOrder.png');
    await t.click(
        '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.close-btn > div > span'
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7199_ScheduleCons.png' );
    await t
        .wait(2000)
        .click(
            '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.purple-btn > span'
        ); // Select Reschedule
    // await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7199_PlaceOrder.png' );
    await t.wait(2000);
    await t.setNativeDialogHandler(() => true);

    // await t.click('button.btn.mx-2.ng-star-inserted.purple-btn > span');
    await t.takeElementScreenshot('body > app-root > div', 'consultationreminders/7199_ScheduleConsultation.png' );

    await t
        .switchToMainWindow()
        .wait(1000)
        .click(Selector('patient-left-nav > div > nav:nth-child(5) > a > div > span').withExactText('Consultations'));
    await t.setNativeDialogHandler(() => true);
    await t
        .wait(1000)
        .expect(Selector('igx-display-container > igx-grid-row:nth-child(1) > igx-display-container > igx-grid-cell:nth-child(6) > i[title="Scheduled"]').exists).ok('Oops, there is no Scheduled');

});
test('Verify that the user should sign out from CRIS by clicking on sign out button', async () => {
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
        .takeElementScreenshot('button#dropdownMenuButton > img', 'homepage/7189_SignOutBtn.png' )
        .click(signOut)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');

    await t.switchToMainWindow();
    await t.takeScreenshot('homepage/7189_SignedOut.png' );
});
test('Verify that by default when the user logs in to CRIS, privacy should be OFF', async () => {
    await navbar.selectHome('HOME');
    await t.switchToMainWindow();

    await t
        .wait(1000)
        .expect(navbar.privacyIsOff.exists)
        .ok('Oops, the Privacy button is toggles ON!!');

    await t.takeElementScreenshot(navbar.privacyIsOff, 'homepage/7190_PrivacyIsOff.png' );
});
test('Verify that if the user clicks on the CRIS logo anywhere in the app, the user should be redirected to the home page', async () => {
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
    const signOut = Selector('#signOutBtn > div > div:nth-child(2) > strong');

    await t
        .wait(1000)
        .click('button#dropdownMenuButton > img')
        .wait(500)
        .click(signOut)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');
});

test('Verify that the user can signOut', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    await t.click('.border-primary');

    const select = Selector("s.mt-3 );

    const selectedOption = select
            .find("option")
                .filter((node) => {
                    const option = node as HTMLOptionElement;
                    if (option && option.selected) {
                        return true;
                    }
                    return false;
                })
                .nth(0);
    const selectedOptionContent = await selectedOption.textContent;
    await t.click(selectedOption);
            });
