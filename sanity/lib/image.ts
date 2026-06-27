import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './client'

// ─── Image URL builder ────────────────────────────────────────────────────

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ─── Typed helper for common image transformations ────────────────────────

interface ImageOptions {
  width?:   number
  height?:  number
  quality?: number
  /** 'webp' is recommended for all modern browsers */
  format?:  'webp' | 'jpg' | 'png' | 'auto'
  fit?:     'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
}

/**
 * Returns an absolute image URL with standard transformations applied.
 *
 * Usage:
 *   <Image src={buildImageUrl(member.photo, { width: 640, height: 800 })} />
 */
export function buildImageUrl(
  source: SanityImageSource | undefined | null,
  options: ImageOptions = {},
): string {
  if (!source) return '/placeholder-portrait.jpg'

  const {
    width   = 800,
    height,
    quality = 85,
    format  = 'webp',
    fit     = 'crop',
  } = options

  let img = urlFor(source).width(width).quality(quality).fit(fit)
  if (height) img = img.height(height)
  if (format !== 'auto') img = img.format(format)

  return img.url()
}

// ─── Blur placeholder (low-quality image preview) ─────────────────────────

/**
 * Returns a tiny base64-ish URL for the `blurDataURL` prop in next/image.
 * This is a 20x20 version of the image at very low quality.
 */
export function buildBlurUrl(
  source: SanityImageSource | undefined | null,
): string | undefined {
  if (!source) return undefined

  return urlFor(source)
    .width(20)
    .height(20)
    .quality(20)
    .blur(10)
    .format('webp')
    .url()
}
