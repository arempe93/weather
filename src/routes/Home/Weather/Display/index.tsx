import {
  faExclamationTriangle,
  faLocationArrow,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import qs from 'query-string'
import useSWR from 'swr'

import Stack from '@/components/Stack'

import MainPanel from './MainPanel'
import SidePanel from './SidePanel'

import data from '../tempdata'

export type Props = {
  coords?: {
    lat: number
    lon: number
  }
  name?: string
}

const Display = ({ coords, name }: Props) => {
  // const { data, error } = useSWR(
  //   coords ? [coords.lat, coords.lon] : null,
  //   currentWeatherFetcher,
  //   {
  //     dedupingInterval: 10 * 60 * 1000,
  //   }
  // )

  // if (error) {
  //   return (
  //     <div className="flex items-center gap-8 p-8 bg-danger-alpha-16 border border-danger rounded-lg text-[white] w-full">
  //       <FontAwesomeIcon className="text-2xl" icon={faExclamationTriangle} />
  //       <div>
  //         <h3>Unable to get location</h3>
  //         <small className="text-white-alpha-76">Reason: {error.message}</small>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <Stack vertical gap={32}>
      <Stack align="center" justify="center" horizontalGap={16}>
        <FontAwesomeIcon
          fixedWidth
          className="text-[white] text-xl"
          icon={!!name ? faMapMarkerAlt : faLocationArrow}
        />
        <h1 className="text-[white] font-medium text-center">
          {name ? name : 'My location'}
        </h1>
      </Stack>
      <div className="w-full grid gap-6 grid-cols-1 grid-rows-none laptop:grid-cols-2 laptop:gap-12">
        <MainPanel data={data} />
        <SidePanel data={data} />
      </div>
    </Stack>
  )
}

const currentWeatherFetcher = async (lat: number, lon: number) => {
  const url = qs.stringifyUrl({
    url: '/api/openweather/data/2.5/onecall',
    query: { lat, lon },
  })
  const result = await fetch(url)
  return await result.json()
}

export default Display
