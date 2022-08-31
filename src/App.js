import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) { // ⬅️ solo hacer la solicitud si isLoading = true
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((dog) => {
            setImageUrl(dog.message);
            setIsLoading(false);
          });
      }
    }, 10000); // ⬅️ ahora este efecto se ejecutará cada vez que cambie este estado
    return () => clearTimeout(timer);
    }, [isLoading])
    
  const randomDog = () => {
    setIsLoading(true); // ⬅️ simplemente actualizamos isLoading a true
  };
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen my-auto items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">Loading...</h1>
        <p>This is a demonstration of how useEffect works.</p>
        <p>The content will upload in a few seconds, since it also has a setTimeout function with 10s. </p>
        <p>This is what you see while the content is coming.</p>
        <p>🙂</p>

      </div>
    );
  }
  return (
    <div className="flex flex-col h-screen my-auto items-center justify-center">
      <img className=""
      src={imageUrl} 
      alt="Imagen de perrito aleatoria"
      width= {450} />
      <button className="text-gray-100 font-bold bg-green-400 m-4 py-4 px-8 rounded hover:bg-green-500" onClick={randomDog}>
        Reload{" "}
      </button>
      
    </div>
  );
}
