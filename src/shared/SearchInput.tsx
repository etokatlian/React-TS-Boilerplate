import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const SearchInput = (props: any) => {
  const { placeholder, size } = props;

  return (
    <div>
      <Search
        placeholder={placeholder}
        // tslint:disable-next-line
        onSearch={value => console.log(value)}
        size={size}
      />
    </div>
  );
};

export default SearchInput;
