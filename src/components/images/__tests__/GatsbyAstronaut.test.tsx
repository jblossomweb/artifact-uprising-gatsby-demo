import React from "react"
import * as Gatsby from "gatsby"
import "../../../../utils/enzyme-adapter"
import { shallow, ShallowWrapper } from "enzyme"
import snapshotTests from "../../../../utils/story-snapshot-tests"
import MockImageGatsbyIconQuery from "../../../../__mocks__/query/image-gatsby-icon.query.json"
import GatsbyAstronautWithQuery, { GatsbyAstronaut } from "../GatsbyAstronaut"
import { stories } from "./GatsbyAstronaut.stories"

describe("components/images/GatsbyAstronaut", () => {
  describe("pure snapshots", () => {
    snapshotTests(stories)
  })

  describe("with query", () => {
    const { data } = MockImageGatsbyIconQuery
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    let wrapper: ShallowWrapper

    beforeEach(() => {
      useStaticQuery.mockImplementation(() => data)
      wrapper = shallow(<GatsbyAstronautWithQuery />)
    })

    it("mounts the GatsbyAstronaut component", () => {
      const component = wrapper.find(GatsbyAstronaut)
      expect(component.length).toBe(1)
    })

    it("passes fluid from data.placeholderImage.childImageSharp.fluid", () => {
      const component = wrapper.find(GatsbyAstronaut)
      expect(component.prop("fluid")).toEqual(
        data.placeholderImage.childImageSharp.fluid
      )
    })
  })
})
