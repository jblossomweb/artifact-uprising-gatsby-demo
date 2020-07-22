import React from "react"
import { AxiosInstance } from "axios"
import "../../../utils/enzyme-adapter"
import { mount, ReactWrapper } from "enzyme"
import * as Gatsby from "gatsby"
import { mockCartService } from "../../services/cart"
import mockQuery from "../../../__mocks__/query/default-layout-query.json"
import MockRedux from "../../../__mocks__/storybook-redux"

import Index from "./index"
import Layout from "./layout/Layout"

const mockAxios: AxiosInstance = jest.mock("axios")

describe("templates/default", () => {
  const { data } = mockQuery
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
  let children: string
  let wrapper: ReactWrapper

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data)
    children = "Sample Children"
    wrapper = mount(
      <MockRedux>
        <Index inject={{ cartService: mockCartService(mockAxios) }}>
          {children}
        </Index>
      </MockRedux>
    )
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
