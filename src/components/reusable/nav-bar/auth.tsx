import Link from "next/link";
import Container from "../container";
import { P } from "@/components/ui/typography";
import ThemeSwitchButton from "../button/theme-switch";

export default function AuthNavBar() {
  return (
    <nav className="fixed left-0 top-0 w-full h-[var(--navbar-height)] flex__center bg-primary text-primary-foreground py-4 shadow-sm">
      <Container className="flex justify-between items-center px-4">
        <Link href="/">
          <P size="lg" className="font-bold">
            Buildfolio
          </P>
        </Link>
        <div className="flex__center gap-md">
          <Link href="/">
            <P className="hover:text-foreground">الصفحة الرئيسية</P>
          </Link>
          <ThemeSwitchButton />
        </div>
      </Container>
    </nav>
  );
}
