import Link from "next/link";
import Container from "../container";
import { P } from "@/components/ui/typography";
import ThemeSwitchButton from "../button/theme-switch";

export default function HomeNavBar() {
  return (
    <nav className="h-[var(--navbar-height)] flex__center w-full bg-primary text-primary-foreground py-4 shadow-sm">
      <Container className="flex justify-between items-center px-4">
        <Link href="/">
          <P size="lg" className="font-bold">
            Buildfolio
          </P>
        </Link>
        <div className="flex__center gap-md">
          <Link href="/create">
            <P className="hover:text-foreground">انشاء موقع</P>
          </Link>
          <Link href="/preview">
            <P className="hover:text-foreground">معاينة</P>
          </Link>
          <ThemeSwitchButton />
        </div>
      </Container>
    </nav>
  );
}
