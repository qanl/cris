import { ClientFunction, Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
// import { xpathSelector } from '../../src/utilities/xpath-selector.js';
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
const selectImg = async (imgSelector: any) => {
    /** @type { SelectorAPI & HTMLImageElement} */
const result = await /** @type { ? } */ Selector(imgSelector).addCustomDOMProperties({
    complete: (/** @type {HTMLImageElement} */ el) => {
        // @ts-expect-error TS(2339): Property 'complete' does not exist on type 'Elemen... Remove this comment to see the full error message
        return el.complete;
    },
    naturalHeight: (/** @type {HTMLImageElement} */ el) => (el as any).naturalHeight,
    naturalWidth: (/** @type {HTMLImageElement} */ el) => (el as any).naturalWidth,
    currentSrc: (/** @type {HTMLImageElement} */ el) => (el as any).currentSrc,
    textContent: (/** @type {HTMLImageElement} */ el) => el.textContent,
});
            // @ts-expect-error TS(2304): Cannot find name 'el'.
            return (el as any).complete;
        },
        // @ts-expect-error TS(7006): Parameter 'el' implicitly has an 'any' type.
        naturalHeight: (/** @type {HTMLImageElement} */ el) => el.naturalHeight,
        // @ts-expect-error TS(7006): Parameter 'el' implicitly has an 'any' type.
        naturalWidth:  (/** @type {HTMLImageElement} */ el) => el.naturalWidth,
        // @ts-expect-error TS(7006): Parameter 'el' implicitly has an 'any' type.
        currentSrc:    (/** @type {HTMLImageElement} */ el) => el.currentSrc,
        // @ts-expect-error TS(7006): Parameter 'el' implicitly has an 'any' type.
        textContent:   (/** @type {HTMLImageElement} */ el) => el.textContent,
    });

    return result;
};

