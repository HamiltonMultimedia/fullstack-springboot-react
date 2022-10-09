import {Button, Radio, Layout, Menu, Breadcrumb, Table, Empty, Spin} from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import logo from './logo.svg';
import './App.css';

import { getAllStudents } from "./client";
import {useEffect, useState} from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
];

function App() {
    const [students, setStudents] = useState([]);
    const [collapsed, setCollapsed] = useState(false)
    const [fetching, setFetching] = useState(true);

    const fetchStudents = () =>
        getAllStudents()
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setStudents(data);
            setFetching(false);
        })

    useEffect(() => {
        console.log("component is mounted");
        fetchStudents();
    }, []);
    // if (students.length <= 0) {
    //     return "There is no student data."
    // }

    const renderStudents = () => {
        if (fetching) {
            return <Spin indicator={antIcon}/>
        }
        if (students.length <= 0) {
            return <Empty/>;
        }
        return <Table
            dataSource={students}
            columns={columns}
            bordered
            title={() => 'Students'}
            pagination={{ pageSize: 50 }}
            scroll={{y: 240}}
        />;
    }

    // return students.map((student, index) => {
    //     return <p key={index}>{student.id} {student.name}</p>;
    // })

  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed}
                 onCollapse={setCollapsed}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                      Option 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                      Option 2
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                      <Menu.Item key="3">Tom</Menu.Item>
                      <Menu.Item key="4">Bill</Menu.Item>
                      <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                      <Menu.Item key="6">Team 1</Menu.Item>
                      <Menu.Item key="8">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9" icon={<FileOutlined />}>
                      Files
                  </Menu.Item>
              </Menu>
          </Sider>
          <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>
                  {/*<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>*/}
                  {/*    Bill is a cat.*/}
                  {/*</div>*/}
                  <div className="App">
                      {/*<Button type="primary">Hello</Button>*/}
                      {/*<Radio.Group value='large'>*/}
                      {/*    <Radio.Button value="large">Large</Radio.Button>*/}
                      {/*    <Radio.Button value="default">Default</Radio.Button>*/}
                      {/*    <Radio.Button value="small">Small</Radio.Button>*/}
                      {/*</Radio.Group>*/}
                      <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          {/*<p>*/}
                          {/*    Edit <code>src/App.js</code> and save to reload.*/}
                          {/*</p>*/}
                          {renderStudents()}
                          <Button type="primary">Hello</Button>
                          <Radio.Group value='large'>
                              <Radio.Button value="large">Large</Radio.Button>
                              <Radio.Button value="default">Default</Radio.Button>
                              <Radio.Button value="small">Small</Radio.Button>
                          </Radio.Group>
                          <a
                              className="App-link"
                              href="https://reactjs.org"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Hello React
                          </a>
                      </header>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Hamilton Design ©2022 Created by Terence PJ Hamilton</Footer>
          </Layout>
      </Layout>
  );
}

export default App;
