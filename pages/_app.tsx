import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (<React.Fragment>
    <Component {...pageProps} />
    <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
            position: relative;
            font-family: roboto;
          }
          .Container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }

          @media (min-width: 576px) {
            .Container {
                max-width: 540px;
            }
          }
          
          @media (min-width: 768px) {
            .Container {
                max-width: 720px;
            }
          }
          
          @media (min-width: 992px) {
            .Container {
                max-width: 960px;
            }
          }
          
          @media (min-width: 1200px) {
            .Container {
                max-width: 1200px;
            }
          }
          
          @media only screen and (max-width: 3640px) and (min-width: 1200px) {
            .Container {
                max-width: 1170px;
            }
          }
        `}</style>
  </React.Fragment>)
}
export default MyApp
