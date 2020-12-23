import Link from 'next/link'
import AlgoliaSearch from '../molecules/AlgoliaSearch'
import Navigation from './Navigation'

function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="/logo.svg"
          alt="site logo"
          loading="lazy"
          height="128"
          width="128"
        />
      </a>
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 pb-8 transition-all z-50">
      <AlgoliaSearch indexName="wds_dev_searchable_posts" />
      <div className="container px-4 lg:px-0 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  )
}
