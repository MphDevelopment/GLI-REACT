import React from 'react';
import { Route } from 'react-router-dom';

class About extends React.Component{
    constructor(props:any){
        super(props);
    }


    render(){
        return (
            <div>
                <Route path="/about/"/>
                TP GLI - REACT
                Auteur: Théo JAMMES-BEUVE
            </div>
        );
    }
}

export default About;

