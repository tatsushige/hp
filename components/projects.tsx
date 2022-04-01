import React, { useState } from "react";
import { VscGithubInverted, VscTwitter, VscLink } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../lib/constants";

export default function Projects() {
  return (
    <ul className="flex flex-col gap-8">
      {PROJECTS.map((item) => {
        return (
          <Link href={item.link} key={item.id}>
            <a target="_blank" rel="noopener noreferrer">
              <li className="flex flex-col gap-1">
                <Image
                  src={item.imgPath}
                  alt=""
                  width={1200}
                  height={630}
                ></Image>
                <div className="flex flex-col gap-1 p-1">
                  <p
                    className="
            text-base font-medium tracking-wide"
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-400 tracking-wide">
                    {item.description}
                  </p>
                </div>
              </li>
            </a>
          </Link>
        );
      })}
    </ul>
  );
}
