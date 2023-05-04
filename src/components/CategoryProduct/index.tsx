import "./styles.css";

type Props = {
  name: string;
};

const CategoryProduct = ({ name }: Props) => {
  return <div className="dsc-category">{name}</div>;
};

export default CategoryProduct;
