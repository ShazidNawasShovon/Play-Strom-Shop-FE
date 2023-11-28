import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT, ABOUT } from "./Manue";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="About" />
      <Item Links={SUPPORT} title="Support" />
    </div>
  );
};

export default ItemsContainer;
