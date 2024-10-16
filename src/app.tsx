import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'

export default function App() {
  return (
    <Router
      root={(props: { children?: any }) => {
        return <Suspense>{props.children}</Suspense>
      }}
    >
      <FileRoutes />
    </Router>
  )
}
