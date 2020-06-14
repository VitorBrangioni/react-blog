import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class PostsListFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedAuthor: null,
      selectedOrder: null,
    };
  }

  handleAuthor(selectedAuthor) {
    this.setState({ selectedAuthor }, () =>
      console.log(`Option selected:`, this.state.selectedAuthor)
    );
  }

  handleOrder(selectedOrder) {
    this.setState({ selectedOrder }, () =>
      console.log(`Option selected:`, this.state.selectedOrder)
    );
  }

  render() {
    const { selectedAuthor, selectedOrder } = this.state;

    return (
      <Container>
        <div>
          <h2>Autor:</h2>
        </div>
        <div>
          <Select
            value={selectedAuthor}
            onChange={this.handleAuthor.bind(this)}
            options={options}
          />
        </div>
        <div>
          <h2>Ordem :</h2>
        </div>
        <div>
          <Select
            value={selectedOrder}
            onChange={this.handleOrder.bind(this)}
            options={options}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ PostDuck }) => {
  return {
    resGetPosts: PostDuck,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostsListFilter);
