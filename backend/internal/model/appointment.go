package model

type Appointment struct {
	ID         int    `json:"id"`
	ClientName string `json:"client_name"`
	Service    string `json:"service"`
	Date       string `json:"date"`
	Time       string `json:"time"`
	Status     string `json:"status"`
}

// A Struct e uma estrura de mapeamento de dados
// tranforma os dados recebidos em um formato que a aplicação possa entender
// JSON usa client_name é GO usamos ClientName.