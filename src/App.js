import React, { Component } from "react";
import "./App.css";
import "./dropdown.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import Carousel from "react-bootstrap/Carousel";
class App extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      active: false,
      clicks: 0,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  handleClick() {
    this.setState({ active: true }, () => {
      document.addEventListener("klik", this.className);
    });
  }

  render() {
    return (
      <div className="Cover">
        {/* Header Left */}
        <div className="Left">
          <div className="headerkiri">
            <div className="PembungkusLine">
              <img className="Line" src={require("./image/line.PNG")} />
              <p className="text">Chukwudi</p>
            </div>
            <div className="pembungkus-search">
              <input type="search" placeholder="Search" className="search" />
              <img
                className="searchlogo"
                src={require("./image/searchlogo.jpg")}
              />
            </div>
          </div>
          {/* Body Left*/}
          <div className="ContentLeft">
            <div className="Slider">
              <div className="Image">
                <img src={require("./image/slider.jpg")} />
              </div>
              <div className="PembungkusTextSlider">
                <div className="TextSlider">
                  <p>$0 Delivery for 30 days!</p>
                </div>
                <div className="TextSliderTwo">
                  <p>$0 Delivery free for orders over $10 for 30 days</p>
                </div>
                <div className="LearnMore">
                  <p>Learn More</p>
                </div>
                <div id="Arrow-LearnMore">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            {/* Restaurants */}
            <div className="Restaurants">
              <div className="RestaurantsLeft">
                <p>Restaurant</p>
                <img src={require("./image/iconburger.PNG")} />
              </div>
              <div className="RestaurantsRight">
                <div className="PembungkusDeliveryNow">
                  <div id="IconJam">
                    <BsFillClockFill />
                  </div>
                  <p>Delivery Now</p>
                  <div id="IconArrowDown">
                    <AiOutlineDown />
                  </div>
                </div>
              </div>
            </div>
            {/* Macam-Macam Menu */}
            <Carousel className="Carousel">
              <div className="MacamMenu" onClick={() => this.handleClick()}>
                <Carousel.Item>
                  <div className="MenuAll">
                    <div className="ImageMenu">
                      <img src={require("./image/IconAll.PNG")} />
                      <p>All</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconPizza.PNG")} />
                      <p>Pizza</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconAsian.PNG")} />
                      <p>Asian</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconBurgerr.PNG")} />
                      <p>Burgers</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconBarbeque.PNG")} />
                      <p>Barbeque</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconCake.PNG")} />
                      <p>Dessers</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconNanas.PNG")} />
                      <p>Thai</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="MenuPizza">
                    <div className="ImageMenu">
                      <img src={require("./image/IconSushi.PNG")} />
                      <p>Sushi</p>
                    </div>
                  </div>
                </Carousel.Item>
                <div className="IconArrowRightMenu">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </Carousel>
            {/* Footer Left */}
            <div className="MakananEnak">
              <div className="Makanan1">
                <img src={require("./image/spagetti.jpg")} />
                <div className="Timer">
                  <p>25-30min</p>
                </div>
                <p>Spagetti Italy</p>
                <div className="PembungkusPenilaian">
                  <div className="IconStar">
                    <TiStarOutline />
                    <p>4.7</p>
                    <p id="Keterangan">Deli Balgess $$</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="Makanan2">
                <img src={require("./image/zubasup.jpg")} />
                <div className="Timer">
                  <p>30-35min</p>
                </div>
                <p>Zuba Sup Estimations</p>
                <div className="PembungkusPenilaian">
                  <div className="IconStar">
                    <TiStarOutline />
                    <p>4.7</p>
                    <p id="Keterangan">Cores Criperies $$</p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="Makanan2">
                <img src={require("./image/burger.jpg")} />
                <div className="Timer">
                  <p>10-15min</p>
                </div>
                <p>Burger Jumbo</p>
                <div className="PembungkusPenilaian">
                  <div className="IconStar">
                    <TiStarOutline />
                    <p>4.9</p>
                    <p id="Keterangan">Creperies Burger $$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Left */}

        {/* Header Right */}
        <div className="Right">
          <div className="headerkanan">
            <div className="PembungkusIcon">
              <div className="Icon" onClick={this.showDropdownMenu}>
                <AiOutlineUser />
              </div>
              {this.state.displayMenu ? (
                <ul>
                  <li>
                    <a className="active" href="#Login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#Register">Register</a>
                  </li>
                </ul>
              ) : null}
              <div className="Kotak">
                <p>3</p>
              </div>
            </div>
          </div>
          {/* Body Right */}
          <div className="ContentRight">
            <div className="MyOrder">
              <p>My Order</p>
            </div>
            <div className="PesananUngu">
              <div className="OneUngu">
                <p id="text1">625 St Marks Ave</p>
                <p id="text2">Edit</p>
              </div>
              <div className="TwoUngu">
                <p id="text11">
                  <BsFillClockFill /> &nbsp; 35 Min
                </p>
                <p id="text12">Choose Time</p>
              </div>
            </div>
            <div className="MenuMakanan">
              <div className="MenuMakanan1">
                <div className="PesananImage">
                  <img src={require("./image/burger.jpg")} />
                </div>
                <div className="JumlahPesanan">
                  <p>1</p>
                </div>
                <div className="NamaMakanan">
                  <p>Brench Burger</p>
                </div>
                <div className="HargaMakanan">
                  <p>$ 15.99</p>
                </div>
              </div>
            </div>
            <div className="MenuMakanan">
              <div className="MenuMakanan1">
                <div className="PesananImage">
                  <img src={require("./image/burger.jpg")} />
                </div>
                <div className="JumlahPesanan">
                  <p>1</p>
                </div>
                <div className="NamaMakanan">
                  <p>Brench Burger</p>
                </div>
                <div className="HargaMakanan">
                  <p>$ 15.99</p>
                </div>
              </div>
            </div>
            <div className="MenuMakanan">
              <div className="MenuMakanan1">
                <div className="PesananImage">
                  <img src={require("./image/burger.jpg")} />
                </div>
                <div className="JumlahPesanan">
                  <p>1</p>
                </div>
                <div className="NamaMakanan">
                  <p>Brench Burger</p>
                </div>
                <div className="HargaMakanan">
                  <p>$ 15.99</p>
                </div>
              </div>
            </div>
            <div className="MenuMakanan">
              <div className="MenuMakanan1">
                <div className="PesananImage">
                  <img src={require("./image/burger.jpg")} />
                </div>
                <div className="JumlahPesanan">
                  <p>1</p>
                </div>
                <div className="NamaMakanan">
                  <p>Brench Burger</p>
                </div>
                <div className="HargaMakanan">
                  <p>$ 15.99</p>
                </div>
              </div>
            </div>
            <div className="TotalHarga">
              <p id="Total">Total:</p>
              <p id="Harga">$ 25.505</p>
            </div>
            <div className="Garis" />
            <div className="Persons">
              <p>Persons</p>
              <div className="Gabungan">
                <div className="IncDec">
                  <div className="Increment" onClick={this.IncrementItem}>
                    <p>+</p>
                  </div>
                  <p id="Jumlah">{this.state.clicks}</p>
                  <div className="Decrement" onClick={this.DecreaseItem}>
                    <p>-</p>
                  </div>
                </div>
              </div>
              <div className="Checkout">
                <p>Checkout</p>
                <div id="Arrow-Icon">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
          {/* End Body Right */}
        </div>
        {/* Header Right */}
      </div>
    );
  }
}
export default App;
