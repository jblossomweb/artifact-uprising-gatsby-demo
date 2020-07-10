import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../templates/default")
jest.mock("../../components/seo")
jest.mock("../../components/images/GatsbyIcon")

import { stories } from "./page-3.stories"

describe("pages/page-3", () => {
  snapshotTests(stories)
})
