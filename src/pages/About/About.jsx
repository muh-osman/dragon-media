// Sass
import style from "./About.module.scss";
// Images
import about from "../../assets/images/who-we-are/who-we-are.svg";
// React
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.hero_box}>
        <div>
          <h1>
            فريق عمل من المحترفين لبناء مشروعك بالكامل, بداية من الدراسة للتصميم
            والبرمجة حتى التسويق.
          </h1>

          <ul>
            <li>مدير خاص بكل مشروع لسهولة وسرعة التنسيق</li>
            <li>اجتماعات اون لاين لمناقشة المشروع</li>
            <li>أسعار منافسة للخدمات</li>
          </ul>
        </div>

        <div>
          <img src={about} alt="about us" />
        </div>
      </div>

      <div className={style.long_text}>
        <div className={style.hero_text_box} dir="ltr">
          <h1>
            {/* <span>Dragon Media</span>
            <br /> */}
            Dragon Media
          </h1>
          <h6>للدعاية والإعلان وخدمات التسويق</h6>
        </div>
        <p>
          نحن شركة Dragon Media، نفخر بتقديم خدمات التسويق الإلكتروني، والتصميم،
          وإنشاء المواقع الإلكترونية، والهويات البصرية، وإدارة المواقع وصفحات
          السوشيال ميديا.
        </p>
        <p>
          في Dragon Media، نؤمن بأن الابتكار والإبداع هما المفتاحان لنجاح أي عمل
          تجاري. لذا، نعمل جاهدين على توفير حلول رقمية مبتكرة وفعالة لعملائنا
          للمساعدة في تحقيق أهدافهم التجارية.
        </p>
        <p>
          نحن نقدم خدمات التسويق الإلكتروني المتكاملة، بدءًا من تحليل السوق
          وتحديد الجمهور المستهدف، وصولاً إلى تنفيذ استراتيجيات التسويق الرقمي
          المبتكرة. نحن نعمل على تحسين الوعي بالعلامة التجارية وزيادة المبيعات
          من خلال استراتيجيات التسويق عبر وسائل التواصل الاجتماعي، والتسويق عبر
          البريد الإلكتروني، والإعلانات عبر الإنترنت، وتحسين محركات البحث،
          وغيرها.
        </p>
        <p>
          بالإضافة إلى ذلك، نحن نقدم خدمات تصميم مواقع الويب المبتكرة والمتجاوبة
          مع جميع الأجهزة، لضمان تجربة ممتازة للمستخدم. فنحن نعمل على تصميم
          وتطوير مواقع ويب احترافية وجذابة تعكس هوية العلامة التجارية وتلبي
          احتياجات العملاء.
        </p>
        <p>
          بالإضافة إلى ذلك، نحن نقدم خدمات إنشاء الهويات البصرية المتكاملة،
          بدءًا من تصميم الشعار وتطوير العلامة التجارية، وصولاً إلى تصميم المواد
          التسويقية والإعلانية. نحن نعمل على إنشاء هويات بصرية فريدة تعبر عن
          رؤية وقيم العملاء وتساهم في بناء علامة تجارية قوية ومميزة.
        </p>
        <p>
          أخيرًا، نحن نقدم خدمات إدارة المواقع وصفحات السوشيال ميديا. نحن نعمل
          على إنشاء محتوى مبتكر وجذاب وإدارة الحملات الإعلانية على وسائل التواصل
          الاجتماعي. نحن نسعى جاهدين لزيادة التفاعل والمشاركة وبناء مجتمع عبر
          وسائل التواصل الاجتماعي للعملاء.
        </p>
        <p>
          في Dragon Media، نضمن تقديم خدمات ذات جودة عالية، وفقًا لأحدث التوجهات
          والمعايير الصناعية. نحن نهتم بتحقيق رضا العملاء وتحقيق أهدافهم
          التجارية من خلال خدماتنا المبتكرة والمتميزة.
        </p>
        <p>
          انضم إلينا اليوم ودعنا نساعدك في بناء حضور قوي وناجح على الإنترنت!
        </p>
      </div>
    </div>
  );
}
