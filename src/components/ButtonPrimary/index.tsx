import "./styles.css";

type PropsBtnP = {
  name: string;
};

const ButtonPrimary = ({ name }: PropsBtnP) => {
  return <div className="dsc-btn dsc-btn-blue">{name}</div>;
};

export default ButtonPrimary;
