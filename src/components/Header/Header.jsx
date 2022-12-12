import { Button, Modal, Navbar } from "flowbite-react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import Favorites from "../Favorites/Favorites";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="header">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Brand.
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={onClick} size="xs">
            <ListBulletIcon width={24} />{" "}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <SearchBox />
        </Navbar.Collapse>
      </Navbar>
      <Favorites isOpen={isOpen} onClick={onClick} onClose={onClose} />
    </header>
  );
}

export default Header;
