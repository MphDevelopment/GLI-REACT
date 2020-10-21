import * as React from 'react';
import ReactDOM from 'react-dom';
import Beer from './Beer';

// interface Props {
//   beers: Array<Beer>;
// }

// export default class ListBeers extends React.Component<Props> {
//   static defaultProps: Props = {
//     beers: [new Beer({name:"86 extreme"}), new Beer({name:"amsterdamer à la pisse"})]
//   };

//   render () {
//     return(
//         <div>
//             <h2>Liste de bières:</h2>
//             <ul>
//                 {this.props.beers.map((item,i) => 
//                     <li key={i}>
//                         {item.render()}
//                     </li>
//             )}
//             </ul>
//         </div>
//     )
//   }

// }

interface State {
    beers: Array<string>;
  }
  
  export default class ListBeers extends React.Component<{},State> {
    constructor(props:any){
        super(props);
        this.state = {
            beers: []
        }
    }

    newBeerName: string = "";

    handleChange = (event:React.ChangeEvent<any>) => {
        this.newBeerName = event.target.value;
    }

    removeItem(id:number){
        delete this.state.beers[id];
        this.setState(
            {
                beers : this.state.beers
            }
        )
        console.log(this.state.beers);        
    }

  
    render () {
      return(
          <div>
              <h2>Liste de bières:</h2>
              <input type="text" placeholder="Ajouter une bière" onChange={this.handleChange}/>
              <button onClick={this.add}>Ajouter</button>
              <ul>
                  {this.state.beers.map((item,i) => 
                      <li key={i}>
                          <Beer  id={i} name={item} key={"b" + i}/>
                          <button key={"bt"+i} onClick={() => this.removeItem(i)}>Remove</button>
                      </li>
              )}
              </ul>
          </div>
      )
    }

    add = () => {
        const b = this.state.beers;
        b.push(this.newBeerName);

        this.setState( {
            beers : b
        });
        // this.state.beers.push(this.newBeerName);
        // console.log(this.state.beers);
        // ReactDOM.render(
        //     <React.StrictMode>
        //       <ListBeers />
        //     </React.StrictMode>,
        //     document.getElementById('root')
        //   );
    }
  
  }