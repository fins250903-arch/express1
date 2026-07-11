// Build-time timestamp used as the "last updated" signal for AEO/SEO.
// Because the site is statically generated and redeployed on every content
// change, this value always reflects the latest deployment date.
const now = new Date();

// Calendar date parts resolved in Japan Standard Time (Asia/Tokyo),
// so the displayed date matches the site's Japanese audience regardless
// of the build server timezone (Vercel builds run in UTC).
const jstParts = new Intl.DateTimeFormat('ja-JP', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}).formatToParts(now);

const getPart = (type: 'year' | 'month' | 'day') =>
  jstParts.find((part) => part.type === type)?.value ?? '';

const year = getPart('year');
const month = getPart('month');
const day = getPart('day');

// Human-readable date for on-page display, e.g. "2026年7月11日".
export const buildDateDisplayJa = `${year}年${month}月${day}日`;

// ISO date (YYYY-MM-DD, JST) for schema.org dateModified / sitemap lastmod.
export const buildDateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
