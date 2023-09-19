import styles from "../styles/LogoSlider.module.css";
import Image from "next/image";

import brand1 from "../../public/brands/brand1.png";

export default function LogoSlider() {
  function clickHandler() {
    return;
  }

  return (
    <div className={styles.LogoSlider}>
      <div className={styles.slider}>
        <div className={styles.l_to_r}>
          <div className={styles.slider_inner}>
            <div>
              <Image alt="upworkLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="petalLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="rakutenLogo" src={brand1} width={50} quality={100} />
            </div>
            <div className={styles.nytSpecial}>
              <Image alt="nytLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="viceLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="dellLogo" src={brand1} width={50} quality={100} />
            </div>
          </div>
          <div className={styles.slider_inner}>
            <div>
              <Image alt="upworkLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="petalLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="rakutenLogo" src={brand1} width={50} quality={100} />
            </div>
            <div className={styles.nytSpecial}>
              <Image alt="nytLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="viceLogo" src={brand1} width={50} quality={100} />
            </div>
            <div>
              <Image alt="dellLogo" src={brand1} width={50} quality={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
