import React, { PureComponent } from 'react';
import { Layout, Spin, Drawer } from 'antd';
import { LoadingOutlined, MenuOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import Cookies from 'js-cookie';

import {
  Box,
  Text,
  Flex,
  SiderMenu,
  LayoutHader,
  PatientCardChatProfile,
  PatientCardPipelineProfile,
} from 'components';
import { appSelector, profileSelector, mainSelector } from 'redux/selectors';
import connectHelper from 'helpers/connect.helper';
import { ProfileInfoState } from 'types';
import { mainAction } from 'redux/actions';

import Logo from 'assets/images/logo.svg';
import { DrawerContainer } from './layouts.style';

const { Header, Content, Sider } = Layout;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const connect = connectHelper(
  createStructuredSelector({
    location: appSelector.selectLocationInfo,
    cardStatus: mainSelector.selectPatientCardStatus,
    cardType: mainSelector.selectPatientCardType,
    sideMenu: mainSelector.selectSideMenu,
    profileState: profileSelector.selectProfile,
  })
);

type Props = {
  children: any;
  history?: any;
  promise?: any;
  location?: any;
  profileState?: ProfileInfoState;
  cardStatus?: boolean;
  sideMenu?: boolean;
  cardType?: string;
};

class DashboardLayout extends PureComponent<Props> {
  componentDidMount() {
    const { history } = this.props;
    const refresh = Cookies.get('refresh_token_pb');
    !refresh && history.push('/auth/login');
  }

  handleCollapse = (collapsed: boolean) => {
    const { promise } = this.props;
    promise(mainAction.handleToggleSideMenu(collapsed));
  };

  handleCloseCard = () => {
    const { promise } = this.props;
    Promise.all([
      promise(mainAction.handleTogglePatientCard(false)),
      promise(mainAction.handleSetPatientCard('')),
    ]);
  };
  render() {
    const { children, profileState, cardStatus, cardType, sideMenu } =
      this.props;
    return (
      <Spin
        indicator={antIcon}
        style={{ minHeight: '100vh' }}
        spinning={profileState?.fetching}
      >
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsed={sideMenu} width="224px">
            {sideMenu ? (
              <Flex
                width="39px"
                height="32px"
                background="white"
                margin="29px auto 36px"
              >
                <Text color="primary" weight="700" fontSize="18px">
                  P
                </Text>
              </Flex>
            ) : (
              <Flex
                justifyContent="space-between"
                padding="0 24px"
                margin="29px auto 36px"
              >
                <Box width="119px">
                  <img style={{ width: '100%' }} src={Logo} alt="Logo" />
                </Box>
                <Box
                  onClick={() => this.handleCollapse(!sideMenu)}
                  color="white"
                  className="has-cursor"
                >
                  <MenuOutlined style={{ fontSize: '18px' }} />
                </Box>
              </Flex>
            )}

            <SiderMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <LayoutHader
                onCollapse={this.handleCollapse}
                collapsed={sideMenu}
              />
            </Header>
            <Content>{children}</Content>
          </Layout>
        </Layout>
        <DrawerContainer
          as={Drawer}
          title=""
          placement="right"
          closable={false}
          onClose={() => this.handleCloseCard()}
          visible={cardStatus}
          width="392px"
        >
          {cardType === 'chat' ? (
            <PatientCardChatProfile onClose={() => this.handleCloseCard()} />
          ) : (
            <PatientCardPipelineProfile
              onClose={() => this.handleCloseCard()}
            />
          )}
        </DrawerContainer>
      </Spin>
    );
  }
}

export default connect(DashboardLayout);
