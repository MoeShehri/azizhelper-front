import Link from "next/link";
import { NamedLogoWithLink } from "./logo";
import { buttonVariants } from "./ui/button";
import ToggleTheme from "./toggle";

export default function LoggedNav() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-24 mb-7 top-0 sticky bg-background">
      <NamedLogoWithLink />
      <div className="flex flex-row items-center">
        <ToggleTheme />
        <Link
          href="/login"
          className={buttonVariants({
            variant: "link",
            className: "text-base sm:ml-3",
            size: "sm",
          })}
        >
          الدعم الفني
        </Link>
        <Link
          href="/register"
          className={buttonVariants({
            variant: "link",
            className: "text-base",
            size: "sm",
          })}
        >
          حسابي
        </Link>
      </div>
    </nav>
  );
}
