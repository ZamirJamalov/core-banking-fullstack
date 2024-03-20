package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
)

type FormData struct {
    Name  string `json:"name"`
    Email string `json:"email"`
}

func handleSubmit(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Methods", "POST")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	
	 if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return
    }
	
    var formData FormData
    err := json.NewDecoder(r.Body).Decode(&formData)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    fmt.Println("Received data:")
    fmt.Println("Name:", formData.Name)
    fmt.Println("Email:", formData.Email)

    w.WriteHeader(http.StatusOK)
}

func main() {
    http.HandleFunc("/submit", handleSubmit)

    fmt.Println("Server is running on port 5000")
    log.Fatal(http.ListenAndServe(":5000", nil))
}