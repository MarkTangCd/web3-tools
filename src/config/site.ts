export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Web3 Dev tools",
  description: "A suite for web3 tools",
  mainNav: [
    {
      title: "Index",
      href: "/",
    },
    {
      title: "BTC Transaction",
      href: "/btc/transaction",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
