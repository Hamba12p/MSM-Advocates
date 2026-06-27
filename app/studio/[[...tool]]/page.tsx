/**
 * Sanity Studio embedded at /studio
 *
 * This route is inactive until NEXT_PUBLIC_SANITY_PROJECT_ID is set.
 * Visit /studio after adding your Sanity credentials to .env.local.
 */

'use client'

import { useEffect, useState } from 'react'

function NotConfigured() {
  return (
    <div className="min-h-screen bg-msm-cream flex items-center justify-center px-6">
      <div className="max-w-md">
        <div className="w-8 h-[3px] bg-msm-gold rounded-full mb-6" />
        <h1 className="font-serif text-2xl text-msm-slate mb-3">
          Sanity Studio not configured
        </h1>
        <p className="font-sans text-sm text-msm-steel leading-relaxed mb-5">
          Add your Sanity project credentials to{' '}
          <code className="bg-msm-mist/20 px-1 py-0.5 rounded text-xs">.env.local</code>{' '}
          to enable the CMS.
        </p>
        <pre className="bg-msm-slate text-msm-mist text-xs p-4 rounded-sm leading-relaxed overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token`}
        </pre>
        <p className="font-sans text-xs text-msm-mist mt-4">
          Create a project at{' '}
          <a
            href="https://sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-msm-gold hover:underline"
          >
            sanity.io/manage
          </a>
        </p>
      </div>
    </div>
  )
}

export default function StudioPage() {
  const [configured, setConfigured] = useState(false)
  const [Studio, setStudio]         = useState<React.ComponentType | null>(null)

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    if (!id || id === 'placeholder') return

    setConfigured(true)

    // Dynamically import to avoid loading Sanity Studio bundle when unconfigured
    Promise.all([
      import('next-sanity/studio').then((m) => m.NextStudio),
      import('@/sanity.config').then((m) => m.default),
    ]).then(([NextStudio, config]) => {
      const Wrapped = () => <NextStudio config={config} />
      Wrapped.displayName = 'SanityStudio'
      setStudio(() => Wrapped)
    })
  }, [])

  if (!configured) return <NotConfigured />
  if (!Studio)     return <div className="min-h-screen bg-msm-cream" />
  return <Studio />
}
