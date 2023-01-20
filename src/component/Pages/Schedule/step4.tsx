import React from "react";
import logo from "../../../assets/img/logo.png";
import axios from "axios";

export default function Step4({ data, resetSteps }: any) {
  const formatedPayload: any = () => {
    const date = new Date(data.date).toISOString().split("T")[0];
    const time = data.time.name.split(" as ");

    const formatedTime = (time: string) =>
      parseInt(time) < 10 ? `0${parseInt(time)}` : parseInt(time);

      const initialTime = formatedTime(time[0]);
      const endTime = formatedTime(time[1]);

    const startDate = `${date}T${initialTime}:00:00.000Z`;
    const endDate = `${date}T${endTime}:00:00.000Z`;

    const payload = {
      customerId: "63c1e57f350837e9b155344e",
      startDate, endDate,
      servicesId: data.service.id,
      barberId: data.worker.id,
    };

    return payload;
  };

  const getBookingListApi = async () => {
    try {
      const response = await axios.get("https://beirilus.onrender.com/booking");
      console.log("response", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBooking = async () => {
    const finalPayload = formatedPayload();

    try {
      await axios.post("https://beirilus.onrender.com/booking", finalPayload);
      resetSteps();

      //aqui redirecionar para a pagina agendamentos **************************

    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getBookingListApi();
  }, []);

  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row">
        <div className="col-12 col-md-6 mt-5 p-5">
          <div className="bg-white rounded ">
            <div
              className="rounded d-flex justify-content-between"
              style={{ background: "black" }}
            >
              <img
                src={logo}
                style={{
                  width: "auto",
                  height: 60,
                }}
              />
              <h6 className="text-end p-4">Informações de agendamento</h6>
            </div>
            <div className="py-4 px-3 d-flex justify-content-between m-0">
              <p className="text-black m-0 p-2">
                Corte: <b>{data.service.name}</b>
              </p>
            </div>
            <div className="py-4 px-3 d-flex justify-content-between m-0">
              <p className="text-black m-0 p-2">
                Valor: <b>{data.service.price}</b>
              </p>
            </div>
            <div className="py-4 px-3 d-flex justify-content-between m-0">
              <p className="text-black m-0 p-2">
                Barbeiro: <b>{data.worker.name}</b>
              </p>
            </div>
            <div className="py-4 px-3 d-flex justify-content-between m-0">
              <p className="text-black m-0">
                {new Date(data.date).toLocaleDateString()}
              </p>
              <p>/</p>
              <p className="text-black m-0">{data.time.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          <button
            className="btn btn-primary text-black me-2"
            onClick={handleBooking}
          >
            Está tudo certo
          </button>
          <button className="btn btn-danger " onClick={resetSteps}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
