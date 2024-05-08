// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./SocialMedia.module.scss";
// Icons
import instagram from "../../assets/images/social/instagram.webp";
import snapchat from "../../assets/images/social/snapchat.png";
import tiktok from "../../assets/images/social/tiktok.webp";

export default function SocialMedia() {


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <article className={style.container}>
      <section className={style.hero}></section>

      <section className={style.A}>
        <h1>كيف نعزز تأثيرك عبر المؤثرين الرقميين؟</h1>

        <h4>
          مع خدماتنا المتخصصة في التسويق عبر المؤثرين، نوفر لك استراتيجيات
          مبتكرة على منصات التواصل الاجتماعي (فيسبوك، يوتيوب، تويتر، إنستجرام،
          ولينكد إن، تيك توك، سناب شات وغيرها)، حيث نتعاون مع مؤثرين لهم صدى
          واسع لتقديم محتوى ملهم وتصميمات جذابة تلقى صدى لدى جمهورك المستهدف.
        </h4>

        <Link to="/contact">احصل على إستشارة مجانية الآن</Link>
      </section>
      <div>
        <svg
          className={style.tringle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#171615" points="0,0  100,0  50,50" />
        </svg>
      </div>

      <main className="experience" id="experience">
        <h1>خطة عمل التسويق عبر المؤثرين</h1>

        <article className="article-experience">
          <section className="section-experience">
            <div>
              <h2>الاستهداف الدقيق للجمهور</h2>
              <p>المرحلة الأولى</p>
            </div>
            <div>
              <h2>Targeting</h2>
              <p>
                من خلال تحليل معلومات نشاطك التجاري يتم اختيار المؤثر المناسب
                الذي يحقق أعلى نسبة تحويل وذلك بالاعتماد على جمهور المؤثر.
              </p>
            </div>
          </section>
          <section className="section-experience">
            <div>
              <h2>النشر والجدولة</h2>
              <p>المرحلة الثانية</p>
            </div>
            <div>
              <h2>Scheduling</h2>
              <p>
                جدولة المنشورات والفيديوهات مسبقا وفقا لأوقات تواجد الجمهور
                المستهدف على الحسابات والمنصات المختلفة.
              </p>
            </div>
          </section>
          <section className="section-experience" style={{ margin: 0 }}>
            <div>
              <h2>المتابعة الدورية</h2>
              <p>المرحلة الثالثة</p>
            </div>
            <div>
              <h2>Follow-up</h2>
              <p>
                مراجعة حسابات التواصل الاجتماعي واستراتيجيات التسويق بشكل دوري
                ومن ثم تحليل أداء المؤثر ومدى تفاعل الجمهور المستهدف وتحديد
                العناصر الأكثر فاعلية والتركيز عليها.
              </p>
            </div>
          </section>

          <div className="progressbar">
            <div className="line"></div>
            <div>
              <div className="circle" style={{ background: "#286F6C" }}></div>
            </div>
            <div>
              <div className="circle" style={{ background: "#F2704E" }}></div>
            </div>
            <div>
              <div className="circle" style={{ background: "#EEC048" }}></div>
            </div>
          </div>
        </article>
      </main>

      <h1
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginTop: "64px",
          fontSize: "48px",
          padding: "16px",
        }}
      >
        مشاريع نعمل عليها الآن
      </h1>
      <section className={style.B} id="services">
        <div className="left-services">
          <div>
            <div className="image-box-one">
              <img src={instagram} alt="computer logo" />
            </div>
            <div className="services-title">
              <h2>صفحة انستغرام</h2>
              <h3>16 صفحة</h3>
            </div>
          </div>

          <div>
            <div className="image-box-two">
              <img src={snapchat} alt="phone logo" />
            </div>
            <div className="services-title">
              <h2>حساب سناب شات</h2>
              <h3>13 حساب</h3>
            </div>
          </div>

          <div>
            <div className="image-box-three">
              <img src={tiktok} alt="brand logo" />
            </div>
            <div className="services-title">
              <h2>حساب تيك توك</h2>
              <h3>10 حساب</h3>
            </div>
          </div>
        </div>

        <div className="right-services">
          <h1>تأثير قوي عبر المؤثرين لعلامتك التجارية!</h1>
          <p>
            استغلال قوة المؤثرين في السوشيال ميديا لتعزيز الوعي بالعلامة
            التجارية وتحقيق التفاعل المثمر مع الجمهور المستهدف. المؤثرون يمكنهم
            نقل رسالتك بطريقة شخصية ومؤثرة تصل إلى القلوب والعقول في اللحظات
            الحاسمة.
          </p>
          <p>
            نعمل مع شبكة من المؤثرين المتميزين لإنشاء ونشر محتوى جذاب يتردد صداه
            مع جمهورك ويعزز التفاعل الطبيعي. نتابع أداء الحملات التسويقية
            ونحسنها باستمرار لضمان أفضل النتائج وأعلى معدلات التفاعل.
          </p>
          <div>
            <div>
              <h2>285+</h2>
              <h3>مشروع مكتمل</h3>
            </div>
            <div>
              <h2>190+</h2>
              <h3>عميل</h3>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
