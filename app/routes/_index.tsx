import type { MetaFunction } from "@remix-run/node";
import {
  Hello,
  Circles,
  Twitter,
  Linkedin,
  Mail,
  React,
  Nodejs,
  TypeScript,
  AWS,
  Docker,
  Kubernetes,
  Linux,
  Ansible,
  Jenkins,
  GoLang
} from "../Components/svgs";
import textGradientClass from "~/utils/textGradientClass";
import { ComponentType, useCallback, useId, useState } from "react";
import { GeneralButton } from "~/Components/Buttons";
import ContentListView from "~/Components/ContentListView";
import { useLoaderData } from "@remix-run/react";
import classNames from "~/utils/classNames";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import SectionSeperator from "~/Components/SectionSeperator";
import { certificates } from "~/utils/certificates.server";
import { workDetails } from "~/utils/work.server";
import { educationDetails } from "~/utils/education.server";

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

  return { blogContent, certificates, workDetails, educationDetails }
}

export default function Index() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
      <WorkAndEducationSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className={classNames(
      "flex",
      "miniscule:flex-col miniscule:gap-12",
      "xs:flex-col xs:gap-12",
      "sm:flex-col sm:gap-12",
      "md:flex-row md:gap-4",
      "lg:gap-20"
    )}
    >
      <MainText />
      <QuickAcces />
    </div>
  )
}

function MainText() {
  return (
    <div className="flex-1 bg-itembgcolor rounded-lg flex flex-col pb-6 max-h-[600px]">
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
  )
}

function QuickAcces() {
  const { blogContent } = useLoaderData<typeof loader>()

  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div className="flex-1 bg-itembgcolor rounded-lg max-h-[600px] overflow-y-scroll">
      <div className="flex justify-around p-4 px-6 border-b-[1px] border-black border-dashed sticky top-0 bg-itembgcolor">
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
  )
}

function SkillsSection() {
  const components = useCallback(() => [
    { component: React, label: "Reactjs" },
    { component: Nodejs, label: "Nodejs" },
    { component: TypeScript, label: "Typescript" },
    { component: AWS, label: "AWS" },
    { component: Docker, label: "Docker" },
    { component: Kubernetes, label: "Kubernetes" },
    { component: Linux, label: "Linux" },
    { component: Ansible, label: "Ansible" },
    { component: Jenkins, label: "Jenkins" },
    { component: GoLang, label: "Golang" }
  ].map(({ component, label }) => SkillCarousalSlide(component, label)), [])()

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionSeperator>Skills</SectionSeperator>
      <div>
        <Carousel
          slideSize={"100px"}
          align="start"
          slideGap="lg"
          controlsOffset="xs"
          dragFree
          containScroll="trimSnaps"
          controlSize={"32px"}
          classNames={{
            control: "bg-itembgcolor text-textcolormain",
          }}
        >
          {components}
        </Carousel>
      </div>
    </div >
  )
}

function SkillCarousalSlide(Component: ComponentType, skill: string) {
  const id = useId()

  return (
    <Carousel.Slide key={id} aria-label={skill}>
      <Component />
    </Carousel.Slide>
  )
}

function CertificatesSection() {
  const { certificates } = useLoaderData<typeof loader>()

  const certificateSlides = useCallback(() => certificates.map((cert) =>
    CertificateCarouselSlide(cert.cert, cert.label, cert.skills)
  ), [certificates])()

  return (
    <div className="flex flex-col gap-[30px]">
      <SectionSeperator>Certificates</SectionSeperator>
      <div className="bg-itembgcolor rounded-lg p-5">
        <Carousel
          slideSize={"300px"}
          withControls
          align="start"
          slideGap="lg"
          controlsOffset="xs"
          dragFree
          draggable
          withIndicators
          containScroll="trimSnaps"
          controlSize={"32px"}
          classNames={{
            control: "bg-itembgcolor text-textcolormain",
            indicator: "bg-primarycolor1",
          }}
        >
          {certificateSlides}
        </Carousel>
      </div>
    </div >
  )
}

