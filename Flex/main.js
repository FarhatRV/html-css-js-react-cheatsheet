let longestName = "";
namesOfAllInterns2.reduce(name => {
  if (longestName.length < name.length) {
    longestName = name;
  }
}, longestName);
