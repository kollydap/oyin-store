import Head from 'next/head'
import Image from 'next/image'
import StockList from '../components/stocks/stock-list';
import { getAvailableStocks } from '../dummy-data'
import styles from '../styles/Home.module.css'


export default function Home() {
  const availableStocks = getAvailableStocks();
  return (
    <>
     <ul>
      <StockList item={availableStocks}/>
     </ul>
    </>
  )
}
