import { Selector, t } from 'testcafe'

class CRISMainPage {
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
        // Grey message box (e.g. "Welcome! It looks like you haven't used this app before.")


    }
}

export default CRISMainPage
