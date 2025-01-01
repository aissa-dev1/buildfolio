import { P } from "../ui/typography";
import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const createdYear = 2024;

  return (
    <footer className="flex__center h-[var(--footer-height)] bg-card text-card-foreground py-4">
      <Container className="text-center">
        <P size="md">
          Buildfolio &copy;{" "}
          {currentYear === createdYear
            ? createdYear
            : `${createdYear}-${currentYear}`}{" "}
          جميع الحقوق محفوظة.
        </P>
      </Container>
    </footer>
  );
}
