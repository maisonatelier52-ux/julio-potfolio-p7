"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function Home() {
  const [activePage, setActivePage] = useState("home"); // "home" or "about"
  const [isTransitioning, setIsTransitioning] = useState(false);

  const togglePage = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActivePage((prev) => (prev === "home" ? "about" : "home"));

    // Lock interaction during the transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1100);
  }, [isTransitioning]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-black text-white font-sans lg:overflow-hidden py-0 md:py-4 relative">

      {/* STICKY SIDEBAR - Remains fixed during transitions */}
      <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-[22%] flex flex-col justify-between p-6 lg:p-12 z-50 bg-black lg:bg-transparent">

        {/* LOGO SECTION */}
        <div className="flex items-start gap-4 mb-0 lg:mb-0 cursor-pointer" onClick={() => activePage !== "home" && togglePage()}>
          <div className="flex lg:sidebar-vertical-text items-center gap-0">
            <span className="text-4xl lg:text-7xl font-black tracking-tighter leading-none transform ">JHV</span>
            <div className="flex flex-col ml-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Banking</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Innovator</span>
            </div>
          </div>
        </div>

        {/* SIDEBAR CONTENT */}
        <div className="hidden lg:flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.2em] font-bold text-white/40">1890's</span>
            <p className="text-[11px] leading-relaxed text-white/50 max-w-[200px]">
              The Power of a Vision
              Julio Herrera Velutini’s
              Drive to Revolutionize
              Latin American Banking</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors"><i>in</i></a>
            <a href="#" className="hover:text-white/60 transition-colors"><i>f</i></a>
            <a href="#" className="hover:text-white/60 transition-colors"><i>ig</i></a>
          </div>

          {/* SIDEBAR BUTTON - Primary Trigger */}
          <button
            disabled={isTransitioning}
            onClick={togglePage}
            className="flex items-center justify-between w-full max-w-[260px] bg-white/5 border border-white/10 hover:border-white/50 py-3 px-6 rounded-full transition-all group disabled:opacity-50">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              {activePage === "home" ? "Read More About" : "Back to Vision"}
            </span>
            <div className=" text-white rounded-full group-hover:scale-110 transition-transform">
              <svg
                className={`w-5 h-5 transition-transform duration-700 ${activePage === "about" ? "rotate-225" : ""}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
            </div>
          </button>
        </div>
      </aside>

      {/* MAIN PANEL AREA - THE "SWAP" ZONE */}
      <div className="lg:ml-[22%] w-full lg:w-[78%] relative min-h-[calc(100vh-2rem)] panel-transition-container z-20 overflow-hidden">

        {/* PANEL 1: HOME (Invisibly slides right when 'about' is active) */}
        <main className={`panel-transition-item  bg-[#121212] overflow-hidden rounded-[50px] rounded-b-none lg:rounded-r-none lg:rounded-[50px] ${activePage === "home" ? "panel-active" : "panel-exit-right"}`}>

          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-60"
            >
              <source src="/Firefly%20make%20a%20modern%20animated%20video%20for%20portfolio%20website%20by%20the%20person%20image%20319776%20(1).mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/70 lg:from-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 lg:p-10 gap-6">
            <nav className="flex items-center bg-black/20 backdrop-blur-md border border-white/5 rounded-full p-1 lg:ml-4">
              <button onClick={() => activePage !== "home" && togglePage()} className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold transition-all ${activePage === "home" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>HOME</button>
              <button className="px-4 lg:px-6 py-2 text-white/60 hover:text-white text-[10px] lg:text-xs font-medium transition-all">BLOG</button>
              <button onClick={() => activePage !== "about" && togglePage()} className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold transition-all ${activePage === "about" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>ABOUT</button>
            </nav>
            <button className="hidden sm:block mr-4 px-8 py-3 rounded-full border border-white/20 hover:border-white text-xs font-bold tracking-widest transition-all">JHV</button>
          </div>

          <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-200px)] lg:h-[calc(100%-120px)] px-6 lg:px-8 py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row lg:items-end gap-12">
              <div className="flex flex-col">
                <h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-6 animate-reveal">
                  JULIO <br />
                  <span className="text-white">HERRERA</span> <br />
                  <span className="animate-gradient">VELUTINI.</span>
                </h1>
                <p className="text-sm font-medium text-white/60 max-w-[400px] leading-relaxed mb-10">
                  Julio Herrera Velutini has redefined Latin American banking, blending heritage with innovation. Rooted in the legacy of Banco Caracas, established by his family in 1890, Herrera Velutini has carried forward a tradition of economic impact.
                </p>

                {/* ICON TRIGGER */}
                <div
                  className="relative w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center cursor-pointer group hover:scale-105 active:scale-95 transition-all"
                  onClick={togglePage}
                >
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow group-hover:border-white/30"></div>
                  <div className="absolute w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/10">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10" /></svg>
                  </div>
                </div>
              </div>

              <div className="lg:flex-1 flex flex-col items-start lg:items-end lg:text-right">
                <div className="max-w-[280px] mb-12 lg:mb-20 lg:mr-10 lg:translate-y-20">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-black text-white/80 mb-4">What I do?</h3>
                  <p className="text-xs leading-relaxed font-medium text-white/60">Julio Martín Herrera Velutini (born 15 Dec 1971) is an Italian-Venezuelan billionaire businessman.</p>
                </div>
                {/* STATUS CARD */}
                <div className="lg:mr-8 flex items-center bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-4 pr-8 lg:pr-12 gap-4 lg:gap-6 hover:scale-105 transition-transform cursor-pointer mt-1" onClick={togglePage}>
                  <div className="flex -space-x-3 sm:-space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">JH</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-zinc-700 flex items-center justify-center text-[10px] font-bold">HV</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center text-[10px] font-black text-black">+</div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white">Online Now</span>
                    <span className="text-[7px] sm:text-[9px] font-medium text-white/40 uppercase">Read More About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* PANEL 2: ABOUT (Invisibly slides in from left when triggered) */}
        <main className={`panel-transition-item bg-[#121212] overflow-hidden rounded-[50px] rounded-b-none lg:rounded-r-none lg:rounded-[50px] ${activePage === "about" ? "panel-active" : "panel-enter-left"}`}>

          {/* VIDEO BACKGROUND */}
          <div className="absolute inset-0 z-0 bg-white/40">
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/70 lg:from-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 lg:p-10 gap-6">

            <nav className="flex items-center bg-black/20 backdrop-blur-md border border-white/5 rounded-full p-1 lg:ml-4">
              <button onClick={() => activePage !== "home" && togglePage()} className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold transition-all ${activePage === "home" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>HOME</button>
              <button className="px-4 lg:px-6 py-2 text-white/60 hover:text-white text-[10px] lg:text-xs font-medium transition-all">BLOG</button>
              <button onClick={() => activePage !== "about" && togglePage()} className={`px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-bold transition-all ${activePage === "about" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>ABOUT</button>
            </nav>
            <button className="hidden sm:block mr-4 px-8 py-3 rounded-full border border-white/20 hover:border-white text-xs font-bold tracking-widest transition-all">JHV</button>
          </div>

          <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-0)] px-10 lg:px-24 py-20 max-w-7xl mx-auto">
            <h2 className="text-[50px] lg:text-[50px] font-black uppercase leading-none tracking-tighter mb-12 animate-reveal">
              The Path <br />
              <span className="text-white/30">of Innovation.</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-sm lg:text-sm leading-relaxed text-zinc-100 font-light">
                  Julio Herrera Velutini has redefined Latin American banking, blending heritage with innovation. Rooted in the legacy of Banco Caracas, established by his family in 1890, Herrera Velutini has carried forward a tradition of economic impact. He has championed financial inclusion, focusing on supporting small and medium-sized enterprises (SMEs) to spur entrepreneurship, create jobs, and diversify economies across the region.                </p>
                <div className="mt-10 w-30 h-1 bg-white/20"></div>
              </div>

              <div className="space-y-2 text-sm lg:text-sm text-zinc-400 leading-relaxed font-light">
                <p>In 2009, he founded Bancredito International Bank in Puerto Rico, bridging Latin America with global markets. This initiative combined the stability of a U.S.-regulated institution with tailored services for Latin American clients, fostering trust and accessibility.</p>
                <p>Herrera Velutini also embraced cutting-edge technology, integrating AI, blockchain, and digital platforms into banking operations to enhance customer experiences and efficiency. His commitment to ethical practices and transparency has set a high standard for the financial sector. Through visionary leadership, he continues to shape the future of banking, driving growth and innovation.</p>
                <button onClick={togglePage} className="flex items-center gap-4 text-white hover:text-zinc-300 transition-all group mt-4">
                  <span className="text-xs uppercase tracking-[0.2em]">Return to Home</span>
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}
