const players = require('./players.json')
const clubs = require('./clubs.json')
const reasons = require('./reasons.json')

const getArrayItem = arr => arr[Math.floor(Math.random() * arr.length)]

exports.handler = (_, __, callback) => {
  const result = `${getArrayItem(players)} has been rumoured to be on his way to ${getArrayItem(clubs)}. A source was quoted saying he ${getArrayItem(reasons)}.`
  const response = {
    'statusCode': 200,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'application/json'
    },
    'body': JSON.stringify(result),
    'isBase64Encoded': false
  }
  return callback(null, response)
}
