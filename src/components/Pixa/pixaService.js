import axios from "axios";
import { useEffect } from "react";
import React from 'react'

const getData = (url) => {
    let resp = axios.get(url);
    return resp;


}

export default getData;