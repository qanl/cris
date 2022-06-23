import { baseUrl, password, username } from '../../config.js';
import Navbar from '../../page-objects/components/navbar.js';
import PatientNav from '../../page-objects/components/patientnav.js';
import { waitForAngular } from 'testcafe-angular-selectors';
import xpathSelector from '../utilities/xpath-selector.js';
const { Selector, Role, ClientFunction, t } = require('testcafe');
const navbar = new Navbar();
const patientnav = new PatientNav();
// import Random from '../../page-objects/components/rand.mo';
// import { faker } from '@faker-js/faker';
// const random = new Random();
// const dob = random.randomDay + '-' + faker.date.month() + '-' + random.randomYear;

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

test('Test Home button on 36eighttechnologies.com site', async () => {
    await navbar.selectHome('HOME');
}).disablePageCaching;
test('Test ORDERS button on 36eighttechnologies.com site', async () => {
    await navbar.confirmMenuOptionExists('ORDERS');
}).disablePageCaching;
test('Test PATIENTS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PATIENTS');
}).disablePageCaching;
test('Test PRACTITIONERS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PRACTITIONERS');
}).disablePageCaching;
test('Test Medical Authorizations button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
}).disablePageCaching;
test('Test PRODUCTS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('PRODUCTS');
}).disablePageCaching;
test('Test DRUG INTERACTIONS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('DRUG INTERACTIONS');
    await waitForAngular();
    await t
        .setNativeDialogHandler(() => true)
        .expect(navbar.diModal.exists)
        .ok('oops, it doesnt exist')
        .hover(navbar.diModal);

    await t.wait(1000).click(navbar.diModal).switchToMainWindow();
}).disablePageCaching;
test('Test LICENSED SELLERS button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('LICENSED SELLERS');
}).disablePageCaching;
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async () => {
    await navbar.confirmMenuOptionExists('CONTINUING EDUCATION');
}).disablePageCaching;
test('Test CONTINUE EDUCATION button on 36eighttechnologies.com site', async () => {
    await navbar.selectMenuOption('VIRTUAL CARE');
}).disablePageCaching;

fixture`E2E - C/R/I/S Create Order for Patient`
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

test('Verify that by default when the user logs in to CRIS, privacy should be ON', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privacyON = await Selector('button.btn.btn-toggle.active').exists;

    await t
        .wait(1000)
        .expect(privacyON)
        .notOk('Oops, the Privacy button is toggled ON');
});

test.only('Verify New Order', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);
    /** Navigate to Patients list */

    await t.click(patientnav.patBtn);
    await t.wait(1000);
    // await t.click(patientnav.privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');
    await t.takeElementScreenshot(Selector('body.ng-tns-0-0'), 'patients/patients_full.png');
    /** Open Create Patient modal menu */
    await t
        .expect(patientnav.createPatientBtn.exists)
        .notOk('Create Patient button is present!');

    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectPatRow('igx-grid-cell:nth-child(1) > div', 'BRAY'); // select patient name starting with the given name'

    // await t.takeElementScreenshot(Selector('.d-flex.flex-row').nth(1), '/orders/patient_profile.png');
    // await patientnav.selectFld('igx-grid-cell:nth-child(4) > div', '- 4444') // select patient telephone nding in -3333
    await waitForAngular();
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
    // await t.takeElementScreenshot('body > app-root > div > div > div:nth-child(2)', '/orders/profile_full.png');
    /** Add New Order */
    await t.click(patientnav.subOrders).click(patientnav.subNewOrderBtn);
    await t.setNativeDialogHandler(() => true);
    await t.click('.align-items-center > span.ng-star-inserted > button');
    await t.takeElementScreenshot(Selector('create-mx-modal > div > div.modal-body.p-0'), '/orders/new_order.png');
    /** Enter Mx */
    await t.setNativeDialogHandler(() => true);

    /**
     * Set the Daily Quantity -0.02 Grams/Day
     */
    await t
        .typeText(
            Selector(
                'div:nth-child(2) > div.d-flex.input-group-sm.pl-2.align-items-center > div:nth-child(1) > input'
            ),
            '0.20',
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

    /**Set the Period Of Use to 2 months */
    await t.click(
        'mat-dialog-container#mat-dialog-1 div.d-flex.align-items-center > div.input-group-sm > input'
    );
    await t.takeElementScreenshot(Selector('create-mx-modal > div'), '/orders/MXLimitationsUpd.png');
    /** Click Next */
    await t.click(
        'mat-dialog-container#mat-dialog-1 button[type="button"].btn.btn-primary.mx-2 > span'
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /** Select the first Health Practitioner available on the list */
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'BECOTTE');
    await t.takeScreenshot('/orders/HCPToMx.png');
    /** Select HCP button on top*/
    await t.click(Selector('.btn.btn-link').withText('Select HCP'));
    await t.setNativeDialogHandler(() => true);
    await waitForAngular();
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
    /**Select Health Condition Arthritis with Mild Pain*/
    await patientnav.selectFld(
        'igx-grid-cell > div',
        'Arthritis (Rheumatoid Arthritis Inflammation with Mild Pain)'
    );
    await t.takeScreenshot('/orders/HealthIssueMx.png');
    /**Click Create Mx */
    await t.click(
        Selector(
            'button.btn.btn-primary.mx-2.btn-success > span'
        ).withExactText('CREATE Mx')
    );
    await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t.wait(1000);
    /** Click to select the new Mx */
    await waitForAngular();
    await patientnav.selectFld(
        'igx-grid-cell:nth-child(6) > div > div.break-word.overflow',
        'Becotte, Gregory W Dr.'
    );
    await t.setNativeDialogHandler(() => true);
    await waitForAngular();
    // /** Click Select Mx the last item -1 */
    await t.takeElementScreenshot('create-order-modal.ng-star-inserted', '/orders/SelectMx.png');
    const mX = Selector('igx-display-container > igx-grid-cell:nth-child(6) > div > div.break-word.overflow').withExactText('Becotte, Gregory W Dr.').nth(1);

    if (await mX.exists && await mX.visible)
        await t.click(mX.filterVisible());
    await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /**Click Next to advance to preview Patient Information. Here you can modify Mx condition and Health Issue */

    const selMx = Selector('div.col.text-right.d-flex.justify-content-end.align-items-center > button:nth-child(3) > div').withExactText('S Select Mx').filterVisible();

    if (await selMx.exists && await selMx.visible)
        await t.doubleClick(selMx);
    await waitForAngular();
    await t.wait(1000);
    /** Click Next to advance after Confirming Patient and HCP info */

    await t.click(patientnav.newOrderNext);

    await waitForAngular();
    await t.wait(2000);
    await t.setNativeDialogHandler(() => true);
    /** Verify if the Weight field is empty */

    await patientnav.fillHealthForm('75', 'igx-grid-cell:nth-child(3) > div > div:nth-child(1)', 'Oil');
    await t.takeScreenshot('/orders/ReviewOrder.png');

    /**Click Review */
    await t.click(
        '.gray-modal-footer-bg-color > span > button.btn.mx-2.purple-btn.ng-star-inserted > div > span'
    );
    await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    /** Click Place Order */
    await t.takeScreenshot('/orders/PlaceOrder.png');
    await t.click(
        '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.close-btn > div > span'
    );
    await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t.takeScreenshot('/orders/DefaultScheduleOrder.png');
    await t
        .wait(2000)
        .click(
            '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.purple-btn > span'
        );

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
