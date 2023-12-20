import type { MetaFunction } from "@remix-run/node";
import { Hello, Circles, Twitter, Linkedin, Mail } from "../Components/svgs";
import textGradientClass from "~/utils/textGradientClass";
import { useState } from "react";
import { GeneralButton } from "~/Components/Buttons";
import ContentListView from "~/Components/ContentListView";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "PrakharFF13" },
    { name: "description", content: "Welcome to My Website" },
  ];
};

export async function loader() {
  const blogContent = [
    {
      title: "Understanding WebRTC through an example",
      desciption: "WebRTC is a peer to peer connection protocol which was developed to simplify peer to peer communication. With this creating video based application has become a lot easier, in this blog we will look at how one can create a video group chat example."
    },
    {
      title: "Understanding WebRTC through an example",
      desciption: "WebRTC is a peer to peer connection protocol which was developed to simplify peer to peer communication. With this creating video based application has become a lot easier, in this blog we will look at how one can create a video group chat example."
    },
    {
      title: "Understanding WebRTC through an example",
      desciption: "WebRTC is a peer to peer connection protocol which was developed to simplify peer to peer communication. With this creating video based application has become a lot easier, in this blog we will look at how one can create a video group chat example."
    }
  ]

  return { blogContent }
}

export default function Index() {
  const { blogContent } = useLoaderData<typeof loader>()

  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div className="flex gap-20">
      <div className="flex-1 bg-itembgcolor rounded-lg flex flex-col pb-6">
        <div className="flex flex-row-reverse p-4">
          <Circles />
        </div>
        <div className="p-9 pt-0 flex flex-col mb-11">
          <p><Hello /></p>
          <p className="font-leagueSpartan text-2xl font-normal py-4 pt-1">Hi, I am Prakhar</p>
          <p className="font-extrabold text-6xl mb-2 -ml-1">
            <span className={textGradientClass()}>Full-stack</span>
          </p>
          <p className="font-extrabold text-6xl mb-10 -ml-1">
            <span className={textGradientClass()}>Developer</span>
          </p>
          <p className="font-leagueSpartan text-base">I am from India and love working on backend systems. Checkout my work or read some of my blogs.</p>
        </div>
        <div className="flex gap-2 p-9 pt-0">
          <Twitter />
          <Linkedin />
          <Mail />
        </div>
      </div>
      <div className="flex-1 bg-itembgcolor rounded-lg">
        <div className="flex justify-around p-4 px-6 border-b-[1px] border-black border-dashed">
          <GeneralButton
            onClick={() => setActiveTab(1)}
            classes={`${activeTab === 1 ? "bg-navbaractive text-black" : "hover:bg-navbarhover bg-navbarnormal text-textcolormain "}`}
          >
            Blogs
          </GeneralButton>
          <GeneralButton
            onClick={() => setActiveTab(2)}
            classes={`${activeTab === 2 ? "bg-navbaractive text-black" : "hover:bg-navbarhover bg-navbarnormal text-textcolormain "}`}
          >
            Projects
          </GeneralButton>
        </div>
        <div className="flex flex-col px-[30px] py-4">
          {blogContent.map((blog, idx) =>
            <ContentListView
              key={idx}
              title={(idx + 1) + ". " + blog.title}
              description={blog.desciption}
            />
          )}
        </div>
      </div>
    </div >
  );
}
