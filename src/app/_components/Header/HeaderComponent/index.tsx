'use client'

import Link from "next/link";
import { Header } from "../../../../payload/payload-types";
import { Gutter } from "../../Gutter";

import classes from "./index.module.scss";
import Image from "next/image";
import { HeaderNav } from "../Nav";
import MobileNav from "../MobileNav";
import { noHeaderFooterUrls } from "../../../constants";
import { usePathname } from "next/navigation";

export function HeaderComponent({header}: {header: Header}) {
  const pathname  = usePathname()
  
  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.Hide].filter(Boolean).join(' ')}> 
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50}/>  
        </Link>
      </Gutter>

      <HeaderNav header={header} />


    </nav>
  )
}