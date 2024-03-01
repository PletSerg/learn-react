import { Input } from 'antd'
const { Search } = Input;
const onSearch = (value, _e, info);

export default function SearchInput() {

  
  return (
    <div>
      <Search
        placeholder="введите название фильма"
        allowClear
        onSearch={onSearch}
        style={{
          width: 300,
        }}
      />
    </div>
  );
}