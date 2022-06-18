import { Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
// Import in tests like this:
// --------------------------
// import PatientNav from '../page-objects/components/PatientNav'
// const patientnav = new PatientNav()
// Reference with 'patientnav.homeOption'
// Call action in code:
// patientnav.search('online bank')

/**
 *  -- Select Image
 * @param {*} imgSelector
 * @returns
 */
const selectImg = async (imgSelector) => {
    /** @type { SelectorAPI & HTMLImageElement} */

    const result = await /** @type { ? } */ Selector(
        imgSelector
    ).addCustomDOMProperties({
        complete: (/** @type {HTMLImageElement} */ el) => {
            return el.complete;
        },
        naturalHeight: (/** @type {HTMLImageElement} */ el) => el.naturalHeight,
        naturalWidth:  (/** @type {HTMLImageElement} */ el) => el.naturalWidth,
        currentSrc:    (/** @type {HTMLImageElement} */ el) => el.currentSrc,
        textContent:   (/** @type {HTMLImageElement} */ el) => el.textContent,
    });

    return result;
};

class PatientNav {
    constructor () {
        // Selectors
        this.searchBox = Selector('#searchTerm');
        this.homeOption = Selector(
            'left-nav > div > nav > a.nav-item.nav-link.rounded-0.px-1.active > div > span'
        );
        this.homeOption1 = Selector(
            '.nav-item.nav-link.rounded-0.px-1 .align-items-center span'
        );
        this.ordersOption = Selector(
            'left-nav > div > nav > a:nth-child(2) > div > div'
        );
        this.patOptions = Selector(
            'left-nav > div > nav > a:nth-child(3) > div > div'
        );
        this.hpOption = Selector(
            'left-nav > div > nav > a:nth-child(5) > div > div'
        );
        this.mxOption = Selector(
            'left-nav > div > nav > a:nth-child(5) > div > div'
        );
        this.prodOption = Selector(
            'left-nav > div > nav > a:nth-child(6) > div > div'
        );
        this.diOption = Selector(
            'left-nav > div > nav > a:nth-child(7) > div > div'
        );
        this.lsOption = Selector(
            'left-nav > div > nav > a:nth-child(8) > div > div'
        );
        this.coedOption = Selector(
            'left-nav > div > nav > a:nth-child(9) > div > div'
        );
        this.virtualCare = Selector(
            'left-nav > div > nav > a:nth-child(10) > div > div'
        );
        this.menuOption = Selector(
            'a .routerlink .nav-item.nav-link.rounded-0.px-1.transparent-bg'
        );
        this.signOutIcon = Selector('#dropdownMenuButton > img');
        this.signOutBtn = Selector('button#signOutBtn strong');
        this.navOption = Selector('.d-flex.flex-row.align-items-center');
        this.diModal = Selector('.btn.close-btn.btn-sm.btn-width');
        this.privacyTxt = Selector('h5.text-white-50'); // Priacy text
        this.privacyBtnActive = Selector('.btn.btn-toggle.active'); // privacy button is active ON
        this.privacyBtnDisabled = Selector('.btn.btn-toggle'); //privacy button is disabled OFF
        // Patients topbar menu items
        this.patBtn = Selector('i.icon_Nav-Patients.navIcon'); //Patient left menu button
        this.patientstitle = Selector('.blue-tinted-bg.overflow > span'); //Patients title
        this.totalrecords = Selector('.col-auto > filter-info > div > div'); //Total Record:##
        this.totalnumber = Selector(
            '.col-auto > filter-info > div > div > div > strong'
        ); // records number
        this.clearFilterBtn1 = Selector(
            '.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(1)'
        ); // clear button
        this.clearFilterBtn = Selector('btn.btn-link').nth(1); // clear button
        this.clearFilterIcon = Selector('.icon_Filter.toolbaricon'); // Clear Filter Icon
        this.patientDetailsBtn = Selector(
            'ncol.text.d-flex.justify-content-end.pr-0 > div:nth-child(2)'
        ); //Patient Details disabled
        this.patientDetailsBtnEnabled = Selector(
            '.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(2) > button'
        ); //Patient Details enabled
        this.createPatientBtn = Selector(
            '.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(3) > button'
        ); //Create Patient
        this.patnamecol = Selector('#igx-grid-0_patientName > span'); // Patient name (LAST, First)
        this.patnamecol1 = Selector('igx-grid-header').nth(1); // Patient name (LAST, First)
        this.patarrowup = Selector('#igx-grid-0_patientName > div'); //arrow upward
        this.gendercol = Selector('#igx-grid-0_gender > span > div > i'); //gender icon
        this.idnumbercol = Selector('#igx-grid-0_identityNo > span > div'); //id number
        this.telephonecol = Selector('#igx-grid-0_phoneField > span > span'); //telephone
        this.addresscol = Selector('#igx-grid-0_addressField > span > span'); //address
        this.filterPatientName = Selector(
            '#igx-chip-0 > div > div.igx-chip__content'
        ); // filter by Patient Name
        this.filterGender = Selector(
            '#igx-chip-1 > div > div.igx-chip__content > span'
        ); // filter by Patient Gender
        this.filterTelephone = Selector(
            '#igx-chip-6 > div > div.igx-chip__content > span'
        ); //filter by Telephone
        this.filterAddress = Selector(
            '#igx-chip-7 > div > div.igx-chip__content > span'
        ); // filter by Address
        this.tblBody = Selector('#igx-grid-1 > div.igx-grid__tbody'); // table body whole
        this.tblBodyContent = Selector(
            '#igx-grid-1 > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container'
        ); //tbl content
        this.firstSelPatRow = Selector(
            'igx-grid-row.igx-grid__tr.igx-grid__tr--odd.igx-grid__tr--selected'
        ); //selected first row
        this.thirdPatRow = Selector(
            'igx-grid-row:nth-child(3) > igx-display-container'
        );
        this.rowSelector = Selector('igx-grid-row');
        //Patient subpage details
        this.subPatTitle = Selector(
            '.d-print-none.p-2.text-white.h3.mb-0.blue-tinted-bg.overflow > span'
        );
        this.patIcon = Selector('div > div.p-2 > img');
        this.subFirstName = Selector('.blue-label-color > div');
        this.subLastName = Selector('div.blue-label-color > strong > div');
        this.subInfo = Selector(
            'patient-left-nav > div > div > nav > a > div > div'
        );
        this.subMx = Selector(
            'patient-left-nav > div > nav:nth-child(2) > a > div'
        );
        this.subOrders = Selector(
            'patient-left-nav > div > nav:nth-child(3) > a'
        );
        this.subNewOrderBtn = Selector(
            '.align-items-center > div:nth-child(4) > button'
        );
        this.subMeds = Selector(
            'patient-left-nav > div > nav:nth-child(4) > a > div'
        );
        this.subConsultations = Selector(
            'patient-left-nav > div > nav:nth-child(5) > a > div'
        );
        this.subNotes = Selector(
            ' patient-left-nav > div > nav:nth-child(6) > a > div'
        );
        this.subAttachments = Selector(
            'patient-left-nav > div > nav:nth-child(7) > a > div > span:nth-child(1)'
        );
        this.pencilDemographic = Selector(
            '#info-div > div:nth-child(1) > div.d-flex.align-items-center > i'
        );
        // Patient Demographics / Create Patient
        this.firstNameCreate = Selector(
            '.modal-body > div > form > div:nth-child(1) > div:nth-child(1) > input'
        );
        this.lastNameCreate = Selector(
            '.modal-body > div > form > div:nth-child(1) > div:nth-child(2) > input'
        );
        this.calendarCreate = Selector('#birthDate > input');
        this.preferredName = Selector('#preferredName');
        this.occupation = Selector('#occupation');
        this.weight = Selector('#inputWeight');
        this.height = Selector(
            'patient-height > div > div.ng-star-inserted > up-down-arrows-container > div > input'
        );
        this.metricWeight = Selector('.icon_Checkpoint.ng-star-inserted').nth(
            1
        );
        this.metricHeight = Selector('.icon_Checkpoint.ng-star-inserted').nth(
            2
        );
        this.imperialWeight = Selector(
            '.icon_Circle.disabled-radio.ng-star-inserted'
        ).nth(1);
        this.imperialHeight = Selector(
            '.icon_Circle.disabled-radio.ng-star-inserted'
        ).nth(2);
        this.addressLabel = Selector('.blue-label-color.fs-18').nth(1);
        this.telephoneLabel = Selector('.blue-label-color.fs-18').nth(2);
        this.emailLabel = Selector('.blue-label-color.fs-18').nth(3);
        this.identificationLabel = Selector('.blue-label-color.fs-18').nth(4);
        this.addNewAddressBtn = Selector('#addNewAddressBtn > i');
        this.addNewTelBtn = Selector('#addNewPhoneBtn > i');
        this.addNewEmailBtn = Selector('.icon_AddNew.toolbaricon').nth(3);
        this.addNewIdBtn = Selector('#addNewidBtn > i');
        // Add Patient Address
        this.homeTagSel = Selector('#gender');
        this.homeTag = Selector(
            '.dropdown.cursor-pointer.pt-0.ng-pristine.ng-valid.ng-touched'
        );
        this.homeOpt = Selector('#gender > option:nth-child(1)');
        this.workOpt = Selector('#gender > option:nth-child(2)');
        this.otherOpt = Selector('#gender > option:nth-child(3)');
        this.addressInput = Selector(
            '#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(2) > div:nth-child(1) > input'
        );
        this.addressTwoInput = Selector(
            '#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(2) > div:nth-child(2) > input'
        );
        this.cityInput = Selector(
            '#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(3) > div:nth-child(1) > input'
        );
        this.provinceSel = Selector(
            'mat-dialog-container#mat-dialog-7 div:nth-child(2) > label > select#gender'
        );
        this.provinceOpt = Selector('#gender > option:nth-child(1)');
        this.provinceAB = Selector('option').filter('[value="AB"]');
        this.provinceBC = Selector('option').filter('[value="BC"]');
        this.postalCode = Selector('#inputZip');
        this.okAddPatAddressBtn = Selector(
            '.btn.close-btn.btn-sm.ok-close-btn'
        ).withText('OK');
        this.cancelAddPatAddressBtn = Selector(
            '.btn.close-btn.btn-sm.ok-close-btn'
        ).withText('Cancel');
        this.countryAdd = Selector(
            'form > div:nth-child(4) > div:nth-child(2) > div.gray-text.pt-4.mt-1.border-bottom'
        );
        this.checkReview = Selector('#consentCheck');
        this.consentText = Selector(
            'form > div:nth-child(6) > div > div > label'
        );
        this.createPatDisabled = Selector(
            '#mat-dialog-0 > app-create-patient-modal > div > div.d-flex.modal-footer.justify-content-end.p-2 > button.btn.btn-success.btn-sm.mr-2'
        ).hasAttribute('disabled');
        // Add Telephone
        this.phoneTag = Selector('#tag');
        this.phoneInput = Selector('#telephone');
        this.okPhoneBtn = Selector(
            'telephone-form > contact-base-form > div > div.d-flex.modal-footer.justify-content-center > button:nth-child(1)'
        ); //phone Selector('.btn.close-btn.btn-sm').nth(1)
        this.cancelPhoneBtn = Selector(
            'telephone-form > contact-base-form > div > div.d-flex.modal-footer.justify-content-center > button:nth-child(2)'
        ); // Cancel //phone Selector('.btn.close-btn.btn-sm').nth(2)
        //Add Email
        this.emailTag = Selector('#tag');
        this.emailInput = Selector('#inputEmail');
        this.okEmailBtn = Selector('.btn.close-btn.btn-sm').nth(1);
        this.cancelEmailBtn = Selector('.btn.close-btn.btn-sm').nth(2);
        this.emailTooltipTxt = Selector(
            '[ng-reflect-tooltip="Please enter a valid email add"]'
        );
        this.emailSaved = Selector('#emailList .text-primary.ng-star-inserted');
        // Add IDENTIFICATION
        this.provTag = Selector('#tag');
        this.idNumberInput = Selector('#inputID');
        this.okIDBtn = Selector('.btn.close-btn.btn-sm').nth(1);
        this.cancelIDBtn = Selector('.btn.close-btn.btn-sm').nth(2);
        this.savedIDTxt = Selector('.btn.btn-sm.btn-link.pl-0.text-left');
        this.createPatEnabled = Selector(
            'button.btn.btn-success.btn-sm.mr-2'
        ).withText('CREATE PATIENT');
        // CONSENT
        this.consentCheckbox = Selector('#consentCheck');
        this.consentText = Selector(
            'form > div:nth-child(6) > div > div > label'
        );
        //UPDATE DEMOGRAPHICS
        this.updatePatientDemographicTitle = Selector(
            '.h5.blue-label-color.mx-1.my-2.py-2.col-md-12'
        );
        this.updateFirstName = Selector(
            '#mat-dialog-0 div:nth-child(1) > div:nth-child(1) > input'
        );
        this.updateLastName = Selector(
            '#mat-dialog-0 div:nth-child(1) > div:nth-child(2) > input'
        );
        this.updateCalendarInput = Selector('div#birthDate > input'); // Format DD-MMM-YYYY
        this.updatePickCalendr = Selector('div#birthDate i');
        this.updatePreferredName = Selector('input#preferredName');
        this.updateOccupation = Selector('input#occupation');
        this.updateWeight = Selector('input#inputWeight');
        this.updateWeightUpArrow = Selector(
            'up-down-arrows-container > div > div > div:nth-child(1) > button[type="button"] > i'
        );
    }

    // Functions
    /**
     *  -- Search
     * @param {*} text
     */
    async search (text) {
        await t
            .typeText(this.searchBox, text, { paste: true, replace: true })
            .pressKey('enter');
    }
    /**
     * --Confirm menu options
     * @param {*} text
     */
    async confirmMenuOptionExists (text) {
        await waitForAngular();

        await t
            .scroll(this.navOption.withText(text))
            .hover(this.navOption.withText(text))
            .expect(this.navOption.withText(text).exists)
            .ok();
    }
    /**
     * --Select a main menu option
     * @param {*} text
     */
    async selectMenuOption (text) {
        await waitForAngular();

        await t
            .hover(this.navOption.withText(text))
            .expect(this.navOption.withText(text).exists)
            .ok()
            .click(this.navOption.withText(text));
    }
    /**
     * --Select Home button on main menu
     * @param {*} text
     */
    async selectHome (text) {
        await waitForAngular();

        await t
            .hover(this.homeOption.withText(text))
            .expect(this.homeOption.withText(text).exists)
            .ok()
            .click(this.homeOption.withText(text));
    }
    /**
     * -- Select a row
     * @param {*} sel
     * @param {*} val
     */
    async selectFld (sel, val) {
        await waitForAngular();
        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );

        await t
            .hover(selectedRow.withText(val))
            .click(selectedRow.withText(val))
            .click(selectedRow.withText(val))
            .click(selectedRow.withText(val));
    }
    /**
     * -- Check all checkboxes
     * @param {*} sel --check all checkboxes
     */
    async clickOption (sel) {
        this.selOpt = Selector(sel);
        await t.click(this.selOpt).wait(1000);
    }
    /**
     * --check all options
     * @param {*} sel
     */
    async fnChk (sel) {
        await waitForAngular();
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;

        const n = ct;

        let i = 0;

        while (i < [n]) {
            const el = Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .click(el)
                .pressKey('tab');
            i++;
        }
    }
    /**
     * --verify a broken link on a page
     * @param {*} sel
     */
    async fnChkEl (sel) {
        await sel.exists;
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;
        const pic = await selectImg(sel);

        const n = ct;

        let i = 0;

        while (i < [n]) {
            const el = Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .hover(el)
                .expect(sel.exists)
                .ok()
                .expect(pic.currentSrc)
                .contains('PL_blankpic')
                .expect(pic.currentSrc)
                .notContains('http://aghujhttp://');
            i++;
        }
    }
}

export default PatientNav;
