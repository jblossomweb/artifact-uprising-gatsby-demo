import React from "react"
import * as Gatsby from "gatsby"
import "../../../../utils/enzyme-adapter"
import { shallow, ShallowWrapper } from "enzyme"
import snapshotTests from "../../../../utils/story-snapshot-tests"
import MockImageGatsbyIconQuery from "../../../../__mocks__/query/image-gatsby-icon.query.json"
import GatsbyIconWithQuery, { GatsbyIcon } from "../GatsbyIcon"
import { stories } from "./GatsbyIcon.stories"

describe("components/images/GatsbyIcon", () => {
  describe("story snapshots", () => {
    snapshotTests(stories)
  })

  describe("with query", () => {
    const { data } = MockImageGatsbyIconQuery
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    let wrapper: ShallowWrapper

    beforeEach(() => {
      useStaticQuery.mockImplementation(() => data)
      wrapper = shallow(<GatsbyIconWithQuery />)
    })

    it("mounts the GatsbyIcon component", () => {
      const component = wrapper.find(GatsbyIcon)
      expect(component.length).toBe(1)
    })

    it("passes fluid from data.placeholderImage.childImageSharp.fluid", () => {
      const component = wrapper.find(GatsbyIcon)
      expect(component.prop("fluid")).toEqual(
        data.placeholderImage.childImageSharp.fluid
      )
    })
  })
})
