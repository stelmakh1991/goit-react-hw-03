
import s from "./SearchBox.module.css";

const SearchBox = ({ onChangeFilter, filter }) => {
  return (
    <label className={s.SearchBox}>
      <span className={s.SearchTitle}>Find contacts by name</span>
      <input
        className={s.SearchInput}
        type="name"
        name="findUser"
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
};

export default SearchBox;