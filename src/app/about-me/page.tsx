import Image from "next/image";

import ExperienceCard from "@/src/components/ui/card/ExperienceCard";
import Footer from "@/src/components/organism/Footer";

import ExperienceList from "@src/lib/ExperienceList.json";
import ProjectList from "@src/lib/ProjectList.json";
import ProjectCard from "@/src/components/ui/card/ProjectCard";
import CalloutMD from "../../features/about-me/components/callout";

// export default function AboutMe() {
//   return (
//     <>
//       {/* -- Welcome Text */}
//       {/* <WelcomeText /> */}
//       <div classNameName="container mb-6">
//         {/* WELCOME TEXT */}
//         <div classNameName="w-69 m-auto mb-7 mt-9 flex flex-col items-center justify-center space-y-4">
//           <h1 classNameName="text-2xl font-bold">SOFTWARE ENGINEER</h1>

//           <div classNameName="w-69 items-center text-center text-gray-500">
//             <p classNameName="text-center text-xs font-normal">
//               Eager to learn new things, active, and delighted to meet with new
//               people
//             </p>
//           </div>
//         </div>

//         {/* TECH STACK */}
//         <p classNameName="m-auto mb-6 text-center text-xs text-gray-500">
//           Tech Stack
//         </p>

//         {/* TECHNOLOGY ITEM */}
//         <div classNameName="grid grid-cols-5 items-center justify-items-center gap-2 gap-y-4">
//           <Image
//             src={"/icons/001-html-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-7"
//           />
//           <Image
//             src={"/icons/002-css-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-7"
//           />
//           <Image
//             src={"/icons/003-typescript-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-6"
//           />
//           <Image
//             src={"/icons/004-react-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-7"
//           />
//           <Image
//             src={"/icons/005-nextjs-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-8"
//           />
//           <Image
//             src={"/icons/006-nestjs-logo.svg"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-7"
//           />
//           <Image
//             src={"/icons/007-mongodb-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-7"
//           />
//           <Image
//             src={"/icons/008-postgress-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-9"
//           />
//           <Image
//             src={"/icons/009-rest-api-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-10"
//           />
//           <Image
//             src={"/icons/010-python-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-8"
//           />
//           <Image
//             src={"/icons/011-docker-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-10"
//           />
//           <Image
//             src={"/icons/012-go-logo.png"}
//             alt="HTML"
//             width={100}
//             height={100}
//             classNameName="w-10"
//           />
//         </div>
//       </div>

//       {/* -- Project */}
//       <div classNameName="container mb-6">
//         <h1 classNameName="mb-4 text-center text-base font-bold">Projects</h1>

//         <div classNameName="flex flex-row flex-wrap gap-4">
//           {ProjectList.map((data: any, index: any) => {
//             return (
//               <ProjectCard
//                 key={index}
//                 image={data.image}
//                 title={data.title}
//                 desc={data.desc}
//                 website={`${data?.website}`}
//                 sourceCode={data?.sourceCode}
//               />
//             );
//           })}
//         </div>
//       </div>

//       {/* -- Experience */}
//       <div classNameName="container mb-14 pt-8">
//         <h1 classNameName="mb-4 text-center text-base font-bold">Experience</h1>

//         {ExperienceList.map((data, index) => {
//           return (
//             <ExperienceCard
//               key={index}
//               title={data.title}
//               place={data.location}
//               date={data.date}
//               details={data.details}
//             />
//           );
//         })}
//       </div>

//       <Footer />
//     </>
//   );
// }

