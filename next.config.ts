import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Menambahkan loader untuk file .glb
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
  // Bisa menambahkan lebih banyak konfigurasi jika diperlukan
};

export default nextConfig;
