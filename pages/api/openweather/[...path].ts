import { NextApiHandler } from 'next'
import fetch from 'node-fetch'
import qs from 'query-string'

const OPENWEATHER_API_URL = 'https://api.openweathermap.org'

type QueryParameters = {
  path: string[]
  [key: string]: string | string[]
}

const handler: NextApiHandler = async (req, res) => {
  const { path, ...query } = req.query as QueryParameters

  const url = qs.stringifyUrl({
    url: `${OPENWEATHER_API_URL}/${path.join('/')}`,
    query: { ...query, appid: process.env.OPENWEATHER_API_KEY },
  })

  const result = await fetch(url)

  res.status(result.status)
  result.body?.pipe(res)
}

export default handler
