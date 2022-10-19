import { features } from "../constants";
import styles, { layout } from "../styles";
import { Button } from "./Button";

type FeatureItems = {
  id: string;
  icon: string;
  title: string;
  content: string;
};

const FeatureCard = ({ icon, title, content }: FeatureItems) => (
  <div className="flex p-6 rounded-[20px] mb-6 last-of-type:mb-0 feature-card">
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-5 sm:ml-3 ">
      <h4 className="font-semibold text-white text-bigger leading-[23px] mb-1">
        {title}
      </h4>
      <p className="text-dimWhite leading-[24px] mb-1 ">{content}</p>
    </div>
  </div>
);

export const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Você faz o negócio, <br className="sm:block hidden" /> nós cuidamos do
        dinheiro.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Com o cartão de crédito certo, você pode melhorar sua vida financeira
        construindo crédito, ganhando recompensas e economizando dinheiro.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          id={feature.id}
          content={feature.content}
          title={feature.title}
          icon={feature.icon}
        />
      ))}
    </div>
  </section>
);
