import { ClientFunction, Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
import xpathSelector from '../../src/utilities/xpath-selector';
// import { xpathSelector } from '../../src/utilities/xpath-selector';
// Import in tests like this:
// --------------------------
// import PatientNav from '../page-objects/components/PatientNav'
// const patientnav = new PatientNav()
// Reference with 'patientnav.homeOption'
// Call action in code:
// patientnav.search('online bank')

// const browserScroll = ClientFunction(function () {
//     window.scrollBy(0, 3000);
// });

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
        this.updateWeightUpArrow = Selector('up-down-arrows-container > div > div > div:nth-child(1) > button[type="button"] > i');
        this.enterMxNextBtn = Selector('create-mx-modal.ng-star-inserted>div>div:nth-child(3)>button:nth-child(2)');
        this.newOrderNext = Selector('.mx-2');
        this.btnAddToOrder = Selector('.modal-body.p-1 > product-list > div > div:nth-child(3) > div.col.text-right.d-flex.justify-content-end > div > span > button').withText('Add to Order');
        this.weighthLabel = Selector('div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt').withText('kg').filterVisible();
        this.inputWeight = Selector('div.d-flex.flex-column.w-100 > div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt');
        this.inputWeightIC = Selector('.icon_InputForm');
        this.inputField = Selector('#inputWeight');
        this.inputOkBtn = Selector('.close-btn[appdebounceclick]');
        this.healthIssueFive = Selector('.pt-0 > div:nth-of-type(5) .numberLayer');
        this.healthIssueOne = Selector('.pt-0 > div:nth-of-type(1) .numberLayer');
        this.healthIssueTen = Selector('div:nth-of-type(10) .numberLayer');
        this.canUserYes = Selector('div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canUserNo = Selector('div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canForm = Selector('[ng-reflect-klass="regular-text h-100"] div:nth-of-type(3) > div:nth-of-type(3) div:nth-of-type(2) > div:nth-of-type(1) i:nth-of-type(1)');
        this.canFormNo = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormCaps = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormCart = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormDried = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormOil = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(5)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormPowder = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(6)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canFormSpray = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(7)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeNo = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeIndica = Selector( 'div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeSativa = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeHybrid = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertNoPref = Selector('div.false>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertAlert = Selector( 'div.false>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertSome = Selector('div.false>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertDrowsy = Selector('div.false>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertNot = Selector('div.false>div:nth-child(2)>div:nth-child(5)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canPreviousBtn = Selector('div.modal-footer>span>button:nth-child(1)');
        this.canCancelBtn = Selector('button.btn-danger');
        this.canNextBtn = Selector('i.fa-arrow-right');
        this.confRequiredPopup = Selector('div.b-style');
        this.startNewTitration = Selector('[ng-reflect-label="Start a new titration schedule"] .icon_Circle');
        this.continueTitration = Selector('[ng-reflect-label="Continue titrating from the mo"] .icon_Circle');
        this.cotinueButton = Selector('.btn-success');
        this.closeButton = Selector('.close-btn.btn-width');
        /**Products List */
        this.btnAllProds = Selector('div.btn-group>label:nth-child(2)'); // Al Products
        this.btnRecommendeProds = Selector('label.active'); // Recommended Pr
        this.cicNr = Selector('igx-display-container>igx-grid-cell:nth-child(2)>div'); //CIC
        this.ProdName = Selector('igx-display-container>igx-grid-cell:nth-child(3)>div>div:nth-child(1)'); //Product Name
        this.Seller = Selector('gx-display-container>igx-grid-cell:nth-child(4)>div'); //Seller
        this.typeProd = Selector('igx-display-container>igx-grid-cell:nth-child(5)>div'); // Type
        this.formProd = Selector('igx-display-container>igx-grid-cell:nth-child(6)>div'); //Form
        this.thcProd = Selector('igx-display-container>igx-grid-cell:nth-child(7)>div>div:nth-child(1)'); //THC
        this.thcQty = Selector('igx-display-container>igx-grid-cell:nth-child(7)>div>div:nth-child(2'); // THC mg/gmn
        this.cbdProd = Selector('igx-display-container>igx-grid-cell:nth-child(8)>div>div:nth-child(1)'); // CBD
        this.gramEqv = Selector('igx-display-container>igx-grid-cell:nth-child(9)>div'); //Gram/Equiv
        this.priceProd = Selector('igx-display-container>igx-grid-cell:nth-child(10)>div>div:nth-child(1)'); //Price
        this.pricePerGrm = Selector('gx-display-container>igx-grid-cell:nth-child(10)>div>div:nth-child(2)'); //Price per gram
    }
    // Functions


    /**
 * getElementAttribute e, a parameters
 */
    async getElementAttribute (e, a) {
        const elementattribute = Selector(e).getAttribute(a);

        return elementattribute;
    }

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
     * -- Select a Patient row
     * @param {*} sel
     * @param {*} val
     */
    async selectPatRow (sel, val) {
        await waitForAngular();
        await t.setNativeDialogHandler(() => true);
        const filterPatName = Selector('igx-grid-header-group:nth-child(1) > igx-grid-filtering-cell > igx-chips-area  div > div.igx-chip__content');

        if (await filterPatName.exists && await filterPatName.visible) {
            await t
                .hover(filterPatName)
                .click(filterPatName)
                .typeText(Selector('input.igx-input-group__input'), val, { speed: 0.07 })
                .pressKey('enter');
        }

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );

        await t.takeElementScreenshot('body.ng-tns-0-0', 'patients/patient_filtered.png');
        await t
            .setNativeDialogHandler(() => true)
            .hover(selectedRow.withText(val))
            .click(selectedRow.withText(val));
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
            .setNativeDialogHandler(() => true)
            .hover(selectedRow.withText(val))
            .click(selectedRow.withText(val));
    }
    /**
     * -- Select a row
     * @param {*} sel
     * @param {*} val
     */
    async selectHealthIssue (sel, val) {
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
            .setNativeDialogHandler(() => true)
            .hover(selectedRow.withText(val))
            .click(selectedRow.withText(val));
    }

    /**
     * -- Select a row
     * @param {*} sel
     * @param {*} val
     */
    async selectProd (sel, val) {
        await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );
        /** If this product does not exists, then select the last in the list*/
        const checkProd = await selectedRow.withText(val).exists === false ?
            await t
                .click(this.btnAllProds)
                .setNativeDialogHandler(() => true)
                .hover(selectedRow.withText(val))
                .click(selectedRow.withText(val))
            :
            await t
                .expect(selectedRow.withText(val).exists).ok('Oops no such product exists!!')
                .wait(500);

        await waitForAngular();
        await checkProd;
        await t
            .hover(this.btnAddToOrder)
            .click(this.btnAddToOrder);

        /**Check if the selected product is successfully no **/
        const checkProdOkay = await Selector('.text-white.text-nowrap.bg-success').exists === false ?
            await t
                .click(this.btnAllProds)
                .setNativeDialogHandler(() => true)
                .hover(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(val)) //select a product
                .click(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(val))
                .hover(this.btnAddToOrder)
                .click(this.btnAddToOrder)
            :
            await t
                .expect(Selector('.text-white.text-nowrap.bg-success').exists).ok('Oops no such product exists!!')
                .wait(500);

        await waitForAngular();

        await checkProdOkay;
        await t.takeScreenshot('/orders/ProductAdded.png');
        console.log('Product added successfully');

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
    /**
     * Fill Health Issue Form
     */
    async fillHealthForm (weight, sel, prod) {
        await t.setNativeDialogHandler(() => true);
        await waitForAngular();
        await t.wait(3000);


        const checkWeight = await this.weighthLabel.exists === false ? await t
            .hover(this.inputWeightIC)
            .click(this.inputWeightIC)
            .typeText(this.inputField, weight, { paste: true, replace: true })
            .click(this.inputOkBtn)
            : await t
                .expect(this.weighthLabel.exists).ok('Your patient does not have weight set -check it!!')
                .wait(500);

        await waitForAngular();
        await checkWeight;

        /** Click to select the Health Issue radio button */
        await t.click(this.healthIssueFive);
        /**Click to set Patient Preferences Yes, No,No,NO */
        await [this.canFormNo, this.canTypeNo, this.canAlertNoPref].exists && await [this.canFormNo, this.canTypeNo, this.canAlertNoPref].visible;
        await t.click(this.canUserYes);
        await t.click(this.canFormNo);
        await t.click(this.canTypeNo);
        await t.click(this.canAlertNoPref);
        await t.takeElementScreenshot('create-order-modal.ng-star-inserted', '/orders/SelectHealthIssue.png');
        /** Click Next -> button */
        await t.click(this.canNextBtn);
        await t.setNativeDialogHandler(() => true);

        await waitForAngular();
        await t.wait(2000);
        /** Click to select a Recommended Product */
        // await this.selectFld(sel, prod);
        await this.selectProd(sel, prod);

        await waitForAngular();
        await t.wait(2000);

        if (await this.confRequiredPopup.exists && this.confRequiredPopup.visible) {
            await t.takeScreenshot('/orders/ConfirmTitration.png');
            await t
                .setNativeDialogHandler(() => true)
                .click(this.continueTitration)
                .click(this.cotinueButton);
        }

        await t.click('.text-center.w-25 > button.btn.btn-sm.btn-link.pb-0 > i');
    }
    /**Get Label content */
    async getFormFieldLabel (fieldName) {
        const label = await this.findFormFieldInputLabel(fieldName).textContent;

        return label && label.trim();
    }
    // =====================================
    // Checkbox
    // =====================================
    async getTextBoxValue (name) {
        return this.el.find(`input[name="${name}"]`).value;
    }

    async setCheckbox (name, value) {
        const checked = await this.el.find(`input[name="${name}"]`).checked;

        if (value !== checked)
            await this.t.click(this.el.find(`input[name="${name}"] + label`));

    }

    async getCheckboxValue (name) {
        return this.el.find(`input[name="${name}"]`).checked;
    }
    // =====================================
    // Chozen Dropdown
    // =====================================

    async selectValueChozenDropdown (fieldName, index) {
        const selectContainer = await this.findFormFieldInput(fieldName)
            .find('.chzn-container');
        const containerId = await selectContainer.getAttribute('id');

        await this.t.click(selectContainer);

        const option = await new Selector(`#${containerId} .chzn-results .active-result`)
            .nth(index);

        await this.t.click(option);
    }
    // =====================================
    // radio button
    // =====================================

    async selectRadioButtonOption (fieldName, index) {
        const radioOption = await this.findFormFieldInput(fieldName)
            .find('.radio-label')
            .nth(index);
        const radioTextContent = await radioOption.textContent;
        const radioOptionLabel = radioTextContent.trim();

        await this.t.click(radioOption);

        return radioOptionLabel;
    }

    async selectRadioButtonOptionByValue (fieldName, value) {
        const radioOption = await this.findFormFieldInput(fieldName)
            .find(`input[value="${value}"] + .radio-label`);

        const radioTextContent = await radioOption.textContent;
        const radioOptionLabel = radioTextContent.trim();

        await this.t.click(radioOption);

        return radioOptionLabel;
    }
    // =====================================
    // un-categoried
    // =====================================

    getCallout (selector) {
        return Selector(selector);
    }

    async clickElement (selector) {
        await this.t.click(this.el.find(selector));
    }

    /**
   * Queries for all elements matching the selector
   * and returns a list of inner texts of the matching elements.
   * @param {string} selector
   * @returns {array}
   */
    getInnerTexts (selector) {
        return ClientFunction((selector) => {
            return Array.prototype.map.call(document.querySelectorAll(selector), (el) => {
                return el.innerText;
            });
        })(selector);
    }


}

export default PatientNav;
