import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item 
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item 
        </a>
      </Menu.Item>
    </Menu>
  );

export const ProviderDropdown = () => {
    return (
        <>
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontWeight:600, color: "#6F7D97"}}>
            All Providers <DownOutlined style={{marginLeft:15}} />
            </a>
        </Dropdown>
        </>
    )
}
