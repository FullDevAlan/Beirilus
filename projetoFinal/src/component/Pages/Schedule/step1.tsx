import React from 'react'

export default function Step1(props: any) {

    const services = [
        {
            name: "Corte de Cabelo",
            value: "R$12,00"
        },
        {
            name: "Cabelo e Barba",
            value: "R$12,00"
        },
        {
            name: "Cabelo e sobrancelha",
            value: "R$12,00"
        },
        {
            name: "Corte Navalhado",
            value: "R$12,00"
        },
        {
            name: "Corte e alisamento",
            value: "R$12,00"
        },
        {
            name: "Barba e pézinho",
            value: "R$12,00"
        },
        {
            name: "Barba",
            value: "R$12,00"
        },
        {
            name: "Barba e sobrancelha",
            value: "R$12,00"
        },
        {
            name: "Corte + Barba e alisamento",
            value: "R$12,00"
        },
    ]

    return (
        <div style={{ padding: 10 }}>
            <div className='d-flex flex-wrap justify-content-center' style={{ padding: 30 }}>
                {services.map(item => (
                    <div onClick={() => {
                        props.onSelect("service", item)
                    }} className="service-item d-flex justify-content-between align-items-center">
                        <p className='m-0'>{item.name}</p>
                        <p className='m-0'>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
