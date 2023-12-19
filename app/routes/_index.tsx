import type { MetaFunction } from "@remix-run/node";
import { Hello, Circles, Twitter, Linkedin, Mail } from "../Components/svgs";

export const meta: MetaFunction = () => {
  return [
    { title: "PrakharFF13" },
    { name: "description", content: "Welcome to My Website" },
  ];
};

export default function Index() {
  return (
    <div className="flex gap-20">
      <div className="flex-1 bg-itembgcolor rounded-lg flex flex-col pb-6">
        <div className="flex flex-row-reverse p-1">
          <Circles />
        </div>
        <div className="p-9 pt-0 flex flex-col mb-11">
          <p><Hello /></p>
          <p className="font-leagueSpartan text-2xl font-normal py-4 pt-1">Hi, I am Prakhar</p>
          <p className="font-extrabold text-6xl mb-2 -ml-1">
            <span className="bg-clip-text bg-gradient-to-r from-gradientcolor1 to-gradientcolor2 text-transparent">Full-stack</span>
          </p>
          <p className="font-extrabold text-6xl mb-10 -ml-1">
            <span className="bg-clip-text bg-gradient-to-r from-gradientcolor1 to-gradientcolor2 text-transparent">Developer</span>
          </p>
          <p className="font-leagueSpartan text-base">I am from India and love working on backend systems. Checkout my work or read some of my blogs.</p>
        </div>
        <div className="flex gap-2 p-9 pt-0">
          <Twitter />
          <Linkedin />
          <Mail />
        </div>
      </div>
      <div className="flex-1 bg-itembgcolor rounded-lg"></div>
    </div >
  );
}
