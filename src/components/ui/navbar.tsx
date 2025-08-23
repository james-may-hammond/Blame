"use client"; // This is a client feature as we're gonna use a lot of UI elements

import { SignIn, SignInButton, SignUp, SignUpButton, useUser } from "@clerk/nextjs";
import {Proportions} from "lucide-react";
import { Button } from "./button";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
    return (
        <header className="border-b bg-while/60 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Proportions className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400"/>
                    <span className="text-xl sm:text-2xl font-bold">Blame</span>
                </div>
                {isSignedIn ? (<div></div>) : 
                  (<div className="flex items-center space-x-4 sm:space-x-4">
                    <SignInButton>
                      <Button variant="ghost" size = "sm" className="text-xs sm:text-sm">
                        SignIn
                      </Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button size = "sm" className="text-xs sm:text-sm">
                        SignUp
                      </Button>
                    </SignUpButton>
                  </div>)}
            </div>
        </header>
    );

}
