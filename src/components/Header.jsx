import { CiLogin as Login} from "react-icons/ci";
function Header({title}) {
 //console.log({title});
  return (
    <header className="flex justify-between items-center bg-green-400 h-16">
      <div className="w-full flex justify-end items-center">
        <h1 className="text-4xl text-white text-center">{title}</h1>
        <div className=" w-1/2 flex justify-end items-center">
          <button className="text-4xl text-white py-2 px-4 rounded mr-3">
            <Login />
            </button>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
