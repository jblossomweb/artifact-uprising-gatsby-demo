import React from "react"
import "../../../utils/enzyme-adapter"
import { mount, ReactWrapper } from "enzyme"
import * as Gatsby from "gatsby"
import siteTitleQuery from "../../../__mocks__/query/site-title-query.json"

import Index from "./index"
import Layout from "./layout/Layout"

describe("templates/default", () => {
  const { data } = siteTitleQuery
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
  let children: string
  let wrapper: ReactWrapper

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data)
    children = "Sample Children"
    wrapper = mount(<Index>{children}</Index>)
  })

  it("mounts a Layout component", () => {
    const layout = wrapper.find(Layout)
    expect(layout.length).toBe(1)
  })

  it("passes title from data.site.siteMetadata", () => {
    const layout = wrapper.find(Layout)
    expect(layout.prop("title")).toEqual(data.site.siteMetadata.title)
  })

  it("passes children", () => {
    const layout = wrapper.find(Layout)
    expect(layout.prop("children")).toEqual(children)
  })
})
