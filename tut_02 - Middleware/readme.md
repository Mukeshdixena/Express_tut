

# Middleware in Express

Middleware functions in Express are functions that execute during the lifecycle of a request to the server. They have access to the **request object**, **response object**, and a **next function** to pass control to subsequent middleware or route handlers.

## Key Concepts

1. **Middleware Types**:
   - **Application-level middleware**: Bound to the app instance using `app.use()` or `app.METHOD()`.
   - **Router-level middleware**: Bound to an instance of `express.Router()`.
   - **Error-handling middleware**: Defined with 4 parameters `(err, req, res, next)`.
   - **Built-in middleware**: e.g., `express.json()`, `express.static()`.
   - **Third-party middleware**: Installed via npm, e.g., `cors`, `body-parser`.

2. **Execution Flow**:
   - Middleware functions are executed in the order they are defined.
   - Call `next()` to pass control to the next middleware; otherwise, the request ends.

## Example


## How It Works
- Middleware logs request details before passing control to the respective route handler.
- The `next()` function ensures subsequent middleware or route handlers are executed.