function BackgroundEffects() {
  return (
    <>
      {/* Main Blue Glow */}
      <div className="absolute top-20 right-[-150px] w-[650px] h-[650px] rounded-full bg-blue-600/20 blur-[170px]" />

      {/* Left Glow */}
      <div className="absolute bottom-[-250px] left-[-180px] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Center Glow */}
      <div className="absolute top-[35%] left-[40%] w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Decorative Circles */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full border border-blue-500/10"></div>

      <div className="absolute right-20 top-20 w-[560px] h-[560px] rounded-full border border-blue-500/10"></div>

      <div className="absolute right-40 top-40 w-[420px] h-[420px] rounded-full border border-blue-500/10"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#071A35] to-transparent"></div>
    </>
  );
}

export default BackgroundEffects;