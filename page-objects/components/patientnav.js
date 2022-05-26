import { Selector, t } from 'testcafe'
import { waitForAngular } from 'testcafe-angular-selectors';
// Import in tests like this:
// --------------------------
// import PatientNav from '../page-objects/components/PatientNav'
// const patientnav = new PatientNav()
// Reference with 'patientnav.homeOption'
// Call action in code:
// patientnav.search('online bank')

class PatientNav {
    constructor() {
        // Selectors
        this.searchBox = Selector('#searchTerm');
        this.homeOption = Selector('left-nav > div > nav > a.nav-item.nav-link.rounded-0.px-1.active > div > span');
        this.homeOption1 = Selector('.nav-item.nav-link.rounded-0.px-1 .align-items-center span');
        this.ordersOption = Selector('left-nav > div > nav > a:nth-child(2) > div > div');
        this.patOptions = Selector('left-nav > div > nav > a:nth-child(3) > div > div');
        this.hpOption = Selector('left-nav > div > nav > a:nth-child(5) > div > div');
        this.mxOption = Selector('left-nav > div > nav > a:nth-child(5) > div > div');
        this.prodOption = Selector('left-nav > div > nav > a:nth-child(6) > div > div');
        this.diOption = Selector('left-nav > div > nav > a:nth-child(7) > div > div');
        this.lsOption = Selector('left-nav > div > nav > a:nth-child(8) > div > div');
        this.coedOption = Selector('left-nav > div > nav > a:nth-child(9) > div > div');
        this.virtualCare = Selector('left-nav > div > nav > a:nth-child(10) > div > div');
        this.menuOption = Selector('a .routerlink .nav-item.nav-link.rounded-0.px-1.transparent-bg');
        this.navOption = Selector('.d-flex.flex-row.align-items-center');
        this.diModal = Selector('.btn.close-btn.btn-sm.btn-width');
        this.privacyTxt = Selector('h5.text-white-50'); // Priacy text
        this.privacyBtnActive = Selector('.btn.btn-toggle.active'); // privacy button is active ON
        this.privacyBtnDisabled = Selector('.btn.btn-toggle'); //privacy button is disabled OFF
        // Patients topbar menu items
        this.patBtn = Selector('i.icon_Nav-Patients.navIcon'); //Patient left menu button
        this.patientstitle = Selector('.blue-tinted-bg.overflow > span'); //Patients title
        this.totalrecords = Selector('.col-auto > filter-info > div > div'); //Total Record:##
        this.totalnumber = Selector('.col-auto > filter-info > div > div > div > strong'); // records number
        this.clearFilterBtn1 = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(1)'); // clear button
        this.clearFilterBtn = Selector('btn.btn-link').nth(1); // clear button
        this.clearFilterIcon = Selector('.icon_Filter.toolbaricon'); // Clear Filter Icon
        this.patientDetailsBtn = Selector('ncol.text.d-flex.justify-content-end.pr-0 > div:nth-child(2)'); //Patient Details disabled
        this.patientDetailsBtnEnabled = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(2) > button'); //Patient Details enabled
        this.createPatientBtn = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(3) > button'); //Create Patient
        this.patnamecol = Selector('#igx-grid-0_patientName > span'); // Patient name (LAST, First)
        this.patnamecol1 = Selector('igx-grid-header').nth(1); // Patient name (LAST, First)
        this.patarrowup = Selector('#igx-grid-0_patientName > div'); //arrow upward
        this.gendercol = Selector('#igx-grid-0_gender > span > div > i'); //gender icon
        this.idnumbercol = Selector('#igx-grid-0_identityNo > span > div'); //id number
        this.telephonecol = Selector('#igx-grid-0_phoneField > span > span') //telephone
        this.addresscol = Selector('#igx-grid-0_addressField > span > span') //address
        this.filterPatientName = Selector('#igx-chip-0 > div > div.igx-chip__content'); // filter by Patient Name
        this.filterGender = Selector('#igx-chip-1 > div > div.igx-chip__content > span'); // filter by Patient Gender
        this.filterTelephone = Selector('#igx-chip-6 > div > div.igx-chip__content > span'); //filter by Telephone
        this.filterAddress = Selector('#igx-chip-7 > div > div.igx-chip__content > span'); // filter by Address
        this.tblBody = Selector('#igx-grid-1 > div.igx-grid__tbody'); // table body whole
        this.tblBodyContent = Selector('#igx-grid-1 > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container'); //tble content
        this.firstSelPatRow = Selector('igx-grid-row.igx-grid__tr.igx-grid__tr--odd.igx-grid__tr--selected') //selected first row
        this.thirdPatRow = Selector('igx-grid-row:nth-child(3) > igx-display-container')
        this.rowSelector = Selector('igx-grid-row')
        //Patient subpage details
        this.subPatTitle = Selector('.d-print-none.p-2.text-white.h3.mb-0.blue-tinted-bg.overflow > span');
        this.patIcon = Selector('app-patient-details > div > div > div > div.pr-2 > div > div > div.p-2 > img');
        this.subFirstName = Selector('.blue-label-color > div');
        this.subLastName = Selector('div.blue-label-color > strong > div');
        this.subInfo = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > div > nav > a > div > div');
        this.subMx = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(2) > a > div')
        this.subOrders = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(3) > a')
        this.subMeds = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(4) > a > div')
        this.subConsultations = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(5) > a > div')
        this.subNotes = Selector(' app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(6) > a > div')
        this.subAttachments = Selector('app-patient-details > div > div > div > div.pr-2 > div > patient-left-nav > div > nav:nth-child(7) > a > div > span:nth-child(1)')
        this.pencilDemographic = Selector('#info-div > div:nth-child(1) > div.d-flex.align-items-center > i')


    }

