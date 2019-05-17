const players = [
  'Mo Salah','Deandre Yedlin','Joselu','James Milner','Pedro','Trent Alexander Arnold'
]
const clubs = [
  'Brighton','Hull','Colo Colo','Liepzig','Napoli','South Shields'
]
const reasons = [
  'wants a new challenge','is tempted by the nightlife','has fallen out with the manager','had a run in with the fans'
]

const getArrayItem = arr => arr[Math.floor(Math.random()*arr.length)]

exports.handler = (_, __, callback) => {
  const result = `${getArrayItem(players)} has been rumoured to be on his way to ${getArrayItem(clubs)}. A source was quoted saying he ${getArrayItem(reasons)}.`
  const response = {
    "statusCode": 200,
    "headers": {
      "my_header": "my_value"
    },
    "body": JSON.stringify(result),
    "isBase64Encoded": false
  }
  return callback(null, response)
}
