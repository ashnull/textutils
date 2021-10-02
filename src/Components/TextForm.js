import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{ 
        //  console.log("uppercase was clicked");
         let newText = text.toUpperCase();
         setText(newText); 
         props.showAlert("Converted to uppercase!","success");
         }
         const handleloClick = () =>{
             let newText = text.toLowerCase();
             setText(newText);
             props.showAlert("Converted to lowercase!","success");
         }
    const handleOnChange =(event) =>{
        //    console.log("On change");
           setText(event.target.value);
    }
    const clrs = () => {
          setText('');
          props.showAlert("Text Cleard !","success");

    }

        const [text,setText] = useState('');
    return (

        <>
        <div className = "container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>            
            <div className="mb-3">
            {/* <label htmlfor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange = {handleOnChange}  style ={{backgroundColor: props.mode==='dark'?'gray':'white', colrt:   props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}> Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clrs}> Clear Text</button>

            {/* <a href = "newText.txt" download>
            <button className="btn btn-dark mx-1"> Download</button>        
            </a> */}
        </div>
        <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary is here</h2>
            <p> <b>{text.split(" ").length-1} </b> words and <b>{text.length}</b> characters</p>
            <p> <b>{0.008 * text.split(" ").length}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
