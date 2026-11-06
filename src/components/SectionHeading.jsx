import React from 'react'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = ""
}) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase text-teal bg-teal-light rounded-full border border-teal/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-ink-soft leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

