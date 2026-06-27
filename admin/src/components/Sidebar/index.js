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
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">eStore</h1>
      </div>

      <ul className="mx-auto text-lg flex flex-col">
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link href={menuItem.url}>
                <div className="sidebar-list-item">{menuItem.text}</div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="sidebar-user-card">
        <div className="flex flex-row m-5">
          <Image
            height={50}
            width={50}
            src="/user.svg"
            alt="user avatar"
            className="border-gray-600 rounded-full border-2"
          />
          <div className="m-auto text-lg">John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
