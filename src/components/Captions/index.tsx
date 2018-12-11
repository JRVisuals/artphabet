import * as React from 'react';

interface IProps {
    cwidth: number,
    capText: string,
};


export default class Captions extends React.Component < IProps, object> {

    render() {
        return(
            
                <div className='ccbox'>
                    <div id="captions" className="cctext" style={{margin:'0 auto', backgroundColor:'#333', width:this.props.cwidth+'px'}}>
                        {this.props.capText}
                    </div>
                </div>
        )
    }

};
