import { Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
// Import in tests like this:
// --------------------------
// import Navbar from '../page-objects/components/Navbar'
// const navbar = new Navbar()
// Reference with 'navbar.signInButton'
// Call action in code:
// navbar.search('online bank')

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

class Navbar {
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
        this.navOption = Selector('.d-flex.flex-row.align-items-center');
        this.diModal = Selector('.btn.close-btn.btn-sm.btn-width');
        this.privacyTxt = Selector('h5.text-white-50'); // Priacy text
        this.privacyBtnActive = Selector('.btn.btn-toggle.active'); // privacy button is active ON
        this.privacyBtnDisabled = Selector('.btn.btn-toggle'); //privacy button is disabled OFF
    }

    // Functions
    /**
     *
     * @param {*} text
     */
    async search (text) {
        await t
            .typeText(this.searchBox, text, { paste: true, replace: true })
            .pressKey('enter');
    }
    /**
     *
     * @param {*} text
     */
    async confirmMenuOptionExists (text) {
        await waitForAngular();

        await t
            .hover(this.navOption.withText(text))
            .expect(this.navOption.withText(text).exists)
            .ok();
    }
    /**
     *
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
     *
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
     *
     * @param {*} sel
     */
    async clickOption (sel) {
        this.selOpt = await Selector(sel);
        await t.click(this.selOpt).wait(1000);
    }
    /**
     *
     * @param {*} sel
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
     *
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
            const el = await Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .hover(el)
                .expect(sel.exists)
                .ok()
                .expect(pic.currentSrc)
                .contains('PL_blankpic')
                .expect(pic.currentSrc)
                .notContains(
                    'http://atropos/EmployeeDirectory/EmployeePics/http://'
                );
            i++;
        }
    }
}

export default Navbar;
