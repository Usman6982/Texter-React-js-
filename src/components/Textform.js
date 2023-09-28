import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
      
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
      
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=" ";
        setText(newText)
      
    }
    const handleEmailExtractClick = () => {
        // Regular expression to match email addresses
        const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
        const extractedEmails = text.match(emailRegex);
    
        if (extractedEmails) {
          alert(`Extracted Email Addresses:\n${extractedEmails.join('\n')}`);
        } else {
          alert('No email addresses found in the text.');
        }
      }
   
      
    
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
        
    }
    const [text, setText] = useState('');
    // // text="new text";//Wrong way to change the state
    // setText("Hello Shello");
    // //right way to change the state;
    return (
        <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >

      <h1>{props.heading}</h1>

        <div className="mb-3">  

     <textarea placeholder="Type Something" className="form-control"  value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    <button
          className="btn btn-primary mx-1"
          onClick={handleEmailExtractClick}
        >
          Extract Emails
        </button>
     </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
          </div>
    </>

  )
}
