[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Git Pub

![](https://imgur.com/MfZn3wW.png)

Make a pub app that displays data inside server-side rendered views.

**Learning Objectives**

- Practicing index and show routes with express

**Prerequisites**

- JavaScript
- Express
- Node
- JSX

---

## The App (User Stories)


- When a user goes to the `/drinks` route, they should see an `index` of all the drinks available at the pub
  - **Index**: The name of each drink should be rendered to the page, each name should be clickable
- When a user clicks on the name of one of the drinks, they should be taken to that drink's `show` page
  - **Show**: The name, image, and price of each drink should be rendered to the page

## Getting Started

### Setting up the file structure

**In terminal, inside your homework folder**:

  - `mkdir gitpub`
  - `cd gitpub`
  - `mkdir views`
  - `touch views/Index.jsx views/Show.jsx`
  - `mkdir models`
  - `touch models/drinks.js`
  - `touch server.js`
  - `npm init`
    - follow the `npm init` prompts
    - _thought question:_ does npm init create a file? if it does, where does it create it and what is the name of the file?
  - `code .`

**Make sure you did it right**:

<details><summary>Approximate File Structure</summary><p>

  ![](https://i.imgur.com/RG2fRdF.png)

  **Note**:This image is a rough outline for you to double check which main folders should be nested or on the same level.

  If you just have one file, it could be argued that you don't need a folder for it. But as your apps grow, you'll need to get more organized and definitely use folders. Be consistent and adjust your routing as needed.

</p></details>
<br/>

**In terminal, install the necessary NPM packages**

Remember, make sure you're in the same directory for the app you want to install the packages for!

- `npm i express express-react-views react react-dom`
- <details><summary>check your `package.json` to make sure they installed</summary><p>

    ![](https://i.imgur.com/tc9RDdS.png)

  </p></details>

---
> 🔴 _Remember to commit!_ \
"npm packages added"

---

### Setting up your server

**In `server.js`**

- require express
- set `express()` to a variable
- set a variable of `port` to `3000`
- set your app to `listen` to the port and include a `console.log()`, so that you can tell when your server is running
- include a get route / that will `res.send('Welcome to the Gitpub App!');` so that when you got to `localhost:3000`, you will see `Welcome to the Gitpub App!`

**In terminal**

- `nodemon` or if you set nodemon as a script in your `package.json`: `npm run dev`
- **Remember!** `nodemon` will only work if you run it from the same location as your `package.json`

**In the browser**

- go to `localhost:3000` (or whatever port you set it to)
- check that you have your `Welcome to the Gitpub App!` message is displaying

> 🔴 _Remember to commit!_ \
"Basic express server is setup"

---

### Setting up your "database"

When setting up, you created a file called `drinks.js` in your `models` folder. For now, this will act as our "database".

**Inside `drinks.js`, paste the following data _as is_**

```js
const drinks = [
    {
      name: 'cruddy mary',
      price: 132,
      image: 'https://i.imgur.com/Va5iIw5.jpg'
    },
    {
      name: 'index on the beach',
      price: 68,
      image: 'https://i.imgur.com/XV2aPa2.jpg'
    },
    {
      name: 'hack & coke',
      price: 1,
      image: 'https://i.imgur.com/rLOXFRI.jpg'
    },
    {
      name: 'whiskey-value pair',
      price: 11,
      image: 'https://i.imgur.com/a7rmkoS.jpg'
    },
    {
      name: '404 horsemen',
      price: 202,
      image: 'https://i.imgur.com/FLucOLr.jpg'
    },
    {
      name: 'if stateMint julep',
      price: 2,
      image: 'https://i.imgur.com/yaoK0Dg.jpg'
    },
    {
      name: 'APIPA',
      price: 43,
      image: 'https://i.imgur.com/qAhA7pi.jpg'
    },
    {
      name: 'node to joy',
      price: 56,
      image: 'https://i.imgur.com/MbVdwZz.jpg'
    }
  ]
```

- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- Set this 'database' to a variable called drinks in your `server.js` file
- Create a get route `/drinks` that will `res.send(drinks)`, which will display your drinks data as json in the browser

> 🔴 _Remember to commit!_ By now you should be able and used to thinking of descriptive commit messages - ask yourself: "What have I done since my last commit?"
---
### Setting up your server.js to use jsx
- In your `server.js` set the view engine to JSX
```js
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
```

### Setting up your index view

- Instead of displaying json at your /drinks route, you should serve the `Index.jsx` file you created that will display your drinks. So let's start by:

**In `Index.jsx`**

- Start by creating a React variable that requires react
- Create your Index class that extends the React.Component 
- Add an `<h1>` that describes the page, i.e. `Welcome to gitPub`
- Try adding some inline styles:
   - We can add inline CSS, which are specified as attributes and are passed to the elements. These are specified as an object with a key as camelCased style name & value being the actual style value (and not as a string).
    ```js
     const myStyle = {
       color: '#ffffff',
       backgroundColor: '#000000',
     };

     class MyFirstComponent extends React.Component() {
       return (
         <div style={myStyle}>My First React Component!</div>;
       }
     }
   ```

- Remember to export your `Index` class!

**In `server.js`**
- Change your `/drinks` route to `res.render` your `Index`
- In your browser, go to `localhost:3000/drinks` to make sure you're rendering the `Index.jsx` file!

> 🔴 _Remember to commit!_ \


---

### Setting up your index view to show your drinks data

**In your `Index.jsx`, make it so that you can see:***

- The name of each drink  as a list item inside an unordered list
REMEMBER! You can only render one thing, so you may have to wrap your h1 and your list in a div tag. The div will be the one thing you render. It just happens to have other stuff inside it!

<details><summary>Hint:</summary>
  
```js
{this.props.demo.map((item, index)=>{
  console.log(item)
  return (
    <li key={index}>{item}</li>
  )
})}
```
</details>

- This list should be dynamically rendered by JSX based on the data from your 'database'
- You'll notice the drink names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names. Remember, this is just Javascript!

> 🔴 _Remember to commit!_ \

---

### Setting up your show route

**In `server.js`**

- Add a new get route for `/drinks/:id`
- For now, just make sure it works correctly by having the route `res.send(req.params.id)`
  - So that when you go to `localhost:3000/drinks/whatever`, `whatever` should show up in the browser

> 🔴 _Remember to commit!_ \

---

### Linking `Index.jsx` to `Show.jsx`

**In `Index.jsx`**

- Make each listed drink a link that will go to the route `/drinks/x`, where 'x' is the array position of the drink in the data array. This should be set dynamically with JSX!
- When you click the link, it show go to the show route and the index number corresponding to the drink's array position should be displayed

> 🔴 _Remember to commit!_ \

---

### Rendering an individual drink in the show view

**In `Show.jsx`**

- Copy/paste your code from your `Index.jsx` into your `Show.jsx`
  - Surely, there must be a better way! Are you wondering if there is something in the hungry for more section about this?
- Update the code you've copied so it's appropriate for your Show page.

**In `server.js`**

- Update the get route to render the `show` view. Make sure it says "Show Page"

- Update the get route to pass an individual drink to the show page

<details><summary>Hint:</summary>
Not going to give you the answer! But if we did it for our fruits app, it would look like this:

![](https://i.imgur.com/apOU0eF.png)

Make sure you understand what's happening here. If you don't review the class markdown for today.
</details>
<br/>



**In `Show.jsx`**
- Change all your html code inside your `Show.jsx` file's `render()` so that:
  - There's an `h1` tag that should display the name of the drink
  - There's an image tag that should display the image of the drink
  - There's an `h2` tag that should display the price of the drink
  - Add an anchor tag with the text of back, that will take you back to your `Index.jsx` view


> 🔴 _Remember to commit!_

---

### Style your app

- Add a little more flair to your gitPub app by styling it with a little bit of CSS. Doesn't have to be anything crazy, just make it so that it's not the default styling!

> 🔴 _Remember to commit!_

---
### Hungry for More?
### Food Model

Our gitPub is missing some food, so let's add some!

1. Add a second 'database' by creating a `food.js` file in the `models` folder and use the following data:

```js
const food = [
  {
    name: '(req, rEscargot)',
    price: 12,
    image: 'https://i.imgur.com/BRgv2rz.jpg'
  },
  {
    name: 'Nulltimate Nachos',
    price: 10,
    image: 'https://i.imgur.com/vKRbSHN.jpg'
  },
  {
    name: 'split() pea soup',
    price: 1,
    image: 'https://i.imgur.com/qd9jheG.jpg'
  },
  {
    name: 'CURLy Fries',
    price: 11,
    image: 'https://i.imgur.com/lEQ1AdY.jpg'
  },
  {
    name: 'Garlic NaN',
    price: 202,
    image: 'https://i.imgur.com/UEx7cYk.jpg'
  },
  {
    name: 'Baby Got BackEnd Ribs',
    price: 2,
    image: 'https://i.imgur.com/XbRMQ3g.jpg'
  },
  {
    name: 'Git Pull Pork Sandwich',
    price: 43,
    image: 'https://i.imgur.com/QZW3gJg.jpg'
  }
]
```

1. List the food under your drinks list on the index
1. Make them clickable as well to go to their show page

> 🔴 _Remember to commit along the way!_

---

## Deliverables

An express app that meets all the user stories outlined in the beginning of this markdown.

## Technical Requirements
1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

**Submit:** via GitHub issues. Follow the instructions found in the [wiki](https://git.generalassemb.ly/SEIR-Margaret/class-recordings-and-info/blob/master/submitting-homework.md).

## Etc.

- Credits to some of the drink information goes to: David Rada, Sebastian D'Arena and Jon Weinstein of SEIR-Cerf

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
