const { Selector, ClientFunction, t } = require('testcafe');
const { expect } = require('chai');

fixture`E2E - CANSAFE HOME PAGE`
    .page('https://crisrec-web.azurewebsites.net')
    .before(async () => {
        console.log('Test begins');
    })
    .beforeEach(async () => {
        await t.maximizeWindow();
        // await t.useRole(userOne);
    })
    .afterEach(async () => {
        await t.maximizeWindow();
    })
    .after(async () => {
        console.log('Test is Done!');
    });

test('Verify Cann Safe home page elements', async () => {
    const getLocation = ClientFunction(() => document.location.href);
    const title = await Selector(
        'body > header > nav > div > a > img'
    ).getAttribute('alt');
    const logo = await Selector('body > header > nav > div > a > img');
    const welcome = await Selector('#navbarToggler > ul > li:nth-child(1) > a')
        .innerText;
    const drugIntCheck = await Selector(
        '#navbarToggler > ul > li:nth-child(2) > a'
    ).innerText;
    const learn = await Selector(
        '#navbarToggler > ul > li:nth-child(3) > a > span'
    ).innerText;

    await t
        .expect(getLocation())
        .contains('https://crisrec-web.azurewebsites.net/')
        .expect(logo.exists)
        .ok('No logo here!!!');

    expect(title).to.contain('Logo');
    expect(welcome).to.contain('Welcome');
    expect(drugIntCheck).to.contain('Drug Interaction Check');
    expect(learn).to.contain('Learn');
});
