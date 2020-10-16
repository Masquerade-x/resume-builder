import React, {useState, useRef} from 'react';
import {createContainer} from 'unstated-next';

export default function useStateData() {
  let [checked10, setChecked10] = useState(false);
  let [checked12, setChecked12] = useState(false);
  let [checkedGrad, setCheckedGrad] = useState(false);
  let [checkedPG, setCheckedPG] = useState(false);
  let setCheck10 = () => setChecked10(!checked10);
  let setCheck12 = () => setChecked12(!checked12);
  let setCheckGrad = () => setCheckedGrad(!checkedGrad);
  let setCheckPG = () => setCheckedPG(!checkedPG);

  return {
    checked10,
    checked12,
    checkedGrad,
    checkedPG,
    setCheck10,
    setCheck12,
    setCheckGrad,
    setCheckPG,
  };
}
