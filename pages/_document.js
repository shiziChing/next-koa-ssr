import Document, {Html, Head, Main, NextScript} from 'next/document';

class myDocumnet extends Document{
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx);
        return {
            ...props
        }
    }
    render (){
        return (
            <Html>
                <title>my app</title>
                <Head>
                    
                    <style>{`.test{color: blue}`}</style>
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