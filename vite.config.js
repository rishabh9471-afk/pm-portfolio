import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Allow Vercel sandbox / preview hosts (e.g. *.vercel.run, *.vercel.app)
  server: {
    host: true,
    allowedHosts: ['.vercel.run', '.vercel.app', 'localhost'],
  },
  preview: {
    host: true,
    allowedHosts: ['.vercel.run', '.vercel.app', 'localhost'],
  },
});
