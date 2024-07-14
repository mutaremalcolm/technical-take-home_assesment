import Button from './Button';
import { Logs } from 'lucide-react';
import React, { useState } from 'react';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ openModal, handleSort }) => {
    const location = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

    const handleClick = () => {
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <h1 className="font-code text-3xl uppercase text-n-1 transition-colors hover:text-color-1">ClearScore</h1>
                </a>
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url} onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <a href="https://vercel.com/mutaremalcolms-projects/vite-typescript-portfolio" className="hidden lg:block button mr-8 text-n-1/50 transition-colors hover:text-n-1">
                    Personal Portfolio
                </a>
                <button className="flex items-center mr-5 lg:mr-15 font-code text-n-1 transition-colors hover:text-color-1">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center space-x-2 bg-n-8/90">
                            <Logs />
                            <span>Sort</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Sort Ideas</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleSort('A-Z')}>Sort A-Z</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSort('Z-A')}>Sort Z-A</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSort('Date')}>Sort by Date</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </button>
                <Button onClick={openModal}>New Idea</Button>
                {/* ToDo: implemented burger menu for mobile toggle */}

                {/* <button className="ml-5 lg:hidden" onClick={toggleNavigation}>
                    {openNavigation ? 'Close' : 'Menu'}
                </button> */}
            </div>
        </div>
    );
};

export default Header;
