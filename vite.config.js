import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    Icons({
      // Opsi tambahan jika Anda ingin kelas CSS untuk ikon
      autoInstall: true, // secara otomatis menginstal koleksi ikon jika belum ada
    }),
    Components({
      // Resolusi untuk mengimpor ikon secara otomatis sebagai komponen
      resolvers: [
        IconsResolver({
          // Tambahkan koleksi ikon yang ingin Anda gunakan
          // mdi adalah prefix untuk Material Design Icons
          prefix: 'icon', // prefix yang akan Anda gunakan di template (misalnya: <IconMdiHome />)
          enabledCollections: ['mdi'],
        }),
      ],
      dts: true, // Opsional: Untuk membuat deklarasi tipe TypeScript
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
