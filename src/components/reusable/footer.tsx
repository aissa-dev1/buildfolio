import { P } from "../ui/typography";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="flex__center h-[var(--footer-height)] bg-secondary text-secondary-foreground py-4">
      <Container className="text-center">
        <P size="md">
          Buildfolio &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </P>
      </Container>
    </footer>
  );
}
