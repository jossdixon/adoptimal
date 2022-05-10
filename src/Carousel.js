import { Component } from 'react';

class Carousel extends Component {

  state = {
    active: 0,
  };

  static defaultProps = {
    images: [
      "https://pets-images.dev-apis.com/pets/none.jpg"
    ],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumb"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
