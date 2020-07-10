import snapshotTests from "../../../utils/story-snapshot-tests"

jest.mock("../../templates/default")
jest.mock("../../components/seo")

import { stories } from "./using-typescript.stories"

describe("pages/using-typescript", () => {
  snapshotTests(stories)
})
