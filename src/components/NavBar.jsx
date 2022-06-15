import { Dialog, Transition, Menu } from "@headlessui/react"
import { Fragment, useState } from "react"
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XIcon,
  LogoutIcon,
} from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import Text from "./Text"

const NavBar = (props) => {
  const [open, setOpen] = useState(false)
  const { islogged, logout, id } = props

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
            <div className="flex flex-row items-center hover:scale-105">
              <Link href="/">
                <a>
                  <Image src="/logo.png" width={65} height={65} />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Text variant="card_title" size="xl">
                    KINGDHOME
                  </Text>
                </a>
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              {islogged ? (
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
              ) : (
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                  <Menu
                    as="div"
                    className="z-40 relative inline-block text-left "
                  >
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <UserCircleIcon className="flex-shrink-0 h-6 w-6 text-zinc-200  hover:text-zinc-300" />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      bg-orange-500
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={{
                                  pathname: `./detailsProfil/${id}`,
                                }}
                              >
                                <a>
                                  <button
                                    className={`${
                                      active
                                        ? "bg-orange-500 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {active ? (
                                      <EditActiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <EditInactiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                    Edit my profil
                                  </button>
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={logout}
                                className={`${
                                  active
                                    ? "bg-orange-500 text-white"
                                    : "text-red-400"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <LogoutIcon
                                    className="mr-2 h-5 w-5 text-zinc-100"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <LogoutIcon
                                    className="mr-2 h-5 w-5 text-red-400"
                                    aria-hidden="true"
                                  />
                                )}
                                Log Out
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
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
                      <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-zinc-200 hover:text-gray-500" />
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

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

export default NavBar
