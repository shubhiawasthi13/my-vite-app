import React from "react"
function App({title, btnLink="links",Image}) { //props with default
  return (
    <>
 
   <center>
    <div className="card" style={{width:400}}>
      <div>
        <img src={Image} alt="cart-img" style={{width: 380}} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit sapiente voluptate dolorem, recusandae in commodi dignissimos assumenda voluptas animi ab quos unde architecto provident itaque nulla magni magnam non.</p>
        <a href="#" className="card-link btn btn-success">{btnLink}</a>
      </div>
    </div>
    </center>
  
    </>
  )
}

export default App
