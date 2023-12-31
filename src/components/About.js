import React, {useState} from 'react'
 export default function About(){
    const [myStyle,setStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    });
    const [btnText,setBtnText] = useState('Enable Dark Mode');
   const  togglestyle = ()=>{
    if(myStyle.color == 'black'){
       setStyle({
        color : 'white',
        backgroundColor : 'black'
       });
       setBtnText('Enable Light Mode');
    }
    else {
        setStyle({
            color : 'black',
            backgroundColor : 'white'
           });
           setBtnText('Enable Dark Mode');
    }
   }
    return(
        <>
        <div className="container my-3" style={myStyle}>
            <h1>About Us</h1>
           <div className="accordion my-3" id="accordionExample" style={myStyle}>
  <div className="card">
    <div className="card-header" id="headingOne" style={myStyle}>
      <h2 className="mb-0" >
        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"   aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" style={myStyle}  aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h2 className="mb-0"  >
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
      <h2 className="mb-0" >
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample" style={myStyle}>
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
</div>
<div className='container'>
<button className="btn btn-primary" onClick={togglestyle}>{btnText}</button>
</div>
        </>
    );
 }