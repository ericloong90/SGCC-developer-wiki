const fs = require("fs");

const dirRecursive = (dir, rootLinks, counter) => {
  fs.readdirSync(dir).forEach(item => {
    const stats = fs.statSync(`${dir}/${item}`);
    const isDir = stats.isDirectory() && item !== 'assets';
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
  const replaceLinks = indexPage.match("<!-- Links -->");
  let newIndexPage = '';

  dirRecursive("./markdowns", rootLinks, 0);
  newIndexPage = indexPage.replace(
    indexPage.substring(replaceLinks.index, indexPage.length - 1),
    `<!-- Links -->\n${rootLinks.join("\n")}`
  );

  if (newIndexPage !== indexPage) {
    fs.writeFileSync("README.md", indexPage);
  }
};

module.exports = runRecursion;
