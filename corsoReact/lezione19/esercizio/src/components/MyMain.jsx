import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SelectRegioni from './SelectRegioni';
import SelectProvince from './SelectProvince';
import SelectComuni from './SelectComuni';
import ComuneDetail from './ComuneDetail';

const regioniAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/regioni';
const provinceAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/province/'; //{regione}
const comuniAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni/provincia/'; //{provincia}
const dettaglioComuneAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni'; //?codiceCatastale=00000
const meteoComuneAPI = 'https://api.openweathermap.org/data/2.5/weather'; //?lat={lat}&lon={lon}&appid={API key}
const meteoKey = '550c9d7de6ffee1b77c72dfc10ccb829';

export default function MyMain() {

  const [regioni, setRegioni] = useState([]);
  const [province, setProvince] = useState([]);
  const [comuni, setComuni] = useState([]);
  const [comune, setComune] = useState(null);
  const [meteoComune, setMeteoComune] = useState(null);
  const [selectedRegione, setSelectedRegione] = useState('-');
  const [selectedProvincia, setSelectedProvincia] = useState('-');
  const [selectedComune, setSelectedComune] = useState('-');

  useEffect(() => {
    axios.get(regioniAPI).then(response => setRegioni(response.data))
  }, [])

  useEffect(() => {
    axios.get(provinceAPI+selectedRegione).then(response => setProvince(response.data))
    setSelectedProvincia('-')
  }, [selectedRegione])

  useEffect(() => {
    axios.get(comuniAPI+selectedProvincia).then(response => setComuni(response.data))
    setSelectedComune('-')
    setComuni([]);
  }, [selectedProvincia])

  useEffect(() => {
    axios.get(dettaglioComuneAPI+'?codiceCatastale='+selectedComune).then(response => {
      const [c] = response.data;
      setComune(c)
      axios.get(meteoComuneAPI+'?lat='+c.coordinate.lat+'&lon='+c.coordinate.lng+'&appid='+meteoKey)
              .then(response => setMeteoComune(response.data))
    })
  }, [selectedComune])
  
  const selectRegione = (event) => {
    //console.log(event.target.value);
    setSelectedRegione(event.target.value)
  }

  const selectProvincia = (event) => {
    setSelectedProvincia(event.target.value)
  }

  const selectComune = (event) => {
    setSelectedComune(event.target.value)
  }

  return (
    <>
        <SelectRegioni regioni={regioni} selectRegione={selectRegione} />
        <SelectProvince province={province} selectProvincia={selectProvincia} />
        <SelectComuni comuni={comuni} selectComune={selectComune} />
        {comune && meteoComune && <ComuneDetail comune={comune} meteoComune={meteoComune} /> }
    </>
  )
}
