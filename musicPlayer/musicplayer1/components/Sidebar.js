import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  MusicNoteIcon,
  HeartIcon,
  RssIcon,
  PlusCircleIcon
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
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
        <p>Relevant</p>
       </button>

       <button className="flex items-center space-x-2 hover:text-white">
        <MusicNoteIcon className='h-5 w-5' />
        <p>Popular</p>
       </button>

       <button className="flex items-center space-x-2 hover:text-white">
        <MusicNoteIcon className='h-5 w-5' />
        <p>Recent</p>
       </button>

       <button className="flex items-center space-x-2 hover:text-white">
        <MusicNoteIcon className='h-5 w-5' />
        <p>Random</p>
       </button>
        <hr className="border-t-[1.1px] border-gray-900" />   

       
       
        <button className="flex items-center space-x-2 hover:text-white">
        <PlusCircleIcon className="h-5 w-5" />
        <p>Create Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
        <RssIcon className="h-5 w-5" />
        <p>Your Episodes- Testing Only</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
        <HeartIcon className='h-5 w-5' />
        <p>Liked Samples</p>
       </button>
        <hr className="border-t-[1.1px] border-gray-900" />   

        <p className="cursor-pointer hover:text-white"> Techno Samples...</p>
        <p className="cursor-pointer hover:text-white"> Hip Hop Samples...</p>
        <p className="cursor-pointer hover:text-white"> Rock Samples...</p>
        <p className="cursor-pointer hover:text-white"> Reaggae Samples...</p>
        <p className="cursor-pointer hover:text-white"> Country Samples...</p>
        <p className="cursor-pointer hover:text-white"> Pop Samples...</p>
        
        </div>
    </div>
  );
}

export default Sidebar;
