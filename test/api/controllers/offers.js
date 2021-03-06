'use strict'

var request = require('supertest')
var server = require('../../../')

describe('controllers', function () {
  describe('get offers for origin and destination', function (done) {
    describe('GET /api/offers', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/offers')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                  if (err) {
                    throw err
                  } else {
                    done()
                  }
                })
      })
    })
  })

  describe('get trip offers', function (done) {
    describe('GET /api/offers/3001', function (done) {
      it('should not return an error', function (done) {
        request(server)
                .get('/api/offers/3001')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end(function (err, res) {
                  if (err) {
                    throw err
                  } else {
                    done()
                  }
                })
      })
    })
  })
})
