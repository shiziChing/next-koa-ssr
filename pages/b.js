import '../style.css';
import { withRouter } from 'next/router';

function Index({router, name}){
    console.log('name ----->', name)
    return (
        <div>
            BBBBB, {router.query.b}
            {/* <Button type="primary" size="small">22212121</Button> */}
        </div>
    )
}
Index.getInitialProps = () => {
    return {
        name: 'xuhao'
    }
}
export default withRouter(Index);