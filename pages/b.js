import '../style.css';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic'
import styled  from 'styled-components';
// import moment from 'moment';
function B({router, name, time}){
    console.log('name ----->', name)
    const Title = styled.h1`
    color: yellow;
    fonst-size: 40px;
    `;
    const Layzy = dynamic(import('../components/lazy'))
    return (
        <div>
            <Title>styled-components</Title>
            <Layzy />
            <div>
                我叫 {name}  时间： {time}
            </div>
            <div>
                BBBBB, {router.query.b}
            </div>
            {/* <Button type="primary" size="small">22212121</Button> */}
        </div>
    )
}
B.getInitialProps = async () => {
    const moment = await import('moment')

    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'chengxuzhao',
                time: moment.default(Date.now() - 60 * 1000).fromNow(),
            })
        }, 1000)
    })

    return await promise
    // return {
    //     name: 'xuzhao',
    // };
}
export default withRouter(B);