const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const capitalize = () => {
  return drink.name.charAt(0);
};

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}>Welcome to gitPub</h1>
        <ul>
          {this.props.drinks.map((drink) => {
            console.log(drink);
            return (
              <li>
                {drink.name.charAt(0).toUpperCase() + drink.name.slice(1)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
