import "../App.css";
import { MdOutgoingMail } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

function NavBar() {

  
  return (
    <div>
      <div className="row">

        {/* column 1 */}
        <div className="col">
      
          <button className="bttn">
          <MdOutgoingMail className="icons" />
          
          </button>
          <button className="bttn">
            <FaInfoCircle className="icons" />
          </button>

           </div>

{/* column 2 */}
<div className="col">
<h3 className="quicksand name">Odil Nuriddinov</h3>
</div>

        {/* column 3*/}
        <div className="col">
          <button className="bttn">
            <MdOutlineNotificationsActive className="icons"/>
          </button>

          <button className="bttn">
          <IoMdMoon  className="icons"/>
          </button>
        </div>

 

    
    </div>
 </div>
  );
}

export default NavBar;
