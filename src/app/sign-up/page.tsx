import Bootstrap from "@/components/reusable/bootstrap";
import Container from "@/components/reusable/container";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

export default function SignUp() {
  return (
    <Bootstrap>
      <Container className="flex__center h-screen">
        <div className="flex flex-col gap-lg w-full text-center sm:w-[400px]">
          <H2>
            <span className="text-primary">Buildfolio</span> | انشاء حساب
          </H2>
          <form className="flex flex-col gap-md">
            <Input type="text" placeholder="اسم المستخدم" required />
            <Input type="email" placeholder="البريد الالكتروني" required />
            <Input type="password" placeholder="كلمة المرور" required />
            <Button type="submit">انشاء حساب</Button>
          </form>
          <div className="flex flex-col gap-md">
            <P>
              بالضغط على انشاء حساب فانت توافق على{" "}
              <Link href="/terms" className="text-gray-foreground">
                الشروط والاحكام
              </Link>
            </P>
            <P>
              لديك حساب بالفعل؟{" "}
              <Link href="/login" className="text-gray-foreground">
                تسجيل الدخول
              </Link>
            </P>
          </div>
        </div>
      </Container>
    </Bootstrap>
  );
}
