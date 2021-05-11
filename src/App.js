import ClassComponent from "./components/ClassComponent";
import FnComponent from "./components/FnComponent";

function App() {
  return (
    <div>
      <h1>컴포넌트 종류 알아보기</h1>
      <FnComponent name="파티네임" age="10" />
      <FnComponent name="side" age="12" />
      <ClassComponent menu="pizza" side="coke" />
      <ClassComponent menu="치킨" side="맥주" />
    </div>
  );
}

export default App;
