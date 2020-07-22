import React from "react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

export const mockReduxStore = configureStore([])

export const MockReduxProvider: React.FC = ({ children }) => (
  <Provider store={mockReduxStore()}>{children}</Provider>
)

export default MockReduxProvider
