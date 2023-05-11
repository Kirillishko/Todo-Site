import React, {FC} from 'react';
import classes from './MyButton.module.css';

interface IMyButton {
    title: string,
    onChange?: () => void,
}

const MyButton:FC<IMyButton> = ({title, onChange}) => {


    return (
        <button onChange={onChange}>
            {title}
        </button>
    );
};

export default MyButton;