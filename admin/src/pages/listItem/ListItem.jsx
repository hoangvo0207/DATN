import { Publish } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./listItem.css";

export default function ListItem() {
    const location = useLocation()
    const listItem = location.listItem;
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newList">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{listItem.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">{listItem._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{listItem.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Type:</span>
                            <span className="productInfoValue">{listItem.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={listItem.title} />
                        <label>Type</label>
                        <input type="text" placeholder={listItem.type} />
                        <label>Genre</label>
                        <input type="text" placeholder={listItem.genre} />
                    </div>
                    <div className="productFormRight">
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
