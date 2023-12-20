import { Form, NavLink } from "@remix-run/react";
import { ThemeSession } from "../../session";
import { Menu, Transition } from "@headlessui/react";
import { Dark, Hamburger, Light } from "../svgs";
import { Fragment } from "react";
import classNames from "../../utils/classNames";

export default function Navbar({ theme = "light" }: ThemeSession) {
  return (
    <div className="flex justify-between align-middle mt-6 mb-10 rounded-lg py-7 px-9 bg-itembgcolor">
      <div className="hidden sm:flex gap-16">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Home</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Blogs</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Projects</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Resume</NavLink>
      </div>
      <Menu as="div" className="sm:hidden inline-block relative h-6">
        <Menu.Button className="h-6"><Hamburger /></Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-itembgcolor shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <NavLink to="/" className={({ isActive }) => classNames(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"
                )}
                >
                  Home
                </NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink to="/blogs" className={({ isActive }) => classNames(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"
                )}
                >
                  Blogs
                </NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink to="/projects" className={({ isActive }) => classNames(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"
                )}
                >
                  Projects
                </NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink to="/resume" className={({ isActive }) => classNames(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"
                )}
                >
                  Resume
                </NavLink>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {
        /*
            Below form changes theme
            if current theme is light, send request for setting dark theme
            else send request for setting light theme
        */
      }
      <Form method="POST" action="/">
        <input type="text" name="theme" value={theme === "light" ? "dark" : "light"} hidden readOnly />
        <button type="submit">
          {theme === "light" ? <Dark /> : <Light />}
        </button>
      </Form>
    </div>
  )
}