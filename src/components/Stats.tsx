import { stats } from "../constants";
import styles from "../styles";

export const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({ id, title, value }) => (
      <div key={id} className={`$flex-1 flex items-center m-3 `}>
        <h4
          className="font-semibold xs:text-[40px]
         text-[30px] xs:leading-[53px] leading-[43px] text-white"
        >
          {value}
        </h4>
        <p
          className=" xs:text-[20px]
         text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3"
        >
          {title}
        </p>
      </div>
    ))}
  </section>
);
