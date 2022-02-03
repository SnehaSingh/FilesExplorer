function Sidebar(data) {

    // creates a navigation item for the sidebar
    const createFolder = (folder, updateExplorerCallback) => {
        const { name } = folder;
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.style.display = "inline-block";
        var button = document.createElement("button");
        button.className = "navbar__buttons";
        button.innerHTML = name || "";
        button.addEventListener("click", () => {
            // do some css here to show that current folder is selected
            updateExplorerCallback(folder?.children);
        });

        var iconButton = document.createElement("button");
        iconButton.className = "navbar_iconButtons";
        iconButton.innerHTML = '<i class="fa fa-caret-right"></i>';
        iconButton.addEventListener("click", () => {
            // if children not populated, then populate it
            if (!iconButton.nextElementSibling.nextElementSibling) {
                const { children} = folder;
                const ul = document.createElement("ul");
                ul.className = "subfolders__list";
                for (let i = 0; i < children.length; i++) {
                    const { type } = children[i];
                    if (type === "folder") {
                        const subListItem = createFolder(children[i], updateExplorerCallback);
                        ul.appendChild(subListItem);
                    }
                }
                span.appendChild(ul);
            }
            iconButton.classList.toggle("fa-rotate-90");
            iconButton.nextElementSibling.nextElementSibling.classList.toggle("active");
        });
        span.appendChild(iconButton);
        span.appendChild(button);
        li.appendChild(span);
        return li;
    };

    // Rename to createTree
    const create = (props, updateExplorerCallback) => {
        const { data } = props;
        const ul = document.createElement("ul");
        ul.className = "sidebar__listContainer";
        for (let i = 0; i < data?.length; i++) {
            const folderDetails = data[i];
            if (folderDetails?.type === "folder") {
                const listItem = createFolder(folderDetails, updateExplorerCallback);
                ul.appendChild(listItem);
            }
            //create the file explorer for the first folder if it exists
            updateExplorerCallback(data[0]?.children);
        }
        document.getElementById("navbar").appendChild(ul);
    };
    return {
        createSidebar: create,
    }
}

export default Sidebar;
