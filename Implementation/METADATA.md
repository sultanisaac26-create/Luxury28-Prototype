# Robust Website Metadata Implementation Plan

## Overview
This document outlines the strategy for implementing comprehensive SEO and social media metadata for the Luxury28 website. The goal is to replace the default/generic platform previews (e.g., Bolt/v0.app) with a custom, high-quality snapshot of the website, ensuring a premium brand presentation across search engines and social platforms (Twitter, Facebook, LinkedIn, iMessage, etc.).

## Phase 1: Asset Generation (Website Snapshot)
To replace the default previews, we need a high-quality visual representation of the Luxury28 website.
1. **Capture Snapshot**: We will capture a high-resolution screenshot (1200x630 pixels) of the homepage, highlighting the premium design and luxury timepieces. *(Note: I can generate a placeholder or capture this using a browser agent during the implementation phase).*
2. **Asset Placement**: 
   - Place the snapshot in the `public` or `app` directory as `opengraph-image.jpg` (or `.png`) and `twitter-image.jpg`.
   - Ensure the image is optimized for fast loading while maintaining visual fidelity.

## Phase 2: Global Metadata Configuration (`app/layout.tsx`)
We will update the root layout to include a complete and robust `Metadata` object using Next.js 14+ App Router standards.

**Key Changes:**
- **Remove Defaults**: Remove `generator: 'v0.app'` to strip out Bolt/v0 generic preview signatures.
- **Base URL**: Define `metadataBase: new URL('https://luxury28.com')` (or the actual production domain) so social crawlers can resolve image URLs properly.
- **Basic Info**: Expand `applicationName`, `authors`, `creator`, and `publisher`.
- **Open Graph (OG)**: Fully populate the `openGraph` object:
  - `title`, `description`, `url`, `siteName`
  - `locale: 'en_US'`
  - `type: 'website'`
  - `images`: Explicitly link to our new snapshot.
- **Twitter / X Cards**: Add the `twitter` object:
  - `card: 'summary_large_image'` (Ensures the snapshot displays prominently)
  - `title`, `description`, `images`, `creator`
- **Robots & SEO**: Add `robots` configurations (`index: true, follow: true`) to ensure search engines crawl the site properly.

## Phase 3: Page-Specific Metadata (Dynamic)
To ensure that shared links for specific products look tailored rather than generic:
1. **Dynamic Generation**: Implement `generateMetadata` in dynamic routes (e.g., `app/products/[id]/page.tsx` or similar).
2. **Product Details**: Pass the specific product's name, description, and primary image to the metadata for highly targeted social previews.

## Phase 4: Structural SEO Additions
To round out the "robust" requirement, we will ensure structural SEO files are in place:
1. **`robots.txt`**: Create `app/robots.ts` to instruct crawlers on what to index.
2. **`sitemap.xml`**: Create `app/sitemap.ts` to dynamically generate a sitemap of all main pages and products.
3. **Manifest (Optional but recommended)**: Add a `manifest.json` or `manifest.ts` for PWA functionality and better mobile OS integration.

## Next Steps
Once you approve this plan, I will proceed to:
1. Obtain/create the website snapshot asset.
2. Modify `app/layout.tsx` to implement the global metadata.
3. Create the necessary SEO files (`robots.ts`, `sitemap.ts`).
