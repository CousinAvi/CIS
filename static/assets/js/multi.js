import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      objectArray: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
        { key: "Option 6", cat: "Group 2" },
        { key: "Option 7", cat: "Group 2" }
      ],
      selectedValues: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" }
      ]
    };
    this.style = {
      chips: {
        background: "red"
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px"
      },
      multiselectContainer: {
        color: "red"
      }
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
  }

  render() {
    const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>
            <img
              src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"
              width="100px"
            />{" "}
            React Multiselect Dropdown
          </h1>
          <a className="sourceLink" href="https://codesandbox.io/s/10xn41w767">
            Demo Source Code
          </a>
          <small>@uthor: SRIGAR S</small>
          <small className="displayBlock">
            <a href="https://github.com/srigar/multiselect-react-dropdown">
              Back to GitHub
            </a>
          </small>
        </div>
        <div className="col-12 d-md-flex">
          <div className="col-12 col-md-4 mt20 contents">
            <h2 className="mb20">Contents</h2>
            <a href="https://codesandbox.io/s/10xn41w767">
              1. Demo Source Code
            </a>
            <a href="#flat">2. Flat Array</a>
            <a href="#objects">3. Array of Objects</a>
            <a href="#pre">4. Preselected Values</a>
            <a href="#disable">5. Disable Preselected Values</a>
            <a href="#checkbox">6. Checkbox</a>
            <a href="#group">7. Grouping Objects</a>
            <a href="#limit">8. Selection Limit</a>
            <a href="#single">9. Single Select</a>
            <a href="#placeholder">10. Custom Placeholder</a>
            <a href="#css">11. CSS Customization</a>
            <a href="#icons">12. Close Icons</a>
          </div>
          <div className="examples col-12 col-md-5">
            <h4 className="mt20" id="flat">
              1. Multiselect with flat array
            </h4>
            <Multiselect options={plainArray} isObject={false} />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;plainArray}
              <br />
              &nbsp;&nbsp;isObject=&#123;false}
              <br />
              />
            </code>

            <h4 id="objects" className="mt40">
              2. Multiselect with array of objects
            </h4>
            <Multiselect options={objectArray} displayValue="key" />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              />
            </code>
            <button onClick={this.addItem}>Add value</button>
            <h4 id="pre" className="mt40">
              3. Multiselect with preselect values
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              selectedValues={selectedValues}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              &nbsp;&nbsp;selectedValues=&#123;selectedValues}
              <br />
              />
            </code>

            <h4 id="disable" className="mt40">
              4. Disable preselected values
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              disablePreSelectedValues={true}
              selectedValues={selectedValues}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              &nbsp;&nbsp;selectedValues=&#123;selectedValues}
              <br />
              />
            </code>

            <h4 id="checkbox" className="mt40">
              5. Multiselect with checkbox
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              showCheckbox={true}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              &nbsp;&nbsp;showCheckbox=&#123;true}
              <br />
              />
            </code>

            <h4 id="group" className="mt40">
              6. Multiselect with grouping
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              groupBy="cat"
              showCheckbox={true}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;groupBy="cat"
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              &nbsp;&nbsp;showCheckbox=&#123;true}
              <br />
              />
            </code>

            <h4 id="limit" className="mt40">
              7. Multiselect with selection limit <small>Ex:2</small>
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              selectionLimit="2"
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;selectionLimit="2"
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              />
            </code>

            <h4 id="single" className="mt40">
              8. Single Select - Normal Dropdown
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              singleSelect
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;singleSelect
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              />
            </code>

            <h4 id="placeholder" className="mt40">
              9. Custom placeholder
            </h4>
            <Multiselect
              placeholder="Custom Placeholder"
              options={objectArray}
              displayValue="key"
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;placeholder="Custom Placeholder"
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              />
            </code>

            <h4 className="mt40" id="css">
              10. CSS Customization
            </h4>
            <Multiselect
              options={objectArray}
              displayValue="key"
              style={this.style}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;placeholder="Select Any"
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              &nbsp;&nbsp;style=&#123; chips: &#123; background: "red" },
              searchBox: &#123; border: "none", "border-bottom": "1px solid
              blue", "border-radius": "0px" } }
              <br />
              />
            </code>

            <h4 id="icons" className="mt40">
              11. Close Icons{" "}
              <small className="otheroptions">
                <a href="https://github.com/srigar/multiselect-react-dropdown#6-close-icons">
                  Click to check Close Icon options
                </a>
              </small>
            </h4>
            <Multiselect
              options={objectArray}
              closeIcon="close"
              displayValue="key"
              selectedValues={selectedValues}
            />
            <code className="displayBlock mt10">
              &lt;Multiselect
              <br />
              &nbsp;&nbsp;options=&#123;objectArray}
              <br />
              &nbsp;&nbsp;closeIcon="close"
              <br />
              &nbsp;&nbsp;displayValue="key"
              <br />
              />
            </code>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
