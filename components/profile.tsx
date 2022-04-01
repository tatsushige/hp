import React from "react";
import { VscGithubInverted, VscTwitter, VscLink } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex justify-center items-center py-6 gap-12">
      {/* <div className="w-20 h-20 flex items-center justify-center border-gray-200 border-2 rounded-full p-0">
        <Image
          src="/favicon.svg"
          alt=""
          className="rounded-full"
          width=" 48px"
          height=" 48px"
        />
      </div> */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl tracking-wide">辰重 航平</h1>
          <h2 className=" text-sm text-gray-400 tracking-wide">
            Tatsushige Kohei
          </h2>
        </div>
        {/* SNS Icons */}
        <ul className="flex flex-row gap-3">
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
      </div>
    </section>
  );
}
