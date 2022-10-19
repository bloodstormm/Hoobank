import styles from "../styles";
import { logo } from "../assets";

import { footerLinks, socialMedia } from "../constants";

export const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
  >
    <div className="absolute z-0 -bottom-1/2 w-4/5 h-4/5 rounded-full blue__gradient" />

    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="bank" className="w-64 object-contain" />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          Um novo jeito de fazer pagamentos fáceis, confiáveis e seguros
        </p>
      </div>

      <div className="flex-[1.5] flex justify-between flex-wrap w-full mt-10 md:mt-0">
        {footerLinks.map(({ title, links }) => (
          <div key={title} className="flex flex-col my-4 min-w-[150px]">
            <h4 className="font-medium text-bigger leading-[72px] text-white">
              {title}
            </h4>
            <ul className="list-none mt-4">
              {links.map(({ name, link }) => (
                <li
                  key={name}
                  className="text-dimWhite leading-6 hover:text-secondary cursor-pointer 
                  mb-4 last-of-type:mb-0 transition"
                >
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div
      className="flex w-full justify-between items-center flex-col md:flex-row pt-6
     border-t-[1px] border-t-[#3f3e45] z-10 "
    >
      <p className="text-bigger leading-[72px] text-center text-white">
        &copy; 2022 Hoobank. Todos os direitos reservados.
      </p>
      <div className="flex mt-6 md:mt-0 ">
        {socialMedia.map(({ id, icon, link }) => (
          <a
            href={link}
            key={id}
            className="w-12 h-12 flex list-none p-3 cursor-pointer mr-3 hover:bg-secondary/40 rounded-full last-of-type:mr-0 transition"
          >
            <img src={icon} alt={id} />
          </a>
        ))}
      </div>
    </div>
  </section>
);
