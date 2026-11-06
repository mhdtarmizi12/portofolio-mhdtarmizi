import React from 'react'

export default function Button({
  children,
  variant = 'solid', // 'solid' | 'outline' | 'orange' | 'link' | 'white'
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  download = false,
  target,
  rel,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer text-sm sm:text-base"

  const variantStyles = {
    solid: "bg-teal hover:bg-teal-hover text-white rounded-full px-6 py-2.5 sm:py-3 shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white rounded-full px-6 py-2.5 sm:py-3 hover:-translate-y-0.5 active:translate-y-0",
    orange: "bg-orange hover:bg-orange-hover text-white rounded-full px-6 py-2.5 sm:py-3 shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    white: "bg-white text-ink hover:text-teal rounded-full px-6 py-2.5 sm:py-3 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 border border-line/60",
    link: "text-orange hover:text-orange-hover font-semibold underline underline-offset-4 p-0 decoration-2 transition-opacity hover:opacity-90",
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.solid} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        download={download}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={target === '_blank' || href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {content}
    </button>
  )
}

