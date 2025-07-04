import { SignedIn, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className='h-15 max-w-full bg-slate-800 text-white flex justify-between items-center px-2'>
      <div className='scroll-m-20 m-auto sm:m-0 text-center text-2xl font-extrabold tracking-tight text-balance flex items-center'>
        <a href="/"><video width={65} height={65} autoPlay muted loop src="/Animation - 1751560663790.webm" /></a>
        <a href="/"><span>Safe<b className="text-green-500">X</b></span></a>
      </div>

      <div className="flex justify-end items-center shadow-md">
        <header>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </div>
  )
}

export default Navbar
