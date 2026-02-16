import React from 'react'

export default function Section({ id, as: Tag = 'section', className = '', innerClassName = '', children }) {
  const sectionClasses = ['section', className].filter(Boolean).join(' ')
  const innerClasses = ['section-inner', innerClassName].filter(Boolean).join(' ')

  return (
    <Tag id={id} className={sectionClasses}>
      <div className={innerClasses}>{children}</div>
    </Tag>
  )
}
