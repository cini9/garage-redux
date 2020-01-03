import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand} - {car.model}</h3>
            <p><strong>OWNER: </strong>{car.owner}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Garage</h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Add new car !
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
