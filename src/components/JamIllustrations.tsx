import React from 'react';

// Tasteful, original inline SVG artwork for Magic Mig Jams
// Designed to look handcrafted, storybook-inspired, and refined.

export function BrandFairyLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Magic Mig fairy emblem">
      <defs>
        <radialGradient id="fairyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F7DE7C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#84A836" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft circular halo */}
      <circle cx="50" cy="50" r="44" stroke="#C59B4C" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="38" fill="url(#fairyGlow)" opacity="0.3" />
      
      {/* Crescent Moon */}
      <path d="M52 22C42 24 35 33 35 44C35 56 44 66 56 66C60 66 64 64.8 67 62.5C59 62 50 54 50 44C50 34 56 26 62 23C59 22.3 55.5 22 52 22Z" fill="#C59B4C" />
      
      {/* Fairy Silhouette */}
      {/* Body & limbs */}
      <circle cx="55" cy="36" r="3.2" fill="#8F4E05" />
      <path d="M55 39C55 39 52 46 54 52C55 55 58 58 60 62M54 44L47 48M55 46L62 49" stroke="#8F4E05" strokeWidth="1.6" strokeLinecap="round" />
      
      {/* Gossamer wings */}
      <path d="M54 42C47 35 40 37 43 44C45 48 53 44 54 42Z" fill="#9EC643" fillOpacity="0.6" stroke="#4B6700" strokeWidth="0.8" />
      <path d="M53 43C48 42 44 47 47 50C49 52 53 46 53 43Z" fill="#F4B8B9" fillOpacity="0.7" stroke="#C59B4C" strokeWidth="0.8" />
      
      {/* Star sparkles */}
      <path d="M30 28L31.5 32L35.5 33.5L31.5 35L30 39L28.5 35L24.5 33.5L28.5 32Z" fill="#F7DE7C" />
      <path d="M68 46L69 49L72 50L69 51L68 54L67 51L64 50L67 49Z" fill="#C59B4C" />
      <circle cx="48" cy="20" r="1.5" fill="#F7DE7C" />
      <circle cx="34" cy="58" r="1.2" fill="#F7DE7C" />
      <circle cx="68" cy="30" r="1.2" fill="#9EC643" />
    </svg>
  );
}

