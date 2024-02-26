import { browser, expect } from '@wdio/globals';
import IndexPage from '../pageobjects/index.page.js';

describe('Order application', () => {

    beforeEach(async () => {
        await IndexPage.open()
    })
    it('load', async () => {
        await expect(IndexPage.title).toBePresent()
    })
    it("list orders", async () => {
        await browser.waitUntil(async () => {
            const listItems = await IndexPage.items();
            return listItems.length > 5;
        }, {
            timeout: 5000,
            timeoutMsg: 'Orders did not load within 5 seconds'
        });
        const listItems = await IndexPage.items();
        await expect(listItems).toBeElementsArrayOfSize({ gte: 3 })
    })
    describe("Search bar", () => {
        it("focus and typing", async () => {
            await IndexPage.searchField.waitForEnabled()
            await IndexPage.searchField.click()
            await expect(IndexPage.searchField).toBeFocused()
            await browser.keys("test")
            await expect(IndexPage.searchField).toHaveValue("test")
        })
        it("run the search by search button", async () => {
            await IndexPage.searchField.waitForEnabled()
            await IndexPage.searchField.setValue("asdasdasd")
            await IndexPage.searchSubmit.click()
            await expect(IndexPage.listText).toHaveText("No matching order found")
        })
        it("run the search by enter", async () => {
            await IndexPage.searchField.waitForEnabled()
            await IndexPage.searchField.setValue("asdasdasd")
            await IndexPage.searchField.click()
            await browser.keys(['Enter']);
            await browser.pause(1000)
            await expect(IndexPage.listText).toHaveText("No matching order found")
        })
        it("clear by reset button", async () => {
            await IndexPage.searchField.waitForEnabled()
            await IndexPage.searchField.setValue("test")
            const button = await $("#container-orderbrowser---master--searchField-reset")
            await button.waitForClickable();
            await button.click()
            await expect(IndexPage.searchField).toHaveValue("")
        })
    })
})

