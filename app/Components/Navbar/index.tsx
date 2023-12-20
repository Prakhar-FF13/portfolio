import { Form, Link } from "@remix-run/react";
import { ThemeSession } from "../../session";
import { Menu } from "@headlessui/react";
import { Hamburger } from "../svgs";

export default function Navbar({ theme = "light" }: ThemeSession) {

  return (
    <div className="flex justify-between align-middle mt-6 mb-10 rounded-lg py-7 px-9 bg-itembgcolor">
      <div className="hidden sm:flex gap-16">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <Menu as="div" className="sm:hidden inline-block relative h-6">
        <Menu.Button className="h-6"><Hamburger /></Menu.Button>
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item >
              {() => (
                <Link to="/" className="group flex w-full items-center rounded-md px-2 py-2 text-sm">Home</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <Link to="/blogs" className="group flex w-full items-center rounded-md px-2 py-2 text-sm">Blogs</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <Link to="/projects" className="group flex w-full items-center rounded-md px-2 py-2 text-sm">Projects</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <Link to="/resume" className="group flex w-full items-center rounded-md px-2 py-2 text-sm">Resume</Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
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
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </Form>
    </div>
  )
}