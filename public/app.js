import Sidebar from "./js/components/Sidebar.js";
import FilesExplorer from "./js/components/FilesExplorer.js";
import getJsonData from "./js/Utils/getData.js";

function createExplorer() {
    const { createTree } = Sidebar();
    const { update } = FilesExplorer();

    const updateExplorer = (nodesList) => {
        update(nodesList);
    };

    getJsonData("/files")
    .then(data => {
        const sidebarNavComponent = createTree(data, updateExplorer);
        document.getElementById("navbar").appendChild(sidebarNavComponent);
    })
    .catch(error => {
        console.log("An error has occurred while fetching data. ", error);
    });
}

createExplorer();
