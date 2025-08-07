import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({
    // Опциональные параметры
    tsconfig: 'tsconfig.app.json', // Укажите путь к вашему tsconfig
  })],
  optimizeDeps: {
    exclude: [
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/common/http',
      // Добавьте другие зависимости, если они вызывают ошибки
    ],
  },
});
