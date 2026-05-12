export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[480px]"
      aria-hidden="true"
    >
      {/* ── Large soft background circle ── */}
      <circle cx="320" cy="220" r="220" fill="#EFF6FF" />

      {/* ── Decorative half-circle top-right ── */}
      <path d="M 520 0 A 110 110 0 0 0 410 0 Z" fill="#F97316" opacity="0.18" />
      <path d="M 520 0 A 80 80 0 0 0 440 0 Z" fill="#F97316" opacity="0.28" />

      {/* ── Decorative half-circle bottom-left ── */}
      <path d="M 0 480 A 90 90 0 0 1 90 480 Z" fill="#0052CC" opacity="0.12" />

      {/* ── Floating dot accents ── */}
      <circle cx="60" cy="80" r="7" fill="#F97316" opacity="0.55" />
      <circle cx="38" cy="160" r="4" fill="#0052CC" opacity="0.35" />
      <circle cx="472" cy="360" r="9" fill="#F97316" opacity="0.4" />
      <circle cx="498" cy="290" r="5" fill="#0052CC" opacity="0.3" />
      <circle cx="90" cy="400" r="6" fill="#0052CC" opacity="0.25" />
      <circle cx="160" cy="52" r="5" fill="#F97316" opacity="0.3" />
      <circle cx="430" cy="52" r="8" fill="#0052CC" opacity="0.2" />

      {/* ── Main shield ── */}
      {/* Shield body */}
      <path
        d="M260 90 L380 120 L380 260 C380 320 260 380 260 380 C260 380 140 320 140 260 L140 120 Z"
        fill="#0052CC"
        opacity="0.92"
      />
      {/* Shield inner highlight */}
      <path
        d="M260 112 L363 138 L363 260 C363 310 260 360 260 360 C260 360 157 310 157 260 L157 138 Z"
        fill="#1A6FE8"
        opacity="0.35"
      />
      {/* Orange accent bar across shield (mirrors DIG logo) */}
      <rect x="195" y="248" width="130" height="10" rx="5" fill="#F97316" />

      {/* ── Heart inside shield ── */}
      <path
        d="M260 210 C260 210 225 185 225 163 C225 147 237 136 250 136 C255 136 260 139 260 139 C260 139 265 136 270 136 C283 136 295 147 295 163 C295 185 260 210 260 210 Z"
        fill="white"
        opacity="0.92"
      />

      {/* ── Family figures ── */}

      {/* Parent 1 (left) */}
      {/* Head */}
      <circle cx="195" cy="285" r="22" fill="white" />
      {/* Body */}
      <rect x="175" y="310" width="40" height="52" rx="8" fill="white" opacity="0.9" />
      {/* Arm gesture */}
      <rect x="215" y="318" width="28" height="8" rx="4" fill="white" opacity="0.7" />

      {/* Child (center) */}
      {/* Head */}
      <circle cx="260" cy="298" r="17" fill="#FED7AA" />
      {/* Body */}
      <rect x="245" y="317" width="30" height="42" rx="7" fill="#FED7AA" opacity="0.9" />

      {/* Parent 2 (right) */}
      {/* Head */}
      <circle cx="325" cy="285" r="22" fill="white" />
      {/* Body */}
      <rect x="305" y="310" width="40" height="52" rx="8" fill="white" opacity="0.9" />
      {/* Arm gesture */}
      <rect x="277" y="318" width="28" height="8" rx="4" fill="white" opacity="0.7" />

      {/* ── Ground / base line ── */}
      <rect x="140" y="362" width="240" height="6" rx="3" fill="#0052CC" opacity="0.18" />

      {/* ── Rounded rectangle accent (lower right of composition) ── */}
      <rect x="400" y="340" width="64" height="64" rx="18" fill="#F97316" opacity="0.13" />
      <rect x="416" y="356" width="32" height="32" rx="10" fill="#F97316" opacity="0.22" />

      {/* ── Small decorative cross / plus ── */}
      <rect x="83" y="227" width="20" height="6" rx="3" fill="#0052CC" opacity="0.3" />
      <rect x="89" y="221" width="8" height="18" rx="3" fill="#0052CC" opacity="0.3" />

      {/* ── Checkmark badge bottom-left ── */}
      <circle cx="115" cy="320" r="18" fill="#F97316" opacity="0.15" />
      <circle cx="115" cy="320" r="13" fill="#F97316" opacity="0.25" />
      <polyline points="108,320 113,325 122,315" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}
