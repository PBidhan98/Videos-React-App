import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = () => {

  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              //callback handler to the onChange prop will be called anytime input changes
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
