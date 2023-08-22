import { Tabs } from 'antd';
import { TabsWrapper, TabpenWrapper } from './MorningHuddle.styles';
import MotivationalMinute from './MotivationalMinute';
import Today from './Today';
import Tomorrow from './Tomorrow';
import Yesterday from './Yesterday';

const { TabPane } = Tabs;

function callback(key:any) {
    console.log(key);
  }

const MorningHuddle = () => {
    return (
        <>
        <TabsWrapper>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Yesterday" key="1">
               <TabpenWrapper> <Yesterday /> </TabpenWrapper>
            </TabPane>
            <TabPane tab="Today" key="2">
                <TabpenWrapper><Today /></TabpenWrapper>
            </TabPane>
            <TabPane tab="Tomorrow" key="3">
                <TabpenWrapper> <Tomorrow /> </TabpenWrapper>
            </TabPane>
            <TabPane tab="Motivational minute" key="4">
                <TabpenWrapper> <MotivationalMinute /> </TabpenWrapper>
            </TabPane>
        </Tabs>  
        </TabsWrapper>
        </>
    )
}

export default MorningHuddle
