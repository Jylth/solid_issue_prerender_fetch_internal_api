import type { APIEvent } from '@solidjs/start/server'

export const GET = async (event: APIEvent) => {
  return new Response(
    JSON.stringify({
      hello: 'world',
      id: 1,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
