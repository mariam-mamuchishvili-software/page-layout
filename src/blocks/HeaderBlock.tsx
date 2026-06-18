import type { ReactNode } from 'react'

interface Props {
  title: ReactNode
  subtitle: ReactNode
}

export default function HeaderBlock({ title, subtitle }: Props) {
  return (
    <header data-layout-structure="block">
      <h2 className="section-title" data-content="title">
        {title}
      </h2>
      <h4 className="section-subtitle" data-content="subtitle">
        {subtitle}
      </h4>
    </header>
  )
}
