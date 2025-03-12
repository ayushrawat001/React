// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
  
//   plugins: [
//     tailwindcss(),
//     react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: 58mdwf-5173.csb.app, // Allow all hosts
    host: true, // Ensures proper host binding
    port: 5173, // You can set a custom port if needed
  }
})

