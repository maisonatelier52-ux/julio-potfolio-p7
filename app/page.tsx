import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 -z-10 h-full w-full object-cover "
      >
        <source src="/Firefly%20make%20a%20modern%20animated%20video%20for%20portfolio%20website%20by%20the%20person%20image%20319776%20(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Left Text */}
      <div className="fixed top-8 left-8 z-10">
        <h1 className="animate-gradient glass-text text-xl font-light tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          JHV
        </h1>
      </div>

      {/* Main Animated Name */}
      <main className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="animate-float mx-4">
          <h2
            className="flex flex-wrap justify-center text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {['Julio', 'Herrera', 'Velutini'].map((word, i) => (
              <span key={i} className="animate-reveal mx-[0.15em] inline-block" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <span className="animate-gradient inline-block leading-none">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>
      </main>



    </div>
  );
}
