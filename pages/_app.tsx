import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/global.css'

import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import { IdProvider } from '@radix-ui/react-id'
import type { AppProps as BaseAppProps } from 'next/app'
import { ModalProvider } from 'react-modal-hook'

import DisplaySettingsProvider from '@/app/DisplaySettingsProvider'

fontAwesomeConfig.autoAddCss = false

type AppProps = Omit<BaseAppProps, 'Component'> & {
  Component: BaseAppProps['Component'] & {
    applyPersistedLayout?: (page: JSX.Element) => JSX.Element
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const pageMarkup = !!Component.applyPersistedLayout ? (
    Component.applyPersistedLayout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  )

  return (
    <IdProvider>
      <DisplaySettingsProvider>
        <ModalProvider>{pageMarkup}</ModalProvider>
      </DisplaySettingsProvider>
    </IdProvider>
  )
}

export default App
