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
const dob = (random as any).randomDay + '-' + faker.date.month() + '-' + (random as any).randomYear;


const userOne = Role(
    `${baseUrl()}/#/home`,
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
    .beforeEach(async ()=> {
        await t.maximizeWindow();
        await t.useRole(userOne);
        t.fixtureCtx.firstName = (random as any).FirstName;
        t.fixtureCtx.lastName = (random as any).LastName;
        t.fixtureCtx.datePast = (random as any).DatePast;
    })
    .afterEach(async ()=> {
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

test.only('Verify Create Patient', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);
    /** Navigate to Patients list */
await t.click((patientnav as any).patBtn);
    await t.wait(1000);
    // await t.click(patientnav.privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');
    /** Open Create Patient modal menu */
await t
    .expect((patientnav as any).createPatientBtn.exists)
    .ok('Create Patient button is missing!');
    await t.click((patientnav as any).createPatientBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    /**Add content to Create Patient screen */
await t
    .typeText((patientnav as any).firstNameCreate, (random as any).randomFirstName, {
    replace: true,
    paste: true,
})
    .typeText((patientnav as any).lastNameCreate, (random as any).randomLastName, {
    replace: true,
    paste: true,
})
    .typeText((patientnav as any).calendarCreate, dob.toString(), {
    replace: true,
    paste: true,
})
    .typeText((patientnav as any).weight, (random as any).randomWeight.toString(), {
    replace: true,
    paste: true,
})
    .typeText((patientnav as any).height, (random as any).randomHeight.toString(), {
    replace: true,
    paste: true,
})
    .click((patientnav as any).addNewAddressBtn);
    /** Add gender */
    await t
        .click(Selector('#gender'))
        .click(Selector('option').filter('[value="F"]'));

    /**Add New Address to the patient */
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t
    .typeText((patientnav as any).addressInput, (random as any).randomStreetAddress, {
    replace: true,
    paste: true,
})
    .typeText((patientnav as any).cityInput, 'Toronto', {
    replace: true,
    paste: true,
})
    // .pressKey("tab down down enter")
    .click(Selector('[formcontrolname="province"]'))
    .click(Selector('option').filter('[value="ON"]'))
    .typeText((patientnav as any).postalCode, 'O7P 1H2', {
    replace: true,
    paste: true,
})
    .click((patientnav as any).okAddPatAddressBtn);

    /** Add telefone */
await t.click((patientnav as any).addNewTelBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);
    await t
    .typeText((patientnav as any).phoneInput, (random as any).randomPhone, {
    replace: true,
    paste: true,
})
    .click((patientnav as any).okPhoneBtn);

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
await t.click((patientnav as any).addNewIdBtn);
    // await waitForAngular();
    await t.setNativeDialogHandler(() => true);

    await t
    .click('#tag')
    .click(Selector('option').filter('[value="Ontario Provincial Health Number"]'))
    .typeText((patientnav as any).idNumberInput, (random as any).randomNumber.toString(), {
    replace: true,
    paste: true,
})
    .click((patientnav as any).okIDBtn);

    await t.switchToMainWindow();
    await t.click((patientnav as any).consentCheckbox);
    await t
    .expect((patientnav as any).consentText.innerText)
    .contains("Please review the patient's information then check here to confirm the patient has signed a CRIS consent\nform and agreed to the terms and conditions set out.");

    await t
    .hover((patientnav as any).createPatEnabled)
    .wait(1000)
    .click((patientnav as any).createPatEnabled);
    await t.switchToMainWindow();
});
test('Verify the Patient Update Demographics for an existing patient', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    const getLocation = ClientFunction(() => document.location.href);

    await t.click((patientnav as any).patBtn);
    await t.wait(1000);
    await t.click((patientnav as any).privacyBtnActive);
    await t.expect(getLocation()).contains('/#/patients');

    await patientnav.selectFld('igx-grid-cell:nth-child(1) > div', 'DOE');
    // await waitForAngular();
await t
    .expect((patientnav as any).patientDetailsBtnEnabled.exists)
    .ok('Oops, something went wrong!')
    .click((patientnav as any).patientDetailsBtnEnabled)
    .wait(1000)
    .expect((patientnav as any).subLastName.innerText)
    .contains('DOE', 'oops!');

    // await waitForAngular();
    await t.switchToMainWindow();
    const patProfile = await Selector('span')
        .withExactText('Patient: DOE, Georgina')
        .filterVisible();

    await t.hover(patProfile);
    await t.hover((patientnav as any).subPatTitle);
    await t.expect((patientnav as any).subPatTitle.innerText).contains('DOE, Georgina');
    await t.click((patientnav as any).pencilDemographic);
    await t.setNativeDialogHandler(() => true);
    await t
    .expect((patientnav as any).updatePatientDemographicTitle.innerText)
    .contains('UPDATE PATIENT DEMOGRAPHICS');
});

test('Verify that by default when the user logs in to CRIS, privacy should be ON', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();

    await t
    .wait(1000)
    .expect((patientnav as any).privacyBtnActive.exists)
    .ok('Oops, the Privacy button is toggles OFF');
});

test('Verify that the user should sign out from CRIS by clicking on sign out button', async () => {
    await t.maximizeWindow();
    await t.switchToMainWindow();
    const getLocation = ClientFunction(() => document.location.href);

    await t
    .wait(1000)
    .click((patientnav as any).signOutIcon)
    .wait(500)
    .click((patientnav as any).signOutBtn)
    .wait(1000)
    .expect(getLocation())
    .contains('https://login.microsoftonline.com/');
});
