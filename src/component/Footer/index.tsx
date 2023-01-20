import "./stylesFooter.css"

export function Footer(){
    return(
        <>
        <footer>
            <div className="textos-footer">
                <h2>Entre em contato e consulte nossa agenda</h2>
                <p>Consulte também agenda de atendimento para feriados, dias promocionais e descontos em datas comemorativas</p>
            </div>

            <div className="botao-footer">
                <a href="/pagina3"><button>AGENDAR</button></a>
            </div>

        </footer>
        </>
    )
}
