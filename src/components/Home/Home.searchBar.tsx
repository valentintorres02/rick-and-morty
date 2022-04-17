import React from "react";
import { Input } from "antd";

type Props = {
  setNameFilter: (name: string) => void;
};

const SearchBar: React.FC<Props> = ({ setNameFilter }) => {
  const onSearch = (value: string) => setNameFilter(value);

  const { Search } = Input;
  return (
    <div className="flex justify-center my-4">
      <Search
        placeholder="Search..."
        onSearch={onSearch}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchBar;
