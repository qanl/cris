import { Config } from '../../config/config.interface';
import { getCurrentConfig } from '../../config/testcafe-config';
import { baseUrl, password, username } from '../../index.js';
import { Navbar } from '../../page-objects/components/navbar';
import { Selector, Role, ClientFunction, t, fixture } from 'testcafe';
const { expect } = require('chai');
const navbar = new Navbar();

const endPoint = [
    '/consultation-reminders',
    '/daily-sales',
    '/orders',
    '/patients',
    '/patients/714/information',
    '/patients/714/medical-authorizations',
    '/patients/714/orders',
    '/patients/714/medications',
    '/patients/714/consultations',
    '/patients/714/notes',
    '/patients/714/attachments',
    '/hcps',
    '/medical-authorizations',
    '/products',
    '/licensed-sellers',
    '/virtual-care',
];

const config: Config = getCurrentConfig();


const userOne = Role(

    config.env?.url,

    async () => {
        await t
            .typeText('input[name="loginfmt"]', config.user?.login)
            .click('[type="submit"]')
            .typeText('input[name="passwd"]', config.user?.password)
            .click('[type="submit"]');
    },
    { preserveUrl: true }
);


fixture`E2E - C/R/I/S Products List`
    .page(`${baseUrl()}/home`)
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        await t.useRole(userOne);
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .disablePageCaching.after(async () => {
        console.log('Test is Done!');
    });

test('7432: Verify user can view the products list', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    const sectionHeader = await Selector('div[class="d-print-none p-2 text-white h3 mb-0 blue-tinted-bg overflow"] span').innerText;

    await t
        .expect(sectionHeader).contains('Products', 'OOps, something went wrong with Products list!')
        .wait(1000)
        .takeElementScreenshot('body > app-root > div', 'products/7432_ProductsList.png' );


});

