function createExplorer() {
    fetch("./data.json")
    .then(data => {
        // create the navigation component
    })
    .catch(error => {
        console.log("An error has occurred while fetching data. ", error);
    });
}

createExplorer();
