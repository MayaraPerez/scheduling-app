package repository

import (
	"backend/internal/model"
	"database/sql"
	"fmt"
)

func InsertAppointment(db *sql.DB, a model.Appointment) error {
	query := `
	INSERT INTO appointments (client_name, service, date, time, status)
	VALUES (?, ?, ?, ?, ?)
	`

	_, err := db.Exec(query, a.ClientName, a.Service, a.Date, a.Time, "pendente")
	return err
}

func GetAppointmentsById(db *sql.DB, id int) (model.Appointment, error) {
	rows := db.QueryRow(`
	SELECT * FROM appointments WHERE id = ?
	`, id)

	var a model.Appointment

	err := rows.Scan(
		&a.ID,
		&a.ClientName,
		&a.Service,
		&a.Date,
		&a.Time,
		&a.Status,
	)

	return a, err

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
	result, err := db.Exec(`DELETE FROM appointments WHERE id = ?`, id)
	if err != nil {
		return err
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return err
	}
	fmt.Println("Rows affected:", rowsAffected)

	if rowsAffected == 0 {
		return fmt.Errorf("no appointment found with id %d", id)
	}
	return nil
}
