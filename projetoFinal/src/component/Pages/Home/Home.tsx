import React from 'react'
import Header from '../../Header'
import "./Home.css"
import barber1 from '../../../assets/img/worker1.png'
import barber2 from '../../../assets/img/worker2.png'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import barberShop from '../../../assets/img/barbershop.png'
import cut1 from '../../../assets/img/cut.png'
import cut2 from '../../../assets/img/cut2.png'

export default function Home() {
    const navigate = useNavigate()
    const redirectToSchedule = () => {
        navigate("/schedule")
    }

    const workers = [
        {
            name: "Alessandro Ramos",
            description: "Mais de 3 anos de experiência",
            fullDescription: `Paulo Henrique (PH)
Trabalha como barbeiro 
desde 2017.
Tendo trabalhado :

● Studio VIP

● Salon Barber

● Carlin Cortes
            `,
            image: barber1
        },
        {
            name: "Paulo Henrique",
            fullDescription: `Alessandro
Trabalha como barbeiro 
desde 2003.

Entre várias experiências 
trabalhou em Portugal e 
Brasil.

Atualmente barbeiro e 
proprietário da 
Berillo’s Barbearia.
            `,
            description: "Mais de 5 anos de experiência",
            image: barber2
        }
    ];

    const [detailsWorker, setDetailsWorker]: any = React.useState(null)

    const handleDetails = (item: any) => {
        detailsWorker == null ? setDetailsWorker({ ...item }) : setDetailsWorker(null)
    }


    return (
        <div className='h-100 '>
            <Header />
            <div className='bg d-flex flex-column justify-content-end align-items-center' style={{ paddingBottom: 80, height: "90%" }}>
                <h5 className='text-center mb-5'>Valorize seu tempo e agende conosco.<br />
                    Os melhores serviços na melhor barbearia!</h5>
                <button className='btn btn-primary btn-lg' onClick={redirectToSchedule}>Agendar</button>
                <div className='mt-4 d-flex justify-content-end align-items-center p-1 w-100'>
                    <button className='btn btn-primary btn-sm' style={{ width: 40, height: 40, borderRadius: "50%" }}>
                        <BsFacebook />
                    </button>

                    <button className='ms-1 btn btn-primary btn-sm' style={{ width: 40, height: 40, borderRadius: "50%" }}>
                        <BsInstagram />
                    </button>
                </div>
            </div>
            <div className='text-center my-4' id='workers'>
                <h4>Nossos Profissionais</h4>
            </div>

            <div className='bg2 d-flex justify-content-center align-items-center p-1 ' style={{ overflow: "scroll" }}>
                <div className="row d-flex justify-content-center">
                    {
                        workers.map((item, index) => (
                            <>
                                {
                                    detailsWorker &&
                                    <>
                                        {item.name == detailsWorker.name ? (<>
                                            <div className='card bg-white m-2' style={{ width: 400, }}>
                                                <img width={380} src={item.image} />
                                                <h4 className='text-black text-center'>{item.name}</h4>
                                                <h6 className='text-black text-center'>{item.description}</h6>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <button className='btn btn-primary btn-lg mb-2' onClick={() => handleDetails(item)}>
                                                        Saiba mais
                                                    </button>
                                                </div>
                                            </div>
                                        </>) : <>
                                            <div className='card-hidden card bg-white m-2 d-flex justify-content-center' style={{ width: 400, whiteSpace: "pre-wrap" }}>
                                                <h4 className='text-black text-start'>{item.fullDescription}</h4>
                                            </div>
                                        </>}
                                    </>
                                }
                                {
                                    !detailsWorker &&
                                    <div className={`card bg-white m-2 `} style={{ width: 400, }}>
                                        <img width={380} src={item.image} />
                                        <img src={item.name == "Paulo Henrique" ? cut1 : cut2} style={{
                                            position: "absolute",
                                            width: "auto",
                                            height: index == 0 ? 200 : 350,
                                            zIndex: 200,
                                            marginTop: index == 0 ? 350 : 0,
                                            marginLeft: index == 0 ? "-100px" : 230
                                        }} />
                                        <h4 className='text-black text-center'>{item.name}</h4>
                                        <h6 className='text-black text-center'>{item.description}</h6>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <button className='btn btn-primary btn-lg mb-2' onClick={() => {
                                                handleDetails(item)
                                            }}>
                                                Saiba mais
                                            </button>
                                        </div>
                                    </div>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
            <div className='text-center my-4' id='about'>
                <h4>Sobre nós</h4>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={barberShop} style={{ width: "100%" }} />
                    </div>
                    <div className="col-12 col-md-6 p-5" style={{ background: "#D9D9D9" }}>
                        <h3 className='text-gray'>Sobre</h3>
                        <p className='text-gray'>
                            O foco de atendimento da Berillo's Barbearia é o público masculino adulto, mas também atendemos crianças. Por isso, traga seu filho, seu sobrinho, seu neto e venha passar momentos agradáveis conosco.
                            <br /><br />
                            Nosso time de profissionais sempre busca ampliar o casting de cortes e barbas, além de se atualizar sobre os melhores procedimentos estéticos. Tudo para oferecer a você serviços de qualidade.
                            <br /><br />
                            Para um atendimento personalizado, oferecemos a possibilidade de você fazer o seu agendamento de maneira antecipada. Já agendou o seu horário?
                        </p>
                        <p className='text-gray'><b>Alessandro Ramos</b> - ~ Berillo´s Barbearia</p>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{ background: "#FFCC00" }}>
                <div className="row p-4">
                    <div className="col-10" >
                        <h5 className='text-black'>Entre em contato e consulte nossa agenda</h5>
                        <p className='text-black'>Consulte também agenda de atendimento para feriados, dias promocionais e descontos em datas comemorativas</p>
                    </div>
                    <div className="col-2 d-flex justify-items-center align-items-center">
                        <button className='btn btn-primary btn-lg' style={{ borderColor: "black" }} onClick={redirectToSchedule}>Agendar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
