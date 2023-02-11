import { useWindowEvent } from '../hooks/useWindowEvent';
import ComponentDropdown from './ComponentDropdown';

interface HeaderProps {
  fontSize?: string;
  title?: string;
  dropDownActive: boolean;
  setDropDown?: any;
}

const options = [
  { title: 'Edit', handleClick: () => {} },
  { title: 'Remove', handleClick: () => {} },
  { title: 'Export CSV', handleClick: () => {} },
  { title: 'Export PDF', handleClick: () => {} },
  { title: 'Export PNG', handleClick: () => {} },
];

export default function ComponentHeader({
  fontSize,
  title,
  dropDownActive,
  setDropDown,
}: HeaderProps) {
  useWindowEvent(() => {
    if (dropDownActive) {
      setDropDown(false);
    }
  }, [dropDownActive]);

  function toggleDropdown() {
    setTimeout(() => {
      setDropDown(!dropDownActive);
    }, 50);
  }

  return (
    <div
      className={`${
        fontSize ? 'mt-0 mb-2' : 'mt-4'
      } flex justify-between  px-6 pr-2`}
    >
      <h3
        className="m-0"
        style={{
          font: "700 20px/54px 'Montserrat', sans-serif",
          fontSize: fontSize ? fontSize : '20px',
          color: '#464a53',
        }}
      >
        {title}
      </h3>
      <span
        onClick={toggleDropdown}
        className={`${
          dropDownActive ? 'bg-white' : ''
        } dropdown flex flex-col items-center justify-between mt-2 py-[7px] h-[32px] w-[32px] relative transition-all duration-300 cursor-pointer`}
      >
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-[3px] w-[3px] rounded-[100%] bg-primary"
          />
        ))}
        <ComponentDropdown options={options} dropDownActive={dropDownActive} />
      </span>
    </div>
  );
}
