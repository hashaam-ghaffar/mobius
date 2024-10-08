import Image from "next/image";
import styles from "./heroSection.module.css";
import pngs from "@/app/_assets/pngs";

import { Navbar } from "../../../_component/index";
import { Button, Typography } from "../../../_component/index";
export default function HeroSection() {
  return (
    <>
      <section className={styles.parentBox}>
        <Navbar />
        <div className={styles.parent}>
          <div>
            <div
              className={styles.boxHeddingImage}
              styles={{ width: "100%", height: "auto", maxWidth: "533px" }}
            >
              <Image
                className={styles.heddingImage}
                src={pngs.Heading}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.boxParagraph}>
              <Typography
                variant="tertiaryTypography"
                typography="We provide expert animation services, bringing your ideas to life
              with creativity and flair.Elevate your storytelling with our
              exceptional team at your service."
              />
            </div>
            <div className={styles.mobileBoxParagraph}>
              <Typography
                variant="tertiaryTypography"
                typography="We provide expert animation services, bringing your ideas to life with creativity and flair. "
              />
            </div>
            <Button text="Watch our Showreel" />
          </div>
        </div>
      </section>
    </>
  );
}
