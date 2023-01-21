import "./stylesMainp9.css";
import { useEffect, useState } from "react";
import axios from 'axios'


export function MainP9EscolherHora(){

      const apiHorario = [
        {startDate: "09:00", endDate: "10:00" },
        {startDate: "10:00", endDate: "11:00" },
        {startDate: "11:00", endDate: "12:00" },
        {startDate: "12:00", endDate: "13:00" },
        {startDate: "13:00", endDate: "14:00" },
        {startDate: "14:00", endDate: "15:00" },
        {startDate: "14:00", endDate: "15:00" },
        {startDate: "16:00", endDate: "17:00" },
        {startDate: "17:00", endDate: "18:00" },
    ]

    const [startDate, setStartData] = useState("");
    const [endDate, setEndData] = useState("");

    function handleClick(index: number, cardHorario: any){

        setStartData(cardHorario.startDate);
        setEndData(cardHorario.startDate);

        console.log('o index aqui: ', index)
        console.log('o index aqui: ', cardHorario.endDate)

    }

    function enviarDados(){
        axios.post('https://beirilus.onrender.com/booking',{
            // id,  --> AGUARDANDO RECEBER DADO
            startDate,
            endDate,
            // createdAt,  --> AGUARDANDO RECEBER DADO
            // updatedAt,  --> AGUARDANDO RECEBER DADO
            // customerId,  --> AGUARDANDO RECEBER DADO
            // servicesId,  --> AGUARDANDO RECEBER DADO
            // barberId,  --> AGUARDANDO RECEBER DADO
        })
    }

    return(

        <>
        <main className="pagina9">
            <div className="agendamentos">
                <div className="escolhaSeuHorario">
                    <h3>Escolha seu horário</h3>
                </div>

                <div className="selecionados">
                    <p></p>
                </div>

                <div className="selecionados">
                    <p></p>
                </div>

                <div className="selecionados">
                    <p></p>
                </div>

                <div className="horario">
                    {  startDate != "" &&  (
                        <p>{startDate} às {endDate}</p>
                    )}   
                </div>
            </div>

            <div className="section">

                {apiHorario.map((cardHorario: any, index: number) => {
                    return(
                    <>
                     <div className="card" key={cardHorario.endDate}>
                        <h3 onClick={() => {handleClick(index, cardHorario)}}> 
                            <span id="dataInicio" className="texto">{cardHorario.startDate}</span> 
                                às 
                            <span className="texto" id="dataFim">{cardHorario.endDate}</span>
                        </h3>
                    </div>
                    </>
                    )
                })
                } 
                
                </div>

            <div className="button">
                <a href="#"><button onClick={enviarDados}> &lt; Voltar </button></a>
               { startDate != "" &&  (

                    <a href="#"><button> Confirmar </button></a>
                )}
            </div>

            
           
        </main>
        
        </>
    )
}