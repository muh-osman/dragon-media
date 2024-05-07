// Sass
import style from "./Home.module.scss";
// Reacr router
import { Link } from "react-router-dom";
// Images
import hero from "../../assets/images/home/hero.webp";

import iconOne from "../../assets/images/home/coding.svg";
import iconTwo from "../../assets/images/home/mangment.svg";
import iconThree from "../../assets/images/home/marketing.svg";
import iconFour from "../../assets/images/home/graphic.svg";

import B from "../../assets/images/home/branding.jpg";
import A from "../../assets/images/home/a.jpg";
import branding from "../../assets/images/home/f.jpg";
import C from "../../assets/images/home/c.jpg";
import D from "../../assets/images/home/d.jpg";
import E from "../../assets/images/home/e.jpg";
import F from "../../assets/images/home/b.jpg";

import social from "../../assets/images/home/social.png";

import designOne from "../../assets/images/branding/logo-6.jpg";
import designTwo from "../../assets/images/branding/logo-2.jpg";
import designThree from "../../assets/images/branding/logo-3.jpg";

import AA from "../../assets/images/branding/logo-4.jpg";
import BB from "../../assets/images/branding/logo-1.jpg";
import CC from "../../assets/images/branding/logo-7.jpg";
import DD from "../../assets/images/branding/logo-8.jpg";

import adsOne from "../../assets/images/home/ads-1.avif";
import adsTwo from "../../assets/images/home/ads-2.jpeg";
import programing from "../../assets/images/home/programing.avif";
import contact from "../../assets/images/home/contact-us.avif";

// Icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
// Reacr
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className={style.container}>
      {/* Text hero */}
      <div className={style.hero_text_box} dir="ltr">
        <h1>Dragon Media</h1>
        <h6>للدعاية والإعلان وخدمات التسويق</h6>
      </div>

      {/* Image hero */}
      <div className={style.image_hero_box}>
        <img src={hero} alt="hero" />
      </div>

      {/* Soulutions */}
      <div className={style.soulution_box}>
        <h1>نقدم جميع حلول نمو الأعمال عبر الإنترنت</h1>
        <div className={style.soulution}>
          <Link to="branding" className={style.box}>
            <div>
              <img src={iconFour} alt="soulution" />
            </div>
            <div>
              <h5>تصميم الجرافيك</h5>
            </div>
          </Link>

          <Link to="marketing" className={style.box}>
            <div>
              <img src={iconThree} alt="soulution" />
            </div>
            <div>
              <h5>الاعلانات الممولة</h5>
            </div>
          </Link>

          <Link to="socialmedia" className={style.box}>
            <div>
              <img src={iconTwo} alt="soulution" />
            </div>
            <div>
              <h5>تسويق المشاهير</h5>
            </div>
          </Link>

          <Link to="programing" className={style.box}>
            <div>
              <img src={iconOne} alt="soulution" />
            </div>
            <div>
              <h5>برمجة المواقع</h5>
            </div>
          </Link>
        </div>
      </div>

      {/* Social media */}
      <div className={style.social_box}>
        <div className={style.social}>
          <div>
            <h1 style={{ textAlign: "left" }}>SOCIAL</h1>
            <h1 style={{ textAlign: "right" }}>MEDIA</h1>
            <h2>السوشيال ميديا</h2>
          </div>
          <div>
            <img src={social} alt="social media" />
          </div>
        </div>

        <div>
          <Link to="branding">
            نماذج أعمال <FaChevronLeft />
          </Link>
          <h3>السوشيال ميديا بوابتك للوصول لعملائك</h3>
        </div>
      </div>

      {/* 1 */}
      <div className={style.design_row_one_box}>
        <div>
          <img src={A} alt="Designs" />
        </div>
        <div>
          <img src={B} alt="Designs" />
        </div>
      </div>

      {/* 2 */}
      <div className={style.design_row_one_box}>
        <div>
          <img src={C} alt="Designs" />
        </div>
        <div>
          <img src={D} alt="Designs" />
        </div>
      </div>

      {/* 3 */}
      <div className={style.design_row_one_box}>
        <div>
          <img src={E} alt="Designs" />
        </div>
        <div>
          <img src={F} alt="Designs" />
        </div>
      </div>

      {/* Branding */}
      <div className={style.branding_box}>
        <div>
          <img src={branding} alt="branding" />
          <h3 className="text-center m-0" style={{ color: "#707171" }}>
            انفرد بهوية بصرية مميزة تجعلك علامة تجارية لاتنسى
          </h3>
        </div>

        <div>
          <h1>Branding</h1>
          <h2>الهوية البصرية</h2>
          <Link to="branding">
            <FaChevronRight /> نماذج أعمال
          </Link>
        </div>
      </div>

      {/* 44 */}
      <div className={style.design_row_one_box}>
        <div>
          <img className={style.custom} src={AA} alt="Designs" />
        </div>
        <div>
          <img className={style.custom} src={BB} alt="Designs" />
        </div>
      </div>

      {/* 55 */}
      <div className={style.design_row_one_box}>
        <div>
          <img className={style.custom} src={CC} alt="Designs" />
        </div>
        <div>
          <img className={style.custom} src={DD} alt="Designs" />
        </div>
      </div>

      {/* Designs */}
      <div className={style.design_row_one_box}>
        <div>
          <img src={designThree} alt="Designs" />
        </div>
        <div>
          <img src={designTwo} alt="Designs" />
        </div>
      </div>

      <div className={style.design_row_two_box}>
        <div>
          <img src={designOne} alt="Designs" />
        </div>
        <div>
          <h1>Designs</h1>
          <Link to="branding">
            <FaChevronRight /> نماذج أعمال
          </Link>
        </div>
      </div>

      {/* Ads */}
      <div className={style.ads}>
        <div>
          <h1>الحملات الإعلانية</h1>

          <h3>أحصل على أرباح مضاعفة مع الإعلانات الممولة</h3>
          <Link to="marketing">
            نماذج أعمال <FaChevronLeft />
          </Link>
        </div>
        <div>
          <img src={adsOne} alt="ads" />
        </div>
      </div>
      <div>
        <img src={adsTwo} alt="ads" style={{ width: "100%" }} />
      </div>

      {/* Programing */}
      <div className={style.programing}>
        <h1>برمجة المواقع الإلكترونية</h1>
        <h3>موقعك الالكتروني هو واجهتك على الإنترنت</h3>
        <Link to="programing">
          <FaChevronRight /> نماذج أعمال
        </Link>
        <div>
          <img src={programing} alt="programing" />
        </div>
      </div>

      {/* Contact */}
      <div className={style.contact}>
        <div>
          <h1>فريق عمل متكامل لنجاح مشروعك</h1>
          <Link to="contact">تواصل معنا الآن</Link>
        </div>

        <div>
          <img src={contact} alt="contact" />
        </div>
      </div>
    </div>
  );
}