    // Functions
    async search(text) {
        await t
            .typeText(this.searchBox, text, { paste: true, replace: true })
            .pressKey('enter')
    }
    async confirmMenuOptionExists(text) {
        await waitForAngular();

        await t
            .hover(this.navOption.withText(text))
            .expect(this.navOption.withText(text).exists).ok()

    }
    async selectMenuOption(text) {
        await waitForAngular();

        await t
            .hover(this.navOption.withText(text))
            .expect(this.navOption.withText(text).exists).ok()
            .click(this.navOption.withText(text));
    }
    async selectHome(text) {
        await waitForAngular();

        await t
            .hover(this.homeOption.withText(text))
            .expect(this.homeOption.withText(text).exists).ok()
            .click(this.homeOption.withText(text));
    }
    /**
    *  function to select a row
    * @param t
    * @param sel -- selector for the cell
    * @param val - eg. patient name, phone
    * @returns {Promise<void>}
    */
    async selectFld(sel,val){
        await waitForAngular();
        let selectedRow = Selector(sel).addCustomMethods({
            getCell: (el, idx) => {
                return el[0].querySelectorAll(val)[idx];
            },
        }, {
            returnDOMNodes: true,
        });


    await t
        .hover(selectedRow.withText(val))
        .click(selectedRow.withText(val));
        // .click(fieldSet.withAttribute('id', 'tried-section').getInput(0));
    }
    /**
*  function to check all checkboxes
* @param t
* @param sel
* @returns {Promise<void>}
*/
    async clickOption(sel) {
        this.selOpt = await Selector(sel);
        await t
            .click(this.selOpt)
            .wait(1000)
    }
    /**
   *  function to check all checkboxes
   * @param t
   * @param sel
   * @returns {Promise<void>}
   */
    async fnChk(sel) {
        await waitForAngular();
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;

        const n = ct;

        let i = 0;

        while (i < [n]) {
            const el = await Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .click(el)
                .pressKey('tab');
            i++;
        }
    }
    /**
     *  function to check all checkboxes
     * @param t
     * @param sel
     * @returns {Promise<void>}
     */
    async fnChkEl(sel) {
        await sel.exists;
        await t.switchToMainWindow();
        const ct = await Selector(sel).count;
        const pic = await selectImg(sel);

        const n = ct;

        let i = 0;

        while (i < [n]) {
            const el = await Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .hover(el)
                .expect(sel.exists).ok()
                .expect(pic.currentSrc).contains('PL_blankpic')
                .expect(pic.currentSrc).notContains('http://atropos/EmployeeDirectory/EmployeePics/http://');
            i++;
        }
    }
}

export default PatientNav
