const {join} = require('path');

// Adding the website package for redundancy only, because
// it's a private package and won't be included anyways
const BLOCKLIST = ['@twilio-paste/core', '@twilio-paste/typography', '@twilio-paste/icons', '@twilio-paste/website'];

const CORE_BUNDLE_PATH = join(__dirname, '../');
const CORE_BUNDLE_INDEX_PATH = join(CORE_BUNDLE_PATH, 'src/index.tsx');
const CORE_BUNDLE_PACKAGE_PATH = join(CORE_BUNDLE_PATH, 'package.json');

const getUnbarreledFilePath = package => `src/${package.name.replace('@twilio-paste/', '')}.tsx`;
const getUnbarreledFileFullPath = package => join(CORE_BUNDLE_PATH, getUnbarreledFilePath(package));

module.exports = {
  BLOCKLIST,
  CORE_BUNDLE_PATH,
  CORE_BUNDLE_INDEX_PATH,
  CORE_BUNDLE_PACKAGE_PATH,

  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
