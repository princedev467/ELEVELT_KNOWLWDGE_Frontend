import React, { useState } from 'react';
import { useGetquizContentQuery } from '../../Redux/Api/QuizContent.Api';
import { useGetquizQuery } from '../../Redux/Api/Quiz.Api';

function QuizPage() {

    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState({});

    const { data: quiz } = useGetquizQuery();
    const { data: quizContent } = useGetquizContentQuery();

    // let quizData=quiz?.data || ""
    // console.log(quizData);

    // console.log(quizContent.data);


    //find quiz data
    //   let filterQestionContent =  quizContent?.data?.filter((v)=>v.quiz === quizData?._id )

    // console.log(filterQestionContent);

    const questions = quizContent?.data || []; //for questionContentData
    const currentQuestion = questions[index];  // for current question

    console.log(score);

    const handleNext = () => {
        if (index < questions.length - 1) setIndex(index => index + 1);
    };

    const handlePrev = () => {
        if (index > 0) setIndex(index => index - 1);
    };
    const handleoption = (val, data_id) => {
        console.log(val, data_id);

        const qid = currentQuestion._id;

   
    if (answered[qid]) return;

    setAnswered(prev => ({
        ...prev,
        [qid]: true
    }));
        let questionContentAnswer = questions.find((v) => v?._id === data_id);
        console.log(questionContentAnswer);

        if (questionContentAnswer.Answer === val) {
            setScore(prev => prev + 1)
        }
        // setScore(val===questionContentAnswer.Answer?score+1:score)
    }

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }} className='bg-body'>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Quiz
            </h1>
            {currentQuestion && (
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                        paddingLeft: '10px'
                    }}>
                        {currentQuestion.options.map((v1, i) => (
                            <div
                                key={i}
                                className='profile-card options'
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

                    <button onClick={handlePrev} disabled={index === 0}>
                        Previous
                    </button>

                    <button onClick={handleNext} disabled={index === questions.length - 1}>
                        Next
                    </button>
                </div>
            )}

        </div>
    );
}

export default QuizPage;