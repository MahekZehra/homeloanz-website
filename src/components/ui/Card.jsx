const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.25)]
        transition-all duration-300
        ${hover ? "hover:-translate-y-1.5" : ""}
        ${className}
      `}
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
};

export default Card;