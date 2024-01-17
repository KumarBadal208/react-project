# React Project

* to use react in our project, we can use the cdn link or using npm
* using npm install parcel also. It helps in bundling and building our app. Install it in dev-depnedencies.
* no need to push the node_modules file as we have their configuration in our package.json file. So,  just keep the node_modules in gitignore file.
* node_modules install all the dependencies required to execute a particular package. 
    So, its size is   very big and should not to be pushed in github. In production,
    using package and package-lock.json file server can again install all the dependencies 
    required to execute the package.
* npx parcel index.html - build the app . bundled it .
* npx executes the pacel.

## when adding react and react dom using npm , we need to remember few things:-
 1. <script type="module" src="app.js"></script>
    here type="module" inform the browser that this app.js file is not some ordinary js file but it contains the import as well.

 2. import React and ReactDOM in js file.

 3. Delete the cdn link from html file.

 #### Parcel advantages 
 * very fast
 * build the app very quickly
 * bundles in very concise manner. - minimise, compress
 * maintain the cache.
 * HMR = hot Module replacement - update the modules in the browser at runtime without needing a whole page refresh.
 * file watching algo - written in c++
 * differntial building
 * Tree shaking
 * Different dev and prod builds - prod builds are more concise.
 * for prod build - npx parcel build index.html

###### browserslist -> for compatible for version you want to support your app -> "last 2 versions"

