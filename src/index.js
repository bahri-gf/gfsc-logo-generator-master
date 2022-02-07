import React, { Component } from "react";
import { render } from "react-dom";
import WebFont from "webfontloader";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.state = {
      scale: 1,
      name: "",
      naming_scheme: "GFSC",
      structure: "logo_left",
      colorful: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStructureChange = this.handleStructureChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleChange(event) {
    this.setState({ naming_scheme: event.target.value }, () => { this.drawImage(); });
  }

  handleStructureChange(event) {

    this.setState({ structure: event.target.value }, () => { this.drawImage(); });
  }
  handleColorChange(event) {
    this.setState({ colorful: event.target.value === "Colorful" }, () => {
      this.drawImage();
    });
  }

  componentDidMount() {
    WebFont.load({
      google: {
        families: ["Roboto:400", "Product Sans"]
      },
      fontactive: (familyName, fvd) => {
        this.drawImage()
      }
    });
  }

  render() {
    return (
      <div className="">

        <nav class="flex bg-white flex-wrap items-center justify-between p-4">
            <div class="lg:order-2 w-auto lg:w-3/5 lg:text-center">
                <a class="text-3xl text-black font-semibold font-heading" href="#">
                    Game Factory Logo Generator
                </a>
            </div>
            <div class="block lg:hidden">
                <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>
                            Menu
                        </title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-1/5">

            </div>
            <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-1/5 lg:text-right">

            </div>
        </nav>

        <div class="p-8">

          <div style={hidden}>
            <img
              ref={e => {
                this.dscLogo = e;
              }}
              onLoad={() => {
                this.drawImage();
              }}
              src={this.state.colorful ? "turuncu_125.svg" : "beyaz_125.svg"}
              alt={`DSC Icon`}
            />
          </div>


          <div className="controls" class="inline-block bg-white dark:bg-gray-800">
              <div class="">

                  <ul class="text-lg font-light flex flex-wrap justify-between">

               			<div class="my-8 pr-4">
                      <div class="flex items-center justify-center space-x-3">
                        <button class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded" 
                          onClick={() =>
                            this.setState(
                              {
                                scale:
                                  this.state.scale > 1 ? this.state.scale - 1 : this.state.scale
                              },
                              () => {
                                this.drawImage();
                              }
                            )
                          }>
                          <span>-</span>
                        </button>
                        <span>Scale</span>
                        <button class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                          onClick={() =>
                            this.setState(
                              {
                                scale:
                                  this.state.scale < 5 ? this.state.scale + 1 : this.state.scale
                              },
                              () => {
                                this.drawImage();
                              }
                            )
                          }>
                          <span>+</span>
                        </button>
                      </div>
               			</div>

                    <label class="my-2 text-gray-700">
                        İsim Şeması
                        <select defaultValue={this.state.naming_scheme} ref="naming_scheme" onChange={this.handleChange} class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                            <option disabled={true}>
                                İsim Şeması Seç
                            </option>
                            <option value="GFSC">
                              GFSC
                            </option>
                            <option value="Game Factory Student Clubs">
                              Game Factory Student Clubs
                            </option>
                        </select>
                    </label>

                    <label class="my-2 text-gray-700">
                        Tema
                        <select defaultValue={this.state.coloration} onChange={this.handleColorChange} class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                            <option disabled={true}>
                                Tema Seç
                            </option>
                            <option value="Colorful">
                                Renkli
                            </option>
                            <option value="Knockout">
                                Siyah-Beyaz
                            </option>
                        </select>
                    </label>

                    <label class="my-2 text-gray-700">
                        Üniversite
                        <input 
                        onChange={e => {
                          this.setState(
                            {
                              name: e.target.value
                            },
                            () => {
                              this.drawImage();
                            }
                          );
                        }} 
                        type="text" 
                        id="name-with-label" 
                        class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
                        name="club" 
                        placeholder="Kulüp İsmi"/>
                    </label>

                    <label class="my-9 pl-4">
                        <Button 
                        href={this.state.fullLogoUrl}
                        download={`GFSC ${this.state.name} Logo x${this.state.scale}.png`}
                        type="button" 
                        class="py-2 px-4 flex justify-center items-center bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                            <svg width="20" height="20" class="mr-2" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z">
                                </path>
                            </svg>
                            KAYDET
                        </Button>
                    </label>

                  </ul>

              </div>
          </div>

          <br />

          <canvas
            style={hidden}
            ref={e => {
              this.logoCanvas = e;
            }}
          >
          </canvas>
          
          <div className={this.state.colorful ? "full-logo-container" : "full-logo-container dark"}>
            <img
              className={""}
              ref={e => {
                this.fullLogoImg = e;
              }}
              alt={`GFSC ${this.state.name} Logo`}
              src={this.state.fullLogoUrl}
            />
          </div>

        </div>

      </div>
    );
  }

  drawImage() {
    const name = this.state.name;
    const structure = this.state.structure;
    const naming_scheme = this.state.naming_scheme;
    const colorful = this.state.colorful;
    const scale = this.state.scale;
    const ctx = this.logoCanvas.getContext("2d");
    ctx.font = `72px "Reef"`;

    // measures the minimum width of the text to ensure the canvas is expanded at least by this
    // value.
    const minimumTextWidth = naming_scheme === "GFSC" && structure === "logo_left" ? ctx.measureText(naming_scheme + name).width :
      Math.max(ctx.measureText(name).width, ctx.measureText(naming_scheme).width);

    const canvasWidth = (structure === "logo_center" ? minimumTextWidth : minimumTextWidth + this.dscLogo.width) + 100;

    this.logoCanvas.setAttribute("width", canvasWidth * scale);

    if (naming_scheme === "GFSC" && structure !== "logo_center")
      this.logoCanvas.setAttribute("height", this.dscLogo.height * scale);
    else
      this.logoCanvas.setAttribute("height", (this.dscLogo.height * 2 * scale) + 50);

    ctx.scale(scale, scale);
    ctx.font = `72px "Reef"`;
    ctx.fillStyle = colorful ? "rgb(103, 108, 114)" : "rgb(255, 255, 255)";

    if (naming_scheme === "GFSC") {
      let imageDX = structure === "logo_center" ? (minimumTextWidth / 2 - (this.dscLogo.width / 2)) : 0;
      ctx.drawImage(this.dscLogo, imageDX, 0, this.dscLogo.width, this.dscLogo.height);
    } else {
      let imageDX = structure === "logo_center" ? (minimumTextWidth / 2 - (this.dscLogo.width / 2)) : 20;
      ctx.drawImage(this.dscLogo, imageDX, 70, this.dscLogo.width, this.dscLogo.height);
    }

    //if logo center
    if (structure === "logo_center") {
      ctx.fillText(naming_scheme, 0, this.dscLogo.height + 50);
      ctx.fillText(name, 0, (this.dscLogo.height) * 2);
      // this.ref.naming_scheme
    } else {
      //if GFSC is selected, draw on one line
      if (naming_scheme === "GFSC") {
        ctx.fillText(naming_scheme + " " + name, this.dscLogo.width + 20, 90);
      } else {
        ctx.fillText(naming_scheme, this.dscLogo.width + 40, 110);
        ctx.fillText(name, this.dscLogo.width + 40, 200);
      }
    }


    this.setState({
      fullLogoUrl: this.logoCanvas.toDataURL()
    });
  }

  renderScaleButton() {
    return (
      <div className="scale-button">
        <button
          onClick={() =>
            this.setState(
              {
                scale:
                  this.state.scale > 1 ? this.state.scale - 1 : this.state.scale
              },
              () => {
                this.drawImage();
              }
            )
          }
        >
          -
        </button>
        <span>Boyut</span>
        <button
          onClick={() =>
            this.setState(
              {
                scale:
                  this.state.scale < 5 ? this.state.scale + 1 : this.state.scale
              },
              () => {
                this.drawImage();
              }
            )
          }
        >
          +
        </button>
      </div>
    );
  }
}

const hidden = {
  display: "none"
};

render(<App />, document.getElementById("root"));
