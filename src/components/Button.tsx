type Props = {
  styles?: string;
};

export const Button = ({ styles }: Props) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-md font-medium 
      text-bigger text-primary outline-none hover:scale-110 transition duration-[.5s] ease-in-out ${styles}`}
    >
      Começar
    </button>
  );
};
