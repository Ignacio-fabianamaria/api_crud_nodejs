const {mockNewSalesPerson, mockSalesPersonList} = require('./mocks')
const chai = require('chai')
const chaiHttp = require('chai-http')
const sinon = require('sinon')

const app = require('../../src/app')
const connection = require('../../src/db/connection')

const { expect, use } = chai

use(chaiHttp)

describe('SalesPerson endpoint tests', function () {
  it("Should register a new salesperson", async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 50 }])
    const response = await chai.request(app).post('/salesperson').send(mockNewSalesPerson)
    const expectedResponse = {
      id: 50,
      first_name: 'Maria',
      last_name: 'de Jesus',
      date_of_birth: '1975-05-03',
      email: 'mjesus@example.com'
    }
    expect(response.status).to.equal(201)
    expect(response.body).to.deep.equal(expectedResponse)
  })

  it("Testing a salesperson's ", async function () {
    sinon.stub(connection, 'execute').resolves([mockSalesPersonList])
    const response = await chai.request(app).get('/salesperson')
    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal(mockSalesPersonList)
  })
  afterEach(sinon.restore)
})

// sinon.stub(connection, 'execute') - substitui o comportamento da função execute do objeto
// connection, retornando uma promessa resolvida com mockSalesPersonList.
// Isso permite isolar o teste e evitar a necessidade de se conectar ao banco de dados real durante a execução dos testes