//a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "apache":
      return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "gnu":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

//a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "gnu":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "mozilla":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return "";
  }
}

//a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license, projectTitle) {
  if (!license) {
    return "";
  }

  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);

  return `## License

${projectTitle} is licensed under the [${license}](${licenseLink}) license. ${licenseBadge}`;
}

//a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license } = data;
  const licenseSection = renderLicenseSection(license, title);
  const licenseBadge = renderLicenseBadge(license);

  return `# ${title}

${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

${licenseSection}
`;
}

module.exports = generateMarkdown;
