import { useState } from "react";
import { toast } from "react-toastify";

function UpdateAppointment() {
  const [clientID, setClientID] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  async function handlersubmit(e) {
    e.preventDefault();

    const UpdateAppointment = {
      clientID,
      status: selectedStatus,
    };

    if ("" === clientID || "" === selectedStatus) {
      toast.error("Preencha todos os campos para atualizar o agendamento.");
      return;
    }

    try {
      await fetch(`http://localhost:8080/appointments/update?id=${clientID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateAppointment),
      });
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.error("Erro ao atualizar agendamento. Tente novamente.");
      return;
    }
    toast.success("Agendamento atualizado com sucesso!");
  }

  return (
    <>
      <div className="container-form">
        <form onSubmit={handlersubmit}>
          <h2>Atualizar Agendamento</h2>

          <input
            type="number"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
            placeholder="Entre com ID"
          />
          <label>Status:</label>
          <select
            className="select-status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Selecione o status</option>
            <option value="PENDING">Pendente</option>
            <option value="CONFIRMED">Confirmado</option>
            <option value="CANCELED">Cancelado</option>
          </select>

          <button type="submit">Atualizar</button>
        </form>
      </div>
    </>
  );
}
export default UpdateAppointment;
