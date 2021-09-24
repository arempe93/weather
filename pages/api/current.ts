import { NextApiHandler } from 'next'
import fetch from 'node-fetch'
import qs from 'query-string'

const handler: NextApiHandler = async (req, res) => {
  const url = qs.stringifyUrl({
    url: 'https://api.openweathermap.org/data/2.5/weather',
    query: { ...req.query, appid: process.env.OPENWEATHER_API_KEY },
  })

  const result = await fetch(url)

  res.status(result.status)
  result.body?.pipe(res)
}

export default handler
