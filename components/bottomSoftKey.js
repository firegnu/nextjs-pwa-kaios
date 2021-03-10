import { useRouter } from 'next/router'

export default function BottomSoftKey() {
  return (
    <div className="fixed bottom-0 left-0 h-12 w-full z-10 flex flex-row">
      <Link  href="/">Home</Link>
      <Link  href="/settings">Settings</Link>
      <Link  href="/tracker">Tracker</Link>
    </div>
  )
}

const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      className="flex-1"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
    </a>
  )
}
