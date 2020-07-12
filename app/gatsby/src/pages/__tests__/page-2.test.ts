import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../layouts/default")
jest.mock("../../components/seo")

import { stories } from "./page-2.stories"

describe("pages/page-2", () => {
  snapshotTests(stories)
})
