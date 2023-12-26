import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/carousel/styles.css';

import { cssBundleHref } from "@remix-run/css-bundle";
import { ActionFunctionArgs, json, redirect, type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesheet from "./styles/tailwind.css";
import MaxWidthWrapper from "./Components/MaxWidthWrapper";
import Navbar from "./Components/Navbar";
import { themeCookieSession } from "./session";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import Footer from './Components/Footer';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await themeCookieSession.getSession(request.headers.get("cookie"))

  if (session.has("theme")) {
    const theme = session.get("theme") ?? "light"
    return json({ theme }, {
      headers: {
        'Set-Cookie': await themeCookieSession.commitSession(session)
      }
    })
  } else {
    session.set("theme", "light")
    return json({ theme: "light" }, {
      headers: {
        'Set-Cookie': await themeCookieSession.commitSession(session)
      }
    })
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await themeCookieSession.getSession(request.headers.get("cookie"))
  const formData = await request.formData()

  const theme = formData.get("theme")

  // only possible theme types are "light" and "dark"
  if (theme === "dark" || theme === "light")
    session.set("theme", theme)
  else // somehow something different is received set to light only
    session.set("theme", "light")

  return redirect(request.headers.get("referer") ?? "/", {
    headers: {
      'Set-Cookie': await themeCookieSession.commitSession(session)
    }
  })
}

const themeMantine = createTheme({
  /** Put your mantine theme override here */
});

export default function App() {
  const data = useLoaderData<typeof loader>()
  const theme = data.theme === "dark" ? "dark" : "light";

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body className="bg-backgroundcolor font-inter text-textcolormain">
        <MantineProvider theme={themeMantine}>
          <MaxWidthWrapper>
            <Navbar theme={theme} />
            <Outlet />
            <Footer />
          </MaxWidthWrapper>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}
