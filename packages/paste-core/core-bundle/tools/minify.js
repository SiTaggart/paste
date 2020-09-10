const Terser = require('terser');
const fs = require('fs');
const {CORE_BUNDLE_OUTPUT_PATH} = require('./constants');
const {getAllJsFiles} = require('./utils');

const files = getAllJsFiles(CORE_BUNDLE_OUTPUT_PATH);

function minifyFiles(filePaths) {
  filePaths.forEach(async filePath => {
    const result = await Terser.minify(fs.readFileSync(filePath, 'utf8'), {});
    fs.writeFileSync(filePath, result.code);
  });
}

minifyFiles(files);
