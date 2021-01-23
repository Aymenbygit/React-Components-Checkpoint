import React from "react";
import myImage from "../../Mine.jpg";
import MyAdress from "./Address";
import FullName from "./FullName";


const MyCard = () => {
 return (
 <div>

    <div class="card">
    <h2 className="big_tit">My Profil</h2>
      <img src={myImage} alt="myImage" />
      <FullName />
      <p class="title"><MyAdress /></p>
      <div className="sociaux">
        <a href={"https://github.com/Aymenbygit"}><i class="fa fa-github"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href={"https://www.facebook.com/aymen.etoilist"}><i class="fa fa-facebook"></i></a> 
        <a href={"mailto:aymenby30@gmail.com"}><i class="fa fa-envelope"></i></a>
      </div>
      <p><button>Contact Me</button></p>
    </div>
</div>
);
};
export default MyCard;