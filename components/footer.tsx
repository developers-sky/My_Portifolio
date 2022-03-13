import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-white mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-white hover:text-gray-900 transition">Home</a>
          </Link>
          <Link href="/">
            <a className="text-white hover:text-gray-900 transition">
              About
            </a>
          </Link>
        </div>
        <div className="text-zinc-900 flex flex-col  space-y-4">
          <ExternalLink href="https://twitter.com/AnuragS24171420">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/anurag-bit">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/guestbook">
            <a className="text-white hover:text-gray-900 transition">
              Guestbook(BETA)
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

