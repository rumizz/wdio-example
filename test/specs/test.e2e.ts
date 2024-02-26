import { expect } from '@wdio/globals'
import IndexPage from '../pageobjects/index.page.js'

describe('Order application', () => {
    it('should load', async () => {
        await IndexPage.open()
        await expect(IndexPage.title).toBePresent()
    })
})

