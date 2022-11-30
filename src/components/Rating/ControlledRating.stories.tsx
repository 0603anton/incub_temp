import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ControlledRating, PropsValueType} from './ControlledRating';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ControlledRating',
    component: ControlledRating,
}

export const EmptyRating = () => <ControlledRating value={0} onClick={x => x}/>;
export const Rating1 = () => <ControlledRating value={1} onClick={x => x}/>;
export const Rating2 = () => <ControlledRating value={2} onClick={x => x}/>;
export const Rating3 = () => <ControlledRating value={3} onClick={x => x}/>;
export const Rating4 = () => <ControlledRating value={4} onClick={x => x}/>;
export const Rating5 = () => <ControlledRating value={5} onClick={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<PropsValueType>(5)
    return <ControlledRating value={rating} onClick={setRating}/>
}
