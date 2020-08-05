import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="/resume">Mon CV</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Mes Réalisations</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Accueil</Link>
                <Link to="/resume">Mon CV</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Mes Réalisations</Link>
                <Link to="/contact">Contact</Link>
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

export default App;
