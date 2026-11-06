import React from 'react'

/**
 * BrushStroke SVG: Coretan kuas organik khas gaya referensi DESIGN.md
 * Ditempatkan di belakang foto profil cut-out Mhd. Tarmizi
 */
export default function BrushStroke({ 
  className = "", 
  color = "#1F6B5C", 
  opacity = 0.95 
}) {
  return (
    <svg
      viewBox="0 0 600 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="brushRough" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      {/* Coretan kuas bertekstur tebal dengan lekukan artistik */}
      <path
        d="M 60,180 
           C 90,130 180,90 280,75 
           C 380,60 480,95 530,150 
           C 575,200 560,280 520,340 
           C 475,405 380,430 270,425 
           C 160,420 80,370 50,300 
           C 30,250 40,210 60,180 Z"
        fill={color}
        fillOpacity={opacity}
        filter="url(#brushRough)"
      />
      {/* Sapuan kuas sekunder untuk tekstur dinamis */}
      <path
        d="M 110,140 
           C 200,95 320,80 430,110 
           C 510,130 550,190 540,260 
           C 530,330 460,390 360,410 
           C 240,430 120,380 90,310 
           C 70,260 80,180 110,140 Z"
        fill={color}
        fillOpacity={0.4}
      />
      {/* Coretan aksen atas */}
      <path
        d="M 180,65 C 290,45 420,55 490,85 C 470,95 350,90 210,80 Z"
        fill={color}
        fillOpacity={0.8}
      />
    </svg>
  )
}

