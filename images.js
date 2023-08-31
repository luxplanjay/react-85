// "123123123123123/cat"
// "qweqweqwe123123123/cat"
// "wdgwqg334535345425/cat"

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // HTTP REQUEST
      axios.get(`/search?${this.state.query}}`).then(data => {
        this.setState({ images: data });
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
        {this.state.images.length > 0 && <div>Gallery</div>}
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
