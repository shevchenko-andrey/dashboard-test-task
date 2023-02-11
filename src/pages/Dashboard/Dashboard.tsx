import { FC, useState } from 'react';
import AddWidget from '../../components/AddWidget';
import CalendarPopUp from '../../components/CalendarPopUp';
import DashboardGrid from '../../components/DashboardGrid';
import DefsSvgComponents from '../../components/DefsSvgComponent';
import Header from '../../components/Header';
import KindsOfEvents from '../../components/KindsOfEvents';
import PieWidget from '../../components/PieWidget';
import SimpleChart from '../../components/SimpleChart';
import SimpleWordCloud from '../../components/SimpleWordCloud';
import Statistics from '../../components/Statistics';
import XBarChart from '../../components/XBarChart';
import YBarChart from '../../components/YBarChart';
import ChartArea from '../../components/ChartArea';
import { IDashboardSettings } from '../../interfaces/setting.interface';
import DonutWidget from '../../widgets/DonutWidget';
import LazyLoad from 'react-lazy-load';

const defaultWidgets = [
  { component: <Statistics />, height: 160 },
  { component: <KindsOfEvents />, height: 410 },
  {
    component: (
      <ChartArea
        title={'Conversation Length'}
        leftLabel={'Conversions'}
        bottomLabel={'Events'}
        width={'100%'}
        height={'383px'}
      />
    ),
    height: 410,
  },
  { component: <SimpleWordCloud />, height: 410 },
  {
    component: (
      <div className="flex justify-between w-full">
        <ChartArea
          fontSize="15px"
          title={'Bot Most Active Hours'}
          leftLabel={'Users'}
          width={'66%'}
          height={'255px'}
        />
        <YBarChart width={'32%'} />
      </div>
    ),
    height: 280,
  },
  {
    component: <DonutWidget />,
    height: 410,
  },
  {
    component: (
      <div className="flex justify-between w-full">
        <XBarChart width={'66%'} />
        <PieWidget />
      </div>
    ),
    height: 420,
  },
  {
    component: <AddWidget />,
    height: '100%',
  },
  {
    component: <SimpleChart />,
    height: '100%',
  },
];

const Dashboard: FC = () => {
  const [widgets, setWidgets] = useState(defaultWidgets);
  const [draggable, setDraggable] = useState(false);

  const [selectedRange, setSelectedRange] = useState<string>(''),
    [calendar, setCalendar] = useState<boolean>(false);

  const handleChangeIsDraggable = () => setDraggable((prev) => !prev);

  return (
    <>
      <Header
        setCalendar={setCalendar}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        setIsDraggable={handleChangeIsDraggable}
      />
      <DashboardGrid draggable={draggable}>
        {widgets.map(({ component, height }, index) => (
          <div className="w-[450px] m-2 h-80 bg-orange-800"></div>
          //   <LazyLoad
          //     key={index}
          //     className="w-full"
          //     height={height}
          //     threshold={0.2}
          //     elementType=""
          //   >
          //     {component}
          //   </LazyLoad>
        ))}
      </DashboardGrid>

      <CalendarPopUp
        calendar={calendar}
        setCalendar={setCalendar}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />
      <DefsSvgComponents />
    </>
  );
};

export default Dashboard;
function useReducer(
  arg0: (
    prev: IDashboardSettings,
    next: Partial<IDashboardSettings>
  ) => IDashboardSettings,
  arg1: { isDraggable: boolean }
): [any, any] {
  throw new Error('Function not implemented.');
}
