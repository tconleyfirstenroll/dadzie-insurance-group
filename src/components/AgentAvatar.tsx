interface AgentAvatarProps {
  variant: "marcus" | "priya" | "derek";
  size?: number;
}

export function AgentAvatar({ variant, size = 120 }: AgentAvatarProps) {
  const configs = {
    marcus: {
      bgFrom: "#0052CC", bgTo: "#003D99",
      skin: "#8D5524", skinShadow: "#6B3A10", skinHighlight: "#A8723A",
      hair: "#150800", hairHighlight: "#2D1000",
      shirtFill: "#1A6FE8", eyeColor: "#1A0A00",
      lipColor: "#6B3020",
    },
    priya: {
      bgFrom: "#1A6FE8", bgTo: "#0044B0",
      skin: "#C68642", skinShadow: "#A06020", skinHighlight: "#D4956A",
      hair: "#0A0402", hairHighlight: "#200A00",
      shirtFill: "#003D99", eyeColor: "#1A0800",
      lipColor: "#9A4A30",
    },
    derek: {
      bgFrom: "#003D99", bgTo: "#002070",
      skin: "#EDBA9A", skinShadow: "#C88868", skinHighlight: "#F5CEB4",
      hair: "#3D2010", hairHighlight: "#5A3018",
      shirtFill: "#0052CC", eyeColor: "#2D1800",
      lipColor: "#A86040",
    },
  };
  const c = configs[variant];
  const s = size;
  const cx = s / 2;
  const bgId = `avatarBg_${variant}`;

  return (
    <svg
      viewBox={`0 0 ${s} ${s}`}
      width={s}
      height={s}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", display: "block" }}
    >
      <defs>
        <radialGradient id={bgId} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor={c.bgFrom} />
          <stop offset="100%" stopColor={c.bgTo} />
        </radialGradient>
        <clipPath id={`clip_${variant}`}>
          <circle cx={cx} cy={cx} r={cx} />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx={cx} cy={cx} r={cx} fill={`url(#${bgId})`} />

      {/* Clipped content */}
      <g clipPath={`url(#clip_${variant})`}>
        {/* Shirt / shoulders */}
        <path
          d={`M ${cx - s * 0.38} ${s} Q ${cx - s * 0.38} ${s * 0.68} ${cx - s * 0.16} ${s * 0.63} L ${cx} ${s * 0.64} L ${cx + s * 0.16} ${s * 0.63} Q ${cx + s * 0.38} ${s * 0.68} ${cx + s * 0.38} ${s} Z`}
          fill={c.shirtFill}
        />
        {/* Shirt highlight */}
        <path
          d={`M ${cx - s * 0.38} ${s} Q ${cx - s * 0.38} ${s * 0.68} ${cx - s * 0.16} ${s * 0.63} L ${cx - s * 0.22} ${s} Z`}
          fill="white" opacity={0.06}
        />
        {/* Collar */}
        <path d={`M ${cx - s * 0.1} ${s * 0.63} L ${cx} ${s * 0.55} L ${cx + s * 0.1} ${s * 0.63}`} fill="white" opacity={0.82} />

        {/* Neck */}
        <rect
          x={cx - s * 0.07} y={s * 0.5} width={s * 0.14} height={s * 0.16}
          rx={s * 0.035} fill={c.skin}
        />
        {/* Neck shadow */}
        <rect
          x={cx - s * 0.07} y={s * 0.5} width={s * 0.04} height={s * 0.16}
          rx={s * 0.02} fill={c.skinShadow} opacity={0.25}
        />

        {/* Head */}
        <ellipse cx={cx} cy={s * 0.36} rx={s * 0.27} ry={s * 0.3} fill={c.skin} />
        {/* Face shadow (jaw area) */}
        <ellipse cx={cx} cy={s * 0.44} rx={s * 0.27} ry={s * 0.16} fill={c.skinShadow} opacity={0.12} />
        {/* Cheek highlights */}
        <ellipse cx={cx - s * 0.12} cy={s * 0.4} rx={s * 0.06} ry={s * 0.04} fill={c.skinHighlight} opacity={0.3} />
        <ellipse cx={cx + s * 0.12} cy={s * 0.4} rx={s * 0.06} ry={s * 0.04} fill={c.skinHighlight} opacity={0.3} />
        {/* Cheek blush */}
        <ellipse cx={cx - s * 0.14} cy={s * 0.42} rx={s * 0.05} ry={s * 0.03} fill="#FF8080" opacity={0.15} />
        <ellipse cx={cx + s * 0.14} cy={s * 0.42} rx={s * 0.05} ry={s * 0.03} fill="#FF8080" opacity={0.15} />

        {/* Hair — variant-specific styles */}
        {variant === "marcus" && (
          /* Short, tight — rounded top */
          <>
            <ellipse cx={cx} cy={s * 0.22} rx={s * 0.28} ry={s * 0.15} fill={c.hair} />
            <rect x={cx - s * 0.27} y={s * 0.18} width={s * 0.54} height={s * 0.12} rx={s * 0.04} fill={c.hair} />
            {/* Sideburn */}
            <rect x={cx - s * 0.27} y={s * 0.26} width={s * 0.06} height={s * 0.14} rx={s * 0.03} fill={c.hair} />
            <rect x={cx + s * 0.21} y={s * 0.26} width={s * 0.06} height={s * 0.14} rx={s * 0.03} fill={c.hair} />
          </>
        )}
        {variant === "priya" && (
          /* Long, dark — wide on sides, part in center */
          <>
            <path
              d={`M ${cx - s * 0.27} ${s * 0.28} Q ${cx - s * 0.27} ${s * 0.1} ${cx} ${s * 0.08} Q ${cx + s * 0.27} ${s * 0.1} ${cx + s * 0.27} ${s * 0.28} L ${cx + s * 0.3} ${s * 0.56} Q ${cx + s * 0.22} ${s * 0.6} ${cx + s * 0.22} ${s * 0.5} L ${cx + s * 0.22} ${s * 0.36} L ${cx - s * 0.22} ${s * 0.36} L ${cx - s * 0.22} ${s * 0.5} Q ${cx - s * 0.22} ${s * 0.6} ${cx - s * 0.3} ${s * 0.56} Z`}
              fill={c.hair}
            />
            <ellipse cx={cx} cy={s * 0.2} rx={s * 0.27} ry={s * 0.14} fill={c.hair} />
            {/* Part highlight */}
            <line x1={cx} y1={s * 0.08} x2={cx} y2={s * 0.22} stroke={c.hairHighlight} strokeWidth={s * 0.012} opacity={0.5} />
          </>
        )}
        {variant === "derek" && (
          /* Medium brown, slightly wavy, side-parted */
          <>
            <path
              d={`M ${cx - s * 0.27} ${s * 0.28} Q ${cx - s * 0.28} ${s * 0.1} ${cx - s * 0.04} ${s * 0.07} Q ${cx + s * 0.26} ${s * 0.09} ${cx + s * 0.27} ${s * 0.28} Z`}
              fill={c.hair}
            />
            <ellipse cx={cx + s * 0.04} cy={s * 0.2} rx={s * 0.24} ry={s * 0.13} fill={c.hair} />
            {/* Side part */}
            <path d={`M ${cx - s * 0.27} ${s * 0.27} Q ${cx - s * 0.1} ${s * 0.14} ${cx - s * 0.04} ${s * 0.07}`} stroke={c.hairHighlight} strokeWidth={s * 0.018} fill="none" opacity={0.4} strokeLinecap="round" />
          </>
        )}

        {/* Eyes */}
        <ellipse cx={cx - s * 0.1} cy={s * 0.37} rx={s * 0.042} ry={s * 0.047} fill={c.eyeColor} />
        <ellipse cx={cx + s * 0.1} cy={s * 0.37} rx={s * 0.042} ry={s * 0.047} fill={c.eyeColor} />
        {/* Eye whites/iris highlight */}
        <circle cx={cx - s * 0.085} cy={s * 0.358} r={s * 0.016} fill="white" opacity={0.7} />
        <circle cx={cx + s * 0.115} cy={s * 0.358} r={s * 0.016} fill="white" opacity={0.7} />

        {/* Eyebrows */}
        <path
          d={`M ${cx - s * 0.14} ${s * 0.31} Q ${cx - s * 0.1} ${s * 0.295} ${cx - s * 0.06} ${s * 0.31}`}
          stroke={c.hair} strokeWidth={s * 0.022} fill="none" strokeLinecap="round"
          opacity={variant === "marcus" ? 0.9 : 0.75}
        />
        <path
          d={`M ${cx + s * 0.06} ${s * 0.31} Q ${cx + s * 0.1} ${s * 0.295} ${cx + s * 0.14} ${s * 0.31}`}
          stroke={c.hair} strokeWidth={s * 0.022} fill="none" strokeLinecap="round"
          opacity={variant === "marcus" ? 0.9 : 0.75}
        />

        {/* Nose bridge (subtle) */}
        <path
          d={`M ${cx} ${s * 0.395} Q ${cx - s * 0.025} ${s * 0.43} ${cx} ${s * 0.445} Q ${cx + s * 0.025} ${s * 0.43} ${cx} ${s * 0.445}`}
          stroke={c.skinShadow} strokeWidth={s * 0.015} fill="none" strokeLinecap="round" opacity={0.45}
        />

        {/* Smile */}
        <path
          d={`M ${cx - s * 0.1} ${s * 0.455} Q ${cx} ${s * 0.5} ${cx + s * 0.1} ${s * 0.455}`}
          stroke={c.lipColor} strokeWidth={s * 0.022} fill="none" strokeLinecap="round"
        />

        {/* Priya earring detail */}
        {variant === "priya" && (
          <circle cx={cx + s * 0.255} cy={s * 0.38} r={s * 0.02} fill="#F97316" opacity={0.85} />
        )}
      </g>
    </svg>
  );
}
