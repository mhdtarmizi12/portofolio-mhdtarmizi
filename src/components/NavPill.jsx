import React from 'react'

export default function NavPill({
  children,
  href,
  active = false,
  onClick,
  className = ""
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
        active
          ? "border border-teal text-teal bg-teal-light/50"
          : "border border-transparent text-ink-soft hover:text-ink hover:bg-black/5"
      } ${className}`}
    >
      {children}
    </a>
  )
}

