import Bootstrap from "@/components/reusable/bootstrap";
import Container from "@/components/reusable/container";
import { H2 } from "@/components/ui/typography";

export default function SignUp() {
  return (
    <Bootstrap>
      <Container className="flex__center flex-col h-screen">
        <H2 className="text-primary">Buildfolio</H2>
        <H2>انشاء حساب</H2>
      </Container>
    </Bootstrap>
  );
}
