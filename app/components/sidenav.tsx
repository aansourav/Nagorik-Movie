import Link from 'next/link';
import { Suspense } from 'react';
import Genres from './genres';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <nav className="fixed inset-0 flex w-64 flex-col border-r">
      <div className="flex gap-4 p-4 text-4xl font-bold">
        <Link href="/">Nagorik Movie</Link>
      </div>
      <hr />
      <div className="px-4 py-2">
        <p className="text-lg">Discover</p>
      </div>
      <NavLinks />
      <hr />

      <div className="px-4 py-2">
        <p className="text-lg">Genres</p>
      </div>
      <Suspense fallback={<p className="text-center">loading...</p>}>
        <Genres />
      </Suspense>
    </nav>
  );
}
