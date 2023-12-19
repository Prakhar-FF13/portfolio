import { Form } from "@remix-run/react";
import { ThemeSession } from "../../session";

export default function Navbar({ theme = "light" }: ThemeSession) {

  return (
    <div className="flex justify-between align-middle mt-4 rounded-lg py-7 px-9 bg-itembgcolor">
      <div className="flex gap-16">
        <button>Home</button>
        <button>Blogs</button>
        <button>Projects</button>
        <button>Resume</button>
      </div>
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