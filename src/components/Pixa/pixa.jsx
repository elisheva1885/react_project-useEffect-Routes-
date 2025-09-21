import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PixaInput from './pixaInput'
import PixaInfo from './pixaInfo'

const Pixa = () => {
  const [infoItems, setInfoItems] = useState([{}])
  useEffect(() => {
    doApi("nature")
  }, [])

  const doApi = async (_topic) => {
    setInfoItems([{}])
    // let my_key = "52395412-e59ca8fe56c85907df544da34";
    let url = `https://pixabay.com/api/?key=52395412-e59ca8fe56c85907df544da34&q=${_topic}`;
 
    try{
      let resp = await axios.get(url);
      console.log(resp.data.hits);
      setInfoItems(resp.data.hits);
      console.log(resp.data.hits[0]);

    }
    catch(err){
      console.log(err);
      alert("These problem, comeback later")
    }

  }

  return (
    <div className='container'>
    <h2>Pixa App</h2>
    <PixaInput doApi= {doApi}/>
    <PixaInfo items={infoItems} />
  </div>
  )
}

export default Pixa