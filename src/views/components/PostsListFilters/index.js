import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";
import Select from "react-select";
const defaultAuthors = [{ value: null, label: "Todos" }];

class PostsListFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedAuthor: defaultAuthors[0],
      selectedOrder: { value: 1, label: "Crescente" },
      orders: [
        { value: -1, label: "Crescente" },
        { value: 1, label: "Decrescente" },
      ],
    };
  }

  handleAuthor(selectedAuthor) {
    this.props.getPosts(selectedAuthor.value, this.state.selectedOrder.value);
    this.setState({ selectedAuthor }, () =>
      console.log(`Option selected:`, this.state.selectedAuthor)
    );
  }

  handleOrder(selectedOrder) {
    this.props.getPosts(this.state.selectedAuthor.value, selectedOrder.value);
    this.setState({ selectedOrder }, () =>
      console.log(`Option selected:`, this.state.selectedOrder)
    );
  }

  getAuthorsForSelect() {
    const { authors } = this.props.resGetPosts;
    const authorsFormatted = authors.map(({ id, name }) => ({
      value: id,
      label: name,
    }));
    return [...defaultAuthors, ...authorsFormatted];
  }

  render() {
    const { selectedAuthor, selectedOrder, orders } = this.state;
    const authors = this.getAuthorsForSelect();

    return (
      <Container>
        <div>
          <h2>Autor:</h2>
        </div>
        <div>
          <Select
            value={selectedAuthor}
            onChange={this.handleAuthor.bind(this)}
            options={authors}
          />
        </div>
        <div>
          <h2>Ordem :</h2>
        </div>
        <div>
          <Select
            value={selectedOrder}
            onChange={this.handleOrder.bind(this)}
            options={orders}
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
