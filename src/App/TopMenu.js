import {Link} from "react-router-dom";
const TopMenu = ()=>{
  return (
    <div className="TopMenu-container">
      <div className="TopMenu-items">
        <Link to="/">
          <span className="TopMenu-item">Home</span>
        </Link>
        <Link to="/counter">
          <span className="TopMenu-item">useState</span>
        </Link>
        <Link to="/info">
          <span className="TopMenu-item">useEffect</span>
        </Link>
        <Link to="/reducer">
          <span className="TopMenu-item">Reducer</span>
        </Link>
        <Link to="/average">
          <span className="TopMenu-item">useMemo</span>
        </Link>
      </div>      
      
      
      
    </div>
  )
  
}
export default TopMenu;