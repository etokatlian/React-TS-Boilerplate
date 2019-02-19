import React from 'react';

import SearchInput from '../shared/SearchInput';
import Button from '../shared/Button';

class BrowseInventory extends React.Component {
  public render() {
    return (
      <div className="browse-inventory">
        <div className="browse-inventory__search-input">
          <SearchInput placeholder="Search by Make, Model..." size="large" />
        </div>
        <div className="browse-inventory__search-button">
          <Button size="large" text="Go" />
        </div>
      </div>
    );
  }
}

export default BrowseInventory;
