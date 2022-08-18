#### :pencil2: Check for understanding - Create Components

<details>
<summary> Click for Instructions </summary>

Complete the below activity:

##### **1. Create a copy of the Codesandbox app:**

Open the following React app: [Codesandbox - Exercise](https://codesandbox.io/s/m3-d1-react-introduction-cfu1-5xhrh?file=/src/App.js). To start working you just need to start writting the code, upon first save (<kbd>CMD</kbd>+<kbd>Z</kbd> / <kbd>CTRL</kbd>+<kbd>Z</kbd>) Codesandbox will automatically create a copy of the app for you with a new URL.

<br>

##### **2. Check the examples in the `Navbar` and `App` components:**

Before starting take a look at the `Navbar` component (`/src/components/Navbar`). We left this component as an example for you, feel free to use it as a reference.

If you open `App.js` you will see that the component `Navbar` is already imported in the file:

```jsx
import Navbar from "./components/Navbar"; // <== Import here
```

and displayed in the `App` like this:

```jsx
function App() {
  return (
    <div className="App">
      <Navbar />

      {/*  <Headline /> */}

      {/* <ButtonBlue /> */}

      {/* <ButtonYellow /> */}

      {/* <Gallery /> */}

      {/*   <ImageOne /> */}

      {/*   <ImageTwo /> */}
    </div>
  );
}
```

<br>

##### **3. Create and display the components: **

Next create the following components and display them in the `App` component:

- `Headline`
- `ButtonBlue`
- `ButtonYellow`
- `Gallery`

You can find the content for each component in the file `/content.html` that we provided for you.

**Note:** Once you are done creating each component remember to export the component from its file.

To display the newly created component you will need to import it in the `App.js` and include it inside of the _return_ of the `App` in the same way we did with `<Navbar />` in the previous example ( see above).

##### **4. Create and render the nested components: **

Next create the following components and display them in the `Gallery` component:

- `ImageOne`
- `ImageTwo`

You can find the content for each component in the file `/content.html` that we provided for you.

**Note:** Component `ImageOne` and `ImageTwo` should be displayed inside of the `Gallery` component. You can check the file `Gallery.js` from the previous codesandbox example :point_right: - [React Introduction](https://codesandbox.io/s/m3-d1-react-introduction-ielbx?file=/src/components/Gallery.js), as a guide on how to do this.

**Important:** Once you are done creating each component remember to export the component from its file.

<br>

##### **5. (Bonus) Create a dynamic component `CustomButton`**:

Create a dynamic component `CustomButton` by using the file `CustomButton.js` from previous codesandbox example :point_right: - [React Introduction](https://codesandbox.io/s/m3-d1-react-introduction-ielbx?file=/src/components/CustomButton.js) as a guide.

<br>

##### :trophy: **Solution:**

You can find the Codesanbox with the final solution on the following **[link](https://codesandbox.io/s/solution-m3-d1-react-introduction-cfu1-82td7?file=/src/App.js)**.

#####

</details>

<br>
