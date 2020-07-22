import { AppState } from "../types"

const initialState: AppState["cart"] = {
  items: [],
  count: 0,
  total: "$0.00",
  total_numeric: 0,
}

export default initialState
