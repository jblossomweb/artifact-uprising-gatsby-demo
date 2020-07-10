import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../templates/default")
jest.mock("../../components/seo")
jest.mock("../../components/images/GatsbyAstronaut")

import { stories } from "./index.stories"

describe("pages/index", () => {
  snapshotTests(stories)
})