// @ts-expect-error TS(7027): Unreachable code detected.
class OrdersNav {
    constructor () {
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
        (this as any).startNewTitration = Selector('[ng-reflect-label="Start a new titration schedule"] .icon_Circle');
        (this as any).continueTitration = Selector('[ng-reflect-label="Continue titrating from the mo"] .icon_Circle');
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
 /**Orders menu and submenu */
/** status icons , last column*/
(this as any).attentionIconm = Selector('.icon_Attention'); // Missing Attachments icons
 (this as any).cancelledIcon = Selector('.icon_Cancelled'); //cancelled/reversed Orders icons
 (this as any).orderedIcon = Selector('.icon_Ordered'); //ordered icon
 (this as any).toolbarIcons = Selector('.toolbaricon'); // total of icons
 (this as any).readyToOrderIcon = Selector('.icon_ReadyQueue'); //ready To submitt
 /**Order Details UI */
(this as any).ordersMainBtn = Selector('nav.nav>a:nth-child(2)>div>div');
        (this as any).ordersList = Selector('div.text-white>span');
        (this as any).ordersListFull = Selector('div.px-3'); //list with data
 (this as any).ordersListEmpty = Selector('#orderList > div.igx-grid__tbody > div.igx-grid__tbody-content > span');
        (this as any).ordersListTxt = 'No records found.';
        (this as any).ordersTotal = Selector('div.pink-text>div');
        (this as any).orderFilterClear = Selector('div.justify-content-end>button');
        (this as any).orderPatientDetails = Selector('div.justify-content-end>div:nth-child(2)>button');
        (this as any).orderOrderDetails = Selector('div.justify-content-end>div:nth-child(3)>button'); // Order Details button
 (this as any).orderFilterByStatus = Selector('igx-chip#igx-chip-7'); //use to filter the status
 (this as any).orderFilterByState = Selector('igx-grid-filtering-cell').nth(-1);
        (this as any).orderFilterInput = Selector('input.igx-input-group__input'); //search input here you type what you need to search
 (this as any).orderFilterClose = Selector('div.igx-grid__filtering-row-editing-buttons>button:nth-child(2)'); // used to close the filter
 (this as any).orderFilterReset = Selector('div.igx-grid__filtering-row-editing-buttons>button:nth-child(1)'); // user to reset the filter
 (this as any).orderPatName = Selector('div.h4>strong');
        (this as any).orderPatDOB = Selector('div.text-uppercase'); //patient date of birth in dd-MMM-YYYY format
 (this as any).orderProdSupplier = Selector('img.w-200'); //supplier logo
 (this as any).orderSupplierAddress = Selector('div.regular-text>div:nth-child(1)'); // supplier list
 (this as any).orderSupplierCity = Selector('div.regular-text>div:nth-child(2)');
        (this as any).orderSupplierCountry = Selector('div.regular-text>div:nth-child(3)');
        (this as any).orderShippingAddress = Selector('div.shipping-address>div:nth-child(1)'); //street Address
 (this as any).orderShippingCity = Selector('div.shipping-address>div:nth-child(2)');
        (this as any).orderShippingCountry = Selector('div.shipping-address>div:nth-child(3)');
        (this as any).orderHealthIssue = Selector('div.border-bottom>div:nth-child(4)>div:nth-child(2)');
        (this as any).orderNumber = Selector('.order-details.table td:nth-of-type(1) > strong');
        (this as any).orderNum = Selector('table.order-details>tbody>tr:nth-child(2)>td:nth-child(1)>strong'); //same as above
 (this as any).orderDate = Selector('table.order-details>tbody>tr:nth-child(2)>td:nth-child(2)>strong');
        (this as any).orderNumberBtn = Selector('table.order-details>tbody>tr:nth-child(2)>td:nth-child(3)>button'); //clickable Order number
 (this as any).orderHCPBtn = Selector('button.hcp-btn'); //HCP for the order
 (this as any).lsClient = Selector('.order-details.table td.font-italic'); //License seller name empty
 (this as any).orderCicCode = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(1)');
        (this as any).orderCic = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(1)'); //same as above
 (this as any).orderProduct = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(2)');
        (this as any).orderTHC = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(3)');
        (this as any).orderCBD = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(4)');
        (this as any).orderSize = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(5)');
        (this as any).orderPrice = Selector('.w-100.text-right > strong:nth-child(1)');
        (this as any).orderQty = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(7)');
        (this as any).orderTotal = Selector('igx-grid#orderDetailsGrid>div:nth-child(2)>div:nth-child(1)>igx-display-container>igx-grid-row>igx-display-container>igx-grid-cell:nth-child(8)');
        (this as any).orderTotalGrand = Selector('table.text-right>tbody>tr:nth-child(6)>td:nth-child(2)');
        (this as any).orderSubTotal = Selector('table.text-right>tbody>tr:nth-child(3)>td:nth-child(2)');
        (this as any).orderGst = Selector('table.text-right>tbody>tr:nth-child(4)>td:nth-child(2)>div');
        (this as any).orderPst = Selector('table.text-right>tbody>tr:nth-child(5)>td:nth-child(2)');
        (this as any).orderTotalFooter = Selector('div.modal-footer>div:nth-child(2)'); //Total grand in Footer of the modal
 (this as any).orderAgent = Selector('div.modal-footer>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>b');
        (this as any).orderPharmacy = Selector('div.modal-footer>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)');
        (this as any).orderReverseBtn = Selector('button.btn.btn-danger.btn-sm');
        (this as any).orderPrintBtn = Selector('button.btn.btn-primary.btn-sm.ml-2.btn-order-details');
        (this as any).orderCloseBtn = Selector('button.btn.btn-sm.close-btn.ml-2.btn-order-details');
        (this as any).orderReverseModal = Selector('app-reverse-order-confirmation.ng-star-inserted>div');
        (this as any).orderReverseWarningMsg = Selector('mat-dialog-content.m-3>div:nth-child(1)>div');
        (this as any).orderWarningStringO = 'Reversing the order will:\nShow the order as reversed throughout CRIS\nRemove it from your sales report\nRemove any grams used against the Mx\nRemove all consultations that have taken place against the product (unless another order has been placed for the same product in the past)\nIf this is the only order linked to the Mx it will also:\nUnregister the Mx from the Licensed Seller\nCAUTION: If the Mx associated to this order has already been registered with a Licensed Seller, you should only order other products from the same Licensed Seller\nRemove the Registration Date from the MX';
        (this as any).orderWarningStringR = 'Reversing the order will:Show the order as reversed throughout CRISRemove it from your sales reportRemove any grams used against the MxRemove all consultations that have taken place against the product (unless another order has been placed for the same product in the past)If this is the only order linked to the Mx it will also:Unregister the Mx from the Licensed Seller CAUTION: If the Mx associated to this order has already been registered with a Licensed Seller, you should only order other products from the same Licensed SellerRemove the Registration Date from the MX';
        (this as any).orderReverseAccept = Selector('label.checkbox-label');
        (this as any).orderReverseCheck = Selector('input#consentCheck');
        (this as any).orderReverseWarningBtn = Selector('mat-dialog-actions.m-3>button:nth-child(2)');
        (this as any).orderReverseWarningBack = Selector('button.mr-2');
        (this as any).ordereReverseReadyToSubmitTxt = 'Reversing the order will:Show the order as reversed throughout CRISRemove it from your sales reportRemove any grams used against the MxRemove all consultations that have taken place against the product (unless another order has been placed for the same product in the past)If this is the only order linked to the Mx it will also:Unregister the Mx from the Licensed Seller CAUTION: If the Mx associated to this order has already been registered with a Licensed Seller, you should only order other products from the same Licensed SellerRemove the Registration Date from the MX';
        (this as any).orderFirstRecord = Selector('div.igx-grid__tbody-content>igx-display-container>igx-grid-row >igx-display-container>igx-grid-cell').nth(1); //first record
 (this as any).orderLastRecord = Selector('div.igx-grid__tbody-content>igx-display-container>igx-grid-row >igx-display-container>igx-grid-cell').nth(-1); //last record
 //last record
    }
    // Functions

