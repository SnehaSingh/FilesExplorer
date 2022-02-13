import Sidebar from "./js/components/Sidebar.js";
import FilesExplorer from "./js/components/FilesExplorer.js";
import getJsonData from "./js/Utils/getData.js";

function createExplorer() {
    const { createTree } = Sidebar();
    const { update } = FilesExplorer();
    let loading = true;
    const loadingAnimation = document.querySelector(".loader");

    const updateExplorer = (nodesList) => {
        update(nodesList);
    };

    getJsonData("/files")
    .then(data => {
        loading = false;
        loadingAnimation.classList.remove("active");
        const sidebarNavComponent = createTree(data, updateExplorer);
        document.getElementById("navbar").appendChild(sidebarNavComponent);
        update(data?.data);
    })
    .catch(error => {
        console.log("An error has occurred while fetching data. ", error);
        loading = false;
    });
}

createExplorer();
