import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
      console.log("Lowercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!","success");
  }
  const handleClear = ()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text is cleared!","success");
    }

    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
       props.showAlert("Text is copied to Clipboard!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
       props.showAlert("Extra Spaces removed from the text!","success");
    }
    const handleSpeak=()=>{
      const read= new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      read.voice = voices[0];
      window.speechSynthesis.speak(read);
    }
    const [text,setText]= useState('Enter the text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
  <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak out the text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to ClipBoard</button>
   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to see the preview"}</p>
  </div>
  </>
  )
}
