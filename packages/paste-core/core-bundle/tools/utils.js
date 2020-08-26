const {getUnbarreledFileFullPath, BLOCKLIST} = require('./constants');
const {getRepoPackages} = require('../../../../tools/utils/getRepoPackages');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

// Given a list of packages, output the index.tsx exports string
function generateIndexFromPackageList(packageList) {
  let output = '';
  packageList.forEach(package => {
    output = `${output}export * from '${package.name}';\n`;
  });
  return output;
}

// See: https://stackoverflow.com/questions/58527907/barrel-file-and-tree-shaking
function generateUnbarreledExports(packageList) {
  packageList.forEach(package => {
    writeToFile(getUnbarreledFileFullPath(package), `export * from '${package.name}';`, {
      successMessage: `[@twilio-paste/core] ${package.name} export file generated.`,
    });
  });
}

// Given a list of packages, output the package.json dependencies field
function generateVersionedDependencyList(packageList) {
  const dependencies = {};
  packageList.forEach(package => {
    dependencies[package.name] = `^${package.version}`;
  });
  return dependencies;
}

// Given a list of all repo packages, return only public and not blocked packages.
function getCoreRelevantPackages(packageList) {
  return packageList.filter(item => {
    const isReleased = !item.private;
    const isNotBlocked = !BLOCKLIST.includes(item.name);
    return isReleased && isNotBlocked;
  });
}

module.exports = {
  getRepoPackages,
  writeToFile,
  generateIndexFromPackageList,
  generateUnbarreledExports,
  generateVersionedDependencyList,
  getCoreRelevantPackages,
};
