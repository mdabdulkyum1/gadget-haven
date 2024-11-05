import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple to-purple-700 text-white"
    >
      <div className="relative text-center p-8 rounded-lg shadow-lg bg-opacity-80 bg-white text-gray-800 max-w-md">
        <h1 className="text-6xl font-bold animate-pulse mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="italic text-gray-600">
          {error.statusText || error.message}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-500 opacity-30 animate-pulse rounded-lg"></div>

      <Link to={"/"} className="relative z-50 mt-8 px-6 py-3 bg-purple text-white font-semibold rounded-lg shadow transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
}
