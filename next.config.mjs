import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/grokhotun' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
export default withNextIntl(nextConfig);
