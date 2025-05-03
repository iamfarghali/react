function Header() {
    return (
        <header className='flex items-center justify-between p-4'>
        <h1 className='font-semibold text-lg sm:text-xl md:text-2xl'>
          Free<span className='text-red-400 bold'>Scribe</span>
        </h1>

        <button className='flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-red-400'>
            <p>New</p>
            <i className='fa-solid fa-plus'></i>
        </button>
      </header>
    )
}

export default Header
