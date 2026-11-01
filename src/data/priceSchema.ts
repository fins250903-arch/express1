export type PriceTableRow = {
  menu: string;
  desc?: string;
  price: string;
};

export type ServiceOffer = {
  '@type': 'Offer';
  itemOffered: {
    '@type': 'Service';
    name: string;
    description?: string;
  };
  price: string;
  priceCurrency: 'JPY';
};

/** Visible labels look like "29,000円〜". Returns the numeric yen amount. */
export function parseYenAmount(priceLabel: string): number {
  const digits = priceLabel.replace(/[^\d]/g, '');
  if (!digits) {
    throw new Error(`Cannot parse yen amount from "${priceLabel}"`);
  }
  return Number(digits);
}

/** LocalBusiness.priceRange, matching the existing "¥28,000〜" style. */
export function formatPriceRange(minYen: number): string {
  const grouped = minYen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `¥${grouped}〜`;
}

function offerName(menu: string): string {
  return menu.replace(/^🏆\s*/, '').trim();
}

/** One Offer per visible price-table row. Price is the listed starting amount. */
export function offersFromPriceTable(rows: readonly PriceTableRow[]): ServiceOffer[] {
  return rows.map((row) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: offerName(row.menu),
      ...(row.desc ? { description: row.desc } : {}),
    },
    price: String(parseYenAmount(row.price)),
    priceCurrency: 'JPY',
  }));
}

/** Lowest starting price on the visible table for this page. */
export function priceRangeFromPriceTable(rows: readonly PriceTableRow[]): string {
  if (rows.length === 0) {
    throw new Error('price table is empty');
  }
  const min = Math.min(...rows.map((row) => parseYenAmount(row.price)));
  return formatPriceRange(min);
}
