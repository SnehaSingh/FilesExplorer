# FilesExplorer
This is an app that lets users browse the files and folders on the server.

# Folder structure
```bash
├── public    # contains all client side code
│   ├── stylesheet
│   │   ├── **/*.css
│   ├── index.html
│   ├── app.js
│   ├── js
│   │   ├── **/*.js 
├── index.js  # server hosting the app
├── node_modules
├── swagger.yaml
├── README.md
├── package.json
├── package-lock.json
├── .babelrc
```

## Project Setup

1. Get the FilesExplorer source code from > https://github.com/SnehaSingh/FilesExplorer

    `git clone https://github.com/SnehaSingh/FilesExplorer`

2. Install npm dependencies,

    `npm install`

3. Start the node server,

    `npm start`


## Testing
This project is setup with Jest for unit testing. We use `jsdom` with jest for unit testing dom manipulation

Run the tests using command,

  `npm test`



