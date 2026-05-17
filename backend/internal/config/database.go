package config

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func ConnectDB() *sql.DB {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading file .env:", err)
	}

	password := os.Getenv("DB_PASSWORD")

	dsn := fmt.Sprintf("root:%s@tcp(127.0.0.1:3306)/appointments_db", password)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Erro ao conectar no banco:", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal("Banco não responde:", err)
	}

	return db
}