export default function AboutMe() {
  return (
    <>
      <main className="space-y-12 px-6 pt-8">
        <section className="flex flex-col items-center space-y-6 text-center">
          {/* <div className="border-outline relative h-40 w-40 rounded-full border p-1">
            <img
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
              data-alt="Close-up portrait of a professional man in a minimalist studio setting with dramatic monochrome lighting and a neutral grey background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2LN_-3OSbPNN_ECTqgjiKSIT9Pf94wY4p2VYDbN0CmoZtiuJc2kAMpW0O6odeEalto8wvihOEj2NdikLfZ7EcgrBmVRTMnwrSly7THmrW5TX32DAAXPR0NN9-01fdhZw5rEwcv-NmO3txRb-OxSGDDfZ4vPf9gxR87IBt2BmrDPCkJk6dUJpl7TOMQ8bX_eNb706VD_kLhmhZxO3QRzEcFCCAJGflGEIPl1SATtDLYcZ1u_xc_3czSsWVe8pNe2hM0H4aMHSCSg"
            />
          </div> */}
          <div className="space-y-1">
            <h1 className="text-on-surface text-4xl font-extrabold uppercase tracking-tighter">
              Software Engineer
            </h1>
          </div>
        </section>
        <CalloutMD
          header="Biography"
          paragraph="Eager to learn new things, active, and delighted to meet new
                     people and opportunities"
        />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
              Architecture &amp; Tools
            </h2>
            <div className="bg-outline-variant ml-4 h-px grow"></div>
          </div>
          <div className="bg-outline grid grid-cols-2 gap-px bg-gray-600">
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">01</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                html
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">02</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                css
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">03</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                typescript
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">04</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                react
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">05</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                nextjs
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">06</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                nestjs
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">07</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                mongodb
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-4">
              <span className="text-outline text-[10px] font-bold">08</span>
              <p className="text-lg font-black uppercase tracking-tighter">
                postgresql
              </p>
            </div>
          </div>
          <div className="bg-outline border-outline space-y-px border">
            <div className="bg-surface-container-lowest flex items-center justify-between p-4">
              <p className="text-sm font-bold uppercase tracking-widest">
                restapi
              </p>
              <span className="material-symbols-outlined text-primary">
                api
              </span>
            </div>
            <div className="bg-surface-container-lowest flex items-center justify-between p-4">
              <p className="text-sm font-bold uppercase tracking-widest">
                microservice
              </p>
              <span className="material-symbols-outlined text-primary">
                hub
              </span>
            </div>
            <div className="bg-surface-container-lowest flex items-center justify-between p-4">
              <p className="text-sm font-bold uppercase tracking-widest">
                python
              </p>
              <span className="material-symbols-outlined text-primary">
                code
              </span>
            </div>
            <div className="bg-surface-container-lowest flex items-center justify-between p-4">
              <p className="text-sm font-bold uppercase tracking-widest">go</p>
              <span className="material-symbols-outlined text-primary">
                terminal
              </span>
            </div>
            <div className="bg-surface-container-lowest flex items-center justify-between p-4">
              <p className="text-sm font-bold uppercase tracking-widest">
                docker
              </p>
              <span className="material-symbols-outlined text-primary">
                box
              </span>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="flex flex-col items-center space-y-4 border border-zinc-900 p-6 text-center">
            <h3 className="text-2xl font-black uppercase tracking-tighter">
              Open for Opportunities
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Let's build something precise and permanent. I'm currently looking
              for new projects and connections.
            </p>
            <button className="bg-primary w-full  border border-zinc-900 py-4 text-xs font-bold uppercase tracking-widest text-white">
              Get in touch
            </button>
          </div>
        </section>
      </main>

      {/* <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-zinc-900 bg-white px-2">
        <a
          className="flex flex-col items-center justify-center pb-4 pt-3 text-zinc-400 transition-all duration-100 hover:text-zinc-900"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-inter text-[10px] font-bold tracking-widest">
            HOME
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center pb-4 pt-3 text-zinc-400 transition-all duration-100 hover:text-zinc-900"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">rebase_edit</span>
          <span className="font-inter text-[10px] font-bold tracking-widest">
            WORK
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center border-t-4 border-zinc-900 pb-4 pt-2 text-zinc-900 transition-all duration-100"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-inter text-[10px] font-bold tracking-widest">
            ABOUT
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center pb-4 pt-3 text-zinc-400 transition-all duration-100 hover:text-zinc-900"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">
            alternate_email
          </span>
          <span className="font-inter text-[10px] font-bold tracking-widest">
            CONNECT
          </span>
        </a>
      </nav> */}
    </>
  );
}
