/**
 * @jest-environment jsdom
 */
import Sidebar from "../Sidebar";

const mockFileList = {
  "data": [
    {
      "type": "folder",
      "name": "Folder1",
      "modified": "12/12/2019",
      "size": 1024,
      "children": []
    },
    {
      "type": "folder",
      "name": "Folder2",
      "modified": "08/08/2021",
      "size": 10025,
      "children": []
    }
  ]
};

test('test that sidebar is created data array contains elements', () => {
  const { createTree } = Sidebar();
  const ul = createTree(mockFileList, () => {});
  const firstFolder = ul.querySelector("li span button ~ button");
  const secondFolder = ul.querySelector("li ~ li span button ~ button");

  // check that sidebar folder list has been created
  expect(ul).not.toBeNull();

  //first folder name matches our mock input data
  expect(firstFolder.textContent).toBe('Folder1');

  //second folder name matches our mock input data
  expect(secondFolder.textContent).toBe('Folder2');
});

test('test that sidebar is created when no folders are present', () => {
  const { createTree } = Sidebar();
  const ul = createTree({"data": []}, () => {});

  // this tree should have no children
  expect(ul.children.length).toBe(0);
});
