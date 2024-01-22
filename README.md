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

##### scripts in package.json file is to execute the package like the following commands:-
* "start" : "parcel index.html" = npx parcel index.html -> it will dev build the app

### JSX and React Component
* JSX is html like syntax used to create react element in react. In JSX we can write JS code as well inside "{ console.log("hello") }".
* React Component is JS function which returns JSX code or react Element. It is two type - Functional Component and Class based component.
* JSX (React Element) -> JS Obj -> HTML Template (while rendering).
* Parcel is the manager of Babel. It contaims the Babel that helps to convert the JSX into react element and then into JS object.
* Babel transpile the JSX into JS object. Babel is compiler. The JSX is not understood by JS engine. So, Babel converts the JSX first into JS code and then feed it to the browser after build.

## Project (Practise)
* header , Body, Footer
* header -> Logo, home,cart, profile
* body - filter(on some rating>4), restaurant cards
* foter - license,contact, support

#### props
* it is variable passed as argument to functional component (just like normal function in js).

#### Imp Points to be Noted
* For loop use map,filter and reduce .
* Unique key should be provide to child component to identify the child. Help in optimisation. If not given no error will come ony warning will come but performance will be effeceted. If not given parent will render the whole child component on any modification thus affecting the performance.
* not using key <<< index as key <<< using unique value for key.

#### Import and Export
* export default and export named 

## Hooks
* It is utility function provided by React to interact with data and UI layer.
* Main two types - 
* useState
* useEffect

### useState
* To sync the data with UI , we use state variable.
* It uses Reconciliation algo(React Fiber). Diff algo.
* Virtual DOM - the representation of actual DOM. In react , we represent it using object(react element).
* Diff algo use the Virtual DOM to compare the diffrence. Its more faster than comparing the actual DOM thus making rendering the page more faster when data is changed. 
* When there is some change in the useState variable, diff algo calculates the difference and rerenders the component fastly.

### useEffect
* It is React hook that get called when the component renderes itself.
* It take one callback function and one dependencies parameter.
* Three things to remember :-
1. When called with no dependencies parameter -> called evertime when component renders
2. When called with [] dependencies (empty) -> called only in starting rendering
3. When called with [searchText] -> called when there is some change in searchText variable and component re-renders.

###### CORS POLICY (Cross-Origin Resource Sharing)
* it is a standard that allows a sever to relax the same-origin policy.
* It allow some cross-origin request while rejecting others.
* Use corsproxy or some extensions to resolve this error.

### Routing
* createBrowserRouter -> helps to create the route
* RouterProvider -> helps to use the route created in our component.
* route.render(<RouteProvider router={appRouter}/>)
* errorElement - Use to create errorElement component in route if route path is not defined in the route configuration.
* useRouteError - it is used to get the error message given by the React. (hook)
* Children Routes - used to give children route. 
* <Outlet/> - used to give children route to component.
* Link - Used as anchor tag to route to specific path but it does not refresh the page only change the route path and load the specific component which is present at that particular route.
* Two type of Client-Side and Server-side
* React implement Client-side routing as it does not refresh the page and just load the specific component. Thats why is is **Single-Page Application**.
* Dynamic Route - path: "/restaurant/:id" -> here using id specific page is load. and id is passed as parameter to route.
* useParams() - Used to get the params passed in the dynamic route.