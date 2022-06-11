import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import Text from "./Text"

const NavBar = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  Profil
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <Link
                      href="/login"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      <a>Sign in</a>
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="/register"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      <a>Create account</a>
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Mobile menu */}

      <header className="relative">
        <nav aria-label="Top" className=" mx-auto px-2 sm:px-3 lg:px-4">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="flex flex-row">
              <Link href="/">
                <a>
                  <Image src="/logo.png" width={65} height={65} />
                </a>
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link href="/login">
                  <a>
                    <Text variant="nav_bar_text" size="lg">
                      Sign in
                    </Text>
                  </a>
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link href="/register">
                  <a>
                    <Text variant="nav_bar_text" size="lg">
                      Create account
                    </Text>
                  </a>
                </Link>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <Text variant="nav_bar_text" size="lg">
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </Text>
              </div>

              {/* Cart */}
              <div className="ml-4 lg:ml-6 flex flex-row">
                <Link href="#">
                  <a>
                    <Text variant="nav_bar_text" size="lg">
                      <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500" />
                    </Text>
                  </a>
                </Link>
                <Text variant="nav_bar_text" size="lg">
                  0
                </Text>
                <span className="sr-only">items in cart, view bag</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
