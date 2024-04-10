import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "../../config/site";


const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto px-6 py-6 sm:py-10 sm:p">
        <nav className="" aria-label="">
          <ul className="columns-2 sm:flex sm:justify-center sm:space-x-12 mt-2">
            {siteConfig.footer.map((item) => (
              <li key={item.name}>
                <Link href="/" className="text-sm leading-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link 
          href="#"
          className="mt-10 text-center block text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights reserved.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;