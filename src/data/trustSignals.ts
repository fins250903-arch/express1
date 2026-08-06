/** Shared trust / Information Gain signals for AIO + CVR */
export const TRUST = {
  brand: '車の出張パーツ取付 特急便',
  years: '施工歴3年以上',
  annualJobs: '年間300台以上',
  specialist: '専門員が直接訪問',
  doorPrice: '28,000円〜',
  tireHousePrice: '39,000円〜',
  roofPrice: '55,000円〜',
  phone: '070-8428-0866',
  lineUrl: 'https://lin.ee/g4NPYZ3',
  areas:
    '大阪府・兵庫県・京都府・滋賀県・奈良県・和歌山県・三重県・愛知県',
  hours: '9:00〜19:00（土日祝も対応、不定休）',
} as const;

export const ORGANIZATION_ID = 'https://abura.site/#organization';

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: TRUST.brand,
    url: 'https://abura.site/',
    telephone: TRUST.phone,
    description: `${TRUST.years}・${TRUST.annualJobs}の専門員がご自宅駐車場へ直接訪問する出張デッドニング専門サービス。車を預けず目の前で確認でき、材料・機器の持ち込み同時取付、損害保険対応。`,
    areaServed: TRUST.areas.split('・').map((name) => ({
      '@type': 'State',
      name,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: TRUST.phone,
      contactType: 'customer service',
      availableLanguage: 'Japanese',
      areaServed: 'JP',
    },
  };
}
