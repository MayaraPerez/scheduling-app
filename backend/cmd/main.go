package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/internal/handler"
)

func main() {

	http.HandleFunc("/appointments", handler.CreateAppointment)
	http.HandleFunc("/appointments/remind", handler.GetAppointment)
	http.HandleFunc("/appointments/update", handler.UpdateAppointment)
	http.HandleFunc("/appointments/cancel", handler.CancelAppointment)

	// rota de health check
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "ok")
	})

	fmt.Println("Servidor rodando na porta 8080")

	log.Fatal(http.ListenAndServe(":8080", nil))
}
