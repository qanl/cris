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
const ordernav = new OrdersNav();

fixture;

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

fixture`E2E - C/R/I/S Medical Authorization (Mx)`
    .page(`${baseUrl()}/#/home`)
    .before(async () => {
        console.log('Mx tests begin');
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Mx Test Cases - Done!');
    });

test('7253: Verify that the user can see the medical authorizations list', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
    await t
        .switchToMainWindow()
        .expect(Selector('div > .overflow > span').withText('Medical Authorizations').exists).ok('Medical Authorizations list is not displayed');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7253_Mx.png');

});
test('7254: Verify that the user can click on enter MX button', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
    await t
        .switchToMainWindow()
        .click(Selector('[data-rowindex="0"][aria-describedby="mxList_mxCode"] > .text-center > div'))
        .click(Selector('.text-right > .d-flex > .btn').withText('Patient Details').filterVisible())
        .click(patientnav.subOrders)
        .switchToMainWindow()
        .click(ordernav.subNewOrderBtn)
        .setNativeDialogHandler(() => true)
        .click(ordernav.enterMxBtn)
        .setNativeDialogHandler(() => true);

    await t
        .wait(2000)
        .takeElementScreenshot('create-order-modal > div.modal-content.pop-up-border', 'MxPage/7254_Mx.png');
});

test('7255: Verify that user should be able to filter the page by Mx number, registered licensed seller, end date, health care practitioner and Mx capacity', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');

    await t
        .switchToMainWindow()
        .click('igx-grid-header-group:nth-of-type(1) .igx-chip__content')
        .typeText('.igx-input-group__bundle', '00000M', { replace: true, paste: true, speed: 0.075 })
        .pressKey('enter');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7255_1_MxByNumber.png');
    await t
        .switchToMainWindow()
        .click('#mxList_patientName > .igx-grid-th__title')
        .typeText('.igx-input-group__bundle', 'B', { replace: true, paste: true, speed: 0.075 })
        .pressKey('enter');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7255_2_MxByPatName.png');
    await t
        .switchToMainWindow()
        .click('[title="REGISTERED LICENSED SELLER (LS)"]')
        .typeText('.igx-input-group__bundle', 'e', { replace: true, paste: true, speed: 0.075 })
        .pressKey('enter');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7255_3_MxByLS.png' );

    const closeBtn = Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span').filterVisible();
    const resetBtn = Selector('.igx-button[tabindex="0"] > span').filterVisible();

    await t.click(closeBtn); // select Close filter button.

    await t
        .switchToMainWindow()
        .wait(1000)
        .click('#mxList_availableCapacity .w-100')
        .click('igx-grid-header-group:nth-of-type(7) .igx-chip__content > [draggable="false"]')
        .wait(1000)
        .click('igx-prefix')
        .wait(1000)
        .click('[aria-label="Active"] .igx-grid__filtering-dropdown-items');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7255_4_MxByActive.png' );

    await t.click(closeBtn); // select Close filter button.


    await t
        .switchToMainWindow()
        .click('#mxList_expiryDate .text-center') // 'igx-grid-header-group:nth-of-type(6) .igx-chip__item > .material-icons'
        .click('igx-grid-header-group:nth-of-type(6) .igx-chip__content > [draggable="false"]')
        // .click('[placeholder="Pick up date"]') // 'svg
        // .click('igx-prefix')//
        .click('igx-prefix') //
        // .typeText('[placeholder="Pick up date"]', 'Aug 3,2022', { replace: true, paste: true, speed: 0.075 })
        .pressKey('down down down down down down down down down enter', { speed: 0.075 });
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7255_5_MxByExpiryYear.png' );


});

test('7257: Verify that if any of the filter was applied on the page, user should be able to clear all filters by clicking on the clear filter', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');

    const closeBtn = Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span').filterVisible();
    const resetBtn = Selector('.igx-button[tabindex="0"] > span').filterVisible();
    const clearFilter = Selector('.text-right > button:nth-of-type(1)').filterVisible();

    await t
        .switchToMainWindow()
        .click('igx-grid-header-group:nth-of-type(1) .igx-chip__content')
        .typeText('.igx-input-group__bundle', '000000', { replace: true, paste: true, speed: 0.075 })
        .takeElementScreenshot('body > app-root > div', 'MxPage/7257_1_MxByNumber.png')
        .click(resetBtn)
        .wait(1000)
        .takeElementScreenshot('body > app-root > div', 'MxPage/7257_2_MxReset.png')
        .typeText('.igx-input-group__bundle', '1', { replace: true, paste: true, speed: 0.075 })
        .takeElementScreenshot('body > app-root > div', 'MxPage/7257_3_MxByNumber.png')
        .click(closeBtn)
        .click(clearFilter);
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7257_4_MxClear.png');


});

