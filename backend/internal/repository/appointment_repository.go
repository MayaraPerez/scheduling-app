package repository

import (
	"backend/internal/model"
	"database/sql"
)

func InsertAppointment(db *sql.DB, a model.Appointment) error {
	query := `
	INSERT INTO appointments (client_name, service, date, time, status)
	VALUES (?, ?, ?, ?, ?)
	`

	_, err := db.Exec(query, a.ClientName, a.Service, a.Date, a.Time, "pendente")
	return err
}

func GetAppointmentsByName(db *sql.DB, name string) ([]model.Appointment, error) {
	query := `
	SELECT id, client_name, service, date, time, status
	FROM appointments
	WHERE client_name = ?
	`

	rows, err := db.Query(query, name)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var appointments []model.Appointment

	for rows.Next() {
		var a model.Appointment

		err := rows.Scan(
			&a.ID,
			&a.ClientName,
			&a.Service,
			&a.Date,
			&a.Time,
			&a.Status,
		)
		if err != nil {
			return nil, err
		}

		appointments = append(appointments, a)
	}

	return appointments, nil
}

func UpdateAppointmentStatus(db *sql.DB, id int, status string) error {
	query := `
	UPDATE appointments
	SET status = ?
	WHERE id = ?
	`
	_, err := db.Exec(query, status, id)
	return err
}

func CancelAppointment(db *sql.DB, id int) error {
	query := `DELETE FROM appointments WHERE id = ?`
	_, err := db.Exec(query, id)
	return err
}
