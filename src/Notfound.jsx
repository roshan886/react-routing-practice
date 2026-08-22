import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
      <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-6xl font-bold mb-4">
            Page Not Found
          </h1>

          <p className="text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <Link
            to="*"
            className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Go Home
          </Link>
        </div>

        <div
          id="overlay"
          className="absolute inset-0   bg-black z-20 pointer-events-none"
        ></div>

      </div>
    </>
  )
}

export default Notfound