import { searchMovie } from '../lib/actions';
import SearchBar from './search-bar';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <div className="ml-64 flex items-center justify-between gap-4 border-b p-4  text-2xl">
      <SearchBar search={searchMovie} />
      <div className="flex gap-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
