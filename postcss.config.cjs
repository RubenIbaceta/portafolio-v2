// postcss.config.cjs
// Carga opcional de `postcss-custom-variants` para que el proyecto funcione
// aunque el paquete no esté instalado en el entorno (por ejemplo en CI o
// cuando no se pudo instalar desde GitHub).
const plugins = [];

try {
  // Si el paquete está instalado, añádelo.
  // eslint-disable-next-line global-require
  const customVariants = require('postcss-custom-variants');
  plugins.push(customVariants());
} catch (err) {
  // no-op: el plugin no está disponible, continuamos sin él
}

// Plugins estándar
// Usar el paquete oficial de PostCSS para Tailwind
plugins.push(require('@tailwindcss/postcss'));
plugins.push(require('autoprefixer'));

module.exports = { plugins };
