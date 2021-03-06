'use strict'

const path = require('path')

module.exports = {
  confirm,
  fulfil,
  cancel
}

function confirm (req, res) {
  var bookings = [{
    bookingId: '3001',
    description: 'Fahrt von Bern nach Thun am 14.01.2017 20:04.',
    _links: {
        'self': {
            href: 'bookings/3001'
        }, 'fulfil': {
            title: 'Billette zur Buchung als PDF holen', href: 'api/bookings/3001/fulfil?type=pdf'
        }, 'cancel': {
            title: 'Buchung annullieren', href: 'api/bookings/3001/cancel'
        }
    }
  }]

  res.json(bookings)
}

function fulfil (req, res) {
  if (req.query.type === 'pdf') {
    var options = {
      root: path.join(__dirname, '/../../public/app/components')
    }
    res.sendFile('tickets/ticketB1.pdf', options)
  } else {
    res.sendStatus(415)
  }
}

function cancel (req, res) {
  var bookingId = {
    bookingId: '3001'
  }
  res.json(bookingId)
}