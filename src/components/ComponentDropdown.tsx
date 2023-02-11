import { IOption } from '../interfaces/options.interface';

interface DropdownProps {
  dropDownActive?: boolean;
  setDropDownActive?: boolean;
  options: IOption[];
}

function Dropdown({ dropDownActive, options }: DropdownProps) {
  return (
    <div
      className={`${
        dropDownActive
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      }  w-[213px] absolute right-0 top-8 z-10 transition-all duration-300 `}
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {options.map(({ handleClick, title }, index) => (
        <div
          key={index}
          className={`dropdownElem bg-white flex items-center text-_1-themecolor-body-text text-left relative h-[40px] pl-5`}
        >
          <div
            style={{
              font: "400 14px/21px 'Montserrat', sans-serif",
            }}
          >
            <button onClick={handleClick}>{title}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Dropdown;
