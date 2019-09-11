import React from "react";
import List from "./PokeList";

class App extends React.Component {
  render() {
    const { listPokemons } = this.props;
    return (
      <div>
        <header className="header">
          <h1 className="title">Mi lista de Pokemon</h1>
        </header>
        <main className="main">
          <List listPokemons={listPokemons} />
        </main>
      </div>
    );
  }
}

export default App;
