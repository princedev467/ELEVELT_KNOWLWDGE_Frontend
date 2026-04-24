import React, { useState } from 'react';
import { useGetquizContentQuery } from '../../Redux/Api/QuizContent.Api';
import { useGetquizQuery } from '../../Redux/Api/Quiz.Api';
import { useGetSectionQuery } from '../../Redux/Api/Section.Api';
import { useParams } from 'react-router-dom';

function QuizPage() {

    const { id } = useParams()
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState({}); 
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const { data: quiz } = useGetquizQuery();
    const { data: quizContent } = useGetquizContentQuery();


    // Section
    const { data: sectionData } = useGetSectionQuery(); //get Data
    console.log("Section", sectionData);

    let section = sectionData?.data


    const quizData = Array.isArray(quiz?.data) ? quiz.data : Array.isArray(quiz?.data?.data) ? quiz.data.data : [];
    // console.log(quizData);

    // console.log(quizContent.data);
    let filtQuiz = quizData.find((v) => v.section === id);

    // console.log(filtQuiz);

    //     //find quiz data
    const contentData = Array.isArray(quizContent?.data)
        ? quizContent.data
        : Array.isArray(quizContent?.data?.data)
            ? quizContent.data.data
            : [];

    const filterQestionContent = contentData.filter(
        (v) => v?.quiz === filtQuiz?._id
    );
    // console.log(filterQestionContent);

    // const questions = quizContent?.data || [];
    const questions = filterQestionContent || []; //for questionContentData
    const currentQuestion = questions[index];  // for current question

    console.log(score);


    const handleNext = () => {
        if (index < questions.length - 1) setIndex(index => index + 1);
    };


    const handlePrev = () => {
        if (index > 0) setIndex(index => index - 1);
    };


    const handleoption = (val) => {
        if (!currentQuestion) return;

        const qid = currentQuestion._id;

        if (answered[qid]) return;

        setSelectedAnswers(prev => ({
            ...prev,
            [qid]: val
        }));

        setAnswered(prev => ({
            ...prev,
            [qid]: true
        }));

        if (currentQuestion.Answer === val) {
            setScore(prev => prev + 1);
        }

        // move to next or finish quiz
        if (index === questions.length - 1) {
            setShowResult(true)
        } else {
            setIndex(prev => prev + 1);
        }
    };



    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }} className='bg-body'>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
                {showResult?'Result':'Quiz'}
            </h1>
            {showResult ? (
                <div className="score-section">
                    <h5 style={{textAlign:'center',marginBottom:'20px'}}>You scored {score} out of {questions.length}</h5>
                    {
                        questions.map((q, qIndex) => {
                            const userAnswer = selectedAnswers[q._id];
                            const correctAnswer = q.Answer;

                            return (
                                <div
                                    className='profile-Body'
                                    key={q._id}
                                    style={{
                                        marginBottom: "25px",
                                        padding: "15px",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                    }}
                                >

                                    {/* Question */}
                                    {/* <h4>
                                        Q{qIndex + 1}. {q.question}
                                    </h4> */}
                                    <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
                                        <span style={{ marginRight: '10px' }}>
                                            Q{qIndex + 1}
                                        </span>
                                        {q.question}
                                    </p>

                                    {/* Options */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '10px',
                                        paddingLeft: '10px'
                                    }}>
                                        {q.options.map((opt, i) =>  {
                                            const isCorrect = opt === correctAnswer;
                                            const isSelected = opt === userAnswer;

                                            return (
                                                <div
                                                    key={i}
                                                    className={`
                                                    profile-card options
                                                ${isCorrect ? "correct" : ""}
                                                ${isSelected && !isCorrect ? "wrong" : ""}
                                            `}
                                                >
                                                    {String.fromCharCode(65 + i)}. {opt}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );


                        })
                    }
                </div>
            ) : (currentQuestion && (
                <div className='profile-Body' style={{
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '25px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>

                    <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>
                        <span style={{ marginRight: '10px' }}>
                            Q{index + 1}
                        </span>
                        {currentQuestion.question}
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '10px',
                            paddingLeft: '10px'
                        }}>
                        {currentQuestion.options.map((v1, i) => (
                            <div
                                key={i}
                                className='profile-card option'
                                onClick={() => handleoption(v1, currentQuestion._id)}
                                style={{
                                    padding: '12px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    border: '2px solid transparent'
                                }}
                            >
                                <span style={{ fontWeight: 'bold', marginRight: '8px' }}>
                                    {String.fromCharCode(65 + i)}.
                                </span>
                                {v1}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '30px', padding: '0 15px', display: 'flex', justifyContent: 'space-between' }}>
                        <button onClick={handlePrev} disabled={index === 0}
                            style={{ padding: '4px 8px', borderRadius: '5px', background: 'black', color: 'white' }}
                            className='profile-card options'>
                            Previous
                        </button>

                        <button onClick={handleNext} disabled={index === questions.length - 1}
                            className='profile-card options' style={{ padding: '4px 8px', borderRadius: '5px', background: 'black', color: 'white' }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default QuizPage;