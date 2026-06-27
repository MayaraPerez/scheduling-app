package notification

import (
	"backend/internal/model"
	"fmt"
	"os"

	"github.com/resend/resend-go/v2"
)

func SendAppointmentNotificationEmail(a model.Appointment) error {
	var client = resend.NewClient(os.Getenv("RESEND_API_KEY"))

	params := &resend.SendEmailRequest{
		From:    "Beauty Studio <onboarding@resend.dev>",
		To:      []string{a.Email},
		Subject: "Appointment Confirmation",
		Html: fmt.Sprintf(`
		<h2>Olá %s!</h2>
		
		<p>Seu agendamento foi criado com sucesso.</p>

		<p>ID do agendamento: %d</p>
		<ul>
		<li><b>Serviço:</b> %s</li>
		<li><b>Data:</b> %s</li>
		<li><b>Horário:</b> %s</li>
		</ul>
		
		<p>Guarde esse ID.</p>
		<p>Você precisará dele para:</p>

		<p>• consultar seu agendamento</p>
		<p>• cancelar</p>
		<p>• reagendar</p>

		<p>Até breve!</p>
		<p>Beauty Studio</p>
		`,
			a.ClientName,
			a.ID,
			a.Service,
			a.Date,
			a.Time),
	}

	_, err := client.Emails.Send(params)
	if err != nil {
		return err
	}

	return nil
}
