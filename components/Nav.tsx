import Link from "next/link";
import { P32LogoOnDark } from "./Logo";

// A single-page site: the header carries only the logo, no menu (client
// request, October 2026). Links back to the company site live in the page.
export function Nav() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/90 text-p32-white backdrop-blur-xl">
      <div className="p32-container flex h-20 items-center">
        <Link href="/" prefetch={false} aria-label="P32 Cyber Intelligence, home" className="shrink-0 py-3">
          <P32LogoOnDark height={22} priority />
        </Link>
      </div>
    </header>
  );
}