export function HeroJamDisplaySVG({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 460" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Whimsical handcrafted jam jar collection illustration">
      <defs>
        <linearGradient id="jarGlassHero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FAF7EF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="strawberryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E04D5F" />
          <stop offset="100%" stopColor="#9C1E2D" />
        </linearGradient>
        <linearGradient id="blueberryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4F69A2" />
          <stop offset="100%" stopColor="#223359" />
        </linearGradient>
        <linearGradient id="apricotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5B362" />
          <stop offset="100%" stopColor="#C97322" />
        </linearGradient>
        <linearGradient id="marmaladeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2984A" />
          <stop offset="100%" stopColor="#B85817" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Enchanted Garden Background Glow */}
      <ellipse cx="320" cy="270" rx="260" ry="140" fill="#FAF4DF" opacity="0.6" />
      <ellipse cx="320" cy="380" rx="280" ry="30" fill="#2C3528" opacity="0.08" />

      {/* Subtle Fairytale Garden Foliage and Sparkles */}
      <g stroke="#7E9986" strokeWidth="1.5" strokeLinecap="round" opacity="0.55">
        {/* Left leafy branch */}
        <path d="M80 340C95 290 130 250 170 230" />
        <path d="M120 280C105 270 100 255 110 248C120 245 130 260 120 280Z" fill="#C5DBC6" />
        <path d="M145 255C140 240 148 230 158 232C165 238 160 250 145 255Z" fill="#9EC643" opacity="0.5" />
        
        {/* Right leafy branch */}
        <path d="M560 340C540 290 500 250 460 230" />
        <path d="M520 280C535 270 540 255 530 248C520 245 510 260 520 280Z" fill="#C5DBC6" />
        <path d="M495 255C500 240 492 230 482 232C475 238 480 250 495 255Z" fill="#9EC643" opacity="0.5" />
      </g>

      {/* Golden stars & magic sparkles */}
      <g fill="#C59B4C">
        <path d="M140 130L143 140L153 143L143 146L140 156L137 146L127 143L137 140Z" />
        <path d="M500 130L503 138L511 141L503 144L500 152L497 144L489 141L497 138Z" opacity="0.8" />
        <path d="M320 80L323 88L331 91L323 94L320 102L317 94L309 91L317 88Z" fill="#F7DE7C" />
        <circle cx="210" cy="110" r="2.5" fill="#F7DE7C" />
        <circle cx="430" cy="115" r="2" fill="#F7DE7C" />
        <circle cx="370" cy="95" r="1.5" fill="#9EC643" />
        <circle cx="270" cy="100" r="1.5" fill="#C59B4C" />
      </g>

      {/* JAR 1: Strawberry (Left-most) */}
      <g transform="translate(90, 180)">
        {/* Shadow */}
        <ellipse cx="60" cy="185" rx="46" ry="10" fill="#2C3528" opacity="0.12" />
        {/* Jar Glass Body */}
        <rect x="20" y="45" width="80" height="135" rx="14" fill="url(#strawberryGrad)" />
        <rect x="20" y="45" width="80" height="135" rx="14" stroke="#C63D4E" strokeWidth="1.5" fillOpacity="0.9" />
        {/* Glass reflection highlight */}
        <path d="M26 55C26 55 30 110 30 160" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
        {/* Paper Label */}
        <rect x="28" y="75" width="64" height="75" rx="6" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1" />
        <path d="M34 82C40 82 50 80 60 80C70 80 80 82 86 82" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <text x="60" y="96" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="12" fontWeight="700">Magic Mig</text>
        <text x="60" y="107" textAnchor="middle" fill="#C63D4E" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="700" letterSpacing="1">STRAWBERRY</text>
        {/* Mini Strawberry Icon on Label */}
        <path d="M60 118C56 118 53 123 55 128C57 132 60 135 60 135C60 135 63 132 65 128C67 123 64 118 60 118Z" fill="#C63D4E" />
        <path d="M57 117C59 116 60 114 60 114C60 114 61 116 63 117" stroke="#4B6700" strokeWidth="1.2" strokeLinecap="round" />
        <text x="60" y="145" textAnchor="middle" fill="#596354" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="6.5">290g · Xylitol</text>
        {/* Jar Neck & Gold Gingham Lid */}
        <rect x="30" y="32" width="60" height="15" rx="4" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
        <ellipse cx="60" cy="32" rx="30" ry="7" fill="#F4B8B9" stroke="#C59B4C" strokeWidth="1.2" />
        {/* Tied twine ribbon */}
        <path d="M30 42C45 44 75 44 90 42" stroke="#8F4E05" strokeWidth="1.5" />
        <circle cx="60" cy="43" r="3" fill="#C59B4C" />
      </g>

      {/* JAR 2: Blueberry (Center-Left) */}
      <g transform="translate(195, 160)">
        {/* Shadow */}
        <ellipse cx="65" cy="205" rx="52" ry="11" fill="#2C3528" opacity="0.14" />
        {/* Jar Glass Body */}
        <rect x="20" y="50" width="90" height="150" rx="16" fill="url(#blueberryGrad)" />
        <rect x="20" y="50" width="90" height="150" rx="16" stroke="#364B7A" strokeWidth="1.5" />
        {/* Glass reflection */}
        <path d="M28 62C28 62 33 125 33 180" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        {/* Paper Label */}
        <rect x="29" y="85" width="72" height="85" rx="7" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1" />
        <path d="M36 93C44 93 60 91 65 91C75 91 87 93 94 93" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <text x="65" y="109" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="13" fontWeight="700">Magic Mig</text>
        <text x="65" y="121" textAnchor="middle" fill="#364B7A" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">BLUEBERRY</text>
        {/* Mini Blueberry icon on label */}
        <circle cx="61" cy="133" r="4" fill="#364B7A" />
        <circle cx="69" cy="133" r="4" fill="#4F69A2" />
        <circle cx="65" cy="138" r="4.2" fill="#223359" />
        <path d="M63 128C64 126 67 126 68 128" stroke="#7E9986" strokeWidth="1" />
        <text x="65" y="157" textAnchor="middle" fill="#596354" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7">290g · Xylitol</text>
        {/* Jar Neck & Gold/Blue Lid */}
        <rect x="32" y="35" width="66" height="18" rx="4" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
        <ellipse cx="65" cy="35" rx="33" ry="8" fill="#ADCBE3" stroke="#C59B4C" strokeWidth="1.2" />
        {/* Tied twine ribbon */}
        <path d="M32 46C47 48 83 48 98 46" stroke="#8F4E05" strokeWidth="1.5" />
        <circle cx="65" cy="47" r="3" fill="#C59B4C" />
      </g>

      {/* JAR 3: Apricot (Center-Right) */}
      <g transform="translate(325, 160)">
        {/* Shadow */}
        <ellipse cx="65" cy="205" rx="52" ry="11" fill="#2C3528" opacity="0.14" />
        {/* Jar Glass Body */}
        <rect x="20" y="50" width="90" height="150" rx="16" fill="url(#apricotGrad)" />
        <rect x="20" y="50" width="90" height="150" rx="16" stroke="#EE9D52" strokeWidth="1.5" />
        {/* Glass reflection */}
        <path d="M28 62C28 62 33 125 33 180" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        {/* Paper Label */}
        <rect x="29" y="85" width="72" height="85" rx="7" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1" />
        <path d="M36 93C44 93 60 91 65 91C75 91 87 93 94 93" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <text x="65" y="109" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="13" fontWeight="700">Magic Mig</text>
        <text x="65" y="121" textAnchor="middle" fill="#8F4E05" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">APRICOT</text>
        {/* Mini Apricot Icon on Label */}
        <circle cx="62" cy="135" r="5" fill="#EE9D52" />
        <circle cx="68" cy="135" r="4.8" fill="#F5B362" />
        <path d="M64 129C65 127 67 127 68 129" stroke="#7E9986" strokeWidth="1.2" />
        <text x="65" y="157" textAnchor="middle" fill="#596354" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7">290g · Xylitol</text>
        {/* Jar Neck & Butter Yellow Lid */}
        <rect x="32" y="35" width="66" height="18" rx="4" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
        <ellipse cx="65" cy="35" rx="33" ry="8" fill="#F7DE7C" stroke="#C59B4C" strokeWidth="1.2" />
        {/* Tied twine ribbon */}
        <path d="M32 46C47 48 83 48 98 46" stroke="#8F4E05" strokeWidth="1.5" />
        <circle cx="65" cy="47" r="3" fill="#C59B4C" />
      </g>

      {/* JAR 4: Orange Marmalade (Right-most) */}
      <g transform="translate(440, 180)">
        {/* Shadow */}
        <ellipse cx="60" cy="185" rx="46" ry="10" fill="#2C3528" opacity="0.12" />
        {/* Jar Glass Body */}
        <rect x="20" y="45" width="80" height="135" rx="14" fill="url(#marmaladeGrad)" />
        <rect x="20" y="45" width="80" height="135" rx="14" stroke="#E58237" strokeWidth="1.5" />
        {/* Glass reflection */}
        <path d="M26 55C26 55 30 110 30 160" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
        {/* Paper Label */}
        <rect x="28" y="75" width="64" height="75" rx="6" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1" />
        <path d="M34 82C40 82 50 80 60 80C70 80 80 82 86 82" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <text x="60" y="96" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="12" fontWeight="700">Magic Mig</text>
        <text x="60" y="106" textAnchor="middle" fill="#E58237" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="0.8">MARMALADE</text>
        {/* Mini Orange slice on label */}
        <path d="M52 130C52 125 68 125 68 130C68 135 52 135 52 130Z" fill="#F2984A" />
        <path d="M54 130C57 127 63 127 66 130" stroke="#FFF" strokeWidth="1" />
        <text x="60" y="145" textAnchor="middle" fill="#596354" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="6.5">290g · Xylitol</text>
        {/* Jar Neck & Warm Orange Lid */}
        <rect x="30" y="32" width="60" height="15" rx="4" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
        <ellipse cx="60" cy="32" rx="30" ry="7" fill="#EE9D52" stroke="#C59B4C" strokeWidth="1.2" />
        {/* Tied twine ribbon */}
        <path d="M30 42C45 44 75 44 90 42" stroke="#8F4E05" strokeWidth="1.5" />
        <circle cx="60" cy="43" r="3" fill="#C59B4C" />
      </g>

      {/* Fresh Fruit Foreground Accents */}
      {/* Strawberries on the left */}
      <g transform="translate(115, 345)">
        <path d="M12 8C7 8 2 15 5 22C8 28 12 32 12 32C12 32 16 28 19 22C22 15 17 8 12 8Z" fill="#C63D4E" />
        <circle cx="8" cy="16" r="0.8" fill="#F7DE7C" />
        <circle cx="12" cy="20" r="0.8" fill="#F7DE7C" />
        <circle cx="16" cy="15" r="0.8" fill="#F7DE7C" />
        <path d="M9 7C11 5 12 3 12 3C12 3 13 5 15 7" stroke="#4B6700" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Blueberries center */}
      <g transform="translate(260, 360)">
        <circle cx="10" cy="10" r="7" fill="#364B7A" />
        <circle cx="18" cy="8" r="6" fill="#4F69A2" />
        <circle cx="24" cy="13" r="6.5" fill="#223359" />
        <circle cx="10" cy="8" r="1.5" stroke="#ADCBE3" strokeWidth="0.8" fill="none" />
      </g>
      {/* Sliced Apricot */}
      <g transform="translate(370, 350)">
        <ellipse cx="14" cy="14" rx="12" ry="11" fill="#EE9D52" />
        <ellipse cx="14" cy="14" rx="8" ry="7" fill="#F5B362" />
        <ellipse cx="14" cy="14" rx="4" ry="4" fill="#8F4E05" />
      </g>
      {/* Sliced Orange on right */}
      <g transform="translate(480, 345)">
        <path d="M0 24C0 10 14 0 28 0C42 0 56 10 56 24Z" fill="#E58237" />
        <path d="M4 22C4 12 16 4 28 4C40 4 52 12 52 22Z" fill="#FFF7E6" />
        <path d="M6 21C6 13 17 6 28 6C39 6 50 13 50 21Z" fill="#F2984A" />
        {/* Citrus segments */}
        <line x1="28" y1="21" x2="28" y2="7" stroke="#FFF7E6" strokeWidth="1.2" />
        <line x1="28" y1="21" x2="16" y2="10" stroke="#FFF7E6" strokeWidth="1.2" />
        <line x1="28" y1="21" x2="40" y2="10" stroke="#FFF7E6" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// Dedicated Flavour SVG Illustrations for individual cards

