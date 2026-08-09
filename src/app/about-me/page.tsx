import { AppMainFrame } from "@/src/components/components/AppMainContentFrame";
import CalloutMD from "../../features/about-me/components/callout";

export default function AboutMe() {
  return (
        <AppMainFrame className="flex flex-col gap-6">
          <section className="flex flex-col items-center space-y-6 text-center">
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
                <p className="text-sm font-bold uppercase tracking-widest">
                  go
                </p>
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
                Let&apos;s build something precise and permanent. I&apos;m
                currently looking for new projects and connections.
              </p>
              <button className="bg-primary w-full  border border-zinc-900 py-4 text-xs font-bold uppercase tracking-widest text-white">
                Get in touch
              </button>
            </div>
          </section>
        </AppMainFrame>
  );
}
