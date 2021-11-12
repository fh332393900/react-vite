import { Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    reactRefresh(),
  ];
  return vitePlugins;
}