export function StrawberryJarIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Strawberry jam jar illustration">
      <defs>
        <linearGradient id="strawJarBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DF4557" />
          <stop offset="60%" stopColor="#B32334" />
          <stop offset="100%" stopColor="#800D1C" />
        </linearGradient>
        <radialGradient id="strawBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE8EA" />
          <stop offset="100%" stopColor="#FAF7EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft circular background glow */}
      <circle cx="140" cy="140" r="120" fill="url(#strawBgGlow)" />
      
      {/* Decorative botanical branch & wild blossoms */}
      <path d="M45 210C65 170 95 140 120 125" stroke="#7E9986" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M70 175C55 168 50 152 60 148C70 145 78 158 70 175Z" fill="#C5DBC6" opacity="0.8" />
      <path d="M95 150C85 140 92 128 100 130C108 135 105 145 95 150Z" fill="#9EC643" opacity="0.5" />
      
      {/* Fairytale sparkles */}
      <path d="M70 70L72 77L79 79L72 81L70 88L68 81L61 79L68 77Z" fill="#C59B4C" />
      <circle cx="215" cy="85" r="2" fill="#F7DE7C" />
      <circle cx="225" cy="180" r="1.5" fill="#F4B8B9" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="242" rx="60" ry="12" fill="#2C3528" opacity="0.12" />

      {/* Glass Jar Body */}
      <rect x="85" y="70" width="110" height="165" rx="20" fill="url(#strawJarBody)" stroke="#C63D4E" strokeWidth="1.5" />
      {/* High-sheen reflection curve */}
      <path d="M96 85C96 85 102 150 102 215" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

      {/* Vintage scalloped label */}
      <rect x="96" y="105" width="88" height="98" rx="8" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1.2" />
      <path d="M104 113C115 113 130 111 140 111C150 111 165 113 176 113" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="140" y="132" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="17" fontWeight="700">Magic Mig</text>
      <text x="140" y="146" textAnchor="middle" fill="#C63D4E" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.2">STRAWBERRY</text>
      <text x="140" y="157" textAnchor="middle" fill="#596354" fontFamily="'Caveat', cursive" fontSize="11" fontStyle="italic">The Secret Garden</text>
      
      {/* Heartfelt Strawberry Icon */}
      <path d="M140 166C134 166 130 173 133 180C136 185 140 189 140 189C140 189 144 185 147 180C150 173 146 166 140 166Z" fill="#C63D4E" />
      <circle cx="137" cy="173" r="0.7" fill="#F7DE7C" />
      <circle cx="140" cy="177" r="0.7" fill="#F7DE7C" />
      <circle cx="143" cy="172" r="0.7" fill="#F7DE7C" />
      <path d="M136 165C138 163 140 161 140 161C140 161 142 163 144 165" stroke="#4B6700" strokeWidth="1.2" strokeLinecap="round" />
      <text x="140" y="196" textAnchor="middle" fill="#757968" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="600">290g · Xylitol</text>

      {/* Jar Lid & Ribbon */}
      <rect x="98" y="52" width="84" height="20" rx="5" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
      <ellipse cx="140" cy="52" rx="42" ry="10" fill="#F4B8B9" stroke="#C59B4C" strokeWidth="1.2" />
      <path d="M98 67C118 70 162 70 182 67" stroke="#8F4E05" strokeWidth="1.6" />
      <circle cx="140" cy="68" r="3.5" fill="#C59B4C" />

      {/* Strawberry fruit in front */}
      <g transform="translate(180, 205)">
        <path d="M15 10C8 10 3 18 6 27C10 34 15 39 15 39C15 39 20 34 24 27C27 18 22 10 15 10Z" fill="#C63D4E" />
        <circle cx="10" cy="20" r="1" fill="#F7DE7C" />
        <circle cx="15" cy="25" r="1" fill="#F7DE7C" />
        <circle cx="20" cy="19" r="1" fill="#F7DE7C" />
        <path d="M11 9C13 6 15 4 15 4C15 4 17 6 19 9" stroke="#4B6700" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function BlueberryJarIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Blueberry jam jar illustration">
      <defs>
        <linearGradient id="blueJarBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A659E" />
          <stop offset="60%" stopColor="#2A3D68" />
          <stop offset="100%" stopColor="#17223D" />
        </linearGradient>
        <radialGradient id="blueBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EBF2FA" />
          <stop offset="100%" stopColor="#FAF7EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="140" cy="140" r="120" fill="url(#blueBgGlow)" />
      
      {/* Crescent moon and celestial forest stars */}
      <path d="M68 62C60 64 54 72 54 81C54 91 62 99 72 99C75 99 78 98 81 96C74 95 67 89 67 81C67 73 72 66 77 63C74 62.3 71 62 68 62Z" fill="#C59B4C" />
      <path d="M210 65L212 72L219 74L212 76L210 83L208 76L201 74L208 72Z" fill="#F7DE7C" />
      <circle cx="50" cy="145" r="1.5" fill="#F7DE7C" />
      <circle cx="225" cy="120" r="2" fill="#ADCBE3" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="242" rx="60" ry="12" fill="#2C3528" opacity="0.12" />

      {/* Glass Jar Body */}
      <rect x="85" y="70" width="110" height="165" rx="20" fill="url(#blueJarBody)" stroke="#364B7A" strokeWidth="1.5" />
      {/* Glass sheen */}
      <path d="M96 85C96 85 102 150 102 215" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

      {/* Vintage label */}
      <rect x="96" y="105" width="88" height="98" rx="8" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1.2" />
      <path d="M104 113C115 113 130 111 140 111C150 111 165 113 176 113" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="140" y="132" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="17" fontWeight="700">Magic Mig</text>
      <text x="140" y="146" textAnchor="middle" fill="#364B7A" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.2">BLUEBERRY</text>
      <text x="140" y="157" textAnchor="middle" fill="#596354" fontFamily="'Caveat', cursive" fontSize="11" fontStyle="italic">The Moonlight Forest</text>
      
      {/* Blueberry cluster on label */}
      <circle cx="134" cy="174" r="5" fill="#364B7A" />
      <circle cx="146" cy="174" r="5" fill="#4F69A2" />
      <circle cx="140" cy="181" r="5.5" fill="#223359" />
      <circle cx="140" cy="178" r="1.5" stroke="#ADCBE3" strokeWidth="0.8" fill="none" />
      <path d="M137 167C138 165 142 165 143 167" stroke="#7E9986" strokeWidth="1.2" />
      <text x="140" y="196" textAnchor="middle" fill="#757968" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="600">290g · Xylitol</text>

      {/* Jar Lid & Ribbon */}
      <rect x="98" y="52" width="84" height="20" rx="5" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
      <ellipse cx="140" cy="52" rx="42" ry="10" fill="#ADCBE3" stroke="#C59B4C" strokeWidth="1.2" />
      <path d="M98 67C118 70 162 70 182 67" stroke="#8F4E05" strokeWidth="1.6" />
      <circle cx="140" cy="68" r="3.5" fill="#C59B4C" />

      {/* Wild blueberries clustered in front */}
      <g transform="translate(175, 215)">
        <circle cx="12" cy="12" r="8.5" fill="#364B7A" />
        <circle cx="24" cy="10" r="7.5" fill="#4F69A2" />
        <circle cx="30" cy="18" r="8" fill="#223359" />
        <circle cx="12" cy="10" r="2" stroke="#ADCBE3" strokeWidth="1" fill="none" />
        <circle cx="30" cy="16" r="2" stroke="#ADCBE3" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}

