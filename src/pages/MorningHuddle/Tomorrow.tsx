import { Text } from 'components';
import { Subtitle, Boxwrapper, TableWrapper } from './MorningHuddle.styles';
import { Tabs, Empty } from 'antd';
import MorningHuddleTable from 'components/MorningHuddle/MorningHuddleTable';

const { TabPane } = Tabs;

function callback(key:any) {
    console.log(key);
  }

const Tomorrow = () => {
    return (
        <>
          <Text
            color="black"
            weight="bold"
            fontSize="18px"
            margin="0 0 26px 0"
            letterSpacing="0.02em"
        >
            Morning Huddle
        </Text>  
        <Subtitle>
            You have 19 patients coming in. Scheduled production is $5,275, which is <span style={{color:'#62C948'}}>$5,275 above goal.</span>
        </Subtitle>
        <Boxwrapper>
            <div className="unsched_box" style={{color:"#29C3A5"}}>
                <h4>Unsched. family members</h4>
                <div className="big_text">240</div>
            </div>
            <div className="unsched_box">
                <h4>Unsched. Tx</h4>
                <div className="big_text" style={{color:"#9570E6"}}>$58, 183</div>
                <h5>9 Patients</h5>
            </div>
            <div className="unsched_box">
                <h4>Past Due AR</h4>
                <div className="big_text" style={{color:"#F86C76"}}>$703</div>
                <h5>2 Patients</h5>
            </div>
            <div className="unsched_box">
                <h4>Unsched. Hygiene</h4>
                <div className="big_text" style={{color:"#FF9458"}}>14</div>
            </div>
        </Boxwrapper>
        <TableWrapper>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Schedule By Provider" key="1">    
                    <MorningHuddleTable />
                </TabPane>
                <TabPane tab="Schedule By Operatory" key="2">
                    <Empty style={{padding:20}} />
                </TabPane>
            </Tabs>
        </TableWrapper>
        </>
    )
}

export default Tomorrow
