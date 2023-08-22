import React from 'react';
import { Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MenuList } from 'menu-list';
import { profileSelector } from 'redux/selectors';

const { SubMenu } = Menu;

const SiderMenu = () => {
  const history = useHistory();
  const location = useLocation();

  const urlItems: string[] = location.pathname.split('/');
  const handleNavigate = (path: string) => history.push(path);
  const { data, fetching } = useSelector(profileSelector.selectProfile);

  const handleLimitMenus = (permissionId: number): boolean => {
    if (permissionId === 0) return true;
    return !!data?.permissions.find((id) => permissionId === id);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={urlItems}
      defaultOpenKeys={urlItems}
      mode="inline"
    >
      {MenuList.filter((item) => handleLimitMenus(item.permission)).map(
        (item) =>
          item.isParent ? (
            <SubMenu key={item.slug} icon={item.icon} title={item.title}>
              {item?.children?.map((childItem: any) => (
                <Menu.Item
                  onClick={() => handleNavigate(childItem?.path)}
                  key={childItem?.slug}
                >
                  {childItem?.title}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              onClick={() => handleNavigate(item?.path)}
              key={item.slug}
              icon={item.icon}
            >
              {item.title}
            </Menu.Item>
          )
      )}
    </Menu>
  );
};

export default SiderMenu;
