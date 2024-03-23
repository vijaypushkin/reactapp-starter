import React, { Suspense } from 'react'

import { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

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
        <div className="flex flex-col h-dvh">
          <Header />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>

        <Suspense fallback={null}>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </Suspense>
      </>
    )
  },
})

export { Route }
