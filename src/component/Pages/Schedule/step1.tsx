import React from "react";
import axios from "axios";

export default function Step1({ onSelect }: any) {
  const [services, setServices] = React.useState([]);

  const getServicesListApi = async () => {
    try {
      const { data } = await axios.get(
        "https://beirilus.onrender.com/services"
      );
      setServices(data.listServices);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getServicesListApi();
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ padding: 30 }}
      >
        {services.length === 0 ? (
          <div style={{ color: "#FFCC00", fontSize: "22px" }}>Loading...</div>
        ) : (
          services.map((item: any) => (
            <div
              onClick={() => {
                onSelect("service", item);
              }}
              className="service-item d-flex justify-content-between align-items-center"
            >
              <p className="m-0">{item.name}</p>
              <p className="m-0">{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
