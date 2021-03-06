# Break timings (11:00 - 07:00)
Lunch - 1:00 - 2:00 (60 minutes)
Tea Break - 3:30 - 3:45 (15 minutes)
Breaka -> 5:00 - 5:15 (15 minutes)

# What is ReactJS ?
- Render the UI quickly
- JavaScript Library
- Virtual DOM -> JS representation of Actual DOM
- Uni-directional data flow
- Component based Architecture


# TypeScript
- Superset of JavaScript (ES6+ features - Arror, destructuring, spread / rest etc)
- Strongly typed
- Type definition
- Object-oriented
- Compile-time error
- Primitive Type : String, Number, Boolean
- Reference Type : Object, Array, Functions, Date
- Additional Types : any, unknown, void, null, enum, structural type etc


> to generate tsconfig.json
- npx tsc --init
- npm install typescript -g
- tsc --watch



https://github.com/synergy2411/b2_react-mar-22


Special value -> "undefined"

"null" -> user

null === undefined          // false


x === null;

x === undefined;


# React : render the UI quickly
# ReactDOM : DOM API
# ReactScripts : runs script for react app
# Webpack-dev-server
# CreateReactApp : CLI tool
> npx create-react-app my-app --template typescript
> cd my-app
> npm start


# DOM : Document Object Model -> hierarchical structure oh HTML Page/Elements
html
    head
        script
        meta
        title
    body
        div
            p
            img
            ul
                li
                    a



# React App
-> Write JSX -> converted into JavaSCript -> Creates Virtual DOM -> Renders the Real DOM
    -> Model Changes -> React compares both VDOM -> update the Real DOM with minimal changes


    > npm i uuid @types/uuid

# Form Validation Libraries
- formik
- react-hook-form


# React Library - to render UI quickly
# useEffect() - to run side effects
- Flavours
: useEffect(callbackFn) - callbackFn will be called at initial loading and subsequent rendering

: useEffect(callbackFn, []) -> componentDidMount - callbackFn will called at initial rendering only

: useEffect(callbackFn, [Dependencies]) -> componentDidUpdate - callbackFn will be called at initial rendering and whenever the dependencies change.

: useEffect(callbackFn => cleanupFn, [Dependency]) -> componentWillUnmount - callbackFn will be called at initial rendering and for the subsequent re-rendering the cleanupFn will fire before the callbackFn.


# useReducer -> one state depends on another state
# implments Redux pattern at component level
# Primary building blocks ->
- Reducer : Pure function; no side-effect eg. Date.now() / Math.random();
    (prevState, action) => newState
- Action : payload of information; defined what happened in your component; 
    { type, data? }
- State : Object to persist

const [state, dipatcherFn] = useReducer(reducerFn, intialState)




# useContext : consumes Context API



# What is GraphQL ?
- Specifications
- Single endpoint
- NO Over-fetching / under-fetching
- 3 Operations - 
: Query - fetch the date
: Mutation - Create, Update, Delete
: Subscription : Socket programming

-> posts -> id, title, body, published

>  npm i @apollo/client graphql

# REST Endpoints
 /posts -> id, title, body, published, author
 /comments -> id, text, author, postId

 Post-> id title, body, comment, author



 # useSelector -> Redux library -> App Level
 # useReducer -> React hook -> Component Level


 # Higher Order Component -> 
 - Functions receives the component as its parameter and return the updated component
const UpdatedComp = HigherOrderComp(originalComponent)



 # Routing - react-router-dom
 # Unit Testing - Mocking Data
 # Deployment - HttpServer / Firebase / IIS Server
 # useMemo / useCallback - Optimization Techniques
 

 # Why, What SPA?
 - Better user experience
 - less network bandwidth
 - Routes handled at client side only

 # Posts App

 # to install json-server
 - npm install json-server -g
 - Create json file
 - json-server --watch <filename.json>


 # AJAX - to create SPA
 - jQuery library
 - Fetch(url)
 - HttpCLientModule - XHR - XMLHttpRequest - JSON/XML Object
 - http://our-domain.com/index/products/p001 -> Remote Server / Cloud -> Serves the index.html (SPA) as response
 - All routes defined on HTML file
 - App Model -> from REST Endpoints

 > npm start -> Webpack-dev-server runs -> servers HTML file


 Unit Testing - independent unit - Component
 Integration Testing - Nested Component
 E2E Testing - 


# Firebase Deployment Steps

 > npm install -g firebase-tools

 > firebase login

 > firebase init

 > firebase deploy


 # React Hooks
 - useCallback - for reference equality checking of function
 - useMemo - for reference equality checking of function returned value

 useCallback(cb, []) === useMemo(cb => fn(), [])


synergy2411@outlook.com