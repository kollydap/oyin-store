function StockList(props){
    const {items} = props;

return<ul>
{props.items.map((item)=><li key={item.data}>{item.date}</li>)}
</ul>
}

export default StockList;