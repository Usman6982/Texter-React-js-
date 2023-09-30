import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra Spaces Removed!", "success");
  };



  const handleEmailExtractClick = () => {
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    const extractedEmails = text.match(emailRegex);

    if (extractedEmails) {
      alert(`Extracted Email Addresses:\n${extractedEmails.join('\n')}`);
    } else {
      alert('No email addresses found in the text.');
    }

    props.showAlert("Extracted Email!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            placeholder="Type Something"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleEmailExtractClick}>
          Extract Emails
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').filter((word) => word !== '').length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.length).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the TextBox above to preview it here'}</p>
      </div>
    </>
  );
}
