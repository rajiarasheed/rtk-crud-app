import React from 'react'

function NotFount() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 min-vh-100 py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 fw-semibold">Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you're looking for does not exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary px-4 py-2">
        Back to Home
      </a>
    </div>
  )
}

export default NotFount