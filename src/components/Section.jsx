import React from 'react'

export default function Section({ id, as: Tag = 'section', className = '', innerClassName = '', children }) {
  const sectionClasses = ['section', 'scroll-mt-28 md:scroll-mt-32', className].filter(Boolean).join(' ')
  const innerClasses = ['section-inner', innerClassName].filter(Boolean).join(' ')

  return (
    <Tag id={id} className={sectionClasses}>
      <div className={innerClasses}>{children}</div>
    </Tag>
  )
}
