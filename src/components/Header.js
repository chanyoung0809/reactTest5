import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  // let [menus,menusSet] = useState(["상품1","상품2"]);
  // console.log(props);


  return (
    <div id='header'>
      <Link to="/">로고</Link>
      <Link to="/shop">Shop</Link>
      <ul className='gnb'>
      {/* {
        menus.map((menu,idx)=>{
          return(
            <li key={idx}><Link to={`/detail/${idx}`}>{menu}</Link></li>
            //  <li><Link to={"/detail/"+${idx}}>{menu}</Link></li>
          )
        })
      } */}
      {
        props.Members.map((member, idx)=>{
          return(
            <li key={idx}><Link to={`/detail/${idx}`}>{member.name}</Link></li>
          )
        })
      }
      </ul>
      
    </div>
  )
}

export default Header