test('7433: Verify that if the user selects a row, the product details button is enabled and the user can see the details of products.', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();
    const btnProductDetails = Selector('button').withText('Product Details').hasAttribute('disabled');

    // assert that before selecting the row, this button must be disabled.
    await t.expect(btnProductDetails).ok('Oops, Product Details button is already enabled!');
    const firstProdRow = Selector('[data-rowindex="1"][aria-describedby="productList_cicCode"]');

    await t
        .click(firstProdRow)
        .hover(firstProdRow)
        .takeElementScreenshot('body > app-root > div', 'products/7433_ProductDetailsEnabled.png' );
    // after selecting the row, the Product Details button is enabled, the attribute disabled has been removed
    await t.expect(btnProductDetails).notOk('Oops, Product Details button is disabled!');


});
test('7434: Verify that the user should be able to filter by CIC code, product name, licensed seller, type, form, THC, CBD, gram Equiv, price. it shows yy off xx Records; Sort by name.', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();

    const resetFilter = Selector('.igx-button[tabindex="0"] > span');
    const closeFilter =  Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span');
    const cicFilter = Selector('igx-grid-header-group:nth-of-type(1) .igx-chip__content > [draggable="false"]').filterVisible();
    const prodNameFilter = Selector('igx-grid-header-group:nth-of-type(2) .igx-chip__content > [draggable="false"]');
    const prodLicenseFilter = Selector('igx-grid-header-group:nth-of-type(3) .igx-chip__item > .material-icons');
    const prodTypeFilter = Selector('igx-grid-header-group:nth-of-type(4) .igx-chip__item > .material-icons');
    const prodFormFilter = Selector('igx-grid-header-group:nth-of-type(5) .igx-chip__item > .material-icons');
    const prodTHCFilter = Selector('igx-grid-header-group:nth-of-type(6) .igx-chip__item > .material-icons');
    const prodCBDFilter = Selector('igx-grid-header-group:nth-of-type(7) .igx-chip__item > .material-icons');
    const prodGramEquivFilter = Selector('igx-grid-header-group:nth-of-type(8) .igx-chip__item > .material-icons');
    const prodPriceFilter = Selector('igx-grid-header-group:nth-of-type(9) .igx-chip__item > .material-icons');

    const inputFilterTxt = Selector('#productList > igx-grid-header-row > div.igx-grid-thead__wrapper > igx-grid-filtering-row > igx-input-group > div.igx-input-group__bundle > div > input');

    // filter by CIc
    await t
        .click(cicFilter)
        .typeText(inputFilterTxt, '10S', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByCIc.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by License number start with two chars: 12
    await t
        .click(prodNameFilter)
        .typeText('input[placeholder="Add filter value"]', 'Aurora', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByName.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by License name
    await t
        .click(prodLicenseFilter)
        .typeText('input[placeholder="Add filter value"]', 'Emerald', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByLicense.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by Type
    await t
        .click(prodTypeFilter)
        .typeText('input[placeholder="Add filter value"]', 'Unknown', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByType.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by Form
    await t
        .click(prodFormFilter)
        .typeText('input[placeholder="Add filter value"]', 'Oil', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByForm.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by THC
    await t
        .click(prodTHCFilter)
        .typeText('input[placeholder="Add filter value"]', '10', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByTHC.png' )
        .click(resetFilter)
        .click(closeFilter);
    // filter by CBD
    await t
        .click(prodCBDFilter)
        .typeText('input[placeholder="Add filter value"]', '0', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByCBD.png' )
        .click(resetFilter)
        .click(closeFilter);

    // filter by Gram Equiv, only numberic
    await t
        .click(prodGramEquivFilter)
        .typeText('input[placeholder="Add filter value"]', '5', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByGramEQV.png' )
        .click(resetFilter)
        .click(closeFilter);

    // filter by Price, numeric, decimals are optional
    await t
        .click(prodPriceFilter)
        .typeText('input[placeholder="Add filter value"]', '50', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7434_ProdFilterByPrice.png' )
        .click(resetFilter)
        .click(closeFilter);


});

test('7435: Clear filter:if no filter, it shows total records:xx', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();
    const prodNameFilter = Selector('igx-grid-header-group:nth-of-type(2) .igx-chip__content > [draggable="false"]');
    const resetFilter = Selector('.igx-button[tabindex="0"] > span');
    const closeFilter =  Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span');
    const clearFilter = Selector('div.col.text-right.d-flex.justify-content-end > div:nth-child(1) > button').withText('Clear Filter');
    const totalProducts = Selector('.pink-text').innerText;

    console.log('BEFORE filtering: ' + (await totalProducts).toString());
    // filter by Name
    await t
        .click(prodNameFilter)
        .typeText('input[placeholder="Add filter value"]', 'Aurora', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .wait(1000);

    const afterFilterProducts = Selector('.pink-text').innerText;

    console.log('AFTER filtering we see: ' + (await afterFilterProducts).toString());

    await t
        .takeElementScreenshot('body > app-root > div', 'products/7435_FilterByName.png' )
        .expect(clearFilter.exists).ok('Oops, the Clear Filter doesnt exist sor it is not enabled')
        .takeElementScreenshot('body > app-root > div', 'products/7435_BeforeClearingFilter.png' );

    await t
        .click(clearFilter)
        .takeElementScreenshot('body > app-root > div', 'products/7435_AfterClearingFilter.png' );

    const totalAfterClear = Selector('.pink-text').innerText;

    await t.expect(totalAfterClear).ok('oops, selector is missing!');

    await t.expect(await totalAfterClear).contains(await totalProducts);
    console.log('Finaly after we rest the filter with Clear button we see: ' + (await totalAfterClear).toString());

});

test('7436: Verify that the product list should be sorted by product name', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();

    const prodFirsRowContent = Selector('#productList > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container > igx-grid-row:nth-child(2) > igx-display-container').innerText;
    const prodSortArrow = Selector('#productList_productPackageInfo > div > div > igx-icon');


    console.log('Before the first row displays: ' + (await prodFirsRowContent).toString());

    await t.takeElementScreenshot('body > app-root > div', 'products/7436_sortByName.png' );
    await t.click(prodSortArrow);
    const prodAfterSortArrowClicked = Selector('#productList > div.igx-grid__tbody > div.igx-grid__tbody-content > igx-display-container > igx-grid-row:nth-child(2) > igx-display-container').innerText;

    console.log('After sorting the first row displays: ' + (await prodAfterSortArrowClicked).toString());
    await t.takeElementScreenshot('body > app-root > div', 'products/7436_AftersortByName.png' );
    await t.expect(await prodFirsRowContent ).notContains(await prodAfterSortArrowClicked);
});

test('7437: Verify that if the user set few filters on the page clear filter button should be enabled and the user should be able to clear all filters', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();
    const prodNameFilter = Selector('igx-grid-header-group:nth-of-type(2) .igx-chip__content > [draggable="false"]');
    const prodLicenseFilter = Selector('igx-grid-header-group:nth-of-type(3) .igx-chip__item > .material-icons');
    const resetFilter = Selector('.igx-button[tabindex="0"] > span');
    const closeFilter =  Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span');
    const clearFilter = Selector('div.col.text-right.d-flex.justify-content-end > div:nth-child(1) > button').withText('Clear Filter');
    const totalProducts = Selector('.pink-text').innerText;

    console.log('BEFORE filtering: ' + (await totalProducts).toString());
    // filter by Name
    await t
        .click(prodNameFilter)
        .typeText('input[placeholder="Add filter value"]', 'Aurora', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .wait(1000);

    // filter by License name
    await t
        .click(prodLicenseFilter)
        .typeText('input[placeholder="Add filter value"]', 'Aurora', { replace: true, paste: true, speed: 0.07 })
        .hover('igx-grid-cell[id="productList_1_0"] div[class="w-100 text-center"]')
        .takeElementScreenshot('body > app-root > div', 'products/7437_ProdFilterByLicense.png' )
        .click(closeFilter);
    const afterFilterProducts = Selector('.pink-text').innerText;

    console.log('AFTER filtering we see: ' + (await afterFilterProducts).toString());

    await t
        .takeElementScreenshot('body > app-root > div', 'products/7437_FilterByName.png' )
        .expect(clearFilter.exists).ok('Oops, the Clear Filter doesnt exist sor it is not enabled')
        .takeElementScreenshot('body > app-root > div', 'products/7437_BeforeClearingFilter.png' );

    await t
        .click(clearFilter)
        .takeElementScreenshot('body > app-root > div', 'products/7437_AfterClearingFilter.png' );

    const totalAfterClear = Selector('.pink-text').innerText;

    await t.expect(totalAfterClear).ok('oops, selector is missing!');

    await t.expect(await totalAfterClear).contains(await totalProducts);
    console.log('Finaly after we rest the filter with Clear button we see: ' + (await totalAfterClear).toString());

});

test('7438: Verify that the user should not be able to see the product that is not available (manage product > is product available set to No)', async () => {
    await navbar.selectMenuOption('PRODUCTS');
    await t.switchToMainWindow();

    const resetFilter = Selector('.igx-button[tabindex="0"] > span');
    const closeFilter =  Selector('.igx-grid__filtering-row-editing-buttons > button:nth-of-type(2) > span');
    const cicFilter = Selector('igx-grid-header-group:nth-of-type(1) .igx-chip__content > [draggable="false"]').filterVisible();


    const inputFilterTxt = Selector('#productList > igx-grid-header-row > div.igx-grid-thead__wrapper > igx-grid-filtering-row > igx-input-group > div.igx-input-group__bundle > div > input');
    const firstProdRowCic =  Selector('[data-rowindex="1"][aria-describedby="productList_cicCode"] > .w-100');

    // filter by CIc We have a few CICs of products that are not available:1161002DEE 1:1 Vegan Capsules; 1161002CEG 1:1 Drops or 1211000JA0 Alaska Softgels

    await t
        .click(cicFilter)
        .typeText(inputFilterTxt, '1161002DEE', { replace: true, paste: true })
        .wait(2000)
        .expect(await firstProdRowCic.withText('1161002DEE').exists).notOk('OOps the product DOES exists which means is available!');
    await t
        .takeElementScreenshot('body > app-root > div', 'products/7438_FilterByCIcProdNOTAvail.png' )
        .click(resetFilter)
        .click(closeFilter);
    // Repeat for other prodcut that si not avail
    await t
        .click(cicFilter)
        .typeText(inputFilterTxt, '1161002CEG', { replace: true, paste: true })
        .wait(2000)
        .expect(await firstProdRowCic.withText('1161002CEG').exists).notOk('OOps the produt DOES exists which means is available!');

    await t
        .takeElementScreenshot('body > app-root > div', 'products/7438_2FilterByCIcProdNOTAvail.png' )
        .click(resetFilter)
        .click(closeFilter);


});

// test('Verify if the user duplicates the windows tab, CRIS should log you out of the original tab. New tab remains signed in.', async () => {
//     await navbar.selectHome('HOME');
//     await t
//         .openWindow('https://cris-web-int.36eighttechnologies.com')
//         .resizeWindow(1024, 768)
//         .takeScreenshot('homepage/7186_NewWindowsSignedIn.png');

//     await t
//         .switchToPreviousWindow()
//         .wait(1000);

//     /**refresh*/

//     navbar.refresh;
//     await t.wait(2000);

//     const url = await t.eval(() => document.documentURI);

//     await t.expect(url).contains('https://login.microsoftonline.com/');

//     await t.takeScreenshot( 'homepage/7186_crisOldWindowSignedOut.png' );

// });
