import ClassComponent from "./components/ClassComponent";
import FnComponent from "./components/FnComponent";
import MapFn from "./components/MapFn";
import PlusBtn from "./components/PlusBtn";

const menu = [
  {
    id: 1,
    menu: "치킨",
    side: "맥주",
  },
  {
    id: 2,
    menu: "볶음밥",
    side: "고량주",
  },
  {
    id: 3,
    menu: "파스타",
    side: "와인",
  },
];

function App() {
  return (
    <div>
      {/* <h1>컴포넌트 종류 알아보기</h1> */}
      {/* <FnComponent name="파티네임" age="10" />
      <FnComponent name="side" age="12" />
      <ClassComponent menu="pizza" side="coke" />
      <ClassComponent menu="치킨" side="맥주" /> */}
      <MapFn menu={menu} />

      <PlusBtn />
    </div>
  );
}

export default App;
