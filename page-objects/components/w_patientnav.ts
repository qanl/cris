import { Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors/ts-defs/index';
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

class PatientNav {
    constructor() {
        // Selectors
        (this as any).searchBox = Selector('#searchTerm');
        (this as any).homeOption = Selector('left-nav > div > nav > a.nav-item.nav-link.rounded-0.px-1.active > div > span');
        (this as any).homeOption1 = Selector('.nav-item.nav-link.rounded-0.px-1 .align-items-center span');
        (this as any).ordersOption = Selector('left-nav > div > nav > a:nth-child(2) > div > div');
        (this as any).patOptions = Selector('left-nav > div > nav > a:nth-child(3) > div > div');
        (this as any).hpOption = Selector('left-nav > div > nav > a:nth-child(5) > div > div');
        (this as any).mxOption = Selector('left-nav > div > nav > a:nth-child(5) > div > div');
        (this as any).prodOption = Selector('left-nav > div > nav > a:nth-child(6) > div > div');
        (this as any).diOption = Selector('left-nav > div > nav > a:nth-child(7) > div > div');
        (this as any).lsOption = Selector('left-nav > div > nav > a:nth-child(8) > div > div');
        (this as any).coedOption = Selector('left-nav > div > nav > a:nth-child(9) > div > div');
        (this as any).virtualCare = Selector('left-nav > div > nav > a:nth-child(10) > div > div');
        (this as any).menuOption = Selector('a .routerlink .nav-item.nav-link.rounded-0.px-1.transparent-bg');
        (this as any).signOutIcon = Selector('#dropdownMenuButton > img');
        (this as any).signOutBtn = Selector('button#signOutBtn strong');
        (this as any).navOption = Selector('.d-flex.flex-row.align-items-center');
        (this as any).diModal = Selector('.btn.close-btn.btn-sm.btn-width');
        (this as any).privacyTxt = Selector('h5.text-white-50'); // Priacy text
        (this as any).privacyBtnActive = Selector('.btn.btn-toggle.active'); // privacy button is active ON
        (this as any).privacyBtnDisabled = Selector('.btn.btn-toggle'); //privacy button is disabled OFF
        // Patients topbar menu items
        (this as any).patBtn = Selector('i.icon_Nav-Patients.navIcon'); //Patient left menu button
        (this as any).patientstitle = Selector('.blue-tinted-bg.overflow > span'); //Patients title
        (this as any).totalrecords = Selector('.col-auto > filter-info > div > div'); //Total Record:##
        (this as any).totalnumber = Selector('.col-auto > filter-info > div > div > div > strong'); // records number
        (this as any).clearFilterBtn1 = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(1)'); // clear button
        (this as any).clearFilterBtn = Selector('btn.btn-link').nth(1); // clear button
        (this as any).clearFilterIcon = Selector('.icon_Filter.toolbaricon'); // Clear Filter Icon
        (this as any).patientDetailsBtn = Selector('ncol.text.d-flex.justify-content-end.pr-0 > div:nth-child(2)'); //Patient Details disabled
        (this as any).patientDetailsBtnEnabled = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(2) > button'); //Patient Details enabled
        (this as any).createPatientBtn = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(3) > button'); //Create Patient
        (this as any).patnamecol = Selector('#igx-grid-0_patientName > span'); // Patient name (LAST, First)
        (this as any).patnamecol1 = Selector('igx-grid-header').nth(1); // Patient name (LAST, First)
        (this as any).patarrowup = Selector('#igx-grid-0_patientName > div'); //arrow upward
        (this as any).gendercol = Selector('#igx-grid-0_gender > span > div > i'); //gender icon
        (this as any).idnumbercol = Selector('#igx-grid-0_identityNo > span > div'); //id number
        (this as any).telephonecol = Selector('#igx-grid-0_phoneField > span > span'); //telephone
        (this as any).addresscol = Selector('#igx-grid-0_addressField > span > span'); //address
        (this as any).filterPatientName = Selector('#igx-chip-0 > div > div.igx-chip__content'); // filter by Patient Name
        (this as any).filterGender = Selector('#igx-chip-1 > div > div.igx-chip__content > span'); // filter by Patient Gender
        (this as any).filterTelephone = Selector('#igx-chip-6 > div > div.igx-chip__content > span'); //filter by Telephone
        (this as any).filterAddress = Selector('#igx-chip-7 > div > div.igx-chip__content > span'); // filter by Address
        (this as any).tblBody = Selector('#igx-grid-1 > div.igx-grid__tbody'); // table body whole
        (this as any).tblBodyContent = Selector('#igx-grid-1 > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container'); //tbl content
        (this as any).firstSelPatRow = Selector('igx-grid-row.igx-grid__tr.igx-grid__tr--odd.igx-grid__tr--selected'); //selected first row
        (this as any).thirdPatRow = Selector('igx-grid-row:nth-child(3) > igx-display-container');
        (this as any).rowSelector = Selector('igx-grid-row');
        //Patient subpage details
        (this as any).subPatTitle = Selector('.d-print-none.p-2.text-white.h3.mb-0.blue-tinted-bg.overflow > span');
        (this as any).patIcon = Selector('div > div.p-2 > img');
        (this as any).subFirstName = Selector('.blue-label-color > div');
        (this as any).subLastName = Selector('div.blue-label-color > strong > div');
        (this as any).subInfo = Selector('patient-left-nav > div > div > nav > a > div > div');
        (this as any).subMx = Selector('patient-left-nav > div > nav:nth-child(2) > a > div');
        (this as any).subOrders = Selector('patient-left-nav > div > nav:nth-child(3) > a');
        (this as any).subNewOrderBtn = Selector('.align-items-center > div:nth-child(4) > button');
        (this as any).subMeds = Selector('patient-left-nav > div > nav:nth-child(4) > a > div');
        (this as any).subConsultations = Selector('patient-left-nav > div > nav:nth-child(5) > a > div');
        (this as any).subNotes = Selector(' patient-left-nav > div > nav:nth-child(6) > a > div');
        (this as any).subAttachments = Selector('patient-left-nav > div > nav:nth-child(7) > a > div > span:nth-child(1)');
        (this as any).pencilDemographic = Selector('#info-div > div:nth-child(1) > div.d-flex.align-items-center > i');
        // Patient Demographics / Create Patient
        (this as any).firstNameCreate = Selector('.modal-body > div > form > div:nth-child(1) > div:nth-child(1) > input');
        (this as any).lastNameCreate = Selector('.modal-body > div > form > div:nth-child(1) > div:nth-child(2) > input');
        (this as any).calendarCreate = Selector('#birthDate > input');
        (this as any).preferredName = Selector('#preferredName');
        (this as any).occupation = Selector('#occupation');
        (this as any).weight = Selector('#inputWeight');
        (this as any).height = Selector('patient-height > div > div.ng-star-inserted > up-down-arrows-container > div > input');
        (this as any).metricWeight = Selector('.icon_Checkpoint.ng-star-inserted').nth(1);
        (this as any).metricHeight = Selector('.icon_Checkpoint.ng-star-inserted').nth(2);
        (this as any).imperialWeight = Selector('.icon_Circle.disabled-radio.ng-star-inserted').nth(1);
        (this as any).imperialHeight = Selector('.icon_Circle.disabled-radio.ng-star-inserted').nth(2);
        (this as any).addressLabel = Selector('.blue-label-color.fs-18').nth(1);
        (this as any).telephoneLabel = Selector('.blue-label-color.fs-18').nth(2);
        (this as any).emailLabel = Selector('.blue-label-color.fs-18').nth(3);
        (this as any).identificationLabel = Selector('.blue-label-color.fs-18').nth(4);
        (this as any).addNewAddressBtn = Selector('#addNewAddressBtn > i');
        (this as any).addNewTelBtn = Selector('#addNewPhoneBtn > i');
        (this as any).addNewEmailBtn = Selector('.icon_AddNew.toolbaricon').nth(3);
        (this as any).addNewIdBtn = Selector('#addNewidBtn > i');
        // Add Patient Address
        (this as any).homeTagSel = Selector('#gender');
        (this as any).homeTag = Selector('.dropdown.cursor-pointer.pt-0.ng-pristine.ng-valid.ng-touched');
        (this as any).homeOpt = Selector('#gender > option:nth-child(1)');
        (this as any).workOpt = Selector('#gender > option:nth-child(2)');
        (this as any).otherOpt = Selector('#gender > option:nth-child(3)');
        (this as any).addressInput = Selector('#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(2) > div:nth-child(1) > input');
        (this as any).addressTwoInput = Selector('#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(2) > div:nth-child(2) > input');
        (this as any).cityInput = Selector('#mat-dialog-1 > patient-address-form > div > div.modal-body.bg-white.d-print-block.pt-1.py-4.align-items-center.pl-4 > form > div:nth-child(3) > div:nth-child(1) > input');
        (this as any).provinceSel = Selector('mat-dialog-container#mat-dialog-7 div:nth-child(2) > label > select#gender');
        (this as any).provinceOpt = Selector('#gender > option:nth-child(1)');
        (this as any).provinceAB = Selector('option').filter('[value="AB"]');
        (this as any).provinceBC = Selector('option').filter('[value="BC"]');
        (this as any).postalCode = Selector('#inputZip');
        (this as any).okAddPatAddressBtn = Selector('.btn.close-btn.btn-sm.ok-close-btn').withText('OK');
        (this as any).cancelAddPatAddressBtn = Selector('.btn.close-btn.btn-sm.ok-close-btn').withText('Cancel');
        (this as any).countryAdd = Selector('form > div:nth-child(4) > div:nth-child(2) > div.gray-text.pt-4.mt-1.border-bottom');
        (this as any).checkReview = Selector('#consentCheck');
        (this as any).consentText = Selector('form > div:nth-child(6) > div > div > label');
        (this as any).createPatDisabled = Selector('#mat-dialog-0 > app-create-patient-modal > div > div.d-flex.modal-footer.justify-content-end.p-2 > button.btn.btn-success.btn-sm.mr-2').hasAttribute('disabled');
        // Add Telephone
        (this as any).phoneTag = Selector('#tag');
        (this as any).phoneInput = Selector('#telephone');
        (this as any).okPhoneBtn = Selector('telephone-form > contact-base-form > div > div.d-flex.modal-footer.justify-content-center > button:nth-child(1)'); //phone Selector('.btn.close-btn.btn-sm').nth(1)
        (this as any).cancelPhoneBtn = Selector('telephone-form > contact-base-form > div > div.d-flex.modal-footer.justify-content-center > button:nth-child(2)'); // Cancel //phone Selector('.btn.close-btn.btn-sm').nth(2)
        //Add Email
        (this as any).emailTag = Selector('#tag');
        (this as any).emailInput = Selector('#inputEmail');
        (this as any).okEmailBtn = Selector('.btn.close-btn.btn-sm').nth(1);
        (this as any).cancelEmailBtn = Selector('.btn.close-btn.btn-sm').nth(2);
        (this as any).emailTooltipTxt = Selector('[ng-reflect-tooltip="Please enter a valid email add"]');
        (this as any).emailSaved = Selector('#emailList .text-primary.ng-star-inserted');
        // Add IDENTIFICATION
        (this as any).provTag = Selector('#tag');
        (this as any).idNumberInput = Selector('#inputID');
        (this as any).okIDBtn = Selector('.btn.close-btn.btn-sm').nth(1);
        (this as any).cancelIDBtn = Selector('.btn.close-btn.btn-sm').nth(2);
        (this as any).savedIDTxt = Selector('.btn.btn-sm.btn-link.pl-0.text-left');
        (this as any).createPatEnabled = Selector('button.btn.btn-success.btn-sm.mr-2').withText('CREATE PATIENT');
        // CONSENT
        (this as any).consentCheckbox = Selector('#consentCheck');
        (this as any).consentText = Selector('form > div:nth-child(6) > div > div > label');
        //UPDATE DEMOGRAPHICS
        (this as any).updatePatientDemographicTitle = Selector('.h5.blue-label-color.mx-1.my-2.py-2.col-md-12');
        (this as any).updateFirstName = Selector('#mat-dialog-0 div:nth-child(1) > div:nth-child(1) > input');
        (this as any).updateLastName = Selector('#mat-dialog-0 div:nth-child(1) > div:nth-child(2) > input');
        (this as any).updateCalendarInput = Selector('div#birthDate > input'); // Format DD-MMM-YYYY
        (this as any).updatePickCalendr = Selector('div#birthDate i');
        (this as any).updatePreferredName = Selector('input#preferredName');
        (this as any).updateOccupation = Selector('input#occupation');
        (this as any).updateWeight = Selector('input#inputWeight');
        (this as any).updateWeightUpArrow = Selector('up-down-arrows-container > div > div > div:nth-child(1) > button[type="button"] > i');
        (this as any).enterMxNextBtn = Selector('create-mx-modal.ng-star-inserted>div>div:nth-child(3)>button:nth-child(2)');
        (this as any).newOrderNext = Selector('.mx-2');
        (this as any).btnAddToOrder = Selector('.modal-body.p-1 > product-list > div > div:nth-child(3) > div.col.text-right.d-flex.justify-content-end > div > span > button').withText('Add to Order');
        (this as any).weighthLabel = Selector('div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt').withText('kg').filterVisible();
        // this.weightLabel = Selector('div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt');
        (this as any).inputWeight = Selector('div.d-flex.flex-column.w-100 > div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt');
        (this as any).inputWeightIC = Selector('.icon_InputForm');
        (this as any).inputField = Selector('#inputWeight');
        (this as any).inputOkBtn = Selector('.close-btn[appdebounceclick]');
        (this as any).healthIssueFive = Selector('.pt-0 > div:nth-of-type(5) .numberLayer');
        (this as any).healthIssueOne = Selector('.pt-0 > div:nth-of-type(1) .numberLayer');
        (this as any).healthIssueTen = Selector('div:nth-of-type(10) .numberLayer');
        (this as any).canUserYes = Selector('div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canUserNo = Selector('div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canForm = Selector('[ng-reflect-klass="regular-text h-100"] div:nth-of-type(3) > div:nth-of-type(3) div:nth-of-type(2) > div:nth-of-type(1) i:nth-of-type(1)');
        (this as any).canFormNo = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormCaps = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormCart = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormDried = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormOil = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(5)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormPowder = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(6)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canFormSpray = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(7)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canTypeNo = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canTypeIndica = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canTypeSativa = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canTypeHybrid = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canAlertNoPref = Selector('div.false>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canAlertAlert = Selector('div.false>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canAlertSome = Selector('div.false>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canAlertDrowsy = Selector('div.false>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canAlertNot = Selector('div.false>div:nth-child(2)>div:nth-child(5)>check-mark-radio-button>div>div:nth-child(1)>i');
        (this as any).canPreviousBtn = Selector('div.modal-footer>span>button:nth-child(1)');
        (this as any).canCancelBtn = Selector('button.btn-danger');
        (this as any).canNextBtn = Selector('i.fa-arrow-right');
        (this as any).confRequiredPopup = Selector('div.b-style');
        (this as any).startNewTitration = Selector('.px-4 > div:nth-child(6) > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i');
        // this.startNewTitration = Selector('[ng-reflect-label="Start a new titration schedule"] .icon_Circle');
        // this.continueTitration = Selector('[ng-reflect-label="Continue titrating from the mo"] .icon_Circle');
        (this as any).continueTitration = Selector('.px-4 > div.d-flex.pt-1 > check-mark-radio-button > div > div.d-flex.flex-row.align-items-center.justify-content-center > i');
        (this as any).continueConfirmBtn = Selector('app-product-reorder-confirmation > div > div.d-flex.modal-footer > div:nth-child(1) > button');
        (this as any).cotinueButton = Selector('.btn-success');

        (this as any).closeButton = Selector('.close-btn.btn-width');
        /**Products List */
        (this as any).btnAllProds = Selector('div.btn-group>label:nth-child(2)'); // Al Products
        (this as any).btnRecommendeProds = Selector('label.active'); // Recommended Pr
        (this as any).cicNr = Selector('igx-display-container>igx-grid-cell:nth-child(2)>div'); //CIC
        (this as any).ProdName = Selector('igx-display-container>igx-grid-cell:nth-child(3)>div>div:nth-child(1)'); //Product Name
        (this as any).Seller = Selector('gx-display-container>igx-grid-cell:nth-child(4)>div'); //Seller
        (this as any).typeProd = Selector('igx-display-container>igx-grid-cell:nth-child(5)>div'); // Type
        (this as any).formProd = Selector('igx-display-container>igx-grid-cell:nth-child(6)>div'); //Form
        (this as any).thcProd = Selector('igx-display-container>igx-grid-cell:nth-child(7)>div>div:nth-child(1)'); //THC
        (this as any).thcQty = Selector('igx-display-container>igx-grid-cell:nth-child(7)>div>div:nth-child(2'); // THC mg/gmn
        (this as any).cbdProd = Selector('igx-display-container>igx-grid-cell:nth-child(8)>div>div:nth-child(1)'); // CBD
        (this as any).gramEqv = Selector('igx-display-container>igx-grid-cell:nth-child(9)>div'); //Gram/Equiv
        (this as any).priceProd = Selector('igx-display-container>igx-grid-cell:nth-child(10)>div>div:nth-child(1)'); //Price
        (this as any).pricePerGrm = Selector('gx-display-container>igx-grid-cell:nth-child(10)>div>div:nth-child(2)'); //Price per gram
        //Price per gram
    }
    // Functions


    /**
 * getElementAttribute e, a parameters
 */
    async getElementAttribute(e: any, a: any) {
        const elementattribute = Selector(e).getAttribute(a);

        return elementattribute;
    }

    /**
     *  -- Search
     * @param {*} text
     */
    async search(text: any) {
        await t
            .typeText((this as any).searchBox, text, { paste: true, replace: true })
            .pressKey('enter');
    }
    /**
     * --Confirm menu options
     * @param {*} text
     */
    async confirmMenuOptionExists(text: any) {
        // await waitForAngular();
        await t
            .scroll((this as any).navOption.withText(text))
            .hover((this as any).navOption.withText(text))
            .expect((this as any).navOption.withText(text).exists)
            .ok();
    }
    /**
     * --Select a main menu option
     * @param {*} text
     */
    async selectMenuOption(text: any) {
        // await waitForAngular();
        await t
            .hover((this as any).navOption.withText(text))
            .expect((this as any).navOption.withText(text).exists)
            .ok()
            .click((this as any).navOption.withText(text));
    }
    /**
     * --Select Home button on main menu
     * @param {*} text
     */
    async selectHome(text: any) {
        // await waitForAngular();
        await t
            .hover((this as any).homeOption.withText(text))
            .expect((this as any).homeOption.withText(text).exists)
            .ok()
            .click((this as any).homeOption.withText(text));
    }
    /**
     * -- Select a Patient row
     * @param {*} sel
     * @param {*} val
     */
    async selectPatRow(sel: any, val: any) {
        // await waitForAngular();
        await t.setNativeDialogHandler(() => true);
        const filterPatName = Selector('igx-grid-header-group:nth-child(1) > igx-grid-filtering-cell > igx-chips-area  div > div.igx-chip__content');
        // const filterPatName = Selector('#igx-chip-0 > div > div.igx-chip__content > span').withExactText('Filter').nth(1).filterVisible();

        if ((await filterPatName.exists) && (await filterPatName.visible)) {
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
    async selectFld(sel: any, val: any) {
        // await waitForAngular();

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
    async selectHealthIssue(sel: any, val: any) {
        // await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {

                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );

        (await selectedRow.withText(val).exists) && selectedRow.withText(val).visible;

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
    async selectProd(sel: any, val: any) {
        // await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {

                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );

        /** If this product does not exists, then select the last in the list*/
        const checkProd = (await selectedRow.withText(val).nth(-1).exists) && (await selectedRow.withText(val).nth(-1).visible) === false ?
            await t
                .click((this as any).btnAllProds)
                .setNativeDialogHandler(() => true)
                .hover(selectedRow.withText(val).nth(-1))
                .click(selectedRow.withText(val).nth(-1))
            :
            await t
                .setNativeDialogHandler(() => true)
                .hover(selectedRow.withText(val).nth(-1))
                .click(selectedRow.withText(val).nth(-1));

        // await waitForAngular();
        await checkProd;
        await t
            .hover((this as any).btnAddToOrder)
            .click((this as any).btnAddToOrder);

        /**Check if the selected product is successfully no **/


        // if (await this.confRequiredPopup.exists && this.confRequiredPopup.visible) {
        //     await t.takeScreenshot('/orders/ConfirmTitration.png');
        //     await t
        //         .setNativeDialogHandler(() => true)
        //         .click(this.continueTitration)
        //         .click(this.cotinueButton);
        // }
        // const checkProdOkay = await Selector('.text-white.text-nowrap.bg-success').exists === false ?
        //     await t
        //         .click(this.btnAllProds)
        //         .setNativeDialogHandler(() => true)
        //         .hover(Selector('#productList igx-display-container > igx-grid-cell:nth-child(6) > div').withText(val)) //select a product
        //         .click(Selector('#productList igx-display-container > igx-grid-cell:nth-child(6) > div').withText(val))
        //         .hover(this.btnAddToOrder)
        //         .click(this.btnAddToOrder)
        //     :
        //     await t
        //         .expect(Selector('.text-white.text-nowrap.bg-success').exists).ok('Oops no such product exists!!')
        //         .wait(500);

        // await waitForAngular();

        // await checkProdOkay;
        await t.takeScreenshot('/orders/ProductAdded.png');
        console.log('Product added successfully');

    }
    /**
     * -- Check all checkboxes
     * @param {*} sel --check all checkboxes
     */
    async clickOption(sel: any) {
        (this as any).selOpt = Selector(sel);
        await t.click((this as any).selOpt).wait(1000);
    }
    /**
     * --check all options
     * @param {*} sel
     */
    async fnChk(sel: any) {
        // await waitForAngular();
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;

        const n = ct;

        let i = 0;

        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'number' a... Remove this comment to see the full error message
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
     * Fill Health Issue Form
     */
    async fillHealthForm(weight: any, sel: any, prod: any) {
        await t.setNativeDialogHandler(() => true);
        // await waitForAngular();
        await t.wait(3000);
        const checkWeight = (await (this as any).weighthLabel.exists) && (await (this as any).weighthLabel.visible) === false ? await t
            .wait(2000)
            .hover((this as any).inputWeightIC)
            .click((this as any).inputWeightIC)
            .typeText((this as any).inputField, weight, { paste: true, replace: true })
            .click((this as any).inputOkBtn)
            : await t
                .expect((this as any).weighthLabel.exists).ok('Your patient does not have weight set -check it!!')
                .wait(500);

        // await waitForAngular();
        await checkWeight;

        /** Click to select the Health Issue radio button */
        await t.click((this as any).healthIssueFive);
        /**Click to set Patient Preferences Yes, No,No,NO */
        (await ([(this as any).canFormNo, (this as any).canTypeNo, (this as any).canAlertNoPref] as any).exists) && (await ([(this as any).canFormNo, (this as any).canTypeNo, (this as any).canAlertNoPref] as any).visible);
        await t.click((this as any).canUserYes);
        await t.click((this as any).canFormNo);
        await t.click((this as any).canTypeNo);
        await t.click((this as any).canAlertNoPref);
        await t.takeElementScreenshot('create-order-modal.ng-star-inserted', '/orders/SelectHealthIssue.png');
        /** Click Next -> button */
        await t.click((this as any).canNextBtn);
        await t.setNativeDialogHandler(() => true);

        // await waitForAngular();
        await t.wait(1000);
        /** Click to select a Recommended Product */
        // await this.selectFld(sel, prod);
        await this.selectProd(sel, prod);

        // await waitForAngular();
        await t.wait(1000);

        if ((await (this as any).confRequiredPopup.exists) && (this as any).confRequiredPopup.visible) {
            await t.takeScreenshot('/orders/ConfirmTitration.png');

            await t
                .setNativeDialogHandler(() => true)
                .hover((this as any).continueTitration)
                .click((this as any).continueTitration)
                .hover((this as any).continueConfirmBtn)
                .click((this as any).continueConfirmBtn);
        }

        await t.click('.text-center.w-25 > button.btn.btn-sm.btn-link.pb-0 > i');
    }

}

export default PatientNav;
