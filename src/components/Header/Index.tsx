import React from 'react';
import HeaderTitle from './HeaderTitle';
import SearchBar from './SearchBar';
import HeaderMedia from './HeaderMedia';

interface MainHeaderProps {
  onSearch: (query: string) => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onSearch }) => {
  return (
    <>
      <HeaderTitle />
      <SearchBar onSearch={onSearch} />
      <HeaderMedia />
    </>
  );
};

export default MainHeader;
