import Salary from '../assets/images/logo512.png';
import { uploadFile } from '../services';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    InboxOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Form, Input, Button, message, Upload, Spin } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const { Dragger } = Upload;

const Dashboard = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const onUploadDoc = (info) => {
        console.log("File", info.file);
        if (info.file.status === 'uploading') {
            console.log("File 2");
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            console.log("File 3");
            setLoading(false);
            return;
            // Get this url from response in real world.
            //   getBase64(info.file.originFileObj, (url) => {
            //     setLoading(false);
            //     setImageUrl(url);
            //   });
        }
    }

    const onFinishForm = () => {
        //     uploadFile(req).then((response) => {
        //         if (response.status === 201) {
        //             message.success('You have successfully signed up.');
        //             history.push('/signin');
        //         }
        //     }).catch((error) => {
        //         console.log('error:', error);
        //         message.error('Oops, error occured while loggin in. Please try again');
        //     });
    }

    const onPressLogout = () => {

    }

    useEffect(() => {
        // setMonthSummary();
    }, []);

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" >
                    <img src={Salary} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="Dashboard" icon={<PieChartOutlined />}>
                        Dashboard
                        <Link to="/dashboard" />
                    </Menu.Item>
                    <Menu.Item key="Logout" icon={<LogoutOutlined />}>
                        <a onClick={onPressLogout}>Logout</a>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinishForm}
                        // onFinishFailed={onFinishFailed}
                        // className="box"
                        >
                            <h1>Upload</h1>
                            <p className="text-muted">Create your account here!</p>
                            <Form.Item
                                name="name"
                                rules={[{
                                    required: true,
                                    message: 'Please input your full name!',
                                    whitespace: true
                                }, {
                                    pattern: new RegExp(/^[a-zA-Z\s]+$/i),
                                    message: "Please enter a valid name"
                                }, {
                                    min: 6,
                                    message: "Name is too short"
                                }, {
                                    max: 100,
                                    message: "Name is too long"
                                }]}
                            >
                                <Input placeholder="Enter your full name" />
                            </Form.Item>
                            <Form.Item
                                name="upload"
                            >
                                <Dragger
                                    onChange={onUploadDoc}
                                    multiple={false}
                                    maxCount={1}
                                    accept={'.zip'}
                                    action={'../../'}
                                    customRequest={dummyRequest}
                                >
                                    <p className="ant-upload-drag-icon">
                                        <Spin tip="Loading..." spinning={loading}>
                                            <InboxOutlined />
                                        </Spin>
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                        band files
                                    </p>
                                </Dragger>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Developed by Mahendra
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Dashboard;