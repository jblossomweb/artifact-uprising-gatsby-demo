import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../layouts/default")
jest.mock("../../components/seo")

import { stories } from "./using-typescript.stories"

describe("pages/using-typescript", () => {
  snapshotTests(stories)
})
