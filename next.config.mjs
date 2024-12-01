/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
  // Otras configuraciones...
  output: 'export', // Mantén esta línea si deseas la exportación estática
}

export default nextConfig;
