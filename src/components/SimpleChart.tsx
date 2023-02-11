import { useState } from 'react';
import ComponentHeader from './ComponentHeader';

const items = [
  { title: 'Business' },
  { title: 'Travel' },
  { title: 'Design' },
  { title: 'Finance' },
  { title: 'Material' },
];

export default function SimpleChart() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-[12px] shrink-0 mt-4 w-[1155px] relative"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        title={'Simple Chart'}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="mt-2 w-full h-full flex flex-col">
        <div className="flex justify-center">
          <div className="flex justify-center items-center rounded-[100%] w-60 h-60 bg-slate-200">
            <p className="text-5xl font-bold">69%</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <ul className="w-full">
            {items.map(({ title }) => {
              return (
                <li className="flex justify-between max-w-lg mx-auto mb-2 ">
                  <div className="flex flex-start items-center">
                    <div className="p-2 rounded-md bg-fuchsia-700"></div>
                    <p className="ml-2">{title}</p>
                  </div>
                  <div className="">50</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
