import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import Navbar from "./components/ui/Navbar";
import Manager from "./components/ui/Manager";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <SignedIn>
        <Toaster position="top-center" />
        <Navbar />
        <Manager />
        <Footer />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="cursor-pointer">Sign In</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
export default App;
