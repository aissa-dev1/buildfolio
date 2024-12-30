import Link from "next/link";
import { P } from "../ui/typography";
import Container from "./container";

export default function NavBar() {
  return (
    <nav className="h-[var(--navbar-height)] flex__center w-full bg-secondary text-secondary-foreground py-4 shadow-sm">
      <Container className="flex justify-between items-center px-4">
        <Link href="/">
          <P size="lg" className="font-bold text-primary">
            Buildfolio
          </P>
        </Link>
        <div className="flex gap-4">
          <Link href="/create">
            <P className="hover:text-primary">انشاء موقع</P>
          </Link>
          <Link href="/preview">
            <P className="hover:text-primary">معاينة</P>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
