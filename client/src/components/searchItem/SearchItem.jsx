import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  
  return (
    <div className="searchItem">
      <img
        src= {item.img}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle"></h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Extras Available</span>
        <span className="siSubtitle">
          {item.source}
        </span>
        <span className="siSubtitle">
          To
        </span>
        <span className="siSubtitle">
        {item.destination}
        </span>

        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.distance} km</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{item.price} MAD</span>
          <span className="siTaxOp">Includes taxes and fees</span>
         
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
