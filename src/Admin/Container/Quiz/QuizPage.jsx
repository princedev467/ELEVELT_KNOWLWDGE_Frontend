import React from 'react';
import { useParams } from 'react-router-dom';

function QuizPage(props) {

const { id } = useParams();


console.log("Quiz ID:", id);

    return (
        <>
            <h1>Quiz Page</h1>
        </>
    );
}

export default QuizPage;