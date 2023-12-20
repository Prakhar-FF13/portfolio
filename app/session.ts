import { createCookieSessionStorage } from "@remix-run/node";

export type ThemeSession = {
  theme: "light" | "dark"
}

export const themeCookieSession = createCookieSessionStorage<ThemeSession>({
  cookie: {
    name: "theme",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    maxAge: 34560000,
    secure: process.env.NODE_ENV === "production",
  },
})