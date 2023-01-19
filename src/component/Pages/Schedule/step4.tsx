import React from 'react'
import logo from '../../../assets/img/logo.png'

export default function Step4(props: any) {

    return (
        <div className='container' style={{ height: "90vh" }}>
            <div className="row">
                <div className="col-12 col-md-6 mt-5 p-5" >
                    <div className='bg-white rounded '>
                        <div className='rounded d-flex justify-content-between' style={{ background: "black" }}>
                            <img src={logo} style={{
                                width: "auto",
                                height: 60
                            }} />
                            <h6 className='text-end p-4'>Informações de agendamento</h6>
                        </div>
                        <div className='py-4 px-3 d-flex justify-content-between m-0'>
                            <p className='text-black m-0 p-2'><b>{props.data.service.name}</b></p>
                            <p className='text-black m-0 p-2'><b>{props.data.service.value}</b></p><br />
                        </div>
                        <div className='py-4 px-3 d-flex justify-content-between m-0'>
                            <p className='text-black m-0 p-2'><b>{props.data.worker.name}</b></p>
                            <p className='text-black m-0'><b>{props.data.service.value}</b></p><br />
                        </div>
                        <div className='py-4 px-3 d-flex justify-content-between m-0'>
                            <p className='text-black m-0'>{new Date(props.data.date).toLocaleDateString()}</p>
                            <p>/</p>
                            <p className='text-black m-0'>{props.data.time.name}</p>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <img width={300} src={props.data.worker.image} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button className='btn btn-primary text-black me-2'>Está tudo certo</button>
                    <button className='btn btn-danger ' onClick={props.resetSteps}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
