import Document, {Html, Head, Main, NextScript} from 'next/document';

function MYLog(App){
    return (props) => {
        console.log('props------>', props);
        return <App {...props} />
    }
}
class myDocumnet extends Document{
    static async getInitialProps(ctx) {
        const oldRenderPage = ctx.renderPage;
        ctx.renderPage = () => oldRenderPage({
            enhanceApp: App => MYLog(App),
            enhanceComponent: Component => Component,
        })
        const props = await Document.getInitialProps(ctx);
        return {
            ...props
        }
    }
    render (){
        return (
            <Html>
                {/* <title>my app</title> */}
                <Head>
                    
                    {/* <style>{`.test{color: blue}`}</style> */}
                </Head>
                <body className="test">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default myDocumnet;