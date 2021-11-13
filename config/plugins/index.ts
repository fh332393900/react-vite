import { Plugin } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import configStyleImport from "./styleImport";
export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    reactRefresh(),
    configStyleImport(),
  ];
  return vitePlugins;
}
