const ROOT = "/Users/snehasingh/Documents";

//"/Users/snehasingh/Documents/cribl/FilesExplorer/public"

///Users/snehasingh/Documents/explore

const createNode = ({ type, name, modified, size }) => {
  const obj = {
    "type": type,
    "name": name,
    "modified": modified,
    "size": size,
    "children": []
  }
  return obj;
};

const fs = require('fs');

function getFiles (dir = ROOT, obj){
  let children = obj?.children || [];
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++ ) {
    const name = dir + '/' + files[i];
    const fileMetadata = fs.statSync(name);
    if (fs.statSync(name).isDirectory()){
      let folder = {
        "type": "folder",
        "name": files[i],
        "modified":fileMetadata["mtime"],
        "size": fileMetadata["size"],
      };
      folder["children"] = getFiles(name, obj);
      children.push(folder);
    } else {
      let file = {
        "type": "file",
        "name": files[i],
        "modified":fileMetadata["mtime"],
        "size": fileMetadata["size"],
        "children": []
      };
      children.push(file);
    }
  }
  return children;
}

const formatJson = (filesArray) => {
  return {
    "data": filesArray
  }
}

exports.createJsonTree = getFiles;
exports.formatJson = formatJson;