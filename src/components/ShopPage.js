import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShopContainer from './ShopContainer'
// 이 아래 컴포넌트 함수소괄호에서 변수명 props으로 작성해야함.
// 객체 형식으로 App에서 작성했던 데이터가 불러들여짐
// 따라서 데이터를 출력하려면 props.app의 태그에서 작성했던 변수명 props.sum, props.result 이런 식으로 작성해야함
const ShopPage = (props) => {
  return (
    <>
      <Header Members = {props.Members}></Header>
      <ShopContainer></ShopContainer>
      <Footer></Footer>
    </>
  )
}

export default ShopPage