import React from 'react';
import { Button, Dropdown, List } from '@gio-design/components';

const options = [
  { value: 'a', label: '功能名称', description: '这里是辅助文字' },
  { value: 'b', label: '功能名称', description: '这里是辅助文字', tooltip: 'test', disabled: true },
  { value: 'c', label: '功能名称', description: '这里是辅助文字' },
  { value: 'd', label: '功能名称', description: '这里是辅助文字', disabled: true },
];

export default () => (
  <Dropdown
    overlay={
      <List
        dataSource={options}
        width={144}
        height={225}
        rowHeight={56}
        labelRenderer={(option: any, isGroup: boolean) => {
          if (isGroup) {
            return option.name;
          }
          return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: '7px 0' }}>
              <span style={{ fontSize: '14px', lineHeight: '20px' }}>{option.label}</span>
              <span style={{ fontSize: '14px', lineHeight: '20px' }}>{option.description}</span>
            </div>
          );
        }}
      />
    }
  >
    <Button type="secondary">更多操作</Button>
  </Dropdown>
);
