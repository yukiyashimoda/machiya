/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://unagi-machiya.com', // あなたのサイトのURL
  generateRobotsTxt: true, // robots.txtの自動生成
  sitemapSize: 7000, // サイトマップに含めるページの最大数（オプション）
  changefreq: 'daily', // ページの更新頻度（オプション）
  priority: 0.7, // ページの優先度（オプション）
  exclude: [""], // サイトマップに含めないパス（オプション）
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://unagi-machiya.com/my-custom-sitemap-1.xml',
      'https://unagi-machiya.com/my-custom-sitemap-2.xml',
    ],
  },
}
