import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ShopPage from "./components/ShopPage";
import Detail from "./components/Detail";

import { useState } from "react";

function App() {
  let [testData, testDataSet] = useState([
    {
      name:"치와와",
      phone:"010-2345-6789",
      imgs:require("./img/pic2_1.png")
    },
    {
      name:"포메라니안",
      phone:"010-9876-5432",
      imgs:require("./img/pic2_2.png")
    }
  ]);
  // let [testNumber, testNumberSet] = useState(60);
  // let [testString, testStringSet] = useState("테스트");
  // props 문법은 properties(속성) 태그에 속성명을 지정해서 원하는 데이터값을 자식컴포넌트에게 전달
  // 넘겨준 데이터값은 자식 컴포넌트에서는 수정할 수 없음(읽기전용) 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage Members={testData}></MainPage>}></Route>
        { /* 데이터값 전달 방법
          element={<컴포넌트태그명 변수명작명={데이터명} 변수명작명={데이터명}></컴포넌트태그명>}
        */}
        <Route path="/shop" element={<ShopPage  Members={testData}></ShopPage>}></Route>
        {/* 2대 이상 하위 컴포넌트에 데이터값 전달 방법 */}
        {/* <Route path="/shop" element={<ShopPage sum={testNumber} result={testString}></ShopPage>}></Route> */}
        <Route path="/detail/:no" element={<Detail Members={testData}></Detail>}></Route>
        {/* :매개변수. 작명 가능. */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>}></Route>
        {/* 위의 route에서 작성하지 않은 나머지 것들을 총칭. 따로 컴포넌트 만들어서 작업하면 디자인도 가능 */}
        {/* 아직은 detail/2 3 ... 이었을 때(데이터가 없을때) 에러메세지는 표현할 수 없음 */}
      </Routes>
    </div>
  );
}

export default App;
