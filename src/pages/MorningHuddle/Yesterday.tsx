import { Flex, Text,Title4, Title5, Box, ReportsPie, Grid } from 'components';
import { Subtitle, MathBox, Matric } from './MorningHuddle.styles';
import { Empty, Progress } from 'antd';
import { EditOutlined, CaretDownOutlined } from '@ant-design/icons';
import numeral from 'numeral';
import Piechart from 'assets/images/PieGraph.svg';
import HorizontalGraph from 'assets/images/horizontalGraph.svg';
import VerticalGraph from 'assets/images/verticalGraph.svg';
import RescheduleGraph from 'assets/images/RescheduleGraph.svg'
type Props = {
    color?: string;
    value?: number;
    type?: string;
  };
const Yesterday = () => {
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
            Yesterday you saw 0 patients totaling $0 in production. Every patient has a future appointment, great job!
        </Subtitle>
        <MathBox>
            <Title5 marginBottom="15px">Month To Date Production Forecast</Title5>
            <Flex justifyContent="space-between" flexWrap="wrap">
                <div className="equation">
                    <Flex justifyContent="space-between">
                        <div className="w30">
                            <Title4>$125,175</Title4>
                            <span>Completed</span>
                        </div>
                        <div className="w5">
                            <Title4>+</Title4>
                        </div>
                        <div className="w30">
                            <Title4>$0</Title4>
                            <span>Scheduled</span>
                        </div>
                        <div className="w5">
                            <Title4>=</Title4>
                        </div>
                        <div className="w30">
                            <Title4>$125,175</Title4>
                            <span>Forecasted</span>
                        </div>
                    </Flex>
                </div>
                <div className="progress_forcast">
                    <Progress percent={80} />
                    <div className="tip"></div>
                </div>
            </Flex>
        </MathBox>
        
        <Matric>
            <button className="edit_matrics_btn"><EditOutlined /> Edit Metrics</button>
            <div className="grid_box_container">
                <div className="white_box">
                    <div className="box_content">
                        <h3>Production</h3>
                        <span className="box_subtitle">Gross</span>
                        <h1>$0</h1>
                        <img src={HorizontalGraph} alt="HorizontalGraph" />
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                    <h3>Collections</h3>
                    <span></span>
                        <Flex paddingTop="30px">
                            <Box position="relative">
                                <Progress
                                    type="dashboard"
                                    width={200}
                                    percent={5}
                                    gapDegree={30}
                                    strokeWidth={15}
                                    showInfo={false}
                                    strokeColor={'#1890ff'}
                                />
                                <Box width="62px" position="absolute" top="70px" right="70px" align="center">
                                    <Text fontSize="14px" align="center">
                                        <h1>$0</h1>
                                        <Flex className="red_text"><CaretDownOutlined /> <span>$3,996</span></Flex>
                                    </Text>
                                </Box>                                
                            </Box>
                        </Flex>
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                        <h3>Hygiene Reappointment</h3>
                        <span className="box_subtitle"></span>
                        <h1>0%</h1>
                        <img src={VerticalGraph} alt="VerticalGraph" />
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                        <h3>Dentist's Production per Visit</h3>
                        <span className="box_subtitle">Gross</span>
                        <Flex paddingTop="30px">
                            <Box position="relative">
                                <Progress
                                    type="dashboard"
                                    width={200}
                                    percent={50}
                                    gapDegree={30}
                                    strokeWidth={15}
                                    showInfo={false}
                                    strokeColor={'#1890ff'}
                                />
                                <Box width="62px" position="absolute" top="90px" right="70px" align="center">
                                    <Text fontSize="14px" align="center">
                                        <h1>$0</h1>
                                        {/* <Flex className="red_text"><CaretDownOutlined /> <span>$3,996</span></Flex> */}
                                    </Text>
                                </Box>                                
                            </Box>
                        </Flex>
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                        <h3>Hygiene Reappointment %</h3>
                        <span className="box_subtitle"></span>
                        <h1>100%</h1>
                        <img src={VerticalGraph} alt="VerticalGraph" />
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                        <h3>Unscheduled Pts Rescheduled</h3>
                        <span className="box_subtitle"></span>
                        <h1>1</h1>
                        <img src={RescheduleGraph} alt="RescheduleGraph" />
                    </div>
                </div>
                <div className="white_box">
                    <div className="box_content">
                        <h3>Unscheduled Active Patients</h3>
                        <span className="box_subtitle"></span>
                        <h1>260</h1>
                        <img src={Piechart} alt="Piechart" />
                    </div>
                </div>

            </div>
        </Matric>
        </>
    )
}

export default Yesterday
