import Bootstrap from "@/components/reusable/bootstrap";
import Footer from "@/components/reusable/footer";
import NavBar from "@/components/reusable/nav-bar";
import Button from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <Bootstrap>
      <NavBar />
      <div className="flex__center flex-col text-center content__area">
        <H2 className="mb-4">Buildfolio</H2>
        <P className="mb-8 text-gray-foreground">
          انشئ موقعك الشخصي الأن في دقائق.
        </P>
        <div className="flex gap-sm">
          <Link href="/coming-soon">
            <Button>اكتشف المزيد</Button>
          </Link>
          <Link href="/sign-up">
            <Button>انشاء حساب</Button>
          </Link>
          <Link href="/login">
            <Button>تسجيل الدخول</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </Bootstrap>
  );
}
