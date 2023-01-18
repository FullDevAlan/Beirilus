import React from 'react'
import Header from '../../Header'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';


export default function Schedule() {

    const [currentStep, setCurrentStep] = React.useState(0);
    const [data, setData]: any = React.useState({
        service: {},
        worker: {},
        date: null,
        time: {}
    });

    const onSelect = (name: any, value: any, shoundNextStep: any = true) => {

        setData({
            ...data,
            [name]: value
        })

        if (shoundNextStep) {
            setCurrentStep(currentStep + 1)
        }
    }

    const resetSteps = () => {
        setData({
            service: {},
            worker: {},
            date: null,
            time: {}
        })
        setCurrentStep(0)
    }

    const previousStep = () => {
        setCurrentStep(currentStep - 1)
    }

    const steps = [
        <Step1 data={data} onSelect={onSelect} />,
        <Step2 data={data} previousStep={previousStep} onSelect={onSelect} />,
        <Step3 data={data} previousStep={previousStep} onSelect={onSelect} />,
        <Step4 data={data} previousStep={previousStep} onSelect={onSelect} resetSteps={resetSteps} />,
    ];

    const stepLabels = [
        "Selecione o serviço desejado",
        "Escolha seu profissional",
        "Selecione a data",
        "Selecione o horário",
    ]

    return (
        <div className='bg' style={{ height: "100%", overflowY: "scroll" }}>
            <Header />
            <div className="container " >
                {
                    currentStep < steps.length - 1 &&
                    <div className="container">
                        <div className="row d-flex align-items-center p-2 text-center">
                            <div className="col-12 col-md-2 ">
                                <button className='btn btn-primary'>{stepLabels[currentStep]}</button>
                            </div>
                            {
                                data.service.name &&
                                <div className="col-12 col-md-2 m-1 ">
                                    <button className='btn btn-secondary btn-block' disabled>{data.service?.name} {data.service?.value}</button>
                                </div>
                            }
                            {
                                data.worker.name &&
                                <div className="col-12 col-md-2 m-1">
                                    <button className='btn btn-secondary btn-block  ' disabled>{data.worker?.name}</button>
                                </div>
                            }
                            {
                                data.date &&
                                <div className="col-12 col-md-2 m-1">
                                    <button className='btn btn-secondary' disabled>{data.date.toLocaleDateString()}</button>
                                </div>
                            }
                            {
                                data.time.name &&
                                <div className="col-12 col-md-2 m-1">
                                    <button className='btn btn-secondary' disabled>{data.time.name}</button>
                                </div>
                            }
                        </div>
                    </div>
                }
                {
                    steps[currentStep]
                }
                {
                    currentStep > 0 &&
                    <button className='btn btn-primary m-2' onClick={previousStep}>Voltar</button>
                }
            </div>
        </div>
    )
}
