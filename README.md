# Airline Booking App

A simple Node.js + Express application for managing basic airline data and ticket bookings. Views are rendered with EJS, static assets are served from `public/`, and data is persisted to local JSON files in `data/`.

## Features
- Add airlines: name, flight number, source, destination
- Book tickets: source, destination, date, customer ID
- View all bookings

## Tech Stack
- Express for HTTP server and routing
- EJS for server-side templating (`views/`)
- body-parser for form handling
- File-based storage using JSON (`data/airlines.json`, `data/bookings.json`)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open the app: http://localhost:3000

## Routes
- GET `/` — Home page
- GET `/add-airline` — Form to add an airline
- POST `/add-airline` — Save new airline to `data/airlines.json`
- GET `/book-ticket` — Form to book a ticket
- POST `/book-ticket` — Save booking to `data/bookings.json`
- GET `/bookings` — List all bookings

## Project Structure
```
airline-booking-app/
├─ app.js
├─ package.json
├─ public/
├─ views/
└─ data/
   ├─ airlines.json
   └─ bookings.json
```

## Notes
- Data is stored locally in JSON files; this is not intended for production use.
- Server listens on port 3000 by default.
