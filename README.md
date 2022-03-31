# Mazegenerator

example typescript project to get a overview how typescript projects work

demo: https://snackaholic.github.io/mazegeneration/dist/index.html

# install

D:\Programmierung\mazegenerator> npm install

npm will read the package.json file and download the necessarry dependencies & put them into node_modules folder

# build locally

D:\Programmierung\mazegenerator> npm run build

will open package.json file and execute script with the name build which will first compile typescript to javascript and than pack it for the web with webpack

# Compile typescript to javascript

D:\Programmierung\mazegenerator>tsc -p ./tsconfig.json

will output typescript files from ./src to ./tsc-output

# Bundle javascript for web with webpack

D:\Programmierung\mazegenerator> webpack --config webpack.config.js

will look into tsc-output folder and bundle files in bundle.js, put it into dist folder
