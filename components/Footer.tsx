import { footerLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import {FooterLink} from "@/common.types"

const Footer = () => (
  <footer className="flex flex-col text-black-100  bg-base-200 mt-5 border-t border-gray-100">
    <div className=" w-full flex md:justify-center flex-wrap max-md:mt-10 gap-40 sm:px-16 px-6 py-10">
      {footerLinks.map((item:FooterLink) => (
        <div
          key={item.title}
          className="flex flex-col gap-6 text-base  min-w-[170px]"
        >
          <h3 className="font-bold text-[20px]">{item.title}</h3>
          <div className="flex flex-col gap-5">
            {item.links.map((link) => (
              <Link key={link.title} href={link.url} className="text-gray-500">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <p className="text-gray-500">@2023 CarHub. All rights reserved</p>
      </div>
      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
