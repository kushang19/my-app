import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Lower case was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase!", "success");
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleDefaultText = () => {
        let newText = 'This is Default Text';
        setText(newText);
        props.showAlert("Default Text added!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange")
        setText(event.target.value);
    }

const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText} >Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleDefaultText} >Default Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace} >Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(/\s+/).filter((el) => {return el.length !== 0} ).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((el) => {return el.length !== 0} ).length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter text in above textbox'}</p>
    </div>
    </>
  )
}
