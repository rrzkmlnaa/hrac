import React from 'react'

const Stack = ({ gap, children }: { gap: number, children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col gap-${gap}`}>{children}</div>
  )
}

export default Stack