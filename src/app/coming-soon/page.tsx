import Bootstrap from "@/components/reusable/bootstrap";
import Footer from "@/components/reusable/footer";
import NavBar from "@/components/reusable/nav-bar";
import Button from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <Bootstrap>
      <NavBar />
      <div className="flex__center flex-col content__area">
        <H1 className="mb-4">قريبًا</H1>
        <P className="text-lg mb-8 text-gray-foreground">
          هذه الخاصية ستكون متاحة قريبًا.
        </P>
        <Link href="/">
          <Button variant="secondary">العودة إلى الصفحة الرئيسية</Button>
        </Link>
      </div>
      <Footer />
    </Bootstrap>
  );
}
