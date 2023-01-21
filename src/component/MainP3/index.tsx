import { useEffect, useState } from "react";
import axios from 'axios'

import "./stylesMain.css";


export function MainP3(){

    //   const services = [
    //     {name: "Corte de cabelo", price: "R$ 40,00" },
    //     {name: "Cabelo e barba", price: "R$ 60,00" },
    //     {name: "Cabelo e sobrancelha", price: "R$ 50,00" },
    //     {name: "Corte navalhado", price: "R$ 45,00" },
    //     {name: "Corte e alisamento", price: "R$ 40,00" },
    //     {name: "Barba e pezinho", price: "R$ 40,00" },
    //     {name: "Barba", price: "R$ 35,00" },
    //     {name: "Barba e sobrancelha", price: "R$ 50,00" },
    //     {name: "Corte +barba e alisamento", price: "R$ 100,00" },
    // ]

    const [services, setServices] = useState([]);

    useEffect(()=>{
        axios.get('https://beirilus.onrender.com/services')
        .then((res)=>{
            setServices(res.data.listServices);
        })
        .catch(erro => console.log(erro))

        //eslint-disable-next-line
    },[])

    return(
        <>
        <main className="pagina3">

            <h1>Agendamento</h1>

            <div className="container">

                {services.map((card: any) => {
                    return(
                    <>
                     <div className="card" key={card.id}>
                     <h3> <span className="texto">{card.name}</span> <span className="preco">{card.price}</span> </h3>
                    </div>
                    </>
                    )
                })
                } 
                
                </div>

            <h2>Você pode escolher o serviço e seguir para a proxima pagina.</h2>
           
        </main>
        
        </>
    )
}