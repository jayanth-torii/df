import React from 'react'
const Header = ({ title }) => {
  <div>
    <h1>{title}</h1>
  </div>
    
};
const Footer = ({ tagline, copyright }) => {
  <div>
    <p>{tagline}</p>
  <p>{copyright}</p>
  </div>    
};


const Exp2 = () => {
    const title = "Experiment 2: passing data through props";
    const tagline = "This is a simple React component demonstrating how to pass data through props.";
    const copyright = "© 2026 Your Name. All rights reserved.";
  return (
    <div>
      <h2>Experiment 2:passing data through props</h2>
      <p>pass data from parent component to child component using props</p>
      <div>
            <Header title={title} />
            <p>This is the main content of the experiment. You can add more components here and pass different props to them.</p>
      </div>
      <div>
        <p>props passed:</p>
        <ul>
          <li>Title: {title}</li>
          <li>Tagline: {tagline}</li>
          <li>Copyright: {copyright}</li>
        </ul>
      </div>
      <Footer tagline={tagline} copyright={copyright} />
    </div>

  )
}

export default Exp2
