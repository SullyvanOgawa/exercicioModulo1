'use client';
export default function Eventos(){

    const handleMyEvent = () =>{
        alert("Você clicou em uma função que roda fora do botão onClick={handleMyEvent}");
    }

    const number1 = 2;
    const number2 = 3;

    return(
        <div className="flex gap-4 p-4"> 
            <button onClick={handleMyEvent} className="bg-blue-600 text-white font-bold py-2 px-4 rounded">Clique Aqui 1</button>

            <div>
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => alert("Você clicou em uma função qu roda dentro do botão inline - onClick={() => alert")}>Clique Aqui 2</button>
            </div>

            <button  className="bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => alert(`Soma: ${number1} + ${number2} = ${number1 + number2}`)}>Somar</button>
        </div>

        
    );
}