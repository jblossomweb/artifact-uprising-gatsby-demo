import { Helmet } from "react-helmet"
import storyMounter from "../../../utils/story-mounter"
import { renderTree } from "../../../utils/story-snapshot-tests"
import { stories } from "./SEO.stories"
import SEO from "./SEO"

describe("SEO", () => {
  const mountedStories = storyMounter(stories, SEO, component => ({
    helmet: component.find(Helmet),
  }))

  Object.keys(mountedStories).forEach(key => {
    describe(key, () => {
      const story = stories[key]
      const mountedStory = mountedStories[key]
      it("mounts the SEO component", () => {
        expect(mountedStory.component.length).toBe(1)
      })

      it("mounts the Helmet component", () => {
        const { helmet } = mountedStory.elements
        expect(helmet.length).toBe(1)
      })

      it("passes props.lang to Helmet htmlAttributes", () => {
        const { helmet } = mountedStory.elements
        const { lang } = mountedStory.props
        expect(helmet.prop("htmlAttributes")).toEqual({ lang })
      })

      it("passes props.title to Helmet title", () => {
        const { helmet } = mountedStory.elements
        const { title } = mountedStory.props
        expect(helmet.prop("title")).toEqual(title)
      })

      it("generates and appends expected data to Helmet meta", () => {
        const { helmet } = mountedStory.elements
        const { description, title, author, meta } = mountedStory.props
        const expected = [
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ].concat(meta as any[])
        expect(helmet.prop("meta")).toEqual(expected)
      })

      it("matches empty DOM snapshot", () => {
        const tree = renderTree(story)
        expect(tree).toMatchSnapshot()
      })
    })
  })
})
