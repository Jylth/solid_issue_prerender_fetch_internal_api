The bug appears when running a build which has prerendering enabled.

The issue is that the `fetch` from the injected h3/nitro event is looping endlessly.
This is used to allow fetching internal api's.

[https://nitro.unjs.io/guide/fetch#in-server-fetch](https://nitro.unjs.io/guide/fetch#in-server-fetch)

In a more complex app, logging the incoming request in a middleware shows that the pathname is missing. 

This bug seemed to have been introduced in @solidjs/start 1.0.7.
Downgrading to 1.0.6 fixes the issue.
