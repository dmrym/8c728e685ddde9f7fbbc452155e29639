import { Input } from 'antd';

export const FilterBar: React.FC<any> = (props) => {
  return (
    <div className="filter">
      <Input aria-label="filter-input" {...props}/>
    </div>
  )
}
