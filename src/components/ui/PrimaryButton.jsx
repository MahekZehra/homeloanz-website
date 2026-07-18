const PrimaryButton = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`
      rounded-full
      bg-cyan-400
      px-8
      py-4
      font-semibold
      text-slate-900
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(34,211,238,.45)]
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;