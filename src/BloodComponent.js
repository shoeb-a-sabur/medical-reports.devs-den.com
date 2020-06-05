import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; 

class BloodComponent extends Component {
    constructor(props) {
        super(props);
        this.defaultMeasurementUnitIndex = -1;

        this.measurementUnitList.forEach((element, index) => {
            if( element.conversion == 1 ) {
                this.defaultMeasurementUnitIndex = index;
            }
        });
    }

    getDefaultMeasurementValue() {
        const currentMeasurement = this.props.measurementUnitList[this.props.currentMeasurementUnitIndex];
        return currentMeasurement.conversion * this.props.value;
    }

    render() {
        const cur_value = this.props.value;
        const cur_unit = this.props.measurementUnitList[this.props.currentMeasurementUnitIndex];
        const default_unit = this.props.measurementUnitList[this.defaultMeasurementUnitIndex];

        return (
            <React.Fragment>
                <td>{this.props.name}</td>
                <td>{this.props.alternate}</td>
                <td>{cur_value} {cur_unit.label}</td>
                <td>{this.getDefaultMeasurementValue()} {default_unit.label}</td>
            </React.Fragment>
        );
    }
}

BloodComponent.PropTypes = {
    name: PropTypes.string.isRequired,
    alternate: PropTypes.string,
    value: PropTypes.number,
    measurementUnitList: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentMeasurementUnitIndex: PropTypes.number
}


module.exports = BloodComponent;
module.exports.default = BloodComponent;