import React from "react";
import Link from "next/link";
import {FaCrop, FaCompress, FaMinimize} from "react-icons/fa6";

const pages = [
  {
    id: 1,
    name: "Image Crop",
    href: "/image_crop",
    icon: "FaCrop",
  },
  {
    id: 2,
    name: "Any Image Compress",
    href: "/image_compress",
    icon: "FaCompress",
  },
  {
    id: 3,
    name: "Image Resize",
    href: "/image_resize",
    icon: "FaMinimize",
  },
];

const iconMapping = {
  FaCrop,
  FaCompress,
  FaMinimize,
};

function Navbar() {
  return (
    <div
      aria-label="Navbar wrapper"
      className="h-screen w-80 border-r border-slate-100 flex justify-between flex-col"
    >
      <div aria-label="Navbar body">
        <div className="px-4 py-6 mb-4" aria-label="Logo">
          <div className="font-black text-4xl">
            <span className="text-white bg-emerald-500 px-1">Photo</span> Editor
          </div>
        </div>
        <div aria-label="Routes" className="flex flex-col">
          {pages.map((page) => {
            const Icon = iconMapping[page.icon as keyof typeof iconMapping];

            return (
              <Link
                key={page.id}
                href={page.href}
                className="px-4 py-2 flex items-center gap-2 hover:bg-emerald-100 bg-emerald-50 text-emerald-950 capitalize "
              >
                <span className="">
                  <Icon />
                </span>
                <span className="text-emerald-950">{page.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div aria-label="Navbar footer" className="px-4 py-2">
        <p className="text-sm text-emerald-950/90">
          &copy; All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
