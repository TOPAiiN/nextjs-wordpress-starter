import WordPressProvider from '@/components/common/WordPressProvider'
import {useWpApollo} from '@/lib/wordpress/connector'
import '@/styles/demo.css'
import '@/styles/index.css'
import {ApolloProvider} from '@apollo/client'
import {SessionProvider as NextAuthProvider} from 'next-auth/react'
import Error from 'next/error'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {useState} from 'react'
import 'tailwindcss/tailwind.css'

/**
 * Render the App component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.Component Page component to display.
 * @param  {boolean} props.pageProps Page component props.
 * @return {Element}                 The App component.
 */
export default function App({Component, pageProps}) {
  /**
   * Wrap the app in the ApolloProvider component.
   *
   * @see https://www.apollographql.com/docs/react/api/react/hooks/#the-apolloprovider-component
   */
  const apolloClient = useWpApollo(pageProps)

  // Check for errors.
  const error = pageProps?.error
  let errorMessage = pageProps?.errorMessage ?? 'An unknown error occurred.'
  // Trim trailing period - added via Error component.
  errorMessage = errorMessage.replace(/\.$/g, '')

  // Extract specific props from page props.
  const {
    defaultSeo: {social, ...defaultSeoData} = {},
    menus,
    algolia,
    preview,
    session,
    ...passThruProps
  } = pageProps

  const componentProps = {
    ...passThruProps,
    post: {
      ...passThruProps?.post,
      seo: {
        ...passThruProps?.post?.seo,
        siteTitle: defaultSeoData?.openGraph?.siteName,
        siteDescription: defaultSeoData?.description,
        social
      }
    }
  }

  // Initialize state for WordPress context provider.
  const [wp] = useState({
    algolia: {
      indexName: algolia?.indexName
    },
    menus: menus
  })

  return (
    <NextAuthProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <WordPressProvider value={wp}>
          {error ? (
            <Error statusCode={500} title={errorMessage} />
          ) : (
            <>
              {!!preview && (
                // TODO -- abstract this to a component.
                <p>
                  This page is a preview.{' '}
                  <Link href="/api/exit-preview">
                    <a>Exit preview mode</a>
                  </Link>
                </p>
              )}
              <Component {...componentProps} />
            </>
          )}
        </WordPressProvider>
      </ApolloProvider>
    </NextAuthProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
