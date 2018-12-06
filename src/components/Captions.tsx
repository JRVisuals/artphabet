import * as React from "react"
import { number } from 'prop-types';

interface IProps {
    cwidth?: number;
};


export default class Captions extends React.Component < IProps, object> {

    // @TODO how do we expose this component's state to the Phaser scene in order to avoid setting the innerHTML via element reference -- or is this not even a problem?

    render() {
       // console.log('-----');
       // console.log(this.props);
        return(
            <div id="captions" className="cctext" style={{margin:'0 auto', backgroundColor:'#333', width:this.props.cwidth+'px'}}>
                Caption test.
            </div>    
        )
    }

};
