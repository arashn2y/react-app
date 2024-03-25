import { CiLogin as Login } from "react-icons/ci";

function Header({ title }) {
  return (
    <header className="flex justify-between items-center bg-dark-green h-16">
      <div className="w-full flex justify-center items-center relative">
        <h1 className="text-4xl text-white text-center">{title}</h1>
        <div className="absolute right-0">
          <button className="text-4xl text-white py-2 px-4 rounded">
            <Login />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;