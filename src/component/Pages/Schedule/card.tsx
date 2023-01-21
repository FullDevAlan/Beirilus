const Card = ({ getLinks }: any) => {

    return <div className='card'>
        <h3>Agendamento registrado com sucesso!</h3>
        <a href={getLinks.linkGoogle}>Agenda Google</a>
        <a href={getLinks.linkOutlook}>Agenda Outlook</a>
    </div>

}

export default Card;

