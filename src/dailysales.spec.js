import { baseUrl, password, username } from '../../index.js';
import Navbar from '../../page-objects/components/navbar.js';
import PatientNav from '../../page-objects/components/patientnav.js';
// import Random from '../../page-objects/components/rand.mo';
import { waitForAngular } from 'testcafe-angular-selectors';
// import { faker } from '@faker-js/faker';
const { Selector, Role, ClientFunction, t } = require('testcafe');
// const { expect } = require('chai');
const navbar = new Navbar();
const patientnav = new PatientNav();
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

fixture.only`E2E - C/R/I/S HOME PAGE Elements`
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

test.only('Verify that by default when the user logs in to CRIS, privacy should be ON', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const privacyON = await Selector('button.btn.btn-toggle.active').exists;

    await t
        .wait(1000)
        .expect(privacyON)
        .notOk('Oops, the Privacy button is toggled ON');
});

test.only('Verify Update Patient', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);
    /** Navigate to Patients list */

    await t.click(patientnav.patBtn);
    await t.wait(1000);
    // await t.click(patientnav.privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');
    /** Open Create Patient modal menu */
    await t
        .expect(patientnav.createPatientBtn.exists)
        .notOk('Create Patient button is present!');
    // await t.click(patientnav.createPatientBtn);
    // Select first patient from the list

    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'ALAEI'); // select patient name starting with 'A'
    // await patientnav.selectFld('igx-grid-cell:nth-child(4) > div', '- 4444') // select patient telephone nding in -3333
    await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText)
        .contains('ALAEI', 'oops!');

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
        )
        .wait(1000);
    await t.click(
        'mat-dialog-container#mat-dialog-1 div.d-flex.input-group-sm.pl-2.align-items-center > div:nth-child(1) > input'
    );

    /**Set the Period Of Use to 2 months */
    // await t.click('mat-dialog-container#mat-dialog-1 div.d-flex.align-items-center > div.input-group-sm > input');
    await t.click(
        'mat-dialog-container#mat-dialog-1 div.d-flex.align-items-center > div.input-group-sm > input'
    );

    /** Click Next */
    await t.click(
        'mat-dialog-container#mat-dialog-1 button[type="button"].btn.btn-primary.mx-2 > span'
    );
    await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    /** Select the first Health Practitioner available on the list */
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'ASHRAF');
    // await t.click('igx-grid-row:nth-child(2) > igx-display-container > igx-grid-cell:nth-child(1) > div');
    // await t.click('igx-grid-row:nth-child(3) > igx-display-container > igx-grid-cell:nth-child(2 > div');

    /** Select HCP button on top*/
    await t.click(Selector('.btn.btn-link').withText('Select HCP'));

    // await t.setNativeDialogHandler(() => true);
    await waitForAngular();
    /**Click Next button */
    await t.click(
        Selector(
            '.p-2.gray-modal-footer-bg-color > button.btn.btn-primary.mx-2 > span'
        )
    );
    await waitForAngular();
    /**Select Health Condition Arthritis with Mild Pain*/
    await patientnav.selectFld('igx-grid-cell > div', 'Arthritis');
    // await t.click(
    //     ".igx-grid__tr.igx-grid__tr--odd.igx-grid__tr--selected > igx-display-container > igx-grid-cell"
    // );
    await waitForAngular();
    /**Click Create Mx */
    await t.click(
        '.gray-modal-footer-bg-color > button.btn.btn-primary.mx-2.btn-success > span'
    );
    // await t.setNativeDialogHandler(() => true);
    // /** Click Create Mx button */
    // await t.click(
    //     ".gray-modal-footer-bg-color > button.btn.btn-primary.mx-2.btn-success"
    // );
    await t.wait(1000);
    /** Click to select the new Mx */
    // await t.click(
    //     ".igx-grid__tr--even.igx-grid__tr--selected > igx-display-container > igx-grid-cell:nth-child(7) > div > i"
    // );
    await waitForAngular();
    await patientnav.selectFld(
        'igx-grid-cell:nth-child(6) > div > div.break-word.overflow',
        'Ashraf, Nazia Dr.'
    );
    /** Click Select Mx on top */
    await t.click(
        Selector(
            '.col.text-right.d-flex.justify-content-end.align-items-center > button:nth-child(3) > div'
        ).withText('Select Mx')
    );
    /**Click Next button -not necessary here*/
    // await t.click(
    //     ".gray-modal-footer-bg-color > span > button.btn.mx-2.btn-primary.ng-star-inserted > span > i"
    // );
    await t.setNativeDialogHandler(() => true);
    /**Click Next to advance to preview Patient Information. Here you can modify Mx condition and Health Issue */
    await t.click(
        Selector(
            '.p-2.gray-modal-footer-bg-color > span > button.btn.mx-2.btn-primary.ng-star-inserted'
        )
    );
    await waitForAngular();
    // await t.click('#mat-dialog-3 > create-mx-modal > div > div.d-flex.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > button.btn.btn-primary.mx-2 > span');
    /** Click to select the Health Issue radio button */
    await t.click(
        '.col-7.d-flex.flex-column.align-items-start > div > div.d-flex.flex-row.pt-0 > div:nth-child(5) > div > span > span.numberLayer'
    );
    /**Click to set Patient Preferences Yes, No,No,NO */
    await t.click(
        'div:nth-child(2) > div.d-flex.flex-column.pt-3.align-items-start.pl-2.border-left.pb-2 > div.d-flex.flex-row > div:nth-child(2) > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i'
    );
    await t.click(
        'div:nth-child(3) > div.d-flex.flex-column.pt-3.align-items-start.pl-2.border-left.pb-2 > div.d-flex.flex-row > div:nth-child(1) > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i'
    );
    await t.click(
        'div:nth-child(4) > div.d-flex.flex-column.pt-3.align-items-start.pl-2.border-left.pb-2 > div.d-flex.flex-row > div:nth-child(1) > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i'
    );
    await t.click(
        'div:nth-child(5) > div.d-flex.flex-column.pt-3.align-items-start.pl-2.border-left.false > div.d-flex.flex-row > div:nth-child(1) > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i'
    );

    /** Click Next -> button */
    await t.click(
        '.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > span > button.btn.mx-2.btn-primary.ng-star-inserted > span'
    );
    await t.setNativeDialogHandler(() => true);
    await waitForAngular();
    /** Click to select a Recommended Product */
    await t.click(
        '.igx-grid__tr--even.igx-grid__tr--selected > igx-display-container > igx-grid-cell:nth-child(3) > div > div.small.text-secondary'
    );
    await t.click(
        '.modal-body.p-1 > product-list > div > div:nth-child(3) > div.col.text-right.d-flex.justify-content-end > div > span > button'
    );
    await t.click('.text-center.w-25 > button.btn.btn-sm.btn-link.pb-0 > i');
    /**Click Review */
    await t.click(
        '.gray-modal-footer-bg-color > span > button.btn.mx-2.purple-btn.ng-star-inserted > div > span'
    );
    await waitForAngular();
    /** Click Place Order */
    await t.click(
        '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.close-btn > div > span'
    );
    await waitForAngular();
    await t
        .wait(1000)
        .click(
            '.gray-modal-footer-bg-color > span:nth-child(3) > button.btn.mx-2.ng-star-inserted.purple-btn > span'
        );

    // /**Add content to Create Patient screen */
    // await t
    //     .typeText(patientnav.firstNameCreate, random.randomFirstName, {
    //         replace: true,
    //         paste: true,
    //     })
    //     .typeText(patientnav.lastNameCreate, random.randomLastName, {
    //         replace: true,
    //         paste: true,
    //     })
    //     .typeText(patientnav.calendarCreate, dob.toString(), {
    //         replace: true,
    //         paste: true,
    //     })
    //     .typeText(patientnav.weight, random.randomWeight.toString(), {
    //         replace: true,
    //         paste: true,
    //     })
    //     .typeText(patientnav.height, random.randomHeight.toString(), {
    //         replace: true,
    //         paste: true,
    //     })
    //     .click(patientnav.addNewAddressBtn);
    // /** Add gender */
    // await t
    //     .click(Selector("#gender"))
    //     .click(Selector("option").filter('[value="F"]'));

    // /**Add New Address to the patient */
    // // await waitForAngular();
    // await t.setNativeDialogHandler(() => true);
    // await t
    //     .typeText(patientnav.addressInput, random.randomStreetAddress, {
    //         replace: true,
    //         paste: true,
    //     })
    //     .typeText(patientnav.cityInput, "Toronto", {
    //         replace: true,
    //         paste: true,
    //     })
    //     // .pressKey("tab down down enter")
    //     .click(Selector('[formcontrolname="province"]'))
    //     .click(Selector("option").filter('[value="ON"]'))
    //     .typeText(patientnav.postalCode, "O7P 1H2", {
    //         replace: true,
    //         paste: true,
    //     })
    //     .click(patientnav.okAddPatAddressBtn);

    // /** Add telefone */
    // await t.click(patientnav.addNewTelBtn);
    // // await waitForAngular();
    // await t.setNativeDialogHandler(() => true);
    // await t
    //     .typeText(patientnav.phoneInput, random.randomPhone, {
    //         replace: true,
    //         paste: true,
    //     })
    //     .click(patientnav.okPhoneBtn);

    // await t.switchToMainWindow();
    // /**Add new email */
    // // await t.click(patientnav.addNewEmailBtn);
    // // await waitForAngular();
    // // await t.setNativeDialogHandler(() => true);
    // // await t
    // //     .typeText(patientnav.emailInput, random.randEmail, {
    // //         replace: true,
    // //         paste: true,
    // //     })
    // //     .click(patientnav.okEmailBtn);

    // // await t.switchToMainWindow();
    // /**Add new ID */
    // await t.click(patientnav.addNewIdBtn);
    // // await waitForAngular();
    // await t.setNativeDialogHandler(() => true);

    // await t
    //     .click("#tag")
    //     // .pressKey("down down enter")
    //     // .click(Selector('option').filter('[value="British Columbia Provincial Health Number"]'))
    //     // .click(Selector('option').filter('[value="Quebec Provincial Health Number"]'))
    //     .click(
    //         Selector("option").filter(
    //             '[value="Ontario Provincial Health Number"]'
    //         )
    //     )
    //     .typeText(patientnav.idNumberInput, random.randomNumber.toString(), {
    //         replace: true,
    //         paste: true,
    //     })
    //     .click(patientnav.okIDBtn);

    // await t.switchToMainWindow();
    // await t.click(patientnav.consentCheckbox);
    // await t
    //     .expect(patientnav.consentText.innerText)
    //     .contains(
    //         "Please review the patient's information then check here to confirm the patient has signed a CRIS consent\nform and agreed to the terms and conditions set out."
    //     );

    // await t
    //     .hover(patientnav.createPatEnabled)
    //     .wait(1000)
    //     .click(patientnav.createPatEnabled);
    // await t.switchToMainWindow();
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
