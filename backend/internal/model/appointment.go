package model

type Appointment struct {
	ID         int    `json:"id"`
	ClientName string `json:"client_name"`
	Email      string `json:"email"`
	Phone      string `json:"phone"`
	Service    string `json:"service"`
	Date       string `json:"date"`
	Time       string `json:"time"`
	Status     string `json:"status"`
}
