import "./styles.css";

type PropsBtnI = {
  name: string;
};

const ButtonInverse = ({ name }: PropsBtnI) => {
  return <div className="dsc-btn dsc-btn-white">{name}</div>;
};

export default ButtonInverse;
