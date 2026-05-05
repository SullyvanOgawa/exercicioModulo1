import Nome from "./components/Nome.jsx";
import Dobro from "./components/Dobro.jsx";
import Eventos from "./components/Eventos.jsx";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-gray-50">
    
      <main className="text-black">
        <h1 >Meu primeiro Projeto com Next </h1>
         <Nome /> 
         <Dobro />
         <Eventos />
      </main>
     
    </div>
  );
}
