import React from "react"
import "../../../utils/enzyme-adapter"
import { mount, ReactWrapper } from "enzyme"
import * as Gatsby from "gatsby"
import seoQuery from "../../../__mocks__/query/seo-query.json"

import Index from "./index"
import SEO from "./SEO"

describe("SEO index", () => {
  const { data } = seoQuery
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
  let title: string
  let wrapper: ReactWrapper

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data)
    title = "Sample Title"
    wrapper = mount(<Index title={title} />)
  })

  it("mounts the SEO component", () => {
    const seo = wrapper.find(SEO)
    expect(seo.length).toBe(1)
  })

  it("passes title from props.title and data.site.siteMetadata", () => {
    const seo = wrapper.find(SEO)
    const { site } = data
    expect(seo.prop("title")).toEqual(`${title} ${site.siteMetadata.title}`)
  })

  it("passes description from data.site.siteMetadata when not set", () => {
    const seo = wrapper.find(SEO)
    const { site } = data
    expect(seo.prop("description")).toEqual(site.siteMetadata.description)
  })

  it("passes description from props.description when set", () => {
    const description: string = "Sample Description"
    wrapper = mount(<Index title={title} description={description} />)
    const seo = wrapper.find(SEO)
    expect(seo.prop("description")).toEqual(description)
  })

  it("passes author from data.site.siteMetadata when not set", () => {
    const seo = wrapper.find(SEO)
    const { site } = data
    expect(seo.prop("author")).toEqual(site.siteMetadata.author)
  })

  it("passes author from props.author when set", () => {
    const author: string = "Sample Author"
    wrapper = mount(<Index title={title} author={author} />)
    const seo = wrapper.find(SEO)
    expect(seo.prop("author")).toEqual(author)
  })
})