test('7259: Verify that if the Mx is not registered, user should see "not yet registered with an Ls"', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');

    await t
        .switchToMainWindow()
        .click('[title="REGISTERED LICENSED SELLER (LS)"]')
        .click('igx-grid-header-group:nth-of-type(3) .igx-chip__content > [draggable="false"]')
        .click('[placeholder="Add filter value"]')
        .typeText('.igx-input-group__bundle', '--', { replace: true, paste: true, speed: 0.075 })
        .pressKey('enter');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7259_Mx_NotYetRegistered.png' );

    await t
        .switchToMainWindow()
        .wait(1000)
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_licensedSeller"] .d-flex > div').withExactText('Not yet registered with an LS').exists).ok('Oops, it doesnt exist!');

});


test('7260: Verify that if the mx is not registered, user should not see Ls client Id and Ls reg number and end date for the Mx', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');

    await t
        .switchToMainWindow()
        .click('[title="REGISTERED LICENSED SELLER (LS)"]')
        .click('igx-grid-header-group:nth-of-type(3) .igx-chip__content > [draggable="false"]')
        .click('[placeholder="Add filter value"]')
        .typeText('.igx-input-group__bundle', '--', { replace: true, paste: true, speed: 0.075 })
        .pressKey('enter');
    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7260_Mx_NotYetRegNoNr.png' );

    await t
        .switchToMainWindow()
        .wait(1000)
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_licensedSeller"] .d-flex > div').withExactText('Not yet registered with an LS').exists).ok('Oops, info is missing!')
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_partialClientId"] > .text-center > div').withExactText('--').exists).ok('Oops, client ID exist!')
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_partialRegNo"] > .text-center > div').withExactText('--').exists).ok('Oops, Reg Number exist!')
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_expiryDate"] > .text-center > div').withExactText('--').exists).ok('Oops, End Date actually exist!');


});

test('7261: Verify that user should see the health care practitioner name and phone number on the list', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
    await t
        .switchToMainWindow()
        .click(Selector('[data-rowindex="0"][aria-describedby="mxList_mxCode"] > .text-center > div'))
        .click(Selector('.text-right > .d-flex > .btn').withText('Patient Details').filterVisible())
        .click(patientnav.subMx)
        .wait(1000);

    await t.takeElementScreenshot('body > app-root > div', 'MxPage/7261_Mx_HCP.png' );
    await t
        .switchToMainWindow()
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_hcpNameWithPhone"] .break-word').withText('Dr.').exists).ok('Oops, HCP name is missing!')
        .expect(Selector('[data-rowindex="0"][aria-describedby="mxList_hcpNameWithPhone"] .text-muted').withText('+1').exists).ok('Oops, HCP Phone is missing!');


});

test('7258: Verify after adding a new Mx the total records for the Mx should increase', async () => {
    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
    await t.switchToMainWindow();
    const totalMXs = Selector('filter-info > div > div > div').textContent;

    await t.expect(await totalMXs).contains('', 'OOps, the total number of Mx is not correct!');

    const beforeAddMx = parseFloat((await totalMXs).toString().replace(/\D/g, ''));

    console.log('Total Mxs before: ' + beforeAddMx.toString());
    await t.takeScreenshot('MxPage/7658_MxTotalBefore.png');

    /** Navigate to Patients list */
    await t.click(patientnav.patBtn);

    /** Open Create Patient modal menu */
    // await t
    //     .expect(patientnav.createPatientBtn.exists)
    //     .notOk('Create Patient button is present!');
    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectPatRow('igx-grid-cell:nth-child(1) > div', 'GILMOUR'); // select patient name starting with the given name'
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
            '0.35',
            { paste: true, replace: true }
        )
        .typeText(
            Selector(
                'div:nth-child(4) > div.pl-2.w-50.d-flex.flex-column.justify-content-center > div.d-flex.align-items-center > div.input-group-sm > input'
            ),
            '3',
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
        // 'Anorexia'
        // 'Amyotrophic Lateral Sclerosis'
        'Arthritis (Osteoarthritis Inflammation with Mild Pain)'
    );
    await t.takeScreenshot('MxPage/7658_MxHealthIssue.png');
    /**Click Create Mx */
    await t.click(
        Selector(
            'button.btn.btn-primary.mx-2.btn-success > span'
        ).withExactText('CREATE Mx')
    );
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t.wait(1000);
    // Close New Order Modal
    await t
        .click('.close-btn')
        .switchToMainWindow();

    await navbar.selectMenuOption('MEDICAL AUTHORIZATIONS');
    await t.switchToMainWindow();
    const finalMXs = Selector('filter-info > div > div > div').textContent;
    const afterAddMx = parseFloat((await finalMXs).toString().replace(/\D/g, ''));

    console.log('Total Mxs after: ' + afterAddMx.toString());

    await t.takeScreenshot('MxPage/7658_MxTotalAfter.png');
    await t.expect(beforeAddMx + 1).eql(afterAddMx);

});
