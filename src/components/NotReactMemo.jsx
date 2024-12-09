import React from 'react';

const ExpensiveComponent = ({ value }) => {
    console.log('ExpensiveComponent рендерится');
    return <div>Значение: {value}</div>;
};

const NotReactMemo = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>NotReactMemo</div>
            <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
            <ExpensiveComponent value="Постоянное значение"/>
        </div>
    );
};

export default NotReactMemo;
