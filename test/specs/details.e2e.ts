import DetailsPage from "../pageobjects/details.page.js"

describe("Order details", () => {
  beforeEach(async () => {
    await DetailsPage.open()
  })
  it('loads', async () => {
    const title = await $("#__title0-inner")
    await expect(title).toBePresent()
  })
  it("can be resized by dragging", async () => {

  })
})

