import './HowItWorks.css'
const SplitScreen = ({
    children,
    leftWeight=1,
    rightWeight=1
}) =>{
    const [left,right] = children;
    return(<div className="flexbox">
        <div style={{flex:`${leftWeight}`,display:'flex'}}>
            {left}
        </div>
        <div style={{flex:`${rightWeight}`,display:'flex'}}>
            {right}
        </div>
    </div>)
}

export default SplitScreen;