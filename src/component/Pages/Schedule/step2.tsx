import React from "react";

export default function Step2({ data, onSelect }: any) {
  return (
    <div className="p-2">
      <div className="d-flex justify-content-center">
        {data.length === 0 ? (
          <div style={{ color: "#FFCC00", fontSize: "22px" }}>Loading...</div>
        ) : (
          data.map((item: any) => (
            <div
              className="card bg-white text-center "
              style={{ margin: 30, padding: "16px" }}
            >
              <h4 className="text-black">{item.name}</h4>
              <h6 className="text-black">
                <b>Email:</b> {item.email}
              </h6>
              <h6 className="text-black">
                <b>Phone:</b> {item.phone}
              </h6>
              <button
                onClick={() => {
                  onSelect("worker", item);
                }}
                className="btn btn-primary"
              >
                Agendar com {item.name}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
