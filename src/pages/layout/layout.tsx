import React from 'react';
import { Layout, Button } from 'antd';
import { useParams } from 'react-router';
import styles from './layout.less';

const {
    Header, Sider, Content
} = Layout;

const LayoutComponent: React.FC = () => {
    const parmas = useParams();
    console.log(parmas, parmas);

    return (
        <>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content className={styles.content}>
                        内容
                        <Button type="primary">
                            antd 按钮
                        </Button>

                        <div className={styles.theme}>测试主题</div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutComponent;
