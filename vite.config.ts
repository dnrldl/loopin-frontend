import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log(env.VITE_API_BASE_URL);

  return {
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      tailwindcss(),
    ],
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 3000,
      proxy: {
        '/api': env.VITE_API_BASE_URL || 'http://localhost:8080',
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_MODE),
    },
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
