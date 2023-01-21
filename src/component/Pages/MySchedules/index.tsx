import React from 'react'
import Header from '../../Header'
import { FiMapPin } from 'react-icons/fi'

export default function MySchedules() {

    const items = [
        {
            date: new Date(),
            time: "9 as 10",
            service: {
                name: "Corte de cabelo",
                value: "R$10,00"
            },
            worker: "Alessandro",
            address: "Rua Niterói"
        },
        {
            date: new Date(),
            time: "11 as 12",
            service: {
                name: "Corte Navalhado",
                value: "R$20,00"
            },
            worker: "Alessandro",
            address: "Rua Niterói, 301"
        },
    ]

    return (
        <div className='bg2'>
            <Header />
            <div className='container card bg-white mt-5 pt-4'>
                <h4 className='text-black text-center'>Meus horários</h4>
                {
                    items.map(item => (
                        <div className="row p-4 m-4" style={{ background: "#D9D9D9", boxShadow: "5px 5px 5px gray", borderStyle: "solid", borderWidth: 2, borderColor: "white" }}>
                            <div className="col-6 rounded d-flex justify-content-center align-items-center flex-column" style={{ background: "#FFCC00" }}>
                                <h5 className='text-black text-center'><b>Data: {item.date.toLocaleDateString()}</b></h5>
                                <h5 className='text-black text-center'><b>Horário: {item.time}</b></h5>
                            </div>
                            <div className="col-6">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between">
                                            <h5 className='text-black'><b>{item.service.name}</b></h5>
                                            <h5 className='text-black'><b>{item.service.value}</b></h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h5 className='text-black'><b>{item.worker}</b></h5>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h6 className='text-black'><FiMapPin /> {item.address}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
