interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface BoundActionCreators {
  createNode: (node: any) => void
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

export type GatsbyCreatePages = (fns: {
  graphql: any
  store: any
  cache: any
  actions: BoundActionCreators
  createNodeId: (node: any) => void
}) => void
