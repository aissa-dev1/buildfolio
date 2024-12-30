import Footer from "@/components/reusable/footer";
import NavBar from "@/components/reusable/nav-bar";
import Button from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="flex__center flex-col content__area">
        <H1 className="mb-4">لم يتم العثور على هذه الصفحة</H1>
        <P className="text-lg mb-8 text-gray-foreground">
          الصفحة التي تحاول الوصول لها غير موجودة.
        </P>
        <Link href="/">
          <Button variant="secondary">العودة إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
