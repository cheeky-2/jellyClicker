import { useSelector, useDispatch } from "react-redux";
import { buyMenu } from "../../../store";
import bottomMenus from "../menusDB/bottomMenuDB";
import '../../../BottomMenu.css';

function BottomMenu() {
    const purchasedMenus = useSelector((state) => state.game.purchasedMenus);
    const dispatch = useDispatch();

    return (
    <div className="bottom_menu">
        <h2>Item - Menu</h2>
        {bottomMenus.map((menu) =>
        purchasedMenus.includes(menu.name) ? null : (
            <button key={menu.name} onClick={() => dispatch(buyMenu(menu))} className="bottom_btn">
                <div className="bottom_wrap">
                    <img src={menu.img} alt={menu.name} />
                    <div className="title_cost"><em>{menu.name}</em><span>(-{menu.cost}달달구리)</span></div>
                    <p>{menu.description}</p>
                </div>
            </button>
        )
        )}
    </div>
    );
}

export default BottomMenu;
