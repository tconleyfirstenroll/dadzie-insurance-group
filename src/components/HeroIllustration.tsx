export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 490"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[490px]"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hiBg" cx="52%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#1A6FE8" />
          <stop offset="100%" stopColor="#002D80" />
        </radialGradient>
        <linearGradient id="hiShield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#003080" />
        </linearGradient>
        <linearGradient id="hiJacket1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6FE8" />
          <stop offset="100%" stopColor="#0042B0" />
        </linearGradient>
        <linearGradient id="hiJacket2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3385FF" />
          <stop offset="100%" stopColor="#0052CC" />
        </linearGradient>
        <linearGradient id="hiOrange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA6A0A" />
        </linearGradient>
        <filter id="hiCardShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#001B6A" floodOpacity="0.18" />
        </filter>
        <filter id="hiBadgeShadow" x="-15%" y="-15%" width="130%" height="145%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#001B6A" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* ── Outer ring glow ── */}
      <circle cx="315" cy="248" r="228" fill="none" stroke="#BFDBFE" strokeWidth="2" opacity="0.25" />
      <circle cx="315" cy="248" r="208" fill="none" stroke="#BFDBFE" strokeWidth="1" opacity="0.15" />

      {/* ── Main backdrop circle ── */}
      <circle cx="315" cy="248" r="200" fill="url(#hiBg)" />

      {/* ── Corner orange arc decoration ── */}
      <path d="M 476 28 A 112 112 0 0 1 556 102" stroke="#F97316" strokeWidth="24" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M 486 18 A 88 88 0 0 1 554 80" stroke="#F97316" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.38" />

      {/* ── Bottom-left dot cluster ── */}
      <circle cx="68" cy="396" r="17" fill="#F97316" opacity="0.28" />
      <circle cx="46" cy="424" r="9" fill="#0052CC" opacity="0.22" />
      <circle cx="96" cy="420" r="6" fill="#F97316" opacity="0.18" />

      {/* ── Scattered accent dots ── */}
      <circle cx="44" cy="108" r="8" fill="#F97316" opacity="0.52" />
      <circle cx="26" cy="185" r="5" fill="#6BA8FF" opacity="0.42" />
      <circle cx="512" cy="388" r="11" fill="#F97316" opacity="0.32" />
      <circle cx="542" cy="308" r="6" fill="#6BA8FF" opacity="0.3" />
      <circle cx="138" cy="46" r="5" fill="#0052CC" opacity="0.28" />
      <circle cx="450" cy="44" r="8" fill="#F97316" opacity="0.22" />

      {/* ── Protective arch over figures ── */}
      <path
        d="M 174 308 Q 178 172 298 150 Q 420 130 446 308"
        fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.82"
      />
      <path
        d="M 182 308 Q 185 180 298 160 Q 414 142 438 308"
        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3"
      />

      {/* ── Shield badge at arch peak ── */}
      <g transform="translate(279, 130)" filter="url(#hiBadgeShadow)">
        <rect width="38" height="38" rx="10" fill="white" opacity="0.97" />
        <path d="M19 5 L31 9 L31 20 C31 26 19 33 19 33 C19 33 7 26 7 20 L7 9 Z" fill="#EFF6FF" stroke="#0052CC" strokeWidth="1.8" />
        <rect x="8" y="18" width="22" height="3.5" rx="1.8" fill="#F97316" />
        <polyline points="12,14 17,19 26,10" stroke="#0052CC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ═══════════════════════════════════════════
          LEFT ADULT FIGURE — Woman, cobalt outfit
          Center x=234, feet y=446
          ─ head top y=238, height ~208px
      ═══════════════════════════════════════════ */}

      {/* Shoes */}
      <ellipse cx="224" cy="444" rx="15" ry="6" fill="#1A0E00" />
      <ellipse cx="244" cy="444" rx="15" ry="6" fill="#1A0E00" />
      {/* Shoe highlight */}
      <ellipse cx="222" cy="441" rx="7" ry="2.5" fill="white" opacity="0.12" />
      <ellipse cx="242" cy="441" rx="7" ry="2.5" fill="white" opacity="0.12" />

      {/* Legs — navy trousers */}
      <rect x="218" y="362" width="15" height="82" rx="7.5" fill="#002D80" />
      <rect x="237" y="362" width="15" height="82" rx="7.5" fill="#002D80" />
      <rect x="218" y="362" width="5" height="82" rx="2.5" fill="white" opacity="0.05" />
      <rect x="237" y="362" width="5" height="82" rx="2.5" fill="white" opacity="0.05" />

      {/* Torso — cobalt jacket */}
      <path
        d="M 208 300 Q 204 295 210 293 L 222 290 L 246 290 L 258 293 Q 264 295 260 300 L 254 362 L 214 362 Z"
        fill="url(#hiJacket1)"
      />
      {/* Jacket sheen */}
      <path
        d="M 208 300 Q 204 295 210 293 L 218 291 L 220 362 L 214 362 Z"
        fill="white" opacity="0.06"
      />
      {/* Lapels */}
      <path d="M 234 290 L 228 308 L 234 316 L 240 308 Z" fill="#003080" />
      {/* Shirt/collar */}
      <path d="M 228 288 L 234 278 L 240 288" fill="white" opacity="0.88" />

      {/* Left arm */}
      <path d="M 208 300 C 202 312 200 330 202 342 C 203 348 208 349 210 343 L 216 316" fill="url(#hiJacket1)" />
      <ellipse cx="202" cy="344" rx="7.5" ry="6.5" fill="#F2B49A" />
      {/* Right arm (toward child) */}
      <path d="M 260 300 C 266 312 268 330 266 340 C 265 346 260 346 258 341 L 252 316" fill="url(#hiJacket1)" />
      <ellipse cx="266" cy="342" rx="7.5" ry="6.5" fill="#F2B49A" />

      {/* Neck */}
      <rect x="228" y="274" width="12" height="18" rx="5" fill="#F2B49A" />

      {/* Head */}
      <ellipse cx="234" cy="254" rx="24" ry="27" fill="#F2B49A" />
      {/* Cheek blush */}
      <ellipse cx="222" cy="263" rx="5" ry="3.5" fill="#F08060" opacity="0.22" />
      <ellipse cx="246" cy="263" rx="5" ry="3.5" fill="#F08060" opacity="0.22" />

      {/* Hair (dark, shoulder-length, parted center) */}
      <path
        d="M 210 247 Q 210 224 234 222 Q 258 224 258 247 L 260 272 Q 252 282 248 285 L 248 272 Q 248 278 242 283 L 234 283 L 226 283 Q 220 278 220 272 L 220 285 Q 216 282 208 272 Z"
        fill="#150800"
      />
      <ellipse cx="234" cy="238" rx="24" ry="16" fill="#150800" />
      {/* Hair highlight */}
      <path d="M 228 226 Q 234 222 240 226" stroke="#3D1800" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="226" cy="253" rx="3.8" ry="4.2" fill="#2A1508" />
      <ellipse cx="242" cy="253" rx="3.8" ry="4.2" fill="#2A1508" />
      <circle cx="227.5" cy="251.5" r="1.3" fill="white" opacity="0.72" />
      <circle cx="243.5" cy="251.5" r="1.3" fill="white" opacity="0.72" />
      {/* Eyebrows */}
      <path d="M 222 246 Q 226 244 230 246" stroke="#150800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 238 246 Q 242 244 246 246" stroke="#150800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M 234 260 Q 232 264 234 266 Q 236 264 234 266" stroke="#C87858" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.55" />
      {/* Smile */}
      <path d="M 228 270 Q 234 276 240 270" stroke="#C07050" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════
          CENTER CHILD FIGURE — orange shirt
          Center x=297, feet y=446, height ~150px
      ═══════════════════════════════════════════ */}

      {/* Shoes */}
      <ellipse cx="288" cy="444" rx="12" ry="5" fill="#1A0E00" />
      <ellipse cx="306" cy="444" rx="12" ry="5" fill="#1A0E00" />

      {/* Legs — navy jeans */}
      <rect x="283" y="392" width="12" height="52" rx="6" fill="#1A2255" />
      <rect x="299" y="392" width="12" height="52" rx="6" fill="#1A2255" />

      {/* Torso — orange shirt */}
      <path
        d="M 278 342 Q 274 338 278 336 L 287 333 L 307 333 L 316 336 Q 320 338 316 342 L 311 392 L 283 392 Z"
        fill="url(#hiOrange)"
      />
      {/* Shirt sheen */}
      <path d="M 278 342 Q 274 338 278 336 L 284 334 L 285 392 L 283 392 Z" fill="white" opacity="0.07" />
      {/* Collar */}
      <path d="M 291 333 L 297 324 L 303 333" fill="white" opacity="0.88" />

      {/* Left arm */}
      <path d="M 278 342 C 272 351 269 364 271 374 C 272 379 276 379 277 374 L 281 355" fill="url(#hiOrange)" />
      <ellipse cx="271" cy="375" rx="6.5" ry="5.5" fill="#D4906A" />
      {/* Right arm */}
      <path d="M 316 342 C 322 351 325 364 323 374 C 322 379 318 379 317 374 L 313 355" fill="url(#hiOrange)" />
      <ellipse cx="323" cy="375" rx="6.5" ry="5.5" fill="#D4906A" />

      {/* Neck */}
      <rect x="291" y="320" width="11" height="15" rx="4.5" fill="#D4906A" />

      {/* Head */}
      <ellipse cx="297" cy="303" rx="21" ry="23" fill="#D4906A" />
      <ellipse cx="286" cy="311" rx="4.5" ry="3" fill="#C07848" opacity="0.2" />
      <ellipse cx="308" cy="311" rx="4.5" ry="3" fill="#C07848" opacity="0.2" />

      {/* Hair (child, short curly) */}
      <path
        d="M 276 298 Q 276 278 297 276 Q 318 278 318 298 L 317 305 Q 312 308 307 307 L 307 296 Q 297 294 287 296 L 287 307 Q 282 308 277 305 Z"
        fill="#2A1000"
      />
      <ellipse cx="297" cy="288" rx="21" ry="12" fill="#2A1000" />
      {/* Hair highlight */}
      <path d="M 292 280 Q 297 277 302 280" stroke="#4D2000" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Eyes — bigger child eyes */}
      <ellipse cx="289" cy="303" rx="3.4" ry="3.8" fill="#2A1508" />
      <ellipse cx="305" cy="303" rx="3.4" ry="3.8" fill="#2A1508" />
      <circle cx="290.3" cy="301.5" r="1.2" fill="white" opacity="0.72" />
      <circle cx="306.3" cy="301.5" r="1.2" fill="white" opacity="0.72" />
      {/* Eyebrows */}
      <path d="M 285 296 Q 289 294 293 296" stroke="#2A1000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 301 296 Q 305 294 309 296" stroke="#2A1000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Big child smile */}
      <path d="M 289 311 Q 297 318 305 311" stroke="#A05A2A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ═══════════════════════════════════════════
          RIGHT ADULT FIGURE — Man, medium blue suit + orange tie
          Center x=360, feet y=446
      ═══════════════════════════════════════════ */}

      {/* Shoes */}
      <ellipse cx="350" cy="444" rx="15" ry="6" fill="#1A0E00" />
      <ellipse cx="370" cy="444" rx="15" ry="6" fill="#1A0E00" />
      <ellipse cx="348" cy="441" rx="7" ry="2.5" fill="white" opacity="0.12" />
      <ellipse cx="368" cy="441" rx="7" ry="2.5" fill="white" opacity="0.12" />

      {/* Legs — navy trousers */}
      <rect x="344" y="362" width="15" height="82" rx="7.5" fill="#002D80" />
      <rect x="363" y="362" width="15" height="82" rx="7.5" fill="#002D80" />
      <rect x="344" y="362" width="5" height="82" rx="2.5" fill="white" opacity="0.05" />
      <rect x="363" y="362" width="5" height="82" rx="2.5" fill="white" opacity="0.05" />

      {/* Torso — medium blue suit */}
      <path
        d="M 334 300 Q 330 295 336 293 L 348 290 L 372 290 L 384 293 Q 390 295 386 300 L 380 362 L 340 362 Z"
        fill="url(#hiJacket2)"
      />
      <path
        d="M 334 300 Q 330 295 336 293 L 344 291 L 346 362 L 340 362 Z"
        fill="white" opacity="0.06"
      />
      {/* Lapels */}
      <path d="M 360 290 L 354 308 L 360 316 L 366 308 Z" fill="#0042B0" />
      {/* Orange tie */}
      <path d="M 360 316 L 356 342 L 360 349 L 364 342 Z" fill="#F97316" />
      <path d="M 358 316 L 356 324 L 360 320 L 364 324 L 362 316 Z" fill="#EA6A0A" />
      {/* Shirt */}
      <path d="M 354 288 L 360 278 L 366 288" fill="white" opacity="0.88" />

      {/* Left arm */}
      <path d="M 334 300 C 327 312 325 330 327 340 C 328 346 333 346 334 341 L 340 316" fill="url(#hiJacket2)" />
      <ellipse cx="327" cy="342" rx="7.5" ry="6.5" fill="#E0A070" />
      {/* Right arm */}
      <path d="M 386 300 C 392 312 394 330 392 342 C 391 348 386 349 384 343 L 378 316" fill="url(#hiJacket2)" />
      <ellipse cx="392" cy="344" rx="7.5" ry="6.5" fill="#E0A070" />

      {/* Neck */}
      <rect x="354" y="274" width="12" height="18" rx="5" fill="#E0A070" />

      {/* Head */}
      <ellipse cx="360" cy="254" rx="24" ry="27" fill="#E0A070" />
      <ellipse cx="348" cy="263" rx="5" ry="3.5" fill="#C07848" opacity="0.2" />
      <ellipse cx="372" cy="263" rx="5" ry="3.5" fill="#C07848" opacity="0.2" />

      {/* Hair (short, dark) */}
      <path
        d="M 336 245 Q 336 224 360 222 Q 384 224 384 245 L 383 240 Q 380 226 370 222 Q 360 219 350 222 Q 340 226 337 240 Z"
        fill="#1A0A00"
      />
      <ellipse cx="360" cy="234" rx="24" ry="12" fill="#1A0A00" />
      {/* Temple fade / hairline detail */}
      <path d="M 336 244 Q 337 255 340 258" stroke="#1A0A00" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" />
      <path d="M 384 244 Q 383 255 380 258" stroke="#1A0A00" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="352" cy="253" rx="3.8" ry="4.2" fill="#2A1508" />
      <ellipse cx="368" cy="253" rx="3.8" ry="4.2" fill="#2A1508" />
      <circle cx="353.5" cy="251.5" r="1.3" fill="white" opacity="0.72" />
      <circle cx="369.5" cy="251.5" r="1.3" fill="white" opacity="0.72" />
      {/* Eyebrows (straighter, more masculine) */}
      <path d="M 348 246 Q 352 244 356 245" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 364 245 Q 368 244 372 246" stroke="#1A0A00" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Subtle beard shadow */}
      <ellipse cx="360" cy="270" rx="16" ry="7" fill="#C08050" opacity="0.12" />
      {/* Nose */}
      <path d="M 360 258 Q 358 263 360 265 Q 362 263 360 265" stroke="#B07040" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Smile */}
      <path d="M 354 270 Q 360 276 366 270" stroke="#A06030" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* ── Ground shadow ── */}
      <ellipse cx="297" cy="452" rx="158" ry="10" fill="#001B6A" opacity="0.14" />

      {/* ═══════════════════════════════════════════
          FLOATING BENEFIT CARDS
      ═══════════════════════════════════════════ */}

      {/* Left card: ACA Coverage */}
      <g filter="url(#hiCardShadow)">
        <rect x="32" y="156" width="148" height="78" rx="16" fill="white" />
        {/* Top accent */}
        <rect x="32" y="156" width="148" height="6" rx="16" fill="#0052CC" />
        <rect x="32" y="160" width="148" height="2" fill="#0052CC" />
        {/* Icon circle */}
        <circle cx="62" cy="192" r="14" fill="#EFF6FF" />
        <path d="M62 184 L68 187 L68 196 C68 200 62 204 62 204 C62 204 56 200 56 196 L56 187 Z" fill="#0052CC" opacity="0.9" />
        <polyline points="58,195 61,198 66,191" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Text */}
        <text x="82" y="188" fontSize="11" fontWeight="700" fill="#0052CC" fontFamily="Work Sans, sans-serif">ACA Coverage</text>
        <text x="82" y="201" fontSize="9.5" fill="#64748B" fontFamily="Instrument Sans, sans-serif">Licensed agents</text>
        {/* Status dot */}
        <circle cx="163" cy="175" r="5.5" fill="#22C55E" />
        <text x="40" y="224" fontSize="9" fill="#0052CC" fontFamily="Instrument Sans, sans-serif" opacity="0.75">✓ 20+ carrier options</text>
      </g>

      {/* Right card: Life Insurance */}
      <g filter="url(#hiCardShadow)">
        <rect x="394" y="144" width="148" height="78" rx="16" fill="white" />
        {/* Top accent */}
        <rect x="394" y="144" width="148" height="6" rx="16" fill="#F97316" />
        <rect x="394" y="148" width="148" height="2" fill="#F97316" />
        {/* Heart icon */}
        <circle cx="422" cy="181" r="14" fill="#FFF7ED" />
        <path d="M422 189 C422 189 413 183 413 177 C413 173 416 171 419 171 C420.5 171 422 172.5 422 172.5 C422 172.5 423.5 171 425 171 C428 171 431 173 431 177 C431 183 422 189 422 189 Z" fill="#F97316" opacity="0.9" />
        {/* Text */}
        <text x="442" y="176" fontSize="11" fontWeight="700" fill="#0052CC" fontFamily="Work Sans, sans-serif">Life Insurance</text>
        <text x="442" y="189" fontSize="9.5" fill="#64748B" fontFamily="Instrument Sans, sans-serif">Family protection</text>
        <circle cx="524" cy="157" r="5.5" fill="#0052CC" />
        <text x="400" y="213" fontSize="9" fill="#0052CC" fontFamily="Instrument Sans, sans-serif" opacity="0.75">✓ Term &amp; whole life</text>
      </g>

      {/* Small badge bottom-right */}
      <g filter="url(#hiBadgeShadow)" transform="translate(442, 332)">
        <rect width="100" height="50" rx="14" fill="white" />
        <text x="12" y="20" fontSize="9.5" fill="#64748B" fontFamily="Instrument Sans, sans-serif">Licensed in</text>
        <text x="12" y="36" fontSize="11.5" fontWeight="700" fill="#0052CC" fontFamily="Work Sans, sans-serif">All 50 States</text>
        <circle cx="84" cy="16" r="8" fill="#EFF6FF" stroke="#0052CC" strokeWidth="1.5" />
        <polyline points="80,16 83,19 88,12" stroke="#0052CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
