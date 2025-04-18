import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, HelpCircle, Phone } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [showSupportCard, setShowSupportCard] = useState(false); // State to toggle the support card


  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Crew-App</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>

                {/* Support Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowSupportCard((prev) => !prev)} // Toggle the support card
                    className="btn btn-sm gap-2"
                  >
                    <HelpCircle className="size-5" />
                    <span className="hidden sm:inline">Support</span>
                  </button>

                  {showSupportCard && (
                    <div
                      className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border border-gray-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="font-medium">CSM: 1212 433 171</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium">Ginesys Support</span>
                      </div>

                      {/* Ginesys One Button */}
                      <a
                        href="https://ginesys.freshdesk.com/support/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full mt-3"
                      >
                        Go to Ginesys One
                      </a>

                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
