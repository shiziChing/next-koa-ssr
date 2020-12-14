import App from 'next/app';
import 'antd/dist/antd.css';

class myApp extends App {
    static async getInitialProps ({ Component }){
        let pageProps={};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps();
        }
        return {
            pageProps
        }
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}
export default myApp;