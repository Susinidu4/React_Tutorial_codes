import { Fragment, useEffect, useState } from "react";
import './App.css';
import { Unit } from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {

  // const [imageURL,setImaageURL] = useState("")
  // const [name,setName] = useState("")
  // const [city,setCity] = useState("")
  // const [position,setPosition] = useState("")

  //## we can use one useStates for above 4 like below
  const [inputData,setInputData] = useState({
    imageURL:'',
    name:'',
    city:'',
    position:'',
  })

  const [myData, setMyData] = useState ([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //console.log(myData);



//## useEffect

// useEffect(()=> {
//   console.log("use effect calling..");
// },[inputData.name]);

// useEffect(()=>{
//   const changeEindowWidth = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   window.addEventListener('resize',()=>{
//     setWindowWidth(window.innerWidth);
//   });

//   console.log("use effect calling...");

// }, [inputData.name])



//## useEffect clean up process

useEffect(()=>{
  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize',()=>{
    setWindowWidth(window.innerWidth);
  });

  console.log("use effect calling...");

  return () => {
    console.log('use effect cleanup fuction running..')
    window.removeEventListener("resize", changeWindowWidth)
  }
}, [inputData.name])


  return(
    <Fragment>
    <Header/>
    <div className="main_containar">
      <h1>{windowWidth}</h1>
      <div className="main_left">

        {/* <input type='text' value={imageURL} onChange={(e)=>{
          e.preventDefault()
          setImaageURL(e.target.value)
        }}/>
        <input type='text' value={name} onChange={(e)=>{
          e.preventDefault()
          setName(e.target.value)
        }}/>
        <input type='text' value={city} onChange={(e)=>{
          e.preventDefault()
          setCity(e.target.value)
        }}/>
        <input type='text' value={position} onChange={(e)=>{
          e.preventDefault()
          setPosition(e.target.value)
        }}/> */}


        <input type='text' value={inputData.imageURL} placeholder='Image URL' onChange={(e)=>{
          e.preventDefault()
          setInputData(preInputData => ({
            ...preInputData,
            imageURL:e.target.value
          }))
        }}/>
        <input type='text' value={inputData.name} placeholder='Your Name' onChange={(e)=>{
          e.preventDefault()
          setInputData(preInputData => ({
            ...preInputData,
            name:e.target.value
          }))
        }}/>
        <input type='text' value={inputData.city} placeholder='Your City' onChange={(e)=>{
          e.preventDefault()
          setInputData(preInputData => ({
            ...preInputData,
            city:e.target.value
          }))
        }}/>
        <input type='text' value={inputData.position} placeholder='Your Position' onChange={(e)=>{
          e.preventDefault()
          setInputData(preInputData => ({
            ...preInputData,
            position:e.target.value
          }))
        }}/>



        <button onClick={()=>
          {
            // setMyData(pre=>{
            //   return [...pre,{
            //     image: imageURL,
            //     name,
            //     city,
            //     position,
            //   }]
            // });

            //# previuos value handling (direct return)
            setMyData((pre)=>[
              ...pre,
              {
                image: inputData.imageURL,
                name: inputData.name,
                city: inputData.city,
                position : inputData.position,
              },
            ]);

            setInputData((pre)=>{
              if(pre.imageURL.length>0){
                return {
                  ...pre,
                  imageURL: ''
                };
              } else {
               return pre;
              }
            });
            
            setInputData((prename)=>prename.name.includeslength>0?({
              ...prename,
              name:'',
            }):(prename));
            
            setInputData((precity)=>precity.city.length>0?({
              ...precity,
              city: '',
            }):(precity));
            
            setInputData((preposi)=>preposi.position.length>0?({
              ...preposi,
              position: '',
            }):(preposi));

          }
        }>Submit
        </button>

      </div>
      <div className="main_right">
      {myData?.map(({image,name,city,position},index) => <Unit image={image} name={name} city={city} position={position} key={index}/>)}
      </div>
    </div>
    </Fragment>
  )}
 
export default App;