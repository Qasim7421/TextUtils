import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter Text Here');
    const UpperCase = ()=>{
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase','success')
    }
    const changeHandle = (e)=>{
 
        setText(e.target.value)
    }
    const LowerCase = ()=>{
      setText(text.toLowerCase());
      props.showAlert('Converted to LowerCase','success')
    }
    const ClearText = ()=>{
      let newText = "";
      setText(newText);
      props.showAlert('Text Clear','success')
    }
    const CapatalizeCase = ()=>{
      let arr =text.split(" ");
    for (var i = 0; i < arr.length ; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     }
     const str2 = arr.join(" ");
     setText(str2);
     props.showAlert('Converted to CapatalizeCase','success')

   }
   const AlterNateCase = () => {
    var charArray = text.toLowerCase().split("");
    for (var i = 1; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
       setText(charArray.join(""));
       props.showAlert('Converted to AlterNateCase','success')
  }
  return (
    <>
    <div className='container my-4'  style={{color: props.mode == 'dark' ? 'white' : '#48637e'}}>
     <h1>{props.heading}</h1>

    <div className="form-group">
    <textarea className="form-control" style={{backgroundColor: props.mode == 'dark' ? 'grey' : 'white', color: props.mode == 'dark' ? 'white' : '#48637e'}} id="exampleFormControlTextarea1" onChange={changeHandle} rows="8" value={text}></textarea>
    </div>
    <button  className="btn btn-primary mx-2" onClick={UpperCase} >Convert To Uper Case</button>
    <button  className="btn btn-primary mx-2" onClick={LowerCase} >Convert To Lower Case</button>
      <button  className="btn btn-primary mx-2" onClick={CapatalizeCase} >Capatalize Case</button>
      <button  className="btn btn-primary mx-2" onClick={AlterNateCase} > Convert aLtErNaTeCaSe Case    </button>
      <button  className="btn btn-primary mx-2" onClick={ClearText} >Clear Text</button>
  </div>
  <div className="container" style={{color: props.mode == 'dark' ? 'white' : '#48637e'}}> 
    <h1>Your Text Summary Is Here</h1>
    <p>Words: {text.split(/[^\s]+/).length-1 }   Charaters: {text.length}</p>
    <p>Time Required To Read:{0.008 * text.split(" ").length}   </p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