export function ApricotJarIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Apricot jam jar illustration">
      <defs>
        <linearGradient id="apricotJarBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5B258" />
          <stop offset="60%" stopColor="#DE892C" />
          <stop offset="100%" stopColor="#A85710" />
        </linearGradient>
        <radialGradient id="apricotBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF4D9" />
          <stop offset="100%" stopColor="#FAF7EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="140" cy="140" r="120" fill="url(#apricotBgGlow)" />
      
      {/* Sunburst motif & orchard blossoms */}
      <path d="M60 70L65 78L74 80L65 82L60 90L55 82L46 80L55 78Z" fill="#F7DE7C" />
      <circle cx="70" cy="60" r="2" fill="#EE9D52" />
      <circle cx="215" cy="75" r="3" fill="#C59B4C" />
      <circle cx="225" cy="160" r="1.5" fill="#F7DE7C" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="242" rx="60" ry="12" fill="#2C3528" opacity="0.12" />

      {/* Glass Jar Body */}
      <rect x="85" y="70" width="110" height="165" rx="20" fill="url(#apricotJarBody)" stroke="#EE9D52" strokeWidth="1.5" />
      {/* Glass sheen */}
      <path d="M96 85C96 85 102 150 102 215" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

      {/* Vintage label */}
      <rect x="96" y="105" width="88" height="98" rx="8" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1.2" />
      <path d="M104 113C115 113 130 111 140 111C150 111 165 113 176 113" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="140" y="132" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="17" fontWeight="700">Magic Mig</text>
      <text x="140" y="146" textAnchor="middle" fill="#8F4E05" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.2">APRICOT</text>
      <text x="140" y="157" textAnchor="middle" fill="#596354" fontFamily="'Caveat', cursive" fontSize="11" fontStyle="italic">The Sunrise Orchard</text>
      
      {/* Apricot Icon on label */}
      <circle cx="136" cy="174" r="6" fill="#EE9D52" />
      <circle cx="144" cy="174" r="5.8" fill="#F5B258" />
      <path d="M138 166C139 164 142 164 143 166" stroke="#7E9986" strokeWidth="1.2" />
      <text x="140" y="196" textAnchor="middle" fill="#757968" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="600">290g · Xylitol</text>

      {/* Jar Lid & Ribbon */}
      <rect x="98" y="52" width="84" height="20" rx="5" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
      <ellipse cx="140" cy="52" rx="42" ry="10" fill="#F7DE7C" stroke="#C59B4C" strokeWidth="1.2" />
      <path d="M98 67C118 70 162 70 182 67" stroke="#8F4E05" strokeWidth="1.6" />
      <circle cx="140" cy="68" r="3.5" fill="#C59B4C" />

      {/* Fresh Apricot halves in front */}
      <g transform="translate(178, 208)">
        <ellipse cx="16" cy="16" rx="14" ry="13" fill="#EE9D52" />
        <ellipse cx="16" cy="16" rx="9" ry="8" fill="#F5B258" />
        <ellipse cx="16" cy="16" rx="5" ry="4.5" fill="#8F4E05" />
      </g>
    </svg>
  );
}

