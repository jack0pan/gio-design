import React from 'react';
import { Table } from '@gio-design/components';
import '@gio-design/components/es/components/table/style/index.css';

const dataSource = [
  {
    key: '1',
    name: '这是一个很长的名字',
    age: 32,
    address: '北京市朝阳区望京1号',
    depart: '开发',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '北京市朝阳区望京2号',
    depart: '设计',
  },
  {
    key: '3',
    name: '航航',
    age: 18,
    address: '北京市朝阳区望京3号',
    depart: '开发',
  },
  {
    key: '4',
    name: '屁屁',
    age: 22,
    address: '北京市朝阳区望京4号',
    depart: '设计',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    width: 100,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: '部门',
    dataIndex: 'depart',
    key: 'depart',
  },
];

export default () => (
  <Table title="超出省略" scroll={{ x: 1300 }} dataSource={dataSource} columns={columns} pagination={false} />
);