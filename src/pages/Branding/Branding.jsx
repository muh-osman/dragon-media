// React
import { useEffect, useState } from "react";
// Sass
import style from "./Brandin.module.scss";
// Icon
import { FaRegCircleXmark } from "react-icons/fa6";

// images
import logoA from "../../assets/images/branding/logo-1.jpg";
import logoB from "../../assets/images/branding/logo-2.jpg";
import logoC from "../../assets/images/branding/logo-3.jpg";
import logoD from "../../assets/images/branding/logo-4.jpg";
import logoE from "../../assets/images/branding/logo-5.jpg";
import logoF from "../../assets/images/branding/logo-6.jpg";
import logoG from "../../assets/images/branding/logo-7.jpg";
import logoH from "../../assets/images/branding/logo-8.jpg";

import rowA from "../../assets/images/branding/row-1.jpg";
import rowB from "../../assets/images/branding/row-2.jpg";
import rowC from "../../assets/images/branding/row-3.jpg";
import rowD from "../../assets/images/branding/row-4.jpg";
import rowE from "../../assets/images/branding/row-5.jpg";
import rowF from "../../assets/images/branding/row-6.jpg";
import rowG from "../../assets/images/branding/row-7.jpg";
import rowH from "../../assets/images/branding/row-8.jpg";
import rowI from "../../assets/images/branding/row-9.jpg";
import rowJ from "../../assets/images/branding/row-10.jpg";

export default function Branding() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [overlayImage, setOverlayImage] = useState("");

  const handleImageClick = (src) => {
    setOverlayImage(src);
    document
      .getElementById("lighthouseOverlay")
      .classList.add(`${style.overlay_show}`);
  };

  const handleCloseOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document
        .getElementById("lighthouseOverlay")
        .classList.remove(`${style.overlay_show}`);
      setTimeout(() => {
        setOverlayImage("");
      }, 300);
    }
  };

  const closeBtn = () => {
    document
      .getElementById("lighthouseOverlay")
      .classList.remove(`${style.overlay_show}`);
    setTimeout(() => {
      setOverlayImage("");
    }, 300);
  };

  return (
    <div className={style.container}>
      <section className={style.A} dir="ltr">
        <h1>
          GRAPHIC
          <br />
          DESIGN
        </h1>
      </section>

      <section className={style.carousel}>
        <h1>السوشيال ميديا</h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={rowG} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowB} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowC} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowE} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowF} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowH} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowD} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowA} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowI} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={rowJ} className="d-block w-100" alt="branding" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className={style.rows}>
        <div>
          <div onClick={() => handleImageClick(rowA)}>
            <img src={rowA} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowB)}>
            <img src={rowB} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowC)}>
            <img src={rowC} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowD)}>
            <img src={rowD} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowE)}>
            <img src={rowE} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowF)}>
            <img src={rowF} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowG)}>
            <img src={rowG} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowH)}>
            <img src={rowH} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowI)}>
            <img src={rowI} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowJ)}>
            <img src={rowJ} alt="branding" />
          </div>
        </div>
      </section>

      {/* Lighthouse overlay */}
      <div
        className={style.overlay}
        onClick={handleCloseOverlay}
        id="lighthouseOverlay"
      >
        <button onClick={closeBtn}>
          <FaRegCircleXmark style={{ fontSize: "22px", fontWeight: "500" }} />
        </button>
        <div className={style.img_box}>
          <img src={overlayImage} alt="lighthouse" />
        </div>
      </div>

      <section className={style.D}>
        <h1>الهوية البصرية</h1>
        <div className={style.img_box_D}>
          <div>
            <img src={logoA} alt="programing" />
          </div>
          <div>
            <img src={logoB} alt="programing" />
          </div>
          <div>
            <img src={logoC} alt="programing" />
          </div>
          <div>
            <img src={logoD} alt="programing" />
          </div>
          <div>
            <img src={logoE} alt="programing" />
          </div>
          <div>
            <img src={logoF} alt="programing" />
          </div>
          <div>
            <img src={logoG} alt="programing" />
          </div>
          <div>
            <img src={logoH} alt="programing" />
          </div>
        </div>
      </section>
    </div>
  );
}
