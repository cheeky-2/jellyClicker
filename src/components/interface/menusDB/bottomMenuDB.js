import sugarImg from '../../../assets/images/cube_sugar.png';
import teaSpoon from '../../../assets/images/tea_spoon.png';
const bottomMenus = [
    { img:sugarImg, name: "설탕", cost: 50, effect: { clickPower: 2 } },
    { img:teaSpoon, name: "티스푼", cost: 100, effect: { autoPower: 1 } },
/*     { img:'', name: "자동 클릭 +5", cost: 300, effect: { autoPower: 5 } }, */
];

export default bottomMenus;
