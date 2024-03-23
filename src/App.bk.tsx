import React, { StrictMode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import { getRouter } from '@/routes/-base'

import './index.css'

const rootElement = document.getElementById('app')

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        retry: 3,
      },
    },
  })

  const Root = (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={getRouter(queryClient)} />
      </QueryClientProvider>
    </StrictMode>
  )

  root.render(Root)
}
