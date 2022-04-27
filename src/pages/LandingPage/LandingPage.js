// Components
import { Button } from 'antd';
import { RedirectButton, Logo } from '../../StyleElements';
// Icons
import {BsGithub} from 'react-icons/bs';

export default function LandingPage() {
    return (
        <div>
            <Banner />
            <div style={{paddingLeft:'20vw', paddingRight:'20vw', paddingBottom:'2rem'}}>
                <About />
                <Team />
                <ProjectStatus />
            </div>
        </div>
    );
}

function Banner() {
    return (
        <div style={{backgroundColor:'#e3fcff', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div>
                <h1 style={{fontSize:'4rem', marginBottom:'1rem'}}>spotty</h1>
                <h2>spot a potty</h2>
                <div style={{height:'2rem'}} />
                <RedirectButton 
                    redirectTo="/" 
                    button={<Button color="#68DCEC" shape="round">find a bathroom</Button>} 
                />
                <span style={{height:'2rem'}}/>
            </div>
        </div>
    );
}

function About() {
    return (
        <div style={{display:'flex', paddingTop:'4rem', paddingBottom:'4rem', alignItems:'center'}}>
            <div style={{textAlign:'left'}}>
                <h2>About</h2>
                <p>Lack of bathroom access is a serious humanitarian and public health issue.</p>
                <ul>
                    <li>bathrooms are difficult to access, particularly for people who have to be on the move frequently</li>
                    <li>bathrooms have become even scarcer with the pandemic, and when looking for ability-, gender- and race-inclusive options</li>
                </ul>
                <p><strong>To help address this, we have created a mobile-first web application to help people on the move find nearby bathrooms that fit their needs.</strong></p>
                <p></p>
            </div>
            <span style={{width:'2rem'}}/>
            <Logo/>
        </div>
    );
}

function Team() {
    return (
        <div>
            <h2>The Team</h2>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Member name="Lisi Case" role="Product Manager & Developer" img="LisiCase-sq.jpg" />
                <Member name="Kevin Chou" role="Software Engineer" img="KevinChou-sq.jpg" />
                <Member name="David Chiang" role="Data Scientist" img="DavidChiang-sq.JPG" />
                <Member name="Jacqueline Park" role="Designer" img="JacquelinePark-sq.jpg" />
            </div>
        </div>
    );
}

function Member(props) {
    const filePath = "team-members/" + props.img;
    return (
        <div style={{margin:'1rem'}}>
            <img src={filePath} style={{height:'10rem', margin:'1rem'}} />
            <p style={{marginBottom:'0', fontSize:'1.1rem'}}><strong>{props.name}</strong></p>
            <p>{props.role}</p>
        </div>
    );
}

function ProjectStatus() {
    return (
        <div>
            <h2>Project Status</h2>
            <h6>University of Washington Information School: Capstone project for Winter/Spring 2022</h6>
            <p>This project will transition to open source, effective July 2022 (with no plans to maintain by the original team).</p>
            <a href="https://github.com/lisicase/vonia/" style={{color:'black'}}><BsGithub size={50} style={{paddingTop:'1rem'}} /></a>
        </div>
    );
}