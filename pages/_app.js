import '../styles.css'

export default function Application({Component, pageProps}) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      console.log('First Contentful Paint')
      console.log(metric)
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    case 'Next.js-hydration':
      // handle results
      break
    case 'Next.js-route-change-to-render':
      // handle results
      break
    case 'Next.js-render':
      // handle results
      break
    default:
      break
  }
}