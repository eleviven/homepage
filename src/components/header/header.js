import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { useTheme } from "../../contexts/theme";
import { DEVELOPER } from "../../constants";
import styles from "./header.module.css";

const MENU = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "About Me",
    url: "/about-me",
  },
];

export default function Header() {
  const { asPath } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_inner}>
          <div>
            <Link href="/">
              <a className="inline-flex items-center">
                <span className="font-semibold text-xl font-fira-code">
                  ⚡️ {DEVELOPER.NAME}
                </span>
              </a>
            </Link>
          </div>
          <ul className={styles.header_nav}>
            {MENU.map((item, index) => {
              const isActive = asPath === item.url;
              return (
                <li key={index}>
                  <Link href={item.url}>
                    <a className={cn(isActive && styles.active)}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="px-1.5">
              <button
                className="flex items-center justify-center px-0 w-11 h-11 text-2xl"
                onClick={toggleTheme}
              >
                {isDarkTheme ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
