import { baseUrl, password, username } from '../../index.js';
// import Navbar from '../../page-objects/components/navbar.js';
import PatientNav from '../../page-objects/components/patientnav.js';
import Random from '../../page-objects/components/rand.mo';
import { waitForAngular } from 'testcafe-angular-selectors';
import { faker } from '@faker-js/faker';
const { Selector, Role, ClientFunction, t } = require('testcafe');
const { expect } = require('chai');
// const navbar = new Navbar();
const patientnav = new PatientNav();
const random = new Random();
const dob =
    random.randomDay + '-' + faker.date.month() + '-' + random.randomYear;
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

fixture`E2E - C/R/I/S Create Patients`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        await t.useRole(userOne);
        t.fixtureCtx.firstName = random.FirstName;
        t.fixtureCtx.lastName = random.LastName;
        t.fixtureCtx.datePast = random.DatePast;
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test('Verify user is logged in CRIS', async () => {
    await t.switchToMainWindow();

    const userNm = await Selector('body > app-root > div > top-nav > nav > div')
        .innerText;

    expect(userNm).to.equal('Nicolae Lapuste (Gmail)');
});

test('Verify user can select the Patients menu option', async () => {
    await t.switchToMainWindow();
    await waitForAngular();
    await patientnav.clickOption(patientnav.patBtn);
});

test('Verify user can select a patient record from the Patients menu option', async () => {
    await t.switchToMainWindow();

    await patientnav.clickOption(patientnav.patBtn);
    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'DOE'); // select patient name starting with 'BAC'
    // await patientnav.selectFld('igx-grid-cell:nth-child(4) > div', '- 4444') // select patient telephone nding in -3333
    // await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText)
        .contains('DOE', 'oops!');
});

test('Verify Create Patient', async () => {
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
    //     .click(patientnav.okEmailBtn);

    // await t.switchToMainWindow();
    /**Add new ID */
    await t.click(patientnav.addNewIdBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    await t
        .click('#tag')
        // .pressKey("down down enter")
        // .click(Selector('option').filter('[value="British Columbia Provincial Health Number"]'))
        // .click(Selector('option').filter('[value="Quebec Provincial Health Number"]'))
        .click(
            Selector('option').filter(
                '[value="Ontario Provincial Health Number"]'
            )
        )
        .typeText(patientnav.idNumberInput, random.randomNumber.toString(), {
            replace: true,
            paste:   true,
        })
        .click(patientnav.okIDBtn);

    await t.switchToMainWindow();
    await t.click(patientnav.consentCheckbox);
    await t
        .expect(patientnav.consentText.innerText)
        .contains(
            "Please review the patient's information then check here to confirm the patient has signed a CRIS consent\nform and agreed to the terms and conditions set out."
        );

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
    await t.click(patientnav.privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');

    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'DOE');
    // await waitForAngular();
    await t
        .expect(patientnav.patientDetailsBtnEnabled.exists)
        .ok('Oops, something went wrong!')
        .click(patientnav.patientDetailsBtnEnabled)
        .wait(1000)
        .expect(patientnav.subLastName.innerText)
        .contains('DOE', 'oops!');

    // await waitForAngular();
    await t.switchToMainWindow();
    const patProfile = await Selector('span')
        .withExactText('Patient: DOE, Georgina')
        .filterVisible();

    await t.hover(patProfile);
    await t.hover(patientnav.subPatTitle);
    await t.expect(patientnav.subPatTitle.innerText).contains('DOE, Georgina');
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
        .ok('Oops, the Privacy button is toggles OFF');
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
