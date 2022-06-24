import Link from "next/link"

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px mt-10 relative">
        <li>
          <Link href="#">
            <a className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              1
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
