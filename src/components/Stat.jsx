import React from 'react'

export default function Stat({
  value,
  label,
  highlight,
  className = ""
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-ink leading-none tracking-tight">
        {value}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-medium text-ink-soft leading-snug">
        {label}
      </span>
      {highlight && (
        <span className="text-[11px] text-teal font-semibold mt-0.5 uppercase tracking-wide">
          {highlight}
        </span>
      )}
    </div>
  )
}

