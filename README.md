# Intro

This is a simple and easy demonstration of how the useEffect Hook works on React. Additionally it also make use of theuseState Hook, Tailwind CSS and a setTimeout function.

You can visit the site [here](https://useeffect-rho.vercel.app/).

## How it works

Learn how two of the most common Hooks works: 

### `useEffect`

```useEffect(() => {
  if (isLoading) { // ⬅️ solo hacer request si estamos en modo "cargando"
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }
}, [isLoading]); // ⬅️ ahora este efecto se ejecutará cada vez que cambie este estado
```
### `useState`

```const [isLoading, setIsLoading] = useState(true);
const [imageUrl, setImageUrl] = useState(null);```

## What else?

### `setTimeout`

The setTimeout() function set a waiting time to load the component. Below you can see how to use it along with the useEffect Hook.

First, you write the useEffect Hook and inside you put your setTimeout function with the time you want to wait before the component loads.

Last, inside the setTimeout function you will put all the code that was inside the useEffect Hook before.

```useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This will run after 1 second!')
  }, 1000);
  return () => clearTimeout(timer);
}, []);```

### `Tailwind CSS`

The site uses Tailwind CSS which I highly recomment. The most interesting line of code here is the one that centers the content both horizontal and vertical:

`flex flex-col h-screen my-auto items-center justify-center`

```flex: Same as display: flex on CSS.
flex-col: Same as flex-direction: column on CSS.
h-screen: Same as Height: 100vh on CSS. Makes the height the same as the user's screen.```
