import { Selector, t } from 'testcafe'
import { waitForAngular } from 'testcafe-angular-selectors';

class PatientsPage {
    constructor() {
        this.header_logo = Selector('body > app-root > div > top-nav > nav > a > img')
        this.home_page = Selector('.blue-tinted-bg.overflow > span')
        this.home_page_logo = Selector('.svg-container > img')
        this.company_logo = Selector('.d-flex.justify-content-sm-end > img')
        this.page_body = Selector ("body > app-root > div > div")
        this.welcome_message = Selector(".section-header")
        this.version_header = Selector('body > app-root');
        this.version_footer = Selector('#app div');
        this.login_button = Selector('.btn-primary');
        // this.expected_version = '0.1.88'
        this.myreports = Selector('div.section-header.nth(1)').withExactText('My Reports');
        this.consultationReminders = Selector('ul > li > a.report-link').withExactText('Consulation Reminders');
        this.daylySales = Selector('ul > li > a.report-link').withExactText('Daily Sales');
        this.consultationRemindText = Selector('div.report-text').withExactText('Patients to be contacted for scheduled consultations');
        this.daylySalesText = Selector('div.report-text').withExactText('All medical cannabis sales completed in this store every day');
        this.crisNotifications = Selector('div.section-header').withExactText('CRIS Notifications');
        this.crisNotificationsMsg = Selector('div.w-75.pl-1');
        this.dateNotification = Selector('strong.text-uppercase');
        // Username in top banner (e.g. "User user1@36eighttech.com")
        this.ui_shown_username = Selector('#dropdownMenuButton > span');
        this.ui_signout = Selector('#signOutBtn');
        // Patients topbar menu items
        this.patBtn = Selector('i.icon_Nav-Patients.navIcon'); //Patient left menu button
        this.patientstitle = Selector('.blue-tinted-bg.overflow > span'); //Patients title
        this.totalrecords = Selector('.col-auto > filter-info > div > div'); //Total Record:##
        this.totalnumber = Selector('.col-auto > filter-info > div > div > div > strong'); // records number
        this.clearFilterBtn1 = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(1)'); // clear button
        this.clearFilterBtn = Selector('btn.btn-link').nth(1); // clear button
        this.clearFilterIcon = Selector('.icon_Filter.toolbaricon'); // Clear Filter Icon
        this.patientDetailsBtn = Selector('ncol.text.d-flex.justify-content-end.pr-0 > div:nth-child(2)'); //Patient Details disabled
        this.patientDetailsBtnEnabled = Selector('.btn.btn-link'); //Patient Details enabled
        this.createPatientBtn = Selector('.col.text.d-flex.justify-content-end.pr-0 > div:nth-child(3) > button'); //Create Patient
        this.patnamecol = Selector('#igx-grid-0_patientName > span'); // Patient name (LAST, First)
        this.patnamecol1 = Selector('igx-grid-header').nth(1); // Patient name (LAST, First)
        this.patarrowup = Selector('#igx-grid-0_patientName > div'); //arrow upward
        this.gendercol = Selector('#igx-grid-0_gender > span > div > i'); //gender icon
        this.idnumbercol = Selector('#igx-grid-0_identityNo > span > div'); //id number
        this.telephonecol = Selector('#igx-grid-0_phoneField > span > span') //telephone
        this.addresscol = Selector('#igx-grid-0_addressField > span > span') //address
        this.filterPatientName = Selector('#igx-chip-0 > div > div.igx-chip__content'); // filter by Patient Name
        this.filterGender= Selector('#igx-chip-1 > div > div.igx-chip__content > span'); // filter by Patient Gender
        this.filterTelephone = Selector('#igx-chip-6 > div > div.igx-chip__content > span'); //filter by Telephone
        this.filterAddress = Selector('#igx-chip-7 > div > div.igx-chip__content > span'); // filter by Address
        this.tblBody = Selector('#igx-grid-1 > div.igx-grid__tbody'); // table body whole
        this.tblBodyContent = Selector('#igx-grid-1 > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container'); //tble content
        this.firstSelPatRow = Selector('igx-grid-row.igx-grid__tr.igx-grid__tr--odd.igx-grid__tr--selected') //selected first row
        this.thirdPatRow = Selector('igx-grid-row:nth-child(3) > igx-display-container')
        this.rowSelector = Selector('igx-grid-row')


    }
    async selectFld(text,pat){
        await waitForAngular();
        this.fieldSet = Selector('igx-grid-row').addCustomMethods({
            getInput: (el, idx) => {
                return el[0].querySelectorAll(text)[idx];
            },
        }, {
            returnDOMNodes: true,
        });


    await t.click(fieldSet.withText(pat).getInput(0));
        // .click(fieldSet.withAttribute('id', 'tried-section').getInput(0));
    }
}

export default PatientsPage
