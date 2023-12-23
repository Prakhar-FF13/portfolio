import { Form, NavLink } from "@remix-run/react";
import { ThemeSession } from "../../session";
import { Dark, Hamburger, Light } from "../svgs";
import classNames from "../../utils/classNames";
import { Menu } from "@mantine/core";

export default function Navbar({ theme = "light" }: ThemeSession) {
  return (
    <div className="flex justify-between align-middle mt-6 mb-10 rounded-lg py-7 px-9 bg-itembgcolor">
      <div className="hidden sm:flex gap-16 items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Home</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Blogs</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Projects</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "text-navbaractive font-bold" : "hover:text-navbaractive"}>Resume</NavLink>
      </div>
      <div className="sm:hidden inline-block relative h-6">
        <Menu position="bottom-start">
          <Menu.Target>
            <button aria-label="Navigation Dropdown"><Hamburger /></button>
          </Menu.Target>

          <Menu.Dropdown w={200} classNames={{
            dropdown: "bg-itembgcolor",
          }}>
            <Menu.Item>
              <NavLink to="/" className={({ isActive }) => classNames(
                "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                isActive ? "text-navbaractive font-bold" : "text-textcolormain hover:text-navbaractive"
              )}
              >
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/blogs" className={({ isActive }) => classNames(
                "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                isActive ? "text-navbaractive font-bold" : "text-textcolormain hover:text-navbaractive"
              )}
              >
                Blogs
              </NavLink>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/projects" className={({ isActive }) => classNames(
                "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                isActive ? "text-navbaractive font-bold" : "text-textcolormain hover:text-navbaractive"
              )}
              >
                Projects
              </NavLink>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/resume" className={({ isActive }) => classNames(
                "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                isActive ? "text-navbaractive font-bold" : "text-textcolormain hover:text-navbaractive"
              )}
              >
                Resume
              </NavLink>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      {
        /*
            Below form changes theme
            if current theme is light, send request for setting dark theme
            else send request for setting light theme
        */
      }
      <Form method="POST" action="/" className="flex items-center">
        <input type="text" name="theme" value={theme === "light" ? "dark" : "light"} hidden readOnly />
        <button aria-label="Theme Toggle" type="submit">
          {theme === "light" ? <Dark /> : <Light />}
        </button>
      </Form>
    </div>
  )
}