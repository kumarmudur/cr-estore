import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { text: "Dashboard", url: "/" },
  { text: "Users", url: "/users" },
  { text: "Product Type", url: "/product-type" },
  { text: "Products", url: "/products" },
];

const Sidebar = () => {
  return (
    <div>
      <div>
        <h1>eStore</h1>
      </div>

      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link href={menuItem.url}>
                <div>{menuItem.text}</div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div>
        <div>
          <Image height={50} width={50} src="/user.svg" alt="user avatar" />
          <div>John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
