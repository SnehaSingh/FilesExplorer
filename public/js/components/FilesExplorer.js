import {
    sortByNameDesc,
    sortByNameAsc,
    sortByDateAsc,
    sortByDateDesc,
    sortBySizeAsc,
    sortBySizeDesc
} from '../Utils/sortUtils.js';
import { formatSize, formatDate } from '../Utils/commonUtils.js';

function FilesExplorer() {
    let currentTreeNodes = [];
    let sortOrder = '';

    // clear out the table before the update operation
    const clearExplorer = () => {
        const collection = document.querySelectorAll('tr');
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].firstElementChild.nodeName !== "TH") {
                collection[i].remove();
            }
        }
    }

    // given a tree node, this function creates a table row
    const createExplorerRow = (treeNode) => {
        const { type, name, modified, size } = treeNode;
        const tr = document.createElement('tr');
        tr.className = "table__data";

        const nameElement = document.createElement('td');
        nameElement.className = "explorer__nameColumn";
        const dateElement = document.createElement('td');
        dateElement.className = "explorer__dateColumn";
        const sizeElement = document.createElement('td');
        sizeElement.className = "explorer__sizeColumn";

        if (type === "folder") {
            let nameButton = document.createElement("button");
            nameButton.className = "explorer__buttons";
            nameButton.innerHTML = `<i class="fa fa-folder" aria-hidden="true"></i> ${name}`;
            nameButton.addEventListener("click", () => {
                updateExplorer(treeNode?.children);
            });
            nameElement.appendChild(nameButton);
        }
        else if (type === "file") {
            let iconNode = document.createElement("span");
            iconNode.className = "fa fa-file";
            iconNode.style.paddingRight = "3px";
            const nameTextNode = document.createTextNode(name);
            nameElement.appendChild(iconNode);
            nameElement.appendChild(nameTextNode);
        }

        const formattedDate = formatDate(modified);
        const dateTextNode = document.createTextNode(formattedDate);
        const formattedSize = formatSize(size);
        const sizeTextNode = document.createTextNode(formattedSize);

        dateElement.appendChild(dateTextNode);
        sizeElement.appendChild(sizeTextNode);
        tr.appendChild(nameElement);
        tr.appendChild(dateElement);
        tr.appendChild(sizeElement);
        return tr;
    }

    // function attaches rows to the table
    const updateExplorer = (treeNodesList) => {
        const table = document.getElementById("explorerTable");

        // clear the explorer table before updating it
        clearExplorer();
        currentTreeNodes = [];
        for (let i = 0; i < treeNodesList.length; i++){
            currentTreeNodes.push(treeNodesList[i]);
            const tr = createExplorerRow(treeNodesList[i]);
            table.appendChild(tr);
        }
    };

    const sortByColumn = (desc, asc) => {
        if (sortOrder === "Ascending") {
            currentTreeNodes.sort(desc);
            sortOrder = "Descending";
        }
        else {
            currentTreeNodes.sort(asc);
            sortOrder = "Ascending";
        }
        updateExplorer(currentTreeNodes);
    }

    const nameHeader = document.getElementById("name__header");
    nameHeader.addEventListener("click", () => {
        sortByColumn(sortByNameDesc, sortByNameAsc);
        nameHeader.nextElementSibling.classList.toggle("fa-rotate-180");
    });

    const dateHeader = document.getElementById("date__header");
    dateHeader.addEventListener("click", () => {
        sortByColumn(sortByDateDesc, sortByDateAsc);
        dateHeader.nextElementSibling.classList.toggle("fa-rotate-180");
    });

    const sizeHeader = document.getElementById("size__header");
    sizeHeader.addEventListener("click", () => {
        sortByColumn(sortBySizeDesc, sortBySizeAsc);
        sizeHeader.nextElementSibling.classList.toggle("fa-rotate-180");
    });

    return {
        update: updateExplorer
    }
}

export default FilesExplorer;
