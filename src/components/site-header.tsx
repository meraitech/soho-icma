import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, site, utilityNav } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-[100]">
      <div className="bg-[#090d46] text-white">
        <div className="flex items-center justify-between px-4 py-1.5 text-xs sm:px-6">
          <p className="hidden truncate text-[#e6f1ff]/70 sm:block">{site.tagline}</p>
          <p className="truncate text-[#e6f1ff]/70 sm:hidden">ICMA Indonesia Branch</p>
          <nav className="flex items-center gap-4" aria-label="Utility">
            {utilityNav.map((item) => (
              <Link key={item.label} href={item.href} className="text-[#e6f1ff]/70 hover:bg-[rgba(115,133,159,0.5)] hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="hidden items-center gap-1 font-bold text-white hover:bg-[rgba(115,133,159,0.5)] sm:flex"
            >
              <User className="size-3.5" /> Member Login
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-none bg-[#090d46] text-lg font-bold text-white">
              CMA
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-[0px] text-[#222222]">
                CMA Indonesia
              </span>
              <span className="block text-[11px] font-normal tracking-wide text-[#767676]">
                Certified Management Accountants
              </span>
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNav.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="px-4 text-base font-normal text-[#222222] hover:bg-[rgba(115,133,159,0.5)] hover:text-[#090d46] hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden size-10 items-center justify-center rounded-none text-[#222222] hover:bg-[rgba(115,133,159,0.5)] sm:flex"
            >
              <Search className="size-5" />
            </button>
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#ffd400] px-6 py-3 text-base font-bold text-[#090d46] hover:bg-white hover:text-[#090d46] lg:inline-block"
            >
              Apply Now
            </Link>
            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="flex size-10 items-center justify-center rounded-none text-[#222222] hover:bg-[rgba(115,133,159,0.5)] lg:hidden"
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation and application links
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                  {mainNav.map((item) => (
                    <SheetClose
                      key={item.label}
                      render={<Link href={item.href} />}
                      className="rounded-none px-2 py-2.5 text-base font-normal text-[#222222] hover:bg-[rgba(115,133,159,0.5)]"
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <SheetClose
                    render={<Link href="/contact" />}
                    className="mt-2 rounded-full bg-[#ffd400] px-6 py-3 text-center text-base font-bold text-[#090d46]"
                  >
                    Apply Now
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="h-1 bg-[#ffd400]" aria-hidden="true" />
    </header>
  );
}
