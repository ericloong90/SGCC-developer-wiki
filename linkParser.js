const fs = require("fs");
let indexPage = fs.readFileSync("README.md", "utf8");
const blackList = [".vscode", "LICENSE", "README.md", "linkParser.js", ".git"];
let rootLinks = [];
let newLinks = [];

const dirRecursive = (dir, rootLinks, counter) => {
  fs.readdirSync(dir).forEach(item => {
    const stats = fs.statSync(`${dir}/${item}`);
    const isDir = stats.isDirectory();
    let link = isDir ? `- ${item}` : `- [${item}](${dir}/${item})`;

    if (blackList.indexOf(item) === -1) {
      rootLinks.push(`${"\t".repeat(counter)}${link}`);
      if (stats.isDirectory()) {
        dirRecursive(`${dir}/${item}`, rootLinks, counter + 1);
      }
    }
  });
};

dirRecursive(".", rootLinks, 0);
newLinks = rootLinks.join("\n");
fs.writeFileSync(
  "README.md",
  indexPage.replace(
    "<!-- Links -->",
    `<!-- Links -->
${newLinks}`
  )
);
