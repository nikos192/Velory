import React from 'react'

export default function GlassCard({ className = '', children }) {
  const classes = ['glass-card', className].filter(Boolean).join(' ')

  return <div className={classes}>{children}</div>
}
