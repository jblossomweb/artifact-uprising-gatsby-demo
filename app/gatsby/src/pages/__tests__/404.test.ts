import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../layouts/default")
jest.mock("../../components/seo")

import { stories } from "./404.stories"

describe("pages/404", () => {
  snapshotTests(stories)
})
