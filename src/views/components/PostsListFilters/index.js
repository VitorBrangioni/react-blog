import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PostsActions } from "../../../store/ducks/postDuck";
import Select from "react-select";
import AuthorController from "../../../controllers/AuthorController";

class PostsListFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedAuthor: { value: null, label: "Todos" },
      selectedOrder: { value: 1, label: "Crescente" },
      authors: [{ value: null, label: "Todos" }],
      orders: [
        { value: -1, label: "Crescente" },
        { value: 1, label: "Decrescente" },
      ],
    };
  }

  componentDidMount() {
    this.getAuthors();
  }

  getAuthors() {
    AuthorController.get().then((authors) => {
      const authorsFormatted = authors.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
      this.setState({ authors: [...this.state.authors, ...authorsFormatted] });
    });
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

  render() {
    const { selectedAuthor, selectedOrder, authors, orders } = this.state;
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
