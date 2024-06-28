import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiPuma } from "react-icons/si";
import { SiUnderarmour } from "react-icons/si";
import { SiFila } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import './List.css'

const Brands = () => {
    return (
      <div className="list container-sm justify-content-sm-center">
        {/* <h3 className="fw-bold text-center">Brands</h3> */}
        <div className="brand list-grid d-flex flex-wrap justify-content-center">
          <div className="brands-item pb-3 text-center">
            <h3><CgAdidas /></h3>
          </div>
          <div className="brands-item pb-3 text-center">
            <h3><SiFila /></h3>
          </div>
          <div className="brands-item pb-3 text-center">
            <h3><SiNewbalance /></h3>
          </div>
          <div className="brands-item pb-3 text-center">
            <h3><SiNike /></h3>
          </div>
          <div className="brands-item pb-3 text-center">
            <h3><SiPuma /></h3>
          </div>
          <div className="brands-item pb-3 text-center">
            <h3><SiUnderarmour /></h3>
          </div>
        </div>
      </div>
    )
  }
  
  export default Brands
  