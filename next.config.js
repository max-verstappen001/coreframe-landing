/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/case-studies/wiral", destination: "/work", permanent: true },
      { source: "/services/claude", destination: "/services/enterprise-claude", permanent: true },
      { source: "/capabilities/enterprise-ai", destination: "/services/enterprise-ai-agents", permanent: true },
      { source: "/capabilities/software-engineering", destination: "/services/forward-deployed-engineering", permanent: true },
    ];
  },
};
module.exports = nextConfig;
