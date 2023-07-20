import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    // console.log(props);
    // Members가 넘어옴 (객체 2개 들어가있는 배열 데이터)

    /* 웹 브라우저 주소창에 있는 url parameter에 들어간 값에 따라 태그에 출력되는 데이터값이 다르게 나와야 상세페이지 표현 가능 */
    // useParams() 사용해서 주소창에 붙여준 데이터값 출력
    //let {라우터 설정 시 작명(:~)했던 주소창의 매개변수 이름} = {}
    let {no} = useParams();
    return (
        <>
            <Header Members = {props.Members}></Header>
            <div id='container'>
                {/* 주소창에 보내준 데이터 값을 배열 순번으로 사용 */}
                <div>{props.Members[no].name}</div>
                <div>{props.Members[no].phone}</div>
                <img src={props.Members[no].imgs} />
                {/* 이미지 태그, br...등등은 자동완성에 맡기면 열고닫는 태그로 만들어짐. 주의해주세요 */}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Detail