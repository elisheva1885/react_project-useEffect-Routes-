import React, { useEffect, useState } from 'react'
import AtlasInfo from './atlasInfo'
import axios from 'axios'
import AtlasInput from './atlasInput'
const Atlas = () => {
  const [infoItem, setInfoItem] = useState({})
  useEffect(() => {
    doApi("israel")
  }, [])
  const doApi = async (_country) => {
    setInfoItem({})
    let url = "https://restcountries.com/v3.1/name/"+_country; 
    try{
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoItem(resp.data[0])
    }
    catch(err){
      console.log(err);
      alert("These problem, comeback later")
    }

  }

  const doApiCountryCode = async (_countryCode) => {
    setInfoItem({})
    let url = "https://restcountries.com/v3.1/alpha/"+_countryCode;
    try{
      let resp = await axios.get(url);
      console.log(resp.data);
      setInfoItem(resp.data[0])
    }
    catch(err){
      console.log(err);
      alert("These problem, comeback later")
    }


  }
  return (
    <div className='container'>
      <h2>Atlas App</h2>
      <AtlasInput doApi= {doApi}/>
      <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}/>
    </div>
  )
}

export default Atlas