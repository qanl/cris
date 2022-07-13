import { ClientFunction, Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
// import xpathSelector from '../../src/utilities/xpath-selector';
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

export class PatientNav {

    searchBox: Selector;
    homeOption: Selector;
    homeOption1: Selector;
    ordersOption: Selector;
    patOptions: Selector;
    hpOption: Selector;
    mxOption: Selector;
    prodOption: Selector;
    diOption: Selector;
    lsOption: Selector;
    coedOption: Selector;
    virtualCare: Selector;
    menuOption: Selector;
    signOutIcon: Selector;
    signOutBtn: Selector;
    navOption: Selector;
    diModal: Selector;
    privacyTxt: Selector;
    privacyBtnActive: Selector;
    privacyBtnDisabled: Selector;
    // Patients topbar menu items
    patBtn: Selector;
    patientstitle: Selector;
    totalrecords: Selector;
    totalnumber: Selector;
    clearFilterBtn1: Selector;
    clearFilterBtn: Selector;
    clearFilterIcon: Selector;
    patientDetailsBtn: Selector;
    patientDetailsBtnEnabled: Selector;
    createPatientBtn: Selector;
    patnamecol: Selector;
    patnamecol1: Selector;
    patarrowup: Selector;
    gendercol: Selector;
    idnumbercol: Selector;
    telephonecol: Selector;
    addresscol: Selector;
    filterPatientName: Selector;
    filterGender: Selector;
    filterTelephone: Selector;
    filterAddress: Selector;
    tblBody: Selector;
    tblBodyContent: Selector;
    firstSelPatRow: Selector;
    thirdPatRow: Selector;
    rowSelector: Selector;
    //Patient subpage details
    subPatTitle: Selector;
    patIcon: Selector;
    subFirstName: Selector;
    subLastName: Selector;
    subInfo: Selector;
    subMx: Selector;
    subOrders: Selector;
    subNewOrderBtn: Selector;
    subMeds: Selector;
    subConsultations: Selector;
    subNotes: Selector;
    subAttachments: Selector;
    pencilDemographic: Selector;
    // Patient Demographics / Create Patient
    firstNameCreate: Selector;
    lastNameCreate: Selector;
    calendarCreate: Selector;
    preferredName: Selector;
    occupation: Selector;
    weight: Selector;
    height: Selector;
    metricWeight: Selector;
    metricHeight: Selector;
    imperialWeight: Selector;
    imperialHeight: Selector;
    addressLabel: Selector;
    telephoneLabel: Selector;
    emailLabel: Selector;
    identificationLabel: Selector;
    addNewAddressBtn: Selector;
    addNewTelBtn: Selector;
    addNewEmailBtn: Selector;
    addNewIdBtn: Selector;
    // Add Patient Address
    homeTagSel: Selector;
    homeTag: Selector;
    homeOpt: Selector;
    workOpt: Selector;
    otherOpt: Selector;
    addressInput: Selector;
    addressTwoInput: Selector;
    cityInput: Selector;
    provinceSel: Selector;
    provinceOpt: Selector;
    provinceAB: Selector;
    provinceBC: Selector;
    postalCode: Selector;
    okAddPatAddressBtn: Selector;
    cancelAddPatAddressBtn: Selector;
    countryAdd: Selector;
    checkReview: Selector;
    consentText: Selector;
    createPatDisabled: Selector;
    // Add Telephone
    phoneTag: Selector;
    phoneInput: Selector;
    okPhoneBtn: Selector;
    cancelPhoneBtn: Selector;
    //Add Email
    emailTag: Selector;
    emailInput: Selector;
    okEmailBtn: Selector;
    cancelEmailBtn: Selector;
    emailTooltipTxt: Selector;
    emailSaved: Selector;
    // Add IDENTIFICATION
    provTag: Selector;
    idNumberInput: Selector;
    okIDBtn: Selector;
    cancelIDBtn: Selector;
    savedIDTxt: Selector;
    createPatEnabled: Selector;
    // CONSENT
    consentCheckbox: Selector;
    // consentText: Selector;
    //UPDATE DEMOGRAPHICS
    updatePatientDemographicTitle: Selector;
    updateFirstName: Selector;
    updateLastName: Selector;
    updateCalendarInput: Selector;
    updatePickCalendr: Selector;
    updatePreferredName: Selector;
    updateOccupation: Selector;
    updateWeight: Selector;
    updateWeightUpArrow: Selector;
    enterMxNextBtn: Selector;
    newOrderNext: Selector;
    btnAddToOrder: Selector;
    weightLabel: Selector;
    inputWeight: Selector;
    inputWeightIC: Selector;
    inputField: Selector;
    inputOkBtn: Selector;
    healthIssueFive: Selector;
    healthIssueOne: Selector;
    healthIssueTen: Selector;
    canUserYes: Selector;
    canUserNo: Selector;
    canForm: Selector;
    canFormNo: Selector;
    canFormCaps: Selector;
    canFormCart: Selector;
    canFormDried: Selector;
    canFormOil: Selector;
    canFormPowder: Selector;
    canFormSpray: Selector;
    canTypeNo: Selector;
    canTypeIndica: Selector;
    canTypeSativa: Selector;
    canTypeHybrid: Selector;
    canAlertNoPref: Selector;
    canAlertAlert: Selector;
    canAlertSome: Selector;
    canAlertDrowsy: Selector;
    canAlertNot: Selector;
    canPreviousBtn: Selector;
    canCancelBtn: Selector;
    canNextBtn: Selector;
    confRequiredPopup: Selector;
    startNewTitration: Selector;
    continueTitration: Selector;
    cotinueButton: Selector;
    closeButton: Selector;
    /**Products List */
    btnAllProds: Selector;
    btnRecommendeProds: Selector;
    cicNr: Selector;
    ProdName: Selector;
    Seller: Selector;
    typeProd: Selector;
    formProd: Selector;
    thcProd: Selector;
    thcQty: Selector;
    cbdProd: Selector;
    gramEqv: Selector;
    priceProd: Selector;
    pricePerGrm: Selector;
    /**New Order Review */
    resetRecommendationBtn: Selector;
    doseUpBtn: Selector;
    doseDownBtn: Selector;
    doseInRed: Selector;
    doseInGreen: Selector;
    reviewBtn: Selector;
    previousBtn: Selector;
    cancelOrder: Selector;
    selectedProd: Selector;
    removeProdBtn: Selector;
    addProdToOrder: Selector;
    anotherProd: Selector;
    /**Other generic form input selectors */
    selOpt: Selector;
    findFormFieldInputLabel: Selector;
    findFormFieldInput: Selector;
    // e: Selector;
    el: Selector;
    t: TestCafe;



    constructor() {
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
        this.consentText = Selector('form > div:nth-child(6) > div > div > label');
        this.createPatDisabled = Selector('#mat-dialog-0 > app-create-patient-modal > div > div.d-flex.modal-footer.justify-content-end.p-2 > button.btn.btn-success.btn-sm.mr-2').withAttribute('disabled');
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
        this.weightLabel = Selector('div.border-0.pb-0.outline-none.w-100.pl-1.weight-txt').withText('kg').filterVisible();
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
        this.canTypeIndica = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeSativa = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canTypeHybrid = Selector('div.mx-auto>div:nth-child(3)>cannabis-preferences>div>div>div:nth-child(4)>div:nth-child(4)>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertNoPref = Selector('div.false>div:nth-child(2)>div:nth-child(1)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertAlert = Selector('div.false>div:nth-child(2)>div:nth-child(2)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertSome = Selector('div.false>div:nth-child(2)>div:nth-child(3)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertDrowsy = Selector('div.false>div:nth-child(2)>div:nth-child(4)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canAlertNot = Selector('div.false>div:nth-child(2)>div:nth-child(5)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.canPreviousBtn = Selector('div.modal-footer>span>button:nth-child(1)');
        this.canCancelBtn = Selector('button.btn-danger');
        this.canNextBtn = Selector('i.fa-arrow-right');
        this.confRequiredPopup = Selector('div.pop-up-border.d-flex.flex-column.b-style.confirmation-pop-up');
        this.startNewTitration = Selector('div.pb-3>div:nth-child(6)>check-mark-radio-button>div>div:nth-child(1)>i');
        this.continueTitration = Selector('div.pb-3>div:nth-child(7)>check-mark-radio-button>div>div:nth-child(1)>i');
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
        /** New Order Review Order */
        this.resetRecommendationBtn = Selector('div.d-flex > button.btn.btn-link').withText('Reset Recommendations');
        this.doseDownBtn = Selector('.btn.btn-sm.btn-link.pt-0 > i.fas.fa-caret-down');
        this.doseUpBtn = Selector('.btn.btn-sm.btn-link.pb-0 > i.fas.fa-caret-up');
        this.doseInRed = Selector('div.text-white.text-nowrap.bg-danger');
        this.reviewBtn = Selector('.d-flex.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > span > button.btn.mx-2.purple-btn.ng-star-inserted:disabled');
        this.previousBtn = Selector('.d-flex.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > span > button.btn.btn-primary.ng-star-inserted');
        this.cancelOrder = Selector('.d-flex.modal-footer.justify-content-end.p-2.gray-modal-footer-bg-color > span > button.btn.btn-danger');
        this.doseInGreen = Selector('.d-flex.flex-row.text-success.mt-1.ng-star-inserted');
        this.selectedProd = Selector('#dosingCalcGrid > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container > igx-grid-row > igx-display-container > igx-grid-cell:nth-child(2) > div > span');
        this.removeProdBtn = Selector('dosing-calculator > div > div > div.d-flex.justify-content-between.d-print-none > div.d-flex > div > button:nth-child(2)');
        this.addProdToOrder = Selector('#dosingCalcGrid > div.igx-grid__tbody > div.igx-grid__tbody-content > div.mt-2.text-center.ng-star-inserted > button');
        this.anotherProd =  Selector('igx-display-container > igx-grid-cell:nth-child(6) > div');
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
                .typeText(this.searchBox, text, { paste: true, replace: true })
                .pressKey('enter');
        }
    /**
     * --Confirm menu options
     * @param {*} text
     */
    async confirmMenuOptionExists(text: any) {
            await waitForAngular();

            await t
                .hover(this.navOption.withText(text))
                .expect(this.navOption.withText(text).exists)
                .ok();
        }
    /**
     * --Select a main menu option
     * @param {*} text
     */
    async selectMenuOption(text: any) {
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
    async selectHome(text: any) {
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
    async selectPatRow(sel: any, val: any) {
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
    async selectFld(sel: any, val: any) {
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
    async selectHealthIssue(sel: any, val: any) {
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
    async selectProd(sel: any, val: any) {
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
            const checkProd = await selectedRow.withText(val).exists && await selectedRow.withText(val).visible === false ?
                await t
                    .click(this.btnAllProds)
                    .setNativeDialogHandler(() => true)
                    .hover(selectedRow.withText(val))
                    .click(selectedRow.withText(val))
                :
                await t
                    .expect(selectedRow.withText(val).exists).ok('Oops no such product exists!!')
                    .setNativeDialogHandler(() => true)
                    .hover(selectedRow.withText(val))
                    .click(selectedRow.withText(val))
                    .wait(500);


            await waitForAngular();
            await checkProd;

            await t
                .hover(this.btnAddToOrder)
                .click(this.btnAddToOrder);

        }
        /** Check Product Ordered Status */
        async checkProdStatus() {
              /**Check if the dosage needs adjustment **/
              const checkProdStatus = await this.doseInRed.exists && await this.doseInRed.visible === true ?
              await t
                  .setNativeDialogHandler(() => true)
                  .click(this.doseDownBtn)
                  .click(this.doseDownBtn)
              :
              await t
                  .click(this.doseUpBtn)
                  // .expect(this.doseInGreen.exists).ok('Your Dosage is Not right. Adjust it!!')
                  .wait(500);

              await waitForAngular();
              await checkProdStatus;
              await t.takeScreenshot('/orders/ProductAdded.png');
              console.log('Product dosage adjusted!');
        }
    /**
     * -- Check all checkboxes
     * @param {*} sel --check all checkboxes
     */
    async clickOption(sel: any) {
            this.selOpt = Selector(sel);
            await t.click(this.selOpt).wait(1000);
        }

        async checkProductOk(prod: any){
            await waitForAngular();
            await t.setNativeDialogHandler(() => true)

            /**Check if the selected product is successfully no **/
            const checkProdOkay = await this.reviewBtn.exists && await this.reviewBtn.visible === true ?
                await t
                    .hover(this.selectedProd)
                    .click(this.selectedProd)
                    .hover(this.removeProdBtn)
                    .click(this.removeProdBtn)
                    .wait(500)
                    .click(this.addProdToOrder)
                    .setNativeDialogHandler(() => true)
                    .click(this.btnAllProds)
                    .setNativeDialogHandler(() => true)
                    .hover(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(prod)) //select a product
                    .click(Selector('igx-display-container > igx-grid-cell:nth-child(5) > div').withText(prod))
                    .hover(this.btnAddToOrder)
                    .click(this.btnAddToOrder)
                :
                await t
                    .expect(this.doseInGreen.exists).ok('Oops, this product cannot be ordered!')
                    .wait(500);

            await checkProdOkay;

            await t.takeScreenshot('/orders/ProductAddedOK.png');
            console.log('Product added successfully');
        }
    /**
     * --check all options
     * @param {*} sel
     */
    async fnChk(sel: any) {
            await waitForAngular();
            await t.switchToMainWindow();
            const ct = await Selector(sel).count;

            const n = ct;

            let i = 0;

            while (i < n) {
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
            await waitForAngular();
            await t.wait(3000);


            const checkWeight = await this.weightLabel.exists && await this.weightLabel.visible === false ? await t
                .hover(this.inputWeightIC)
                .click(this.inputWeightIC)
                .typeText(this.inputField, weight, { paste: true, replace: true })
                .click(this.inputOkBtn)
                : await t
                    .expect(this.weightLabel.exists).ok('Your patient does not have weight set -check it!!')
                    .wait(500);

            await waitForAngular();
            await checkWeight;

            /** Click to select the Health Issue radio button */
            await t.click(this.healthIssueFive);
            /**Click to set Patient Preferences Yes, No,No,NO */
            await this.canFormNo.exists, this.canTypeNo.exists, await this.canAlertNoPref.exists && await this.canFormNo.visible, this.canTypeNo.visible, this.canAlertNoPref.visible;
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
            // await waitForAngular();

            if (await this.confRequiredPopup.exists && await this.confRequiredPopup.visible)
                await t.takeScreenshot('/orders/ConfirmTitration.png');
                await t
                    .setNativeDialogHandler(() => true)
                    .click(this.continueTitration)
                    .click(this.cotinueButton);


            await waitForAngular();
            // await this.checkProductOk('Oil');

            await t.click('.text-center.w-25 > button.btn.btn-sm.btn-link.pb-0 > i');
        }
    /**Get Label content */
    async getFormFieldLabel(fieldName: any) {
            const label = await this.findFormFieldInputLabel(fieldName).textContent;

            return label && label.trim();
        }
    // =====================================
    // Checkbox
    // =====================================
    async getTextBoxValue(name: any) {
            // const el = Selector('input');
            return this.el.find(`input[name="${name}"]`).value;
        }

    async setCheckbox(name: any, value: any) {
            const checked = await this.el.find(`input[name="${name}"]`).checked;

            if (value !== checked)
                await t.click(this.el.find(`input[name="${name}"] + label`));

        }

    async getCheckboxValue(name: any) {
            return this.el.find(`input[name="${name}"]`).checked;
        }
    // =====================================
    // Chozen Dropdown
    // =====================================

    async selectValueChozenDropdown(fieldName: any, index: any) {
            const selectContainer = this.findFormFieldInput(fieldName)
                .find('.chzn-container');
            const containerId = await selectContainer.getAttribute('id');

            await t.click(selectContainer);

            const option = Selector(`#${containerId} .chzn-results .active-result`)
                .nth(index);

            await t.click(option);
        }
    // =====================================
    // radio button
    // =====================================

    async selectRadioButtonOption(fieldName: any, index: any) {
            const radioOption = await this.findFormFieldInput(fieldName)
                .find('.radio-label')
                .nth(index);
            const radioTextContent = await radioOption.textContent;
            const radioOptionLabel = radioTextContent.trim();

            await t.click(radioOption);

            return radioOptionLabel;
        }

    async selectRadioButtonOptionByValue(fieldName: any, value: any) {
            const radioOption = await this.findFormFieldInput(fieldName)
                .find(`input[value="${value}"] + .radio-label`);

            const radioTextContent = await radioOption.textContent;
            const radioOptionLabel = radioTextContent.trim();

            await t.click(radioOption);

            return radioOptionLabel;
        }
        // =====================================
        // un-categoried
        // =====================================

        getCallout(selector: any) {
            return Selector(selector);
        }

    async clickElement(selector: any) {
            await t.click(this.el.find(selector));
        }
            /**
   * Queries for all elements matching the selector
   * and returns a list of inner texts of the matching elements.
   * @param {string} selector
   * @returns {array}
   */
    getInnerTexts (selector: any) {
        return ClientFunction((selector) => {
            return Array.prototype.map.call(document.querySelectorAll(selector), (el:any) => {
                return el.innerText;
            });
        })(selector);
    }


    }
