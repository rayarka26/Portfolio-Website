import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{fontSize:"34px",textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link style={{fontSize:"20px"}}to="/resume">Resume</Link>
                <Link style={{fontSize:"20px"}}to="/aboutme">About Me</Link>
                <Link style={{fontSize:"20px"}}to="/projects"> Mine Projects</Link>
                <Link style={{fontSize:"20px"}}to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
              <Link style={{fontSize:"20px"}}to="/resume">Resume</Link>
                <Link style={{fontSize:"20px"}}to="/aboutme">About Me</Link>
                <Link style={{fontSize:"20px"}}to="/projects"> Mine Projects</Link>
                <Link style={{fontSize:"20px"}}to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
