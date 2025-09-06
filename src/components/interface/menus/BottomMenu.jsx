import { useSelector, useDispatch } from "react-redux";
import { buyMenu } from "../../../store";
import bottomMenus from "../menusDB/bottomMenuDB";

function BottomMenu() {
    const purchasedMenus = useSelector((state) => state.game.purchasedMenus);
    const dispatch = useDispatch();

    return (
    <div>
        <h2>Item</h2>
        {bottomMenus.map((menu) =>
        purchasedMenus.includes(menu.name) ? null : (
            <button
            key={menu.name}
            onClick={() => dispatch(buyMenu(menu))}
            >
                <img src={menu.img} alt={menu.name} />
                <em>{menu.name}</em><span>(-{menu.cost})</span>
            </button>
        )
        )}
    </div>
    );
}

export default BottomMenu;
