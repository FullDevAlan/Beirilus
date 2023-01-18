import React from 'react'
import '@natscale/react-calendar/dist/main.css';
import { Calendar } from '@natscale/react-calendar';

export default function Step3(props: any) {
    const [value, setValue] = React.useState();

    const hours = [
        {
            name: "9 as 10",
        },
        {
            name: "10 as 11",
        },
        {
            name: "11 as 12",
        },
        {
            name: "12 as 13",
        },
        {
            name: "13 as 14",
        },
        {
            name: "14 as 15",
        },
        {
            name: "15 as 16",
        },
        {
            name: "16 as 17",
        },
        {
            name: "17 as 18",
        },
        {
            name: "18 as 19",
        },
    ]

    const onChange = React.useCallback(
        (value: any) => {
            setValue(value);
            props.onSelect("date", value, false)
        },
        [setValue],
    );

    return (
        <div className='p-2'>
            <div className="row">
                <div className="col-12 col-md-6 mt-5    ">
                    <div style={{ height: "100%!important" }} className="d-flex justify-content-center">
                        <Calendar useDarkMode className='w-100' value={value} onChange={onChange} />
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5" style={{}}>
                    <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: 450 }}>
                        {
                            props.data.date &&
                            <div style={{ padding: 10 }}>
                                <div className='d-flex flex-wrap justify-content-center' style={{ padding: 30 }}>
                                    {hours.map(item => (
                                        <div onClick={() => {
                                            props.onSelect("time", item)
                                        }} className="time-item d-flex justify-content-center align-items-center">
                                            <p className='text-black m-0'>{item.name} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
