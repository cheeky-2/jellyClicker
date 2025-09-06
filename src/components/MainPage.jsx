import { useSelector, useDispatch } from "react-redux";
import { addScore } from "../store";
import MenuAll from "./interface/MenuAll";
import mainItem from '../assets/images/main_item.png';
/**
 * useSelector: 스토어의 특정 상태를 "구독"해서 가져옴.
 * - state: 스토어 전체 루트 상태 { game: { score, ... } }
 * - 필요한 조각만 골라오면 리렌더 최소화에 도움.
 */
function Main() {
    const score = useSelector((state) => state.game.score);
    const dispatch = useDispatch();

    return (
    <div>
        <h1 style={{textAlign:"center", fontSize:'1.75rem', marginTop:'20px', fontWeight:'600'}}>달달구리: {score}</h1>
        <button onClick={() => dispatch(addScore())} style={{width:'400px', margin:'40px auto 60px', display:"block"}}><img src={mainItem} alt="" style={{width:'100%'}} /></button>
        <MenuAll />
    </div>
    );
}

export default Main;
