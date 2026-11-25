import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 的地址通常是 https://<用户名>.github.io/<仓库名>/。
// 把 base 设为相对路径后，仓库名、自定义域名变化都不需要改代码。
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
  },
  build: {
    rollupOptions: {
      // 入口 HTML 使用 wang-0429-work1.html；public/index.html 负责把首页跳转过来。
      input: fileURLToPath(new URL('./wang-0429-work1.html', import.meta.url)),
    },
  },
});
