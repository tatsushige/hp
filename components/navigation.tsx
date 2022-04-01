import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({ home }: { home?: boolean }) {
  const router = useRouter();
  const activeRoute = router.asPath;

  const tabs = [
    {
      name: "Projects",
      route: "/",
    },
    {
      name: "Blog",
      route: "/blog",
    },
  ];

  return (
    <nav className="flex gap-4 border-gray-200 border-b ">
      {tabs.map(({ name, route }) => {
        const activeStyle =
          "text-gray-900 text-sm tracking-wide uppercase py-2 border-b border-gray-900 mb-[-1px] ";
        const normalStyle =
          "text-gray-400 text-sm tracking-wide uppercase py-2  mb-[-1px] hover:text-gray-600 ease duration-200 ";
        const style = activeRoute === route ? activeStyle : normalStyle;
        return (
          <Link key={name} href={route}>
            <a className={style}>{name}</a>
          </Link>
        );
      })}
    </nav>
  );
}
