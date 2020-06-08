/* The purpose of the Business component is to represent how
** a business ( a restaurant) in Ravenous will be formatted and styles. 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';

class Business extends React.Component {
  render(){
    
    const {business} = this.props;

    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2> {this.props.business.name} </h2>
        <div className="Business-information">
          <div className="Business-address">
            <p> {this.props.business.address} </p>
            <p> {this.props.business.city} </p>
            <p> {this.props.business.state} {this.props.business.zipCode} </p>
          </div>
          <div className="Business-reviews">
            <h3> {this.props.business.category} </h3>
            <h3 className="rating"> {this.props.business.rating} </h3>
            <p> {this.props.business.reviewCount} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;