import React from 'react';

class Beer extends React.Component<{name:String, id:number}, {id:number, name:String}>{
    constructor(props:any){
        super(props);
        this.state = {
            name: props.name,
            id: props.id
        };
    }


    render(){
        return (
            <div>
                <h3>{this.state.name}</h3>
                <p>id = {this.state.id}</p>
            </div>
        );
    }
}

export default Beer;

