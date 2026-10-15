import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
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
import { mainNav } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-[100]">
      <div className="bg-background">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="CMA Indonesia — home">
            <Image
              src="/icma/logo.webp"
              alt="CMA Indonesia"
              width={600}
              height={247}
              priority
              className="h-10 w-auto sm:h-11"
              sizes="(max-width: 640px) 240px, 300px"
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNav.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className="px-4 text-base font-normal text-foreground hover:bg-highlight/10 hover:text-canvas hover:underline hover:underline-offset-4"
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
              className="hidden size-10 items-center justify-center rounded-none text-foreground hover:bg-highlight/10 sm:flex"
            >
              <Search className="size-5" />
            </button>
            <Link
              href="/contact"
              className="hidden rounded-full bg-highlight px-6 py-3 text-base font-bold text-white hover:bg-background hover:text-canvas lg:inline-block"
            >
              Apply Now
            </Link>
            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="flex size-10 items-center justify-center rounded-none text-foreground hover:bg-highlight/10 lg:hidden"
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
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
                      className="rounded-none px-2 py-2.5 text-base font-normal text-foreground hover:bg-highlight/10"
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                  <SheetClose
                    render={<Link href="/contact" />}
                    className="mt-2 rounded-full bg-highlight px-6 py-3 text-center text-base font-bold text-white"
                  >
                    Apply Now
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="h-1 bg-highlight" aria-hidden="true" />
    </header>
  );
}
