import React , {useState} from 'react'

export default function TextForm(props) {

    const [text ,setText] = useState('');
   
    const handleLoClick=()=>
    {
        console.log("upper case was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Convert to lowercase", "Succes");


    }
    const handleUpClick=()=>
    {
        console.log("upper case was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to uppercase", "Succes");

    }
    const handleClearClick=()=>
    {
        console.log("upper case was clicked"+text);
        let newtext='';
        setText(newtext);
        props.showAlert("Clear text", "Succes");

    }
    const handleCopy=()=>
    {
       var text = document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text copied", "Succes");
    }
    
    const handleExtraSpace=()=>
    {
       let newtext = text.split(/[  ]+/);
       setText(newtext.join(" "));
       props.showAlert("Extra space has been removed", "Succes");
       
    }
     const handleonChange=(event)=>
     {
        console.log("on change");
        setText(event.target.value);
     }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleonChange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra space</button>
      </div>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
