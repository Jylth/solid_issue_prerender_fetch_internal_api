import { cache } from '@solidjs/router'
import { createResource } from 'solid-js'
import { getRequestEvent, isServer } from 'solid-js/web'
import '../app.css'

const fetchData = cache(async () => {
  try {
    const req = getRequestEvent()

    const isBuildBug = !import.meta.env.DEV && isServer
    const _fetch = isBuildBug ? (req!.nativeEvent as any).$fetch : fetch
    const url = new URL('http://localhost:3000/api')
    console.log('fetching...', { isBuildBug, url })
    const result = await _fetch(isBuildBug ? url.pathname : url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await result.json()
    return data
  } catch (e) {
    console.error('fetch error...', e)
    return {}
  }
}, 'fetchData')

export default function Index() {
  const [data] = createResource(() => fetchData(), {
    deferStream: true,
  })

  return (
    <main>
      <h1>Hello world!</h1>
      <p>{JSON.stringify(data() || {}, null, 2)}</p>
    </main>
  )
}
