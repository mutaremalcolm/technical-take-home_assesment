import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Navigation() {
  return (
    <Navbar >
      <NavbarBrand>
        <p className="font-bold text-inherit">Th!nkPad</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button  as={Link} color="secondary"  href="#" variant="flat">
            New Idea
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
