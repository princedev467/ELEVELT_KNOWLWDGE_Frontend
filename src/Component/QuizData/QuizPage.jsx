import React, { useState } from 'react';
import { useGetquizContentQuery } from '../../Redux/Api/QuizContent.Api';
import { useGetquizQuery } from '../../Redux/Api/Quiz.Api';
import { useParams } from 'react-router-dom';
import { retry } from '@reduxjs/toolkit/query';


function QuizPage(props) {

    const { id } = useParams()
    console.log(id);

    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState({});
    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState({});
    // quizContent
    const { data: quizContent } = useGetquizContentQuery();

    console.log(quizContent?.data);


    // console.log(currentAnswer);

    console.log(score);

    const { data: quiz } = useGetquizQuery()
    console.log(quiz?.data);

    // const { data: quiz } = useGetquizQuery()

    let filquiz = quiz?.data?.find((v) => v?.section === id);
    // console.log(filquiz);

    const filterQuestions = quizContent?.data?.filter((v) => v?.quiz === filquiz?._id);
    // console.log(filterQuestions);

    // console.log(index);


    let Question = filterQuestions || [];
    const currentQustions = Question[index];

    // console.log(currentQustions);
    // console.log(Question[index]);

    const handlenext = () => {
        if (index < Question.length - 1) {
            setIndex((index) => index + 1)
        }
    }

    const handleprev = () => {
        if (index > 0) {
            setIndex((index) => index - 1)
        }
    }





    const handleoption = (val, id) => {
        console.log(val, id);
        const qid = currentQustions._id

        if (answer[qid]) return;

        setAnswer((prev) => ({
            ...prev, [qid]: true
        }))

        setCurrentAnswer((prev) => ({
            ...prev, [qid]: val
        }))

        //for got next question when use click option
        if (index < Question.length - 1) {
            setIndex((index) => index + 1)
        }

        const quizcontendata = Question.find((v) => v?._id === id);
        console.log(quizcontendata);


        if (quizcontendata?.Answer === val) {
            setScore((prev) => prev + 1);
        }

        const Answerlength = Object.keys(answer).length;


        if (Answerlength === Question.length - 1) {
            setShowScore(true)
        }


    }



    // console.log(currentAnswer[]);

    return (
        <>
            {
                showScore ? (
                    <>
                        <p> You scored {score} out of {Question.length}
                        </p>
                        {
                            Question.map((v) => {

                                // console.log("currentAnswer",currentAnswer[v._id]);
                                const userAnswer = currentAnswer[v._id]; // user answer

                                const correctAnswer = v.Answer; // right answer
                                // console.log("correctAnswer",correctAnswer);
                                // console.log("userAnswer",userAnswer);

                                return (
                                    <div>
                                        <div>
                                            <p> {v?.question}</p>
                                        </div>

                                        <p>
                                            {v?.options?.map((v1, i) => {

                                                console.log(v1);

                                                let iscorrect = v1 === correctAnswer; //retuen true corect answer 

                                                let iswrong = v1 === userAnswer; // if user answer match with option set user answer



                                                console.log(iswrong && !iscorrect);


                                                // console.log("iscorrect:",iscorrect,"iswrong:",iswrong);

                                                return (

                                                    //iswrong && !iscorrect?"wrong":""} <= in this condition if user answer  and correct answer not then get it wrong
                                                    <p style={{ marginLeft: '10px' }} className={` options ${iscorrect ? "correct" : ""} ${iswrong && !iscorrect ? "wrong" : ""}`} onClick={() => handleoption(v1, currentQustions._id)}> <strong>{String.fromCharCode(65 + i)}.</strong> {v1}</p>

                                                )
                                            }

                                            )}
                                        </p>
                                    </div>
                                )

                            })
                        }
                    </>

                ) :
                    <div>


                        <div>
                            <p> {currentQustions?.question}</p>
                        </div>

                        <p>
                            {currentQustions?.options?.map((v1, i) => (
                                <p style={{ marginLeft: '10px' }} onClick={() => handleoption(v1, currentQustions._id)}> <strong>{String.fromCharCode(65 + i)}.</strong> {v1}</p>

                            ))}
                        </p>

                        <button onClick={handleprev}>previous</button>
                        <button onClick={handlenext}>next</button>
                    </div>

            }

        </>
    )
}

export default QuizPage;