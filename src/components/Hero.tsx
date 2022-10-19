import styles from "../styles";

import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";

export const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}
    >
      <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
        <img src={discount} alt="discount-icon" className="w-8 h-8" />
        <p className={`uppercase ${styles.paragraph}`}>
          <span className="text-white">20%</span> de Desconto para
          <span className="text-white"> 1 Mês</span> de Premium
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <h1
          className="text-white text-center sm:text-left flex-1 font-semibold 
        text-[58px] md:text-7xl xl:leading-[100px] leading-[75px]"
        >
          A forma de
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Pagamento</span>{" "}
          <br className="sm:block hidden" />
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1
        className="text-white text-center sm:text-left font-semibold w-full
        text-[53px] xl:text-[61px] ss:leading-[100px] leading-[75px]"
      >
        Da próxima geração
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nossa equipe de profissionais usam uma metodologia para identificar o
        melhor cartão de crédito que se encaixa nas suas necessidades. Nós
        analisamos taxas percentuais anuais, taxas anuais, etc.
      </p>
    </div>

    {/* Image */}
    <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="robot"
        className="w-full h-full relative z-10 object-cover"
      />

      <div className="absolute z-0 w-2/5 h-2/6 top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-3/5 h-3/5 rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-0 w-4/5 h-4/5 right-20 bottom-20 blue__gradient"></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
