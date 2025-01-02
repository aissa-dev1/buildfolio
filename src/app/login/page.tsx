import Bootstrap from "@/components/reusable/bootstrap";
import Container from "@/components/reusable/container";
import AuthNavBar from "@/components/reusable/nav-bar/auth";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

export default function Login() {
  return (
    <Bootstrap>
      <AuthNavBar />
      <Container className="flex__center h-screen">
        <div className="flex flex-col gap-lg w-full text-center sm:w-[400px]">
          <H2>
            <span className="text-primary">Buildfolio</span> | تسجيل الدخول
          </H2>
          <form className="flex flex-col gap-md">
            <Input type="email" placeholder="البريد الالكتروني" required />
            <Input type="password" placeholder="كلمة المرور" required />
            <Button type="submit">تسجيل الدخول</Button>
          </form>
          <P>
            ليس لديك حساب؟{" "}
            <Link href="/sign-up" className="text-gray-foreground">
              انشاء حساب
            </Link>
          </P>
        </div>
      </Container>
    </Bootstrap>
  );
}
