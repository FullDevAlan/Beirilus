import React from 'react'
import barber1 from '../../../assets/img/worker1.png'
import barber2 from '../../../assets/img/worker2.png'

export default function Step2(props: any) {

    const workers = [
        {
            name: "Alessandro Ramos",
            description: "Mais de 3 anos de experiência",
            image: barber1
        },
        {
            name: "Paulo Henrique",
            description: "Mais de 5 anos de experiência",
            image: barber2
        }
    ];

    return (
        <div className='p-2'>
            <div className='d-flex justify-content-center'>
                {
                    workers.map(item => (
                        <div className='card bg-white text-center ' style={{ margin: 30 }}>
                            <img width={300} src={item.image} />
                            <h4 className='text-black'>{item.name}</h4>
                            <h6 className='text-black'>{item.description}</h6>
                            <button onClick={() => {
                                props.onSelect("worker", item)
                            }} className='btn btn-primary'>Agendar com {item.name}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
