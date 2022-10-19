import { clients } from "../constants";
import styles from "../styles";

export const Clients = () => (
  <section id="clients" className={`flex flex-col my-12`}>
    <h2 className="text-dimWhite text-center font-semibold  uppercase text-2xl ">
      Nossos clientes:
    </h2>
    <div className={`${styles.flexCenter} flex-wrap w-full mt-12`}>
      {clients.map(({ id, logo }) => (
        <div
          key={id}
          className={`flex-1 m-2 sm:m-5 xl:m-0${styles.flexCenter}`}
        >
          <img
            src={logo}
            alt="client-logo"
            className="sm:w-48 w-24 object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
