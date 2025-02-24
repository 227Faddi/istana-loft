import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ['muscache.com', 'a0.muscache.com'], // Allow muscache.com for external image loading
  },
};

export default withNextIntl(nextConfig);
