import { SignedIn, SignInButton, SignedOut } from "@clerk/clerk-react";
import Footer from "./components/Footer"
import Manager from "./components/ui/Manager"
import Navbar from "./components/ui/Navbar"
import { Toaster } from "./components/ui/sonner"
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Button } from "./components/ui/button";

function App() {

  return (
    <>

      <SignedIn>
        <Toaster position="top-center" />
        <AlertDialog />
        <Navbar />
        <Manager />
        <Footer />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="default" className="font-semibold cursor-pointer">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

export default App
