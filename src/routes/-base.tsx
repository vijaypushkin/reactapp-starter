import React from 'react'

import { QueryClient } from '@tanstack/react-query'
import { ErrorComponent, createRouter } from '@tanstack/react-router'

import { routeTree } from '@/routes/tree.gen'

const getRouter = (queryClient: QueryClient) =>
  createRouter({
    routeTree,
    defaultPendingComponent: () => (
      <div className="fixed inset-0 bg-neutral-800/50">Loading</div>
    ),
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
    context: {
      queryClient,
    },
    defaultPreloadStaleTime: 1000 * 60 * 5,
  })

export type AppRouter = ReturnType<typeof getRouter>
export type AppRouterPath = keyof AppRouter['routesById']

declare module '@tanstack/react-router' {
  export interface Register {
    router: AppRouter
  }
}

export { getRouter }
