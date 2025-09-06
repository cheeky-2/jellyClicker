import sugarImg from '../../../assets/images/cube_sugar.png';
import teaSpoon from '../../../assets/images/tea_spoon.png';
const bottomMenus = [
    { img:sugarImg, name: "설탕", cost: 50, effect: { clickPower: 2 }, description:"활성화 시 클릭당 얻는 달달구리가 2배 증가합니다." },
    { img:teaSpoon, name: "티스푼", cost: 100, effect: { autoPower: 1 }, description:"활성화 시 자동으로 1초 당 1의 달달구리를 얻습니다." },
/*     { img:'', name: "자동 클릭 +5", cost: 300, effect: { autoPower: 5 } }, */
];

export default bottomMenus;
