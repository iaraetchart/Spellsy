import { AiFillQuestionCircle } from "react-icons/ai";
import Settings from "../Settings";

function NavBar(props) {
  return (
    <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white max-w-[600px] w-[80vw]">
      <AiFillQuestionCircle 
        className="text-2xl"
        onClick={() => {
          props.help(true);
        }}
      />
      <h1 className="text-3xl font-bold tracking-wider">SPELLSY</h1>
      <Settings darkness={props.darkness} dark={props.dark} className="text-2xl"/>
    </div>
  );
}

export default NavBar;
