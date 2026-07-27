function BackgroundEffects() {
  return (
    <>
      {/* Main Glow */}
      <div className="absolute top-20 right-[-120px] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]" />

      {/* Left Glow */}
      <div className="absolute bottom-[-180px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Center Glow */}
      <div className="absolute top-[35%] left-[40%] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[90px]" />

      {/* Decorative Rings */}
      <div className="absolute right-0 top-0 w-[550px] h-[550px] rounded-full border border-blue-500/10" />

      <div className="absolute right-16 top-16 w-[420px] h-[420px] rounded-full border border-blue-500/10" />

      <div className="absolute right-32 top-32 w-[300px] h-[300px] rounded-full border border-blue-500/10" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#071A35] to-transparent" />
    </>
  );
}

export default BackgroundEffects;