    /** covert text to numeric value */
    async getNumValue (sel: any) {
        const displayedTxt = await Selector(sel).textContent;
        /** clean the string from $ */
        const strVal = displayedTxt.toString().replace('$', '');
        // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
        const getNumValue = parseFloat(Number(strVal));

        return getNumValue;
    }
    /**
 * getElementAttribute e, a parameters
 */
    async getElementAttribute (e: any, a: any) {
        const elementattribute = Selector(e).getAttribute(a);

        return elementattribute;
    }

    /**
     *  -- Search
     * @param {*} text
     */
    async search (text: any) {
        await t
    .typeText((this as any).searchBox, text, { paste: true, replace: true })
    .pressKey('enter');
    }
    /**
     * --Confirm menu options
     * @param {*} text
     */
    async confirmMenuOptionExists (text: any) {
        await waitForAngular();

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
    async selectMenuOption (text: any) {
        await waitForAngular();

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
    async selectHome (text: any) {
        await waitForAngular();

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
    async selectPatRow (sel: any, val: any) {
        await waitForAngular();
        await t.setNativeDialogHandler(() => true);
        const filterPatName = Selector('igx-grid-header-group:nth-child(1) > igx-grid-filtering-cell > igx-chips-area  div > div.igx-chip__content');

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
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
    async selectFld (sel: any, val: any) {
        await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
    async selectHealthIssue (sel: any, val: any) {
        await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
    async selectProd (sel: any, val: any) {
        await waitForAngular();

        const selectedRow = Selector(sel).addCustomMethods(
            {
                getCell: (el, idx) => {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    return el[0].querySelectorAll(val)[idx];
                },
            },
            { returnDOMNodes: true }
        );
        /** If this product does not exists, then select the last in the list*/
const checkProd = (await selectedRow.withText(val).exists) === false ?
    await t
        .click((this as any).btnAllProds)
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
    .hover((this as any).btnAddToOrder)
    .click((this as any).btnAddToOrder);

        /**Check if the selected product is successfully no **/
const checkProdOkay = (await Selector('.text-white.text-nowrap.bg-success').exists) === false ?
    await t
        .click((this as any).btnAllProds)
        .setNativeDialogHandler(() => true)
        .hover(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(val)) //select a product
        .click(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(val))
        .hover((this as any).btnAddToOrder)
        .click((this as any).btnAddToOrder)
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
    async clickOption (sel: any) {
        (this as any).selOpt = Selector(sel);
        await t.click((this as any).selOpt).wait(1000);
    }
    /**
     * --check all options
     * @param {*} sel
     */
    async fnChk (sel: any) {
        await waitForAngular();
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
    async changeCurrency (currency: any) {
        let num;

        if (currency === '$')
            num = 1;
        else
            num = 0;

        // return currency.toNum
// await t
// .setTestSpeed(0.1)
// .click(this.currencySelect) // removed
// .click(Selector("option", { text: currency })) // not working
// .click(Selector('option').filter("[value='Euro']")) // not working
// .click(this.currencyOption.withText(currency)) // removed
// get the selected option
// const selectedOption = this.currencyOption
//     .filter((option) => {
//     if (option && option.selected) {
//         return true;
//     }
//     return false;
//     })
//     .nth(0);
// const selectedOptionContent = await selectedOption.textContent;
// await t.expect(selectedOptionContent).eql(currency)
await t.expect((this as any).currencyOption.nth(num).innerText).eql(currency); //removed
 //removed
    }

    /**
     * --verify a broken link on a page
     * @param {*} sel
     */
    async fnChkEl (sel: any) {
        await sel.exists;
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;
        const pic = await selectImg(sel);

        const n = ct;

        let i = 0;

        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'number' a... Remove this comment to see the full error message
        while (i < [n]) {
            const el = Selector(sel).nth(i);

            await t
    .setNativeDialogHandler(() => true)
    .hover(el)
    .expect(sel.exists)
    .ok()
    .expect((pic as any).currentSrc)
    .contains('PL_blankpic')
    .expect((pic as any).currentSrc)
    .notContains('http://aghujhttp://');
            i++;
        }
    }
    /**
     * Fill Health Issue Form
     */
    async fillHealthForm (weight: any, sel: any, prod: any) {
        await t.setNativeDialogHandler(() => true);
        await waitForAngular();
        await t.wait(3000);


        const checkWeight = (await (this as any).weighthLabel.exists) === false ? await t
    .hover((this as any).inputWeightIC)
    .click((this as any).inputWeightIC)
    .typeText((this as any).inputField, weight, { paste: true, replace: true })
    .click((this as any).inputOkBtn)
    : await t
        .expect((this as any).weighthLabel.exists).ok('Your patient does not have weight set -check it!!')
        .wait(500);

        await waitForAngular();
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

        await waitForAngular();
        await t.wait(2000);
        /** Click to select a Recommended Product */
        // await this.selectFld(sel, prod);
        await this.selectProd(sel, prod);

        await waitForAngular();
        await t.wait(2000);

        if ((await (this as any).confRequiredPopup.exists) && (this as any).confRequiredPopup.visible) {
            await t.takeScreenshot('/orders/ConfirmTitration.png');
            await t
    .setNativeDialogHandler(() => true)
    .click((this as any).continueTitration)
    .click((this as any).cotinueButton);
        }

        await t.click('.text-center.w-25 > button.btn.btn-sm.btn-link.pb-0 > i');
    }
    /**Get Label content */
    async getFormFieldLabel (fieldName: any) {
        const label = await (this as any).findFormFieldInputLabel(fieldName).textContent;

        return label && label.trim();
    }
    // =====================================
    // Checkbox
    // =====================================
    async getTextBoxValue (name: any) {
        return (this as any).el.find(`input[name="${name}"]`).value;
    }

    async setCheckbox (name: any, value: any) {
        const checked = await (this as any).el.find(`input[name="${name}"]`).checked;

        if (value !== checked)
            await (this as any).t.click((this as any).el.find(`input[name="${name}"] + label`));

    }

    async getCheckboxValue (name: any) {
        return (this as any).el.find(`input[name="${name}"]`).checked;
    }
    // =====================================
    // Chozen Dropdown
    // =====================================

    async selectValueChozenDropdown (fieldName: any, index: any) {
        const selectContainer = await (this as any).findFormFieldInput(fieldName)
    .find('.chzn-container');
        const containerId = await selectContainer.getAttribute('id');

        await (this as any).t.click(selectContainer);

        // @ts-expect-error TS(7009): 'new' expression, whose target lacks a construct s... Remove this comment to see the full error message
        const option = await new Selector(`#${containerId} .chzn-results .active-result`)
            .nth(index);

        await (this as any).t.click(option);
    }
    // =====================================
    // radio button
    // =====================================

    async selectRadioButtonOption (fieldName: any, index: any) {
        const radioOption = await (this as any).findFormFieldInput(fieldName)
    .find('.radio-label')
    .nth(index);
        const radioTextContent = await radioOption.textContent;
        const radioOptionLabel = radioTextContent.trim();

        await (this as any).t.click(radioOption);

        return radioOptionLabel;
    }

    async selectRadioButtonOptionByValue (fieldName: any, value: any) {
        const radioOption = await (this as any).findFormFieldInput(fieldName)
    .find(`input[value="${value}"] + .radio-label`);

        const radioTextContent = await radioOption.textContent;
        const radioOptionLabel = radioTextContent.trim();

        await (this as any).t.click(radioOption);

        return radioOptionLabel;
    }
    // =====================================
    // un-categoried
    // =====================================

    getCallout (selector: any) {
        return Selector(selector);
    }

    async clickElement (selector: any) {
        await (this as any).t.click((this as any).el.find(selector));
    }

    /**
   * Queries for all elements matching the selector
   * and returns a list of inner texts of the matching elements.
   * @param {string} sel
   * @returns {array}
   */
    getInnerTexts (sel: any) {
        return ClientFunction((sel) => {
            return Array.prototype.map.call(document.querySelectorAll(sel), (el) => {
                return el.innerText;
            });
        })(sel);
    }

}

export default OrdersNav;
