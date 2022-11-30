import React, {useState} from 'react';
import {ControlledRating, PropsValueType} from "./ControlledRating";


export default {
    title: `ControlledRating`,
    component: ControlledRating,
}

export const EmptyRating1 = () => <ControlledRating value={0} onClick={() => {}}/>
export const ChangeRating = () => {
  const [rating,setRating] = useState<PropsValueType>(5);
  return <ControlledRating value={rating} onClick={setRating}/>
}