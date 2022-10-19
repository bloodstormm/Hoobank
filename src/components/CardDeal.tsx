import { Button } from "./Button";
import { card } from "../assets";
import styles, { layout } from "../styles";

export const CardDeal = () => (
  <section id="card-deal" className={`${layout.section} relative`}>
    <div className="absolute z-0 -right-1/2 w-3/5 h-3/5 rounded-full blue__gradient" />

    <div className={` ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Encontre uma oferta de cartão melhor em alguns passos.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Analise os dados do seu cartão gerados mensalmente por meio do seu
        aplicativo.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="cardImage"
        className="w-full h-full object-contain"
      />
    </div>
  </section>
);
