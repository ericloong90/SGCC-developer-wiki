const fs = require("fs");

const dirRecursive = (dir, rootLinks, counter) => {
  fs.readdirSync(dir).forEach(item => {
    const stats = fs.statSync(`${dir}/${item}`);
    const isDir = stats.isDirectory();
    let link = isDir ? `- ${item}` : `- [${item}](${dir}/${item})`;

    if (isDir || item.indexOf(".md") > -1) {
      rootLinks.push(`${"\t".repeat(counter)}${link}`);
      if (isDir) {
        dirRecursive(`${dir}/${item}`, rootLinks, counter + 1);
      }
    }
  });
};

const runRecursion = () => {
  let indexPage = fs.readFileSync("README.md", "utf8");
  let rootLinks = [];
  let newLinks = [];
  const replaceLinks = indexPage.match("<!-- Links -->");

  dirRecursive("./markdowns", rootLinks, 0);
  newLinks = rootLinks.join("\n");
  indexPage = indexPage.replace(
    indexPage.substring(replaceLinks.index, indexPage.length - 1),
    `<!-- Links -->\n${newLinks}`
  );

  fs.writeFileSync("README.md", indexPage);
};

module.exports = runRecursion;
