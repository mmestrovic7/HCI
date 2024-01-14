import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-14">
      <h1>your url is probably incorrect luv</h1>   
        <img src="loading_harry.svg" 
        height={450}
        width={392}/>           
      </div>   
    </main>
  );
}
