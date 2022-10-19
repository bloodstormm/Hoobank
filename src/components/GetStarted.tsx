import styles from "../styles";

import { arrowUp } from "../assets";

export const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:animate-pulse`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} items-center`}>
        <p className=" font-medium leading-[23px]">
          <span className="text-gradient mr-1">Começar</span>
        </p>
        <img src={arrowUp} className="w-[23px] object-contain" />
      </div>
    </div>
  </div>
);
