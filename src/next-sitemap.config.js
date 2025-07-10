module.exports = {
    siteUrl: "https://www.akevents-deli.com",
    generateRobotsTxt: true,
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://www.akevents-deli.com/sitemap.xml",
      ],
    },
    exclude: ["/api/*", "/admin/*"],
    generateIndexSitemap: false,
    outDir: "./public",
  };