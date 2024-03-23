import React, { Suspense } from 'react'

import { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

const TanStackRouterDevtools =
  import.meta.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

const ReactQueryDevtools =
  import.meta.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/react-query-devtools').then((res) => ({
          default: res.ReactQueryDevtools,
        })),
      )

export interface AppRouterContext {
  queryClient: QueryClient
}

const Route = createRootRouteWithContext<AppRouterContext>()({
  component: () => {
    return (
      <>
        <div className="scroll-hidden">
          <Outlet />

          <Suspense fallback={null}>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </Suspense>
        </div>
      </>
    )
  },
})

export { Route }
