import { useState } from "react";
import { toast } from "react-toastify";

function CancelAppointment() {
  const [clientID, setClientID] = useState("");
  async function handlersubmit(e) {
    e.preventDefault();

    const cancelAppointment = {
      clientID,
    };

    try {
      const response = await fetch(
        `http://localhost:8080/appointments/cancel?id=${clientID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cancelAppointment),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();

        toast.error(`Erro ao cancelar agendamento: ${errorMessage}`);
        return;
      }
      toast.success("Agendamento cancelado com sucesso!");
    } catch (error) {
      console.error("Error canceling appointment:", error);
      toast.error("Erro ao cancelar agendamento. Tente novamente.");
      return;
    } finally {
      ClearFields();
    }
  }

  function ClearFields() {
    setClientID("");
  }

  return (
    <>
      <div className="container-form">
        <form onSubmit={handlersubmit}>
          <h2>Cancelar Agendamento</h2>

          <input
            type="number"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
            placeholder="Entre com ID"
          />

          <button type="submit">Cancelar</button>
        </form>
      </div>
    </>
  );
}
export default CancelAppointment;
