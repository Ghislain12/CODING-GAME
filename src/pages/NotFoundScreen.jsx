import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-[#2994D1]">404</h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Something&apos;s missing.
            </p>
            <p className="mb-4 font-light text-center text-gray-500 md:text-lg dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
            <Link to={'/'} href="#" className="inline-flex text-white bg-[#2994D1] hover:bg-[#328bbe] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</Link>
        </div>
    )
}

export default NotFound;