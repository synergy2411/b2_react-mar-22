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