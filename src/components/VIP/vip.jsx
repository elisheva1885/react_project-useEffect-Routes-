import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VipInput from './vipInput'
import VipInfo from './vipInfo'

const Vip = () => {
    const [infoItems, setInfoItems] = useState([{}])
  useEffect(() => {
    doApi()
  }, [])

  const doApi = async () => {
    setInfoItems([{}])
    // let my_key = "52395412-e59ca8fe56c85907df544da34";
    let url = `https://expressrichpepole.onrender.com/`;
 
    try{
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoItems(resp.data);
      console.log(resp.data[0]);

    }
    catch(err){
      console.log(err);
      alert("These problem, comeback later")
    }

  }

  return (
    <div className='container'>
    <h2>Pixa App</h2>
    <VipInfo items={infoItems} />
  </div>
  )
}

export default Vip