import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className='h-15 max-w-full bg-slate-800 text-white flex justify-between items-center px-2'>
      <div className='text-2xl font-extrabold flex items-center'>
        <a href="/"><video width={65} height={65} autoPlay muted loop src="/Animation - 1751560663790.webm" /></a>
        <a href="/">Safe<b className="text-green-500">X</b></a>
      </div>

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
