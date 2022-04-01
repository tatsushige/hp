import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VscGithubInverted, VscTwitter, VscLink } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <h2>
        <Link href="/">
          <a className="flex justify-center items-center text-base gap-1   ">
            {/* <Image width="24px" height="24px" src="/favicon.svg" alt="" /> */}
            tatsushige.com
          </a>
        </Link>
      </h2>
      {/* SNS Icons */}
      <ul className="flex flex-row gap-2">
        <li>
          <Link href="https://twitter.com/tatsushig">
            <a target="_blank" rel="noopener noreferrer">
              <VscTwitter
                size={24}
                className="ease-out duration-200 hover:opacity-50"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/tatsushige">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              <VscGithubInverted
                size={24}
                className="ease-out duration-200 hover:opacity-50"
              />
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