export function MarmaladeJarIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Orange marmalade jam jar illustration">
      <defs>
        <linearGradient id="marmaladeJarBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F79F43" />
          <stop offset="60%" stopColor="#DE721D" />
          <stop offset="100%" stopColor="#A8430A" />
        </linearGradient>
        <radialGradient id="marmaladeBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEEDC" />
          <stop offset="100%" stopColor="#FAF7EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="140" cy="140" r="120" fill="url(#marmaladeBgGlow)" />
      
      {/* Coastal breeze wavelets & stars */}
      <path d="M48 90C55 86 65 92 72 88C78 84 85 88 92 84" stroke="#ADCBE3" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M205 65L208 72L215 74L208 76L205 83L202 76L195 74L202 72Z" fill="#F7DE7C" />
      <circle cx="65" cy="65" r="2" fill="#E58237" />
      <circle cx="225" cy="155" r="2" fill="#C59B4C" />

      {/* Jar shadow */}
      <ellipse cx="140" cy="242" rx="60" ry="12" fill="#2C3528" opacity="0.12" />

      {/* Glass Jar Body */}
      <rect x="85" y="70" width="110" height="165" rx="20" fill="url(#marmaladeJarBody)" stroke="#E58237" strokeWidth="1.5" />
      {/* Visible tender citrus peel ribbons inside jam */}
      <path d="M105 110C110 115 112 125 108 130" stroke="#FFF7E6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M165 140C170 148 168 158 162 165" stroke="#FFF7E6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M120 180C125 186 135 188 140 185" stroke="#FFF7E6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Glass sheen */}
      <path d="M96 85C96 85 102 150 102 215" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

      {/* Vintage label */}
      <rect x="96" y="105" width="88" height="98" rx="8" fill="#FFFDF8" stroke="#E2DAC9" strokeWidth="1.2" />
      <path d="M104 113C115 113 130 111 140 111C150 111 165 113 176 113" stroke="#C59B4C" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="140" y="132" textAnchor="middle" fill="#8F4E05" fontFamily="'Caveat', cursive" fontSize="17" fontWeight="700">Magic Mig</text>
      <text x="140" y="146" textAnchor="middle" fill="#E58237" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.8">ORANGE MARMALADE</text>
      <text x="140" y="157" textAnchor="middle" fill="#596354" fontFamily="'Caveat', cursive" fontSize="11" fontStyle="italic">The Coastal Dream</text>
      
      {/* Orange slice icon on label */}
      <path d="M130 178C130 171 150 171 150 178C150 185 130 185 130 178Z" fill="#F2984A" />
      <path d="M132 178C135 174 145 174 148 178" stroke="#FFF" strokeWidth="1" />
      <text x="140" y="196" textAnchor="middle" fill="#757968" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="600">290g · Xylitol</text>

      {/* Jar Lid & Ribbon */}
      <rect x="98" y="52" width="84" height="20" rx="5" fill="#C59B4C" stroke="#8F4E05" strokeWidth="1" />
      <ellipse cx="140" cy="52" rx="42" ry="10" fill="#EE9D52" stroke="#C59B4C" strokeWidth="1.2" />
      <path d="M98 67C118 70 162 70 182 67" stroke="#8F4E05" strokeWidth="1.6" />
      <circle cx="140" cy="68" r="3.5" fill="#C59B4C" />

      {/* Orange wheel slice in front */}
      <g transform="translate(175, 205)">
        <path d="M0 24C0 10 14 0 28 0C42 0 56 10 56 24Z" fill="#E58237" />
        <path d="M4 22C4 12 16 4 28 4C40 4 52 12 52 22Z" fill="#FFF7E6" />
        <path d="M6 21C6 13 17 6 28 6C39 6 50 13 50 21Z" fill="#F2984A" />
        <line x1="28" y1="21" x2="28" y2="7" stroke="#FFF7E6" strokeWidth="1.2" />
        <line x1="28" y1="21" x2="16" y2="10" stroke="#FFF7E6" strokeWidth="1.2" />
        <line x1="28" y1="21" x2="40" y2="10" stroke="#FFF7E6" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// Aliases matching component imports
export const StrawberryJarSVG = StrawberryJarIllustration;
export const BlueberryJarSVG = BlueberryJarIllustration;
export const ApricotJarSVG = ApricotJarIllustration;
export const OrangeMarmaladeJarSVG = MarmaladeJarIllustration;

// Subtle enchanted garden and fairytale hill backdrop silhouette
export function FairytaleGardenSilhouette({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="gardenSilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#84A836" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#84A836" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#84A836" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Soft rolling hills of Southern Peninsula & enchanted trees */}
      <path
        d="M0 160C120 120 240 180 380 135C520 90 640 145 780 115C920 85 1060 130 1200 100V240H0V160Z"
        fill="url(#gardenSilGrad)"
      />
      
      {/* Fairytale castle spire silhouette in distance */}
      <g opacity="0.18" fill="#4B6700">
        <path d="M600 65L608 85H592L600 65Z" />
        <rect x="596" y="85" width="8" height="30" />
        <rect x="588" y="100" width="24" height="25" rx="2" />
        <path d="M584 95L588 100H580L584 95Z" />
        <path d="M616 95L620 100H612L616 95Z" />
      </g>
      
      {/* Subtle garden treetops */}
      <path
        d="M80 180C90 165 110 165 120 180C130 168 150 168 160 180M320 160C330 148 350 148 360 160M850 150C860 135 885 135 895 150C905 138 925 138 935 150"
        stroke="#84A836"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      
      {/* Scattered twinkling night/morning stars */}
      <g fill="#C59B4C" opacity="0.4">
        <path d="M220 50L221.5 54L225.5 55.5L221.5 57L220 61L218.5 57L214.5 55.5L218.5 54Z" />
        <path d="M450 35L451.5 39L455.5 40.5L451.5 42L450 46L448.5 42L444.5 40.5L448.5 39Z" />
        <path d="M780 40L781.5 44L785.5 45.5L781.5 47L780 51L778.5 47L774.5 45.5L778.5 44Z" />
        <path d="M1020 60L1021.5 64L1025.5 65.5L1021.5 67L1020 71L1018.5 67L1014.5 65.5L1018.5 64Z" />
      </g>
    </svg>
  );
}

