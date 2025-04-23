// filepath: c:\Users\czhan\Downloads\PortfolioP\portfolioP\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});