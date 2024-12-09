import React from 'react';

const Button = ({ onClick }) => {
    console.log('Кнопка 3 рендерится');
    return <button onClick={onClick}>Нажми меня 3</button>;
};

const NotUseMemoInCallback = () => {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        console.log('Кнопка 3 нажата');
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div >
            <div>NotUseCallback</div>
            <div>Счётчик: {count}</div>
            <Button onClick={handleClick}/>
        </div>
    );
};

export default NotUseMemoInCallback;
