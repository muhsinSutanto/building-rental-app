import React, { Component } from "react";
import Search from "../components/building/Search";
import Alert from "../components/elements/Alert";
import BuildingList from "../components/building/BuildingList";
import { paginate } from "../utils/helper";
import { searchBuilding } from "../utils/fetch";

class Home extends Component {
  state = {
    buildings: [],
    loading: false,
    loadingPagination: false,
    alert: null,
    currentPage: 1,
    renderPerPage: 4,
    upperPageBound: 4,
    lowerPageBound: 0,
    fetched: false,
  };

  setAlert = (msg) => {
    this.setState({
      alert: {
        msg,
      },
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  searchBuilding = async (text, option) => {
    this.setState({ loading: true });
    const data = await searchBuilding(text, option);
    this.setState({ buildings: data, loading: false, fetched: true });
  };

  handleNext = async () => {
    await setTimeout(() => this.setState({ loadingPagination: true }), 1000);
    await setTimeout(
      () =>
        this.setState({
          currentPage: this.state.currentPage + 1,
          loadingPagination: false,
        }),
      2000
    );
  };

  handlePrev = async () => {
    await setTimeout(() => this.setState({ loadingPagination: true }), 1000);
    await setTimeout(
      () =>
        this.setState({
          currentPage: this.state.currentPage - 1,
          loadingPagination: false,
        }),
      2000
    );
  };

  render() {
    return (
      <div>
        <div className={this.state.alert ? "header warning" : "header"}>
          <Search
            setAlert={this.setAlert}
            searchBuilding={this.searchBuilding}
          />
        </div>
        <div className="container">
          <Alert alert={this.state.alert} />
          <BuildingList
            buildings={paginate(this.state.buildings, this.state.currentPage)}
            buildingsRaw={this.state.buildings}
            loading={this.state.loading}
            loadingPagination={this.state.loadingPagination}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            currentPage={this.state.currentPage}
            fetched={this.state.fetched}
          />
        </div>
      </div>
    );
  }
}

export default Home;
