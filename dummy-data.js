const DUMMY_STOCKS = [
    {
    id:"s1",
    description:"amazing product for friends and family",
    isAvailable:true,
    date:'2021-05-30',
    images:""
},
{
    id:"s2",
    description:"amazing product for friends and family friends",
    isAvailable:false,
    date:'2021-05-30',
    images:""
}
]

export function getAvailableStocks(){
    return DUMMY_STOCKS.filter((event)=>event.isAvailable)
}