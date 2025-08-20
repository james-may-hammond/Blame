"use client"; // This is a client feature as we're gonna use a lot of UI elements

import {Proportions} from "lucide-react";

export default function Navbar() {
    return (
        <header className="border-b bg-while/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center">
                <div>
                    <Proportions />
                    <span>Blame</span>
                </div>
            </div>
        </header>
    );

}
