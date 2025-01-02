import HomeNavBar from "@/components/reusable/nav-bar";
import { H1, H2, P } from "@/components/ui/typography";

export default function Terms() {
  return (
    <>
      <HomeNavBar />
      <div className="max-w-4xl mx-auto mt-6 px-md">
        <div className="text-center mb-8">
          <H1 className="mb-6">شروط الاستخدام</H1>
          <P>
            مرحبًا بك في موقع Buildfolio. باستخدام هذا الموقع، فإنك توافق على
            الالتزام بالشروط والأحكام التالية. يُرجى قراءة هذه الشروط بعناية.
          </P>
        </div>

        <div className="my-8">
          <H2 className="mb-3">1. الاستخدام المقبول</H2>
          <P size="md" className="text-gray-foreground">
            يجب عليك استخدام هذا التطبيق للأغراض القانونية فقط. يُحظر استخدام
            التطبيق لأي أنشطة غير قانونية أو تضر بمصالح الآخرين.
          </P>
        </div>

        <div className="my-8">
          <H2 className="mb-3">2. حقوق الملكية الفكرية</H2>
          <P size="md" className="text-gray-foreground">
            جميع المحتويات والتصاميم في هذا التطبيق مملوكة لنا أو لمزودي الخدمة
            لدينا. لا يجوز نسخ أو إعادة إنتاج أي جزء من التطبيق بدون إذن كتابي
            مسبق.
          </P>
        </div>

        <div className="my-8">
          <H2 className="mb-3">3. التعديلات على الشروط</H2>
          <P size="md" className="text-gray-foreground">
            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بالتغييرات
            عبر التطبيق أو عبر البريد الإلكتروني.
          </P>
        </div>

        <div className="my-8">
          <H2 className="mb-3">4. إنهاء الاستخدام</H2>
          <P size="md" className="text-gray-foreground">
            يجوز لنا إنهاء وصولك إلى التطبيق إذا انتهكت هذه الشروط أو لأي سبب
            آخر حسب تقديرنا.
          </P>
        </div>

        <div className="text-center mt-8">
          <P>
            إذا كان لديك أي استفسار، يُرجى الاتصال بنا عبر البريد الإلكتروني:
            aissadev1@gmail.com
          </P>
        </div>
      </div>
    </>
  );
}
