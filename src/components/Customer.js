import React from 'react';


class Customer extends React.Component
{   // Customer 컴포넌트를 실제 그려주는 역할을 수행 
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>         
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }

}


export default Customer;