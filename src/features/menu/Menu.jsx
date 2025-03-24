import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log("Menu data:", menu); // Check if the data is available

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((foodItem, index) => (
        <MenuItem
          foodItem={foodItem}
          key={foodItem.id || `${index}-${foodItem.title}`}
        />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
