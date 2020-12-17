import '../style.css';
import Link from 'next/link';
import { Button, Input } from 'antd';
import Router from 'next/router';

// import store from '../store/store'
import { connect } from 'react-redux'
function Index({count, name, add, rename}){

    function toB(){
        Router.push({
            pathname: '/b',
            query:{
                b: 1222
            }
        }, '/b/122')
    }
    return (
        <div>
            <span>我是首页</span>
            <div>
                count: {count}     name: {name}
            </div>
            <Link href="/a?id=2" as="/a/2">
                <Button type="primary" size="small">去a</Button>
            </Link>
            <Button type="primary" size="small" onClick={toB}>去b</Button>
            <Button onClick={() => add(count+count)}>改变count</Button>
        </div>
    )
}
Index.getInitialProps = async ({ reduxStore }) => {
    reduxStore.dispatch({type: 'ADD', count: 3})
    return {}
  }
export default connect(
    function mapSatte(state){
        return {
            count: state.count.count,
            name: state.user.name
        }
    },
    function mapDispatch(dispatch){
        return {
            add: num => dispatch({type: 'ADD', count: num}),
            rename: name => dispatch({type: 'UPDATE_USERNAME', name})
        }
    }
)(Index);