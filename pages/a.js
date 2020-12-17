import '../style.css';
import { useState, useEffect } from 'react'
// import { Button } from 'antd';

function Index(){
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c +1)
        }, 1000);
        return () => {
            if(interval){
                clearInterval(interval);
            }
        }
    }, [])
    return (
        <div>
            AAAAA------》 {count}
            {/* <Button type="primary" size="small">22212121</Button> */}
        </div>
    )
}
Index.getInitialProps = () => {
    return {
        www: 'aaa'
    }
}
export default Index;