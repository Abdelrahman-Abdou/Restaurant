import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import classes from "./page-header.module.css";
import PageHeaderBackground from "./page-header-background";
import NavLink from "./navLink/Nav-link";
const PageHeader = () => {

  return (
    <header className={classes.header}>
      <PageHeaderBackground />
      <Link href="/" className={classes.logo}>
        <Image src={Logo} alt="logo" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}> Meals</NavLink>
            {/* <Link
              href="/meals"
              className={path.startsWith("/meals") ? classes.active : null}
            >
            
            </Link> */}
          </li>

          <li>
            <NavLink href={"/community"}> Community</NavLink>

            {/* <Link
              className={path.startsWith("/community") ? classes.active : null}
              href="/community"
            >
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default PageHeader;
