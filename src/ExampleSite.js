import React, {useState, useRef} from 'react';
import Wrapper from './components/Wrapper';
import NavWrapper from './components/NavWrapper';
import MainNav from './components/MainNav';
import SubNav from './components/SubNav';
import MainContents from './components/MainContents';
import logo from './logo.png';
import './ExampleSite.css';

const ExampleSite = () => {

   const submenu = [
      {id : 1, name: ["NEW FOR MEN","NEW FOR WOMAN","NEW FOR KIDS"]},
      {id : 2, name: ["SHOES","CLOTHING","ACC","COLLECTION"]},
      {id : 3, name: ["SHOES","CLOTHING","ACC","COLLECTION"]},
      {id : 4, name: ["BOYS","GIRLS","ACC","COLLECTION"]}
   ];

   const [target, setTarget] = useState(0);
   const [page, setPage] = useState('main');

   const subEl = useRef(null);
   const mainEl = useRef(null);

   const onenter = e => {
      var num = e.target.id.slice(-1)-1;
      subEl.current.style.height = "60px";
      setTimeout(function(){
         setTarget(num);
         subEl.current.classList.add("focused");
      },100);
      for(var i =0; i<mainEl.current.children.length; i++){
         mainEl.current.children[i].classList.remove("red")
         if(i===num){
            mainEl.current.children[i].classList.add("red")
         }
      }
   }

   const onleave = () =>{
      subEl.current.classList.remove("focused");
      subEl.current.style.height = "0px";
   }

   const onclick = e => {
      for(var i =0; i<mainEl.current.children.length; i++){
         mainEl.current.children[i].classList.remove("clicked")
         if(i===target){
            mainEl.current.children[i].classList.add("clicked")
         }
      }
      setPage(e.target.innerText);
   }
   
   const toMain = () => {
      setPage('main');
      for(var i =0; i<mainEl.current.children.length; i++){
         mainEl.current.children[i].classList.remove("red");
         mainEl.current.children[i].classList.remove("clicked");
      }
   }

   return (
      <Wrapper>
         <NavWrapper onMouseLeave={onleave}>
            <h1><img src={logo} alt="nike logo" onClick={toMain}></img></h1>
            <MainNav mainEl={mainEl} onMouseEnter={onenter} onClick={onclick}/>
            <nav ref={subEl} id="subNav">
               {submenu[target].name.map( (v,i) => {
                  return <SubNav
                  key={i}
                  subTitle={v}
                  />;
               })}
            </nav>
         </NavWrapper>
         <MainContents page={page}/>
      </Wrapper>
    );
}

export default ExampleSite;

