import '../style.css';
import Link from 'next/link';
import { Button } from 'antd';
import Router from 'next/router';
function Index(){

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
            wqwq2112111
            <Link href="/a?id=2" as="/a/2">
                <Button type="primary" size="small">去a</Button>
            </Link>
            <Button type="primary" size="small" onClick={toB}>去b</Button>
        </div>
    )
}
export default Index;