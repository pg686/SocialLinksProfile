
import './App.css'
import Button from './Button.jsx'

function App() {


  return (
    <div className='container'>
     <div className="box">
      <img src="./avatar-jessica.jpeg" alt="Daniel" className="image" />
      <div className='info'>
        <h2>Jessica Randall</h2>
        <h5>London, United Kingdom</h5>
      </div>
      <h5 className='description'>"Front-end developer and avid reader."</h5>
      <div className="buttonWrapper">
      {['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'].map((content, index) => <Button key={index} content={content} />
)} 
      </div>
     
     </div>
    </div>
  )
}

export default App
