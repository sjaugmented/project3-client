import React from 'react';
import 'antd/dist/antd.css';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        EDM
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Rap
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Rock
      </a>
    </Menu.Item>
    
  </Menu>
);

const PlaylistDropdown = () => {
  return (
    <div className='dropdownDiv'>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Playlists <DownOutlined />
        </a>
    </Dropdown>
    </div>
  );
}

export default PlaylistDropdown;