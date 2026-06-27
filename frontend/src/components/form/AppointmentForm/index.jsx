import DatePicker from "react-datepicker";
import { useState } from "react";
import { toast } from "react-toastify";
import "./style.css";

function Appointment() {
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const appointmentData = {
      client_name: clientName,
      service,
      date: selectedDate.toISOString().split("T")[0] || "",
      time: selectedTime,
      phone,
      email,
    };
    console.log("Appointment Data:", appointmentData);

    try {
      const request = await fetch("http://localhost:8080/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });
      console.log("Request sent:", request);
      ClearFields();
    } catch (error) {
      console.error("Error creating appointment:", error);
      toast.error("Erro ao criar agendamento. Tente novamente.");
      return;
    }

    toast.success("Agendamento criado com sucesso!");
  }

  function ClearFields() {
    setClientName("");
    setService("");
    setSelectedDate(null);
    setSelectedTime("");
    setEmail("");
    setPhone("");
  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h2>Novo Agendamento</h2>
        <br />

        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ex:. (11) 99999-9999"
        />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu Email"
        />
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Digite serviço desejado"
        />

        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione uma data"
            minDate={new Date()}
          />
        </div>

        <div>
          <label>Escolha o horário:</label>

          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}
export default Appointment;
