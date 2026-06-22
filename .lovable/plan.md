## Changes

### 1. Revert navbar (`src/components/Header.tsx`)
Restore the original 4-item nav structure (before IT Services was added as a 5th item):
- Life Sciences Expertise (`/services`)
- ROSETTA Product Suite (`/products`)
- AI-Powered Solutions (`/ai-solutions`)
- Global Delivery (`/about`)

Remove the standalone `IT Services` entry from `navItems`. Everything else (mobile menu behavior, dropdown, styling) stays as-is.

### 2. Add IT Services card to homepage (`src/pages/Index.tsx`)
In the dark blue card strip (currently 4 columns: Life Sciences Expertise / ROSETTA Product Suite / AI-Powered Solutions / Global Delivery), insert **IT Services** as the 3rd card, producing this left-to-right order:

1. Life Sciences Expertise
2. ROSETTA Product Suite
3. **IT Services** (new)
4. AI-Powered Solutions
5. Global Delivery

The new card:
- Title: `IT Services`
- Description: `From the very start of a project, application-specific critical success factors are addressed with an eye toward solving a business problem or automating a business process.`
- Link label: `View IT Services`
- Link path: `/services/it-services`

Update the grid classes from `lg:grid-cols-4` to `lg:grid-cols-5` so all five cards sit side-by-side on large screens (with `md:grid-cols-2` still applying on tablet).
