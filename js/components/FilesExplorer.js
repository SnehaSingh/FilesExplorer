function FilesExplorer(folderList) {
    let currentFiles = [];

    const clearTable = () => {
        const collection = document.querySelectorAll('tr');
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].firstElementChild.nodeName !== "TH") {
                collection[i].remove();
            }
        }
    }

    const updateExplorer = (filesList) => {
        //const { children } = folder;
        const table = document.getElementById("explorerTable");

        // make sure the explorer is empty initially
        clearTable();
        currentFiles = [];
        for (let i = 0; i < filesList.length; i++){
            const { type, name, modified, size } = filesList[i];
            currentFiles.push(filesList[i]);
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
                    updateExplorer(filesList[i]?.children);
                });
                nameElement.appendChild(nameButton);
            }
            else if (type === "file") {
                let iconNode = document.createElement("span");
                iconNode.className = "fa fa-file";
                iconNode.style.paddingRight = "3px";
                var nameTextNode = document.createTextNode(name);
                nameElement.appendChild(iconNode);
                nameElement.appendChild(nameTextNode);
            }
            
            var dateTextNode = document.createTextNode(modified);
            var sizeTextNode = document.createTextNode(size);
        
            dateElement.appendChild(dateTextNode);
            sizeElement.appendChild(sizeTextNode);
            tr.appendChild(nameElement);
            tr.appendChild(dateElement);
            tr.appendChild(sizeElement);
            table.appendChild(tr);
        }
    };

    return {
        update: updateExplorer
    }
}

export default FilesExplorer;
