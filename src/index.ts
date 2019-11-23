import * as express from 'express'
import * as cors from 'cors'
import * as functions from 'firebase-functions';
import * as solutionController from './controllers/solution.controller'

const app = express()

app.use(cors({ origin: true }))

//app.get('/test', (req, res) => res.send({status: 'OK'}))
app.post('/calculation', solutionController.calculation)
app.post('/multiplicationTable', solutionController.multiplicationTable)

exports.api = functions.region('us-east1').https.onRequest(app)