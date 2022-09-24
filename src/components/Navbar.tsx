import Icon from '../assets/icon.png'
import useAuthUser from "../hooks/auth/useAuthUser"
import { Menu, Transition, Tab } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import useLogout from "../hooks/auth/useLogout";

type Props = {
  user: {
    id: string
    username: string,
    email: string,
  }
}

export default () => {
  const {data} = useAuthUser()
  return (
    <nav aria-label="Global" className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center py-[2.125rem]">
        <a className="mr-auto flex-none text-slate-900" href="/">
          <img src={Icon} className="w-12 h-12" />
        </a>
        <div className="hidden lg:flex lg:items-center">
          <a href="/components">Components</a>
          <a className="ml-8" href="/templates">Templates</a>
          <div className="ml-2 hidden rounded-full bg-sky-500 px-1.5 py-0.5 text-xs text-white sm:block">New</div>
          <a className="ml-8" href="/documentation">Documentation</a>
        </div>
        <button type="button" className="-my-1 ml-8 flex h-8 w-8 items-center justify-center rounded-lg"><span
          className="sr-only">Search components</span>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-900 hover:fill-gray-900">
            <path
              d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
          </svg>
        </button>
        <button type="button" className="-my-1 ml-6 -mr-1 flex h-8 w-8 items-center justify-center lg:hidden"><span
          className="sr-only">Open navigation</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
            <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </button>
        <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
          <div className="relative">

              { data
                ?  <Menu>

                  <Menu.Button>
                    <button className="flex items-center font-semibold hover:text-gray-900" id="headlessui-menu-button-1" type="button" aria-haspopup="true" aria-expanded="false">
                  <span className="hidden items-center sm:flex">
                    Account
                    <svg aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3 h-3 w-3 stroke-slate-400">
                      <path d="M9.75 4.125 6 7.875l-3.75-3.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                      <span className="-my-1 flex h-8 w-8 items-center justify-center rounded-lg sm:hidden">
                    <svg aria-hidden="true" width="20" height="20" fill="none" className="text-slate-900">
                      <path d="M3.75 4.75h12.5M3.75 9.75h12.5M3.75 14.75h12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                    </button>
                  </Menu.Button>
                  <Profil />
                </Menu>
                : <a href={"/login"} className="font-semibold hover:text-gray-900">Se Connecter</a>
              }


          </div>
        </div>
      </div>
    </nav>
  )
}

const Profil = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { data } = useAuthUser()
  const { mutate: logoutUser } = useLogout()

  const onLogout = () => {
    logoutUser()
  }
  return (
    <>
      { data &&
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute rounded-md right-0 mt-2 origin-top-right z-50 bg-white w-90 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Items className={"flex flex-col divide-y gap-4 my-2"}>
                <div className={"px-2"}>
                  <p className="text-xs text-slate-500">Signed in as</p>
                  <p className="text-md text-slate-900 font-medium">{ data.email }</p>
                </div>
                <div>

                </div>
                <div className={"w-full py-1.5"}>
                  <button onClick={onLogout} className="text-left py-1.5 px-3.5 w-full hover:bg-slate-100">
                    Sign out
                  </button>
                </div>

            </Menu.Items>
          </div>
        </Transition>
      }
    </>


  )
}