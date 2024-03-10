// Assuming you are documenting the type for IDE support or documentation purposes,
// as explicit type annotations won't be enforced in .mjs files.
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "images.unsplash.com"],
  },
  ignoreBuildErrors: true,
};

// Export the configuration using ES Module syntax
export default nextConfig;
