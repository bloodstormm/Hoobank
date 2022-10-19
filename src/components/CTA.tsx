import styles from "../styles";
import { Button } from "./Button";

export const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient rounded-3xl box-shadow`}
  >
    <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2} text-center sm:text-left `}>
        Vamos testar o nosso serviço hoje!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tudo o que você precisa para aceitar pagamentos de cartão e expandir o
        seu negócio em qualquer lugar do mundo.
      </p>
    </div>

    <div className={`${styles.flexCenter} ml-0 mt-10 sm:mt-0 sm:ml-10`}>
      <Button />
    </div>
  </section>
);
