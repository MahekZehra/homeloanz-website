const SliderInput = ({
  icon,
  title,
  value,
  setValue,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4 md:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
            {icon}
          </div>

          <h4 className="text-sm md:text-base font-medium text-white">
             {title}
          </h4>
        </div>

        <span className="rounded-full bg-cyan-500/10 px-3 md:px-4 py-1 text-xs md:text-sm font-semibold text-cyan-300">
          {prefix}
          {Number(value).toLocaleString()}
          {suffix}
        </span>
      </div>

      {/* Slider */}
      <label htmlFor={title} className="sr-only">
  {title}
</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider-premium w-full"
        style={{
          background: `linear-gradient(to right,
          #22d3ee 0%,
          #22d3ee ${percentage}%,
          rgba(255,255,255,.08) ${percentage}%,
          rgba(255,255,255,.08) 100%)`,
        }}
      />

      {/* Labels */}
      <div className="flex justify-between text-[11px] md:text-xs text-slate-500">
        <span>
          {prefix}
          {Number(min).toLocaleString()}
          {suffix}
        </span>

        <span>
          {prefix}
          {Number(max).toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
};

export default SliderInput;