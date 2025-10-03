const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Load data
const airlinesFile = path.join(__dirname, 'data', 'airlines.json');
const bookingsFile = path.join(__dirname, 'data', 'bookings.json');

// Home Page
app.get('/', (req, res) => {
    res.render('index');
});

// Show Add Airline Form
app.get('/add-airline', (req, res) => {
    res.render('add-airline');
});

// Handle Add Airline
app.post('/add-airline', (req, res) => {
    const { name, flightNumber, source, destination } = req.body;
    const airlines = JSON.parse(fs.readFileSync(airlinesFile));
    airlines.push({ name, flightNumber, source, destination });
    fs.writeFileSync(airlinesFile, JSON.stringify(airlines, null, 2));
    res.redirect('/');
});

// Show Book Ticket Form
app.get('/book-ticket', (req, res) => {
    res.render('book-ticket');
});

// Handle Ticket Booking
app.post('/book-ticket', (req, res) => {
    const { source, destination, date, customerId } = req.body;
    const bookings = JSON.parse(fs.readFileSync(bookingsFile));
    bookings.push({ source, destination, date, customerId });
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
    res.redirect('/');
});

// Show Bookings
app.get('/bookings', (req, res) => {
    const bookings = JSON.parse(fs.readFileSync(bookingsFile));
    res.render('bookings', { bookings });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
