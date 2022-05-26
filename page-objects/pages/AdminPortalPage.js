import { Selector, t } from 'testcafe'
import { waitForAngular } from 'testcafe-angular-selectors';

class AdminPortalPage {
    constructor() {

        this.logo = await Selector("#ctl00_XXX");
        this.logoTxt = await Selector(".portal-header > div:nth-child(1)");
        this.adminPortal = await Selector(".portal-header > div.text-white.font-weight-bold");
        this.pharmacyMenu = await Selector("#pharmacyLi > span.fa.fa-chevron-down");
        this.pharmacyBtn = await Selector("#pharmacyLi");
        this.notificationMenu = await Selector("#sidebar-menu > div > ul > li > ul > li:nth-child(1) > a").getAttribute("href");
        this.manageProducts = await Selector("#sidebar-menu > div > ul > li > ul > li:nth-child(2) > a").getAttribute("href");
        this.welcomePortal = await Selector("#home > h1").innerText;
        this.topHeader = await Selector("body > div > app-root > div > div.top_nav > topnav-bar > div > div.align-self-center > h3").innerText;

        // Header
        this.top_home = Selector('#roadsafety-header div a img')

        // Buttons
        this.button_12h = Selector('a').withText('New 12Hour Form');
        this.button_24h = Selector('#app a').withText('New 24Hour Form');
        this.button_vi = Selector('#app a').withText('New VI Form');
        this.button_irp = Selector('#btn-primary').withText('New IRP Form');

        // Driver fields
        this.driver_jurisdiction = Selector('#drivers_licence_jurisdiction')
        this.driver_jurisdiction_option = Selector('#drivers_licence_jurisdiction option')
        this.driver_dl_number = Selector('#drivers_number')
        this.driver_lookup_button = Selector('#app button').withText("Driver's Lookup")
        this.driver_lastname = Selector('#last_name')
        this.driver_firstname = Selector('#first_name')
        this.driver_dob = Selector('#dob')
        this.driver_address = Selector('#address1')
        this.driver_city = Selector('.form-control').nth(6)
        //this.driver_province =      Selector ('')
        this.driver_postal = Selector('#postal')

        // Vehicle fields
        this.vehicle_jurisdiction = Selector('#plate_province')
        this.vehicle_plate_number = Selector('#plate_number')
        this.vehicle_lookup_button = Selector('#app button').withText('ICBC Lookup')
        this.vehicle_year = Selector('.form-control').nth(14)
        this.vehicle_make = Selector('.form-control').nth(15)
        this.vehicle_model = Selector('.form-control').nth(16)
        this.vehicle_colour = Selector('.form-control').nth(18)
        this.vehicle_puj = Selector('#puj_code')
        this.vehicle_nsc = Selector('#nsc_number')

        // Return of driver's licence
        this.licence_surrendered_yes = Selector('#licence_surrendered')
        this.licence_surrendered_no = Selector('[name="licence_surrendered"]').nth(1)
        this.licence_return_by_mail = Selector('#return_of_licence')
        this.licence_return_by_person = Selector('[name="return_of_licence"]').nth(1)
        this.licence_pickup_address = Selector('.form-control').nth(22)

        // Vehicle disposition
        this.vehicle_towed_yes = Selector('#vehicle_towed')
        this.vehicle_towed_no = Selector('[name="vehicle_towed"]').nth(1)
        this.vehicle_keys_vehicle = Selector('#location_of_keys')
        this.vehicle_keys_driver = Selector('[name="location_of_keys"]').nth(1)
        this.vehicle_tow_operator = Selector('.form-control').nth(23)
        this.vehicle_tow_no_released = Selector('#reason_for_not_towing')
        this.vehicle_tow_no_left = Selector('[name="reason_for_not_towing"]').nth(1)
        this.vehicle_tow_no_private = Selector('[name="reason_for_not_towing"]').nth(2)
        this.vehicle_tow_no_seized = Selector('[name="reason_for_not_towing"]').nth(3)
        this.vehicle_released_to = Selector('#vehicle_released_to')
        this.vehicle_release_date = Selector('#datetime_released')
        this.vehicle_release_time = Selector('#app .form-control').nth(25)

        // Prohibition
        this.prohibition_type_alcohol = Selector('#prohibition_type_12hr')
        this.prohibition_type_drugs = Selector('[name="prohibition_type_12hr"]').nth(1)
        this.prohibition_intersection = Selector('#offence_address')
        this.prohibition_city = Selector('.form-control').nth(27)
        this.prohibition_file_number = Selector('#file_number')
        this.prohibition_date = Selector('#prohibition_start_time')
        this.prohibition_time = Selector('.form-control').nth(30)

        // Officer
        this.officer_agency = Selector('#agency')
        this.officer_badge = Selector('#badge_number')
        this.officer_lastname = Selector('#officer_name')

        this.pdf_button = Selector('#app button').withText("PDF")

    }

    async clickOption(sel) {
        this.adminPortalOpt = await Selector(sel);
        await t
            .click(this.adminPortalOpt)
            .wait(1000)
    }
      /**
     *  function to check all checkboxes
     * @param t
     * @param sel
     * @returns {Promise<void>}
     */
       async fnChk (sel) {
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
    async fnChkEl (sel) {
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

export default AdminPortalPage