function CertificateCarouselSlide(cert: string, label: string, skills: string[]) {
  const id = useId()

  return <CarouselSlide key={id}>
    <div className="flex flex-col gap-2 max-w-[300px]">
      <img src={cert} alt={label} className="w-[300px] h-[200px]" loading="lazy" />
      <div className="flex flex-col gap-6">
        <p className="font-leagueSpartan text-2xl text-topicheadingcolor font-medium">{label}</p>
        <ul className="list-disc list-inside font-leagueSpartan text-lg">
          {skills.map((sk) =>
            <li key={sk}>{sk}</li>
          )}
        </ul>
      </div>
    </div>
  </CarouselSlide>
}

function WorkAndEducationSection() {
  return <div className={classNames(
    "flex",
    "miniscule:flex-col miniscule:gap-12",
    "xs:flex-col xs:gap-12",
    "sm:flex-col sm:gap-12",
    "md:flex-row md:gap-4",
    "lg:gap-20"
  )}
  >
    <WorkSection />
    <EducationSection />
  </div>
}

function WorkSection() {
  const { workDetails } = useLoaderData<typeof loader>()

  const works = useCallback(() => workDetails.map((work) =>
    WorkDetails(
      work.title,
      work.date,
      work.image,
      work.details
    )
  ), [workDetails])()

  return <div className="flex flex-col flex-1 gap-[30px]">
    <SectionSeperator>
      Work/Open Source/BootCamps
    </SectionSeperator>
    <div className="bg-itembgcolor rounded-lg p-5">
      <div className="flex flex-col gap-7 h-[600px] overflow-y-scroll">
        {works}
      </div>
    </div>
  </div>
}

function WorkDetails(title: string, date: string, image: string | null, details: string[]) {
  const id = useId()

  return (
    <div className="flex flex-col gap-5" key={id}>
      <div className="flex justify-between items-baseline">
        <p className="font-leagueSpartan font-medium text-topicheadingcolor text-2xl flex-1">{title}</p>
        <p className="font-leagueSpartan">{date}</p>
      </div>
      <div className="flex justify-between gap-1">
        <ul className="list-disc list-inside font-leagueSpartan text-xl flex-1">
          {details.map((d, idx) =>
            <li key={idx}>{d}</li>
          )}
        </ul>
        {image && <img src={image} alt={title} className="h-[60px] w-[60px]" />}
      </div>
    </div>
  )
}

function EducationSection() {
  const { educationDetails } = useLoaderData<typeof loader>()

  const educations = useCallback(() => educationDetails.map((edu) =>
    Education(
      edu.title,
      edu.date,
      edu.logo,
      edu.details,
      edu.grade
    )
  ), [educationDetails])()

  return <div className="flex flex-col flex-1 gap-[30px]">
    <SectionSeperator>
      Formal Education
    </SectionSeperator>
    <div className="bg-itembgcolor rounded-lg p-5">
      <div className="flex flex-col gap-7 h-[600px] overflow-y-scroll">
        {educations}
      </div>
    </div>
  </div>
}

function Education(title: string, date: string, logo: string | null, details: string[], grade: string) {
  const id = useId()

  return (
    <div className="flex flex-col gap-5" key={id}>
      <div className="flex justify-between items-baseline">
        <p className="font-leagueSpartan font-medium text-topicheadingcolor text-2xl flex-1">{title}</p>
        <p>{date}</p>
      </div>
      <div className="flex justify-between gap-1">
        <ul className="list-disc list-inside font-leagueSpartan text-xl">
          {details.map((d, idx) =>
            <li key={idx}>{d}</li>
          )}
        </ul>
        {logo &&
          <div className="flex flex-col gap-2">
            <img src={logo} alt={title} className="h-[70px] w-[100px]" />
            <p className="ml-auto font-leagueSpartan text-sm">{grade}</p>
          </div>
        }
      </div>
    </div>
  )
}