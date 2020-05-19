import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDown from "./Dropdown";

class Search extends Component {
  state = {
    text: "",
    selectedOption: "apartement",
    isDropDownOpen: false,
  };

  static propTypes = {
    searchBuilding: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please type your keyword");
    } else {
      this.props.searchBuilding(this.state.text.toLowerCase(), this.state.selectedOption);
      this.setState({
        text: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDropDown = () => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen,
    });
  };

  handleSelectOption = (param) => {
    this.setState({
      selectedOption : param,
      isDropDownOpen: !this.state.isDropDownOpen
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container-wrapper">
          <form className="form" onSubmit={this.onSubmit}>
            <i style={{position: 'absolute', top:'12px', left:'10px', color:'#ccc'}} class="fa fa-search"></i>
            <input
              type="text"
              name="text"
              placeholder="search apartement or office name ex:kalibata"
              value={this.state.text}
              onChange={this.onChange}
            />
          </form>
          <DropDown
            selectedOption={this.state.selectedOption}
            handleDropDown={this.handleDropDown}
            isDropDownOpen={this.state.isDropDownOpen}
            handleSelectOption={this.handleSelectOption}
          />
        </div>
      </div>
    );
  }
}

export default Search;
