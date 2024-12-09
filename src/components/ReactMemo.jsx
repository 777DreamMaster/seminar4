import React from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
    console.log('ExpensiveComponent рендерится');
    return <div>Значение: {value}</div>;
});

const ReactMemo = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div style={{marginBottom: '50px'}}>
            <div>ReactMemo</div>
            <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
            <ExpensiveComponent value="Постоянное значение" />
        </div>
    );
};

export default ReactMemo;
