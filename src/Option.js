import PropTypes from "prop-types";

import React, { Component } from "react";
class Option extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectans:'',

        }
    }


    clk=(e)=>{
        this.setState({selectans:e.target.value})
    }
    subm=(e)=>{
e.preventDefault();
this.props.check(this.state.selectans);
    }
    
  render() {
    return (
      <form  style={{ width: "100%" }} onSubmit={this.subm}>
        <div className="bg-secondary list-group list-group-horizontal justify-content-center">
          {this.props.option.map(m => (
            <div className="list-group-item bg-dark text-light mr-5 ml-5 ">
              <input type="radio" value={m.name} name='ans' onClick={this.clk}></input>
              <label className="ml-2">{m.name}</label>
            </div>
          ))}
        </div>
        <button style={{marginLeft:'45%' ,marginTop:'1%'}}type="submit" className="btn btn-primary btn-large">
          SUBMIT
        </button>
      </form>
    );
  }
}
Option.propTypes = {
  option: PropTypes.array
};

export default Option;
