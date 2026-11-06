import React from 'react'

export default function IconCircle({
  icon: Icon,
  color = 'teal', // 'teal' | 'yellow' | 'orange' | 'navy'
  size = 'md', // 'sm' (40px) | 'md' (48px) | 'lg' (56px)
  className = ""
}) {
  const sizeMap = {
    sm: "w-10 h-10 min-w-[40px]",
    md: "w-12 h-12 min-w-[48px]",
    lg: "w-14 h-14 min-w-[56px]"
  }

  const iconSizeMap = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7"
  }

  const colorMap = {
    teal: "bg-teal text-white",
    yellow: "bg-yellow text-white",
    orange: "bg-orange text-white",
    navy: "bg-ink text-white",
    cream: "bg-hero text-teal border border-teal/20"
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 ${sizeMap[size] || sizeMap.md} ${colorMap[color] || colorMap.teal} ${className}`}
    >
      {Icon && <Icon className={iconSizeMap[size] || iconSizeMap.md} />}
    </div>
  )
}

