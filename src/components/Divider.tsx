import React from 'react'

const Divider = ({ color, size }: { color?: string, size: number }) => {
  return (
    <div className={`border-${size} border-${color}`} />
  )
}

export default Divider