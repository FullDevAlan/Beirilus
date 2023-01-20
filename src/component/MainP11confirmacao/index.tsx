import "./stylesMainP11.css"
import aleff from "../imgs/alessandro.png"

export function MainP11confirmacao(){
    return(
        <>
        <main className="pagina11">

            <div className="principal">
                
                <div className="cards">
                 <div className="card1">
                
                    <h3 className="titulo">Informações do agendamento</h3>
                <div className="flex">
                <div >
                  

                    <h3>Serviço</h3>
                    
                    <p>Alessandro</p>
                    <p>Rua Niterói, 845 - Lagoinha - Ribeirão Preto</p>
                    <h3>Data : 09/12/2022</h3>
                     

                </div>

                <div>
                    <h3>Valor</h3>
                    <h3 className="horas"> 09:00 as 10:00 Hrs</h3> 
                    
                </div>

                </div>
               
                
                </div>

                <div className="card2">
                    
                        <img src={aleff} alt="Foto do barbeiro" />
                    
                </div>
                </div>

                <div className="botoes">
                <button> Está tudo certo!</button>
                <button className="vermelho"> Cancelar</button>
                </div>
            </div>

        </main>
        
        </>
    )
}