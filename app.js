import Sidebar from "./js/components/Sidebar.js";
import FilesExplorer from "./js/components/FilesExplorer.js";
import getJsonData from "./js/getData.js";

function createExplorer() {
    const { createSidebar } = Sidebar();
    const { update } = FilesExplorer();

    const updateExplorer = (filesList) => {
        update(filesList);
    };

    getJsonData("/files")
    .then(data => {
        createSidebar(data, updateExplorer);
    })
    .catch(error => {
        console.log("An error has occurred while fetching data. ", error);
    });
}

createExplorer();
