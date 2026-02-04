# CORS (Cross-Origin Resource Sharing)

## What is CORS?

**CORS** is a **browser security rule**.

It decides:
> “Is this website allowed to talk to that server?”

---

## Why CORS exists

Browsers block requests by default when:
- frontend and backend are on **different origins**

Example:
- Frontend → `http://localhost:5173`
- Backend → `http://localhost:4000`

Different port = different origin ❌  
Browser blocks the response.

This rule is called **Same-Origin Policy**.

---

## What `cors()` does

```js
app.use(cors())
```



---
Frontend (5173)
     |
     |  request
     v
Backend (4000)
     |
     |  response + CORS headers
     v
Browser

## Diagrams & visuals (reference links)

You can keep these as reference links in your docs:

- Same Origin Policy diagram  
  https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

- CORS overview  
  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

- CORS request flow diagram  
  https://www.baeldung.com/cs/cors-preflight-requests

---


