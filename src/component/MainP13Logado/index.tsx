import "./stylesP13Logado.css"

export function MainP13Logado(){

    return(
        <>
            <main className="pagina13">

                <a href="">
                    <h4>Logout &gt;</h4>
                </a>

                <h1>Olá, Marcos</h1>

                <a href="#"> 
                    <div className="agendeHorarios">
                        <h3>Agende um horário </h3>
                    </div>
                </a> 
                <a href="#">
                    <div className="meusHorarios">
                        <h3>Meus horários</h3>
                    </div>
                </a>
            </main>
        </>
    )
}