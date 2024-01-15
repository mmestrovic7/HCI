import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>your url is probably incorrect luv</h1>   
        <img src="loading_harry.svg" 
        height={450}
        width={392}/>             
    </main>
  );
}
