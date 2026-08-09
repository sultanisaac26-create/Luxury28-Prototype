import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/staff/', '/customer/', '/admin/'],
    },
    sitemap: 'https://luxury28-prototype.vercel.app/sitemap.xml',
  }
}
