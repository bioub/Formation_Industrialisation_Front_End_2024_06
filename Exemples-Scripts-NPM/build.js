const fs = require("fs/promises");
const path = require("path");
const md5 = require("md5");
const { minify } = require("terser");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdir(dirPath) {
  await fs.rm(dirPath, { force: true, recursive: true });
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  content = content
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

    await fs.writeFile(indexHtmlDistPath, content);
}

async function main() {
  await rmAndMkdir(distPath);
  await buildJs();
  await buildHtml();
}

main();
