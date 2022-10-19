import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

export const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-full h-full relative z-10 object-contain"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-4/5 h-5/6 rounded-full pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo} `}>
      <h2 className={styles.heading2}>
        Controle facilmente suas <br className="2xl:block hidden" /> contas &
        faturamento
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com o aplicativo do Hoobank, você consegue ter acesso a todas as suas
        contas e faturas direto na tela do seu celular. O aplicativo está
        disponível para Android & IOS.
      </p>

      <div className="flex items-center sm:mt-16 mt-6 space-x-8">
        <img
          src={apple}
          alt="appleDownload"
          className="w-32 cursor-pointer object-contain"
        />
        <img
          src={google}
          alt="androidDownload"
          className="w-32 cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);
