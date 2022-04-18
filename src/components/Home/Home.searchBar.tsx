import React from "react";
import { Input } from "antd";

type Props = {
  setNameFilter: (name: string) => void;
  setPage: (page: number) => void;
};

const SearchBar: React.FC<Props> = ({ setNameFilter, setPage }) => {
  const onSearch = (value: string) => {
    setPage(1);
    setNameFilter(value);
  };

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
