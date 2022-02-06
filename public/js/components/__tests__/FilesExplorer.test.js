/**
 * @jest-environment jsdom
 */
import FilesExplorer from '../FilesExplorer';

const mockTree = [
    {
      "id": "1",
      "type": "folder",
      "name": "Documents",
      "modified": "12/12/2021",
      "size": 1024,
      "children": []
    },
    {
      "id": "2",
      "type": "file",
      "name": "sample.txt",
      "modified": "05/11/2019",
      "size": 12340028,
      "children": []
    }
]

let table;

describe("Tests for FileExplorer", () => {
  beforeEach(() => {
    table = document.createElement("table");
    table.setAttribute("id", "explorerTable");
    const column1 = document.createElement("th");
    column1.setAttribute("id", "name__header");
    const column2 = document.createElement("th");
    column2.setAttribute("id", "date__header");
    const column3 = document.createElement("th");
    column3.setAttribute("id", "size__header");
    table.appendChild(column1);
    table.appendChild(column2);
    table.appendChild(column3);
    document.body.appendChild(table);
  });

  test("explorer shows all Tree Nodes", () => {
    const { update } = FilesExplorer();
    update(mockTree);
    expect(table.querySelector(".explorer__nameColumn")).not.toBeNull();
    expect(table.querySelector(".explorer__dateColumn")).not.toBeNull();
    expect(table.querySelector(".explorer__sizeColumn")).not.toBeNull();

    const firstRow = table.querySelectorAll("tr")[0];
    expect(firstRow.childNodes[0].childNodes[0].textContent).toBe(" Documents");
    expect(firstRow.childNodes[1].textContent).toBe("12/12/2021");
    expect(firstRow.childNodes[2].textContent).toBe("1.0 KB");
    const secondRow = table.querySelectorAll("tr")[1];
    expect(secondRow.childNodes[0].textContent).toBe("sample.txt");
    expect(secondRow.childNodes[1].textContent).toBe("05/11/2019");
    expect(secondRow.childNodes[2].textContent).toBe("11.8 MB");
  })
});
