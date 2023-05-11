import React, {FC} from 'react';

interface IMyButton {
    title: string,
    onChange?: (params: any) => void,
}

const MyButton:FC<IMyButton> = ({title, onChange}) => {

    return (
        <button onChange={onChange} className={"myButton"}>
            {title}
        </button>
    );
};

export default MyButton;