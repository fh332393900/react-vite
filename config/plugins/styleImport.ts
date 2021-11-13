import styleImport from "vite-plugin-style-import";
export default function configStyleImport() {
  return styleImport({
    libs: [
      {
        libraryName: "antd",
        esModule: true,
        resolveStyle: (name) => {
          return `antd/es/${name}/style/index`;
        },
      },
    ],
  });
}
