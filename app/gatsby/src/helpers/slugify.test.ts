import slugify from "./slugify"

describe("helpers/slugify", () => {
  it("should slugify a string", () => {
    expect(slugify("This is a String")).toEqual("this-is-a-string")
  })
})
