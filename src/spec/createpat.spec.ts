import { Selector, Role, ClientFunction, t, fixture } from 'testcafe';
import { Config } from '../../config/config.interface';
import { getCurrentConfig } from '../../config/testcafe-config';
import { PatientNav } from '../../page-objects/components/patientnav';
import { OrdersNav } from '../../page-objects/components/ordersnav';
import Random from '../../page-objects/components/rand.mo';
import { waitForAngular } from 'testcafe-angular-selectors';

import { faker } from '@faker-js/faker';


const { expect } = require('chai');

const patientnav = new PatientNav();
const ordersnav = new OrdersNav();
const random = new Random();
const dob = random.randomDay + '-' + faker.date.month() + '-' + random.randomYear;

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


fixture`E2E - C/R/I/S Create Patients`
    .before(async (ctx) => {
        ctx.config = getCurrentConfig();
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        await t.useRole(userOne);
        t.fixtureCtx.firstName = random.randomFirstName;
        t.fixtureCtx.lastName = random.randomLastName;
        t.fixtureCtx.datePast = random.randomDatePast;
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test.only('Verify user is logged in CRIS', async () => {
    await t.switchToMainWindow();

    const userNm = await Selector('body > app-root > div > top-nav > nav > div')
        .innerText;

    expect(userNm).to.equal('Nicolae Lapuste');


});

test('Verify user can select the Patients menu option', async () => {
    await t.switchToMainWindow();

    await patientnav.clickOption(patientnav.patBtn);
});

test('Verify user can select a patient record from the Patients menu option', async () => {
    // const patientnav = new PatientNav();
    await t.switchToMainWindow();

    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'ABAO'); // select patient name starting with 'BAC'
    // await patientnav.selectFld('igx-grid-cell:nth-child(4) > div', '- 4444') // select patient telephone nding in -3333
    await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText)
        .contains('ABAO', 'oops!');
});

test.skip('Verify Create Patient', async () => {
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
        .ok('Create Patient button is missing!');
    await t.click(patientnav.createPatientBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /**Add content to Create Patient screen */
    await t
        .typeText(patientnav.firstNameCreate, random.randomFirstName, {
            replace: true,
            paste:   true,
        })
        .typeText(patientnav.lastNameCreate, random.randomLastName, {
            replace: true,
            paste:   true,
        })
        .typeText(patientnav.calendarCreate, dob.toString(), {
            replace: true,
            paste:   true,
        })
        .typeText(patientnav.weight, random.randomWeight.toString(), {
            replace: true,
            paste:   true,
        })
        .typeText(patientnav.height, random.randomHeight.toString(), {
            replace: true,
            paste:   true,
        })
        .click(patientnav.addNewAddressBtn);
    /** Add gender */
    await t
        .click(Selector('#gender'))
        .click(Selector('option').filter('[value="F"]'));

    /**Add New Address to the patient */
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t
        .typeText(patientnav.addressInput, random.randomStreetAddress, {
            replace: true,
            paste:   true,
        })
        .typeText(patientnav.cityInput, 'Toronto', {
            replace: true,
            paste:   true,
        })
        // .pressKey("tab down down enter")
        .click(Selector('[formcontrolname="province"]'))
        .click(Selector('option').filter('[value="ON"]'))
        .typeText(patientnav.postalCode, 'O7P 1H2', {
            replace: true,
            paste:   true,
        })
        .click(patientnav.okAddPatAddressBtn);

    /** Add telefone */
    await t.click(patientnav.addNewTelBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t
        .typeText(patientnav.phoneInput, random.randomPhone, {
            replace: true,
            paste:   true,
        })
        .click(patientnav.okPhoneBtn);

    await t.switchToMainWindow();
    /**Add new email */
    // await t.click(patientnav.addNewEmailBtn);
    // await waitForAngular();
    // await t.setNativeDialogHandler(() => true);
    // await t
    //     .typeText(patientnav.emailInput, random.randEmail, {
    //         replace: true,
    //         paste: true,
    //     })
    /**Add new ID */
    await t.click(patientnav.addNewIdBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    await t
        .click('#tag')
        .click(Selector('option').filter('[value="Ontario Provincial Health Number"]'))
        .typeText(patientnav.idNumberInput, random.randomNumber.toString(), {
            replace: true,
            paste:   true,
        })
        .click(patientnav.okIDBtn);

    await t.switchToMainWindow();
    await t.click(patientnav.consentCheckbox);
    await t
        .expect(patientnav.consentText.innerText)
        .contains("Please review the patient's information then check here to confirm the patient has signed a CRIS consent\nform and agreed to the terms and conditions set out.");

    await t
        .hover(patientnav.createPatEnabled)
        .wait(1000)
        .click(patientnav.createPatEnabled);
    await t.switchToMainWindow();
});
test('Verify the Patient Update Demographics for an existing patient', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);

    await t.click(patientnav.patBtn);
    await t.wait(1000);
    await t.click(ordersnav.privacyIsOff);
    await t.expect(getLocation()).contains('/#/patients');
    await t.wait(2000);
    await patientnav.selectFld('igx-display-container > igx-grid-row > igx-display-container > igx-grid-cell:nth-child(1) > div', 'ABA'); // after toggling the Privacy only first three letters are visible
    // await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText)
        .contains('ABA', 'oops!');

    // await waitForAngular();
    await t.switchToMainWindow();
    const patProfile = await Selector('span')
        .withExactText('Patient: ABA••••••, B•••')
        .filterVisible();

    await t.hover(patProfile);
    await t.hover(patientnav.subPatTitle);
    await t.expect(patientnav.subPatTitle.innerText).contains('ABA••••••, B•••');
    await t.click(patientnav.pencilDemographic);
    await t.setNativeDialogHandler(() => true);
    await t
        .expect(patientnav.updatePatientDemographicTitle.innerText)
        .contains('UPDATE PATIENT DEMOGRAPHICS');
});

test('Verify that by default when the user logs in to CRIS, privacy should be ON', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    await t
        .wait(1000)
        .expect(patientnav.privacyBtnActive.exists)
        .notOk('Oops, the Privacy button is toggles ON');
});

test('Verify that the user should sign out from CRIS by clicking on sign out button', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();
    const getLocation = ClientFunction(() => document.location.href);

    await t
        .wait(1000)
        .click(patientnav.signOutIcon)
        .wait(500)
        .click(patientnav.signOutBtn)
        .wait(1000)
        .expect(getLocation())
        .contains('https://login.microsoftonline.com/');
});
