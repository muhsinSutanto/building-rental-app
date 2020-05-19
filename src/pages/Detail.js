import React, { Component } from "react";
import { getBuilding } from "../utils/fetch";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Spinner from "../components/elements/Spinner";
import IndoMap from "../components/building/IndoMap";
import Arrow from "../components/elements/Arrow";
import styled from "styled-components";

class Detail extends Component {
  state = {
    building: null,
  };

  async componentDidMount() {
    const data = await getBuilding(this.props.match.params.id);
    await this.setState({
      building: data.data,
    });
  }

  render() {
    if (!this.state.building) {
      return <Spinner />;
    } else {
      const {
        images,
        name,
        description,
        facilities,
        address,
        type,
      } = this.state.building;

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: "center",
        centerMode: true,
      };

      return (
        <div className="detail-container">
          <div className="image-container">
            <img src={images.primary} alt={name} />
          </div>
          <div className="container">
            <h5>
              {" "}
              <Link to={"/"}>
                {" "}
                <span>home </span>
              </Link>{" "}
              / {type}
            </h5>
            <h2>{name}</h2>
            <div className="info-container">
              <div className="info-detail-container">
                <p>{description}</p>
                <h3>Facilities</h3>
                <div className="facility-list">
                  {facilities.map((item, idx) => (
                    <ul key={idx}>
                      <li key={idx}>{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="address-container">
                <h3>Location</h3>
                <p>{address.city}</p>
                <div
                  style={{ height: "500px" }}
                  className="map-detail-container"
                >
                  <IndoMap buildings={[this.state.building]} />
                </div>
              </div>
            </div>
            <div className="carousel-container">
              <Slider
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
                {...settings}
              >
                {images.others.map((item, idx) => (
                  <ImageBox>
                    <img key={idx} src={item}  alt={`image${idx}`}/>
                  </ImageBox>
                ))}
                {/* manual loop to get more than 3 data coz data from api only three */}
                {images.others.map((item, idx) => (
                  <ImageBox>
                    <img key={idx} src={item} alt={`image${idx}`} />
                  </ImageBox>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
    }
  }
}

//using styled component to rewrite css of react-slick
const ImageBox = styled.div`
  img {
    width: 100%;
    height: 200px;
  }
`;

export default Detail;
