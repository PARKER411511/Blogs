/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'media.cnn.com',
      'assets.science.nasa.gov',
      's.france24.com',
      'www.brookings.edu',
      'cdn11.bigcommerce.com',
      'media.sezane.com',
      'www.shutterstock.com',
      'cdn.lookastic.com',
      'images.pexels.com',
      'upload.wikimedia.org', 
       'www.nme.com', // ✅ Added new domain here
    ],
  },
}

module.exports = nextConfig;
