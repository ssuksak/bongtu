import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'bongtu',
  outdir: 'dist',
  brand: {
    displayName: '봉투 어디 있어?',
    primaryColor: '#FF6B35',
    icon: 'https://ssuksak.github.io/bongtu/assets/logo_600x600.png',
  },
  web: {
    host: 'localhost',
    port: 5173,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
  webViewProps: {
    type: 'partner',
  },
});
