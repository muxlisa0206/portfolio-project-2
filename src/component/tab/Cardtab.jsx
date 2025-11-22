import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import onep from '../../assets/onep.jpg'
import twop from '../../assets/twop.jpg'
import threep from '../../assets/threep.jpg'
import fourp from '../../assets/fourp.jpg'
import fivep from '../../assets/fivep.jpg'
import './tab.css'

const Cardtab = () => (
  <Tabs>
    <TabList>
      <div>
      <Tab>Ламинатные тубы</Tab>
      <Tab>Экструзионные тубы</Tab>
      <Tab>Другая упаковка</Tab>
      </div>
    </TabList>

    <TabPanel>
        <div className='flex flex-col items-center gap-[10px] sm:grid grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={fivep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={fourp} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={onep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={threep} alt="" />
        </div>
    </TabPanel>
    <TabPanel>
        <div className='flex flex-col items-center gap-[10px] sm:grid grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={onep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={twop} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={threep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={fourp} alt="" />
        </div>
    </TabPanel>
    <TabPanel>
        <div className='flex flex-col items-center gap-[10px] sm:grid grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={threep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={fivep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={onep} alt="" />
          <img className='max-w-[320px] sm:max-w-[290px] rounded-[10px] h-[300px] w-full' src={fourp} alt="" />

        </div>
    </TabPanel>
  </Tabs>
);

export default Cardtab;