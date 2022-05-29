import React,{useState} from 'react';


export default function About(props) {
   
   {/* const [mystyle,setmystyle]=useState({
        color: 'black',
        backgroundColor:'white',
        border:'1px solid white'
    }) */}
    
let mystyle ={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#3db78f':'white',
      boder:'2px solid',
      coderColor:props.mode==='dark'?'white':'black'
}
    
  return (
      <>
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
  <div style={mystyle}v className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> Ower Details</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse 0show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h1>vishal singh</h1>
        <p>Email on <span></span>  <a href='vishalsinghbadm@gmail.com'>vishalsinghbadm@gmail.com</a> </p> 
      
        <div className= "social-icons mt-4">
                <a href="https://www.facebook.com/vishalsinghbadm" target="_blank"><i className="fab btn btn-success mx-2 my-1 bfa-facebook">Facebook</i></a>
                <a href="https://www.instagram.com/rajpoot_vishal_._/?hl=en" target="_blank"><i className="fab btn btn-success mx-2 my-1 fa-instagram">Instagram</i></a>
                <a href="https://www.linkedin.com/in/vishal-singh-3360a5195/" target="_blank"><i className="fab btn btn-success mx-2 my-1 fa-linkedin">Linkedin</i></a>
                <a href="https://github.com/vishal9534" target="_blank"><i className="fab btn btn-success mx-2 my-1 fa-github">Github</i></a>
            </div>
     </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong> Browser support </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Try web-optimized Edge and get rewarded by doing what you love with Microsoft Rewards. Enhance your browsing experience on Microsoft Edge with recommended settings. Install Now. Contact Us. Features: Shortcut On Desktop, Recommended Sites In Favorites, Microsoft News For Your Homepage.
      </div>
    </div>
  </div>
 
</div>
  
     
    </div>
    </>
    )

}
    