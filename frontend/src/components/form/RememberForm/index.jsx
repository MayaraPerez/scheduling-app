import { useState } from "react";
import { Link } from "react-router-dom";

function RememberAppointment() {
  const [clientID, setClientID] = useState("");
  const [appointment, setAppointment] = useState(null);

  async function handlersubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/appointments/remind?id=${clientID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setAppointment(data);
    } catch (error) {
      console.error("Error sending remind:", error);
      return;
    }
  }

  return (
    <>
      <div className="container-form">
        <form onSubmit={handlersubmit}>
          <h2>Meu Agendamento</h2>

          <input
            placeholder="Entre com ID"
            type="number"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
          />
          {!appointment && <button type="submit">Relembre</button>}

          {appointment && (
            <div className="appointment-details">
              <h3>Detalhes do Agendamento</h3>
              <p>
                <strong>ID:</strong> {appointment.id}
              </p>
              <p>
                <strong>Nome do Cliente:</strong> {appointment.client_name}
              </p>
              <p>
                <strong>Serviço:</strong> {appointment.service}
              </p>
              <p>
                <strong>Data:</strong> {appointment.date}
              </p>
              <p>
                <strong>Hora:</strong> {appointment.time}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
              <Link className="link" to={"/"}>
                <button className="button-details-back">Voltar</button>
              </Link>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default RememberAppointment;
