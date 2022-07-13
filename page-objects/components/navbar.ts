import { Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';
// Import in tests like this:
// --------------------------
// import Navbar from '../page-objects/components/Navbar'
// const navbar = new Navbar()
// Reference with 'navbar.signInButton'
// Call action in code:
// navbar.search('online bank')

class Navbar {
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
        (this as any).navOption = Selector('.d-flex.flex-row.align-items-center');
        (this as any).diModal = Selector('.btn.close-btn.btn-sm.btn-width');
        (this as any).privacyTxt = Selector('h5.text-white-50'); // Priacy text
 (this as any).privacyBtnActive = Selector('.btn.btn-toggle.active'); // privacy button is active ON
 (this as any).privacyBtnDisabled = Selector('.btn.btn-toggle'); //privacy button is disabled OFF
 //privacy button is disabled OFF
    }

    // Functions
    /**
     *
     * @param {*} text
     */
    async search (text: any) {
        await t
    .typeText((this as any).searchBox, text, { paste: true, replace: true })
    .pressKey('enter');
    }
    /**
     *
     * @param {*} text
     */
    async confirmMenuOptionExists (text: any) {
        await waitForAngular();

        await t
    .hover((this as any).navOption.withText(text))
    .expect((this as any).navOption.withText(text).exists)
    .ok();
    }
    /**
     *
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
     *
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
     *
     * @param {*} sel
     */
    async clickOption (sel: any) {
        (this as any).selOpt = await Selector(sel);
        await t.click((this as any).selOpt).wait(1000);
    }
    /**
     *
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
            const el = await Selector(sel).nth(i);

            await t
                .setNativeDialogHandler(() => true)
                .click(el)
                .pressKey('tab');
            i++;
        }
    }
    
}

export default Navbar;
