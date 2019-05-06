const { watch } = require("gulp");
const updateREADME = require("./linkParser.js");

exports.watch = () => {
  const markdownWatcher = watch(["./markdowns/**", "!./markdowns/assets/**", "!./markdowns/**/assets/**"]);

  markdownWatcher.on("change", path => {
    console.log(`File ${path} updated`);
    updateREADME();
  });

  markdownWatcher.on("add", path => {
    console.log(`File ${path} added`);
    updateREADME();
  });

  markdownWatcher.on("unlink", path => {
    console.log(`File ${path} removed`);
    updateREADME();
  });
};
