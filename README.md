Weather app
===========

## Check it out

https://weather-arempe93.vercel.app

## Run it locally

To run the app locally, you will need to set 2 env vars.

```sh
cp .env.example .env.local
```

#### `OPENWEATHER_API_KEY`

1. [Sign up for a free account](https://home.openweathermap.org/users/sign_up)
2. Go to [My API keys](https://home.openweathermap.org/api_keys) and copy the key

#### `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

1. [Sign up or login to Google Cloud](https://console.cloud.google.com/)
2. [Create a new project](https://console.cloud.google.com/projectcreate)
3. On the [APIs Dashboard](https://console.cloud.google.com/apis/dashboard) enable:
    - Places API
    - Geocoding API
4. On the [Google Maps Credentials dashboard](https://console.cloud.google.com/google/maps-apis/credentials) create a new "API Key" and choose "Restrict Key".
5. Under "API restrictions" select the following:
    - Geocoding API
    - Maps JavaScript API
    - Places API
6. Save & copy the key

Once the environment is configured, install dependencies with `yarn` and run the dev server.

```sh
yarn dev
```
