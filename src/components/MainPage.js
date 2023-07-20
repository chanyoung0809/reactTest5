import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainContainer from './MainContainer'
// 컴포넌트가 만들어질 때는 반드시 하나의 부모 태그로 끝내야 함.
// 다만, 의미없는 태그사용이 싫을 경우 이름이 없는 상태의 태그(<></>)로 작업도 가능. 
const MainPage = (props) => {
  return (
    <>
        <Header Members = {props.Members}></Header>
        <MainContainer></MainContainer>
        <Footer></Footer>
    </>
  )
}

export default MainPage