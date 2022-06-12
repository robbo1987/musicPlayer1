import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  MusicNoteIcon
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500">
     
        <button className="flex items-center space-x-2 hover:text-white">
        <HomeIcon className='h-5 w-5' />
        <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
        <SearchIcon className="h-5 w-5" />
        <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
        <LibraryIcon className="h-5 w-5" />
        <p>Library</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
        <MusicNoteIcon className='h-5 w-5' />
        <p>Drums</p>
       </button>
        
     
    </div>
  );
}

export default Sidebar;
