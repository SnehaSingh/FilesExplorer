function Sidebar(data) {

    // creates a single navigation item called node, on the sidebar
    const createNode = (folder, updateExplorerCallback) => {
        const { name } = folder;
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.style.display = "inline-block";

        var button = document.createElement("button");
        button.className = "navbar__buttons";
        button.innerHTML = name || "";
        button.addEventListener("click", () => {
            // clicking on this node, updates the contents of this folder in the file explorer
            // on the explorer pane
            updateExplorerCallback(folder?.children);
        });

        var iconButton = document.createElement("button");
        iconButton.className = "navbar_iconButtons";
        iconButton.innerHTML = '<i class="fa fa-caret-right"></i>';
        iconButton.addEventListener("click", () => {
            // if child folders are not populated, then populate it
            if (!iconButton.nextElementSibling.nextElementSibling) {
                const { children} = folder;

                // each subfolder list is a collapsable section
                const ul = document.createElement("ul");
                ul.className = "subfolders__list";
                for (let i = 0; i < children.length; i++) {
                    const { type } = children[i];
                    if (type === "folder") {
                        const subListItem = createNode(children[i], updateExplorerCallback);
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

    // function that creates a Tree nodes structure on the sidebar and
    // attaches it to the dom
    const createTree = (props, updateExplorerCallback) => {
        const { data } = props;
        let explorerCreated = false;
        const ul = document.createElement("ul");
        ul.className = "sidebar__listContainer";
        for (let i = 0; i < data?.length; i++) {
            const nodeDetails = data[i];
            if (nodeDetails?.type === "folder") {
                const listItem = createNode(nodeDetails, updateExplorerCallback);
                ul.appendChild(listItem);
                if (!explorerCreated) {
                  updateExplorerCallback(nodeDetails.children);
                  explorerCreated = true;
                }
            }
        }
        return ul;
    };
    return {
      createTree: createTree,
    }
}

export default Sidebar;
