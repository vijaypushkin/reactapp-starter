import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    copyPublicDir: true,
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    TanStackRouterVite({
      generatedRouteTree: 'src/routes/tree.gen.ts',
      routeFileIgnorePattern: '.((css|const|gen|types).ts)',
    }),
  ],
  server: {
    port: 3000,
  },
})
