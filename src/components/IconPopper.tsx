import { FC, useState } from 'react';
import { IOption } from '../interfaces/options.interface';
import Dropdown from './ComponentDropdown';

interface IconPopperProps {
  options: IOption[];
  handleClick: () => void;
  icon: string;
}

const IconPopper: FC<IconPopperProps> = ({ handleClick, options, icon }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const togglePopperIsOpen = () => setIsPopperOpen((prev) => !prev);
  return (
    <div className="relative">
      <button
        onClick={togglePopperIsOpen}
        className="flex items-center justify-center w-[38px] h-[38px] rounded-[3px]"
        style={{
          border: '1px solid #4078bc',
          font: "var(--button-buttonmd, 500 14px 'Montserrat', sans-serif)",
        }}
      >
        <img src={icon} alt="icon" />
      </button>
      <Dropdown options={options} dropDownActive={isPopperOpen} />
    </div>
  );
};

export default IconPopper;
