import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../store";
import MenuAll from "./interface/MenuAll";
import mainItem from '../assets/images/main_item.png';
import '../MainPage.css';
/**
 * useSelector: 스토어의 특정 상태를 "구독"해서 가져옴.
 * - state: 스토어 전체 루트 상태 { game: { score, ... } }
 * - 필요한 조각만 골라오면 리렌더 최소화에 도움.
 */
function Main() {
    const score = useSelector((state) => state.game.score);
    const dispatch = useDispatch();

    return (
    <div className="main_page">
        <h1>달달구리: {score}</h1>
        <button onClick={() => dispatch(addScore())}><img src={mainItem} alt="" /></button>
        <MenuAll />
    </div>
    );
}

export default Main;
