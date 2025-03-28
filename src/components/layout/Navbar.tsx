import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
      
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
        <svg 
          version="1.1" 
          width="50px" 
          height="50px" 
          viewBox="0 0 32 32"
          fill="#000000"
        >
          <style>{`
            .stone_een {
              fill: #0B1719;
              animation: pulse 1.5s ease-in-out infinite;
            }
            @keyframes pulse {
              0%, 100% { 
                transform: translateX(0) scale(1);
                opacity: 1;
              }
              50% { 
                transform: translateX(2px) scale(1.05);
                opacity: 0.9;
              }
            }
          `}</style>
          <path 
            className="stone_een" 
            d="M15,8c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S19.418,8,15,8z M31.295,18.793 c0.391,0.391,0.391,1.024,0,1.414L29.002,22.5c-0.195,0.195-0.512,0.195-0.707,0l0,0c-0.195-0.195-0.195-0.512,0-0.707L30.088,20H28 c-1.657,0-3-1.343-3-3v-1c0-5.741-4.862-10.367-10.685-9.977C9.006,6.379,5,11.032,5,16.353L5,17c0,1.657-1.343,3-3,3H0.5 C0.224,20,0,19.776,0,19.5v0C0,19.224,0.224,19,0.5,19H2c1.105,0,2-0.895,2-2v-1C4,9.856,9.037,4.889,15.206,5.002 C21.262,5.113,26,10.312,26,16.369v0.516C26,18.11,26.895,19,28,19h2.088l-1.793-1.793c-0.195-0.195-0.195-0.512,0-0.707l0,0 c0.195-0.195,0.512-0.195,0.707,0L31.295,18.793z"
          ></path>
        </svg>
          <span className="ml-3 font-bold text-xl">RoboTech</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
              <NavLinks />
              <Button size="lg" className="gap-2">
            Explore Our Products <ArrowRight className="h-4 w-4" />
          </Button>
            </SheetContent>
           
          </Sheet>
          
        ) : (
          <nav className="flex items-center space-x-6 ml-6 flex-1">
            <NavLinks />
          </nav>
        )}
          <Button size="lg" className="gap-2 hidden md:flex">
            Explore Our Products <ArrowRight className="h-4 w-4" />
          </Button>
        <div className={`${isMobile ? 'mr-2' : 'ml-auto'}`}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}