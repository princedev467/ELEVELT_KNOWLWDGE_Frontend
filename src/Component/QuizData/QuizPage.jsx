import React, { useState } from 'react';
import { useGetquizContentQuery } from '../../Redux/Api/QuizContent.Api';
import { useGetquizQuery } from '../../Redux/Api/Quiz.Api';
import { useParams } from 'react-router-dom';


function QuizPage(props) {

    const { id } = useParams()
    console.log(id);

    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState({});
    const [score, setScore] = useState(0);
    
    const [showScore, setShowScore] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(0);
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
    const currentQustions = Question[index] ;

    // console.log(currentQustions);
    // console.log(Question[index]);
   
       const handlenext = () => {
        if (index < Question.length - 1) {
            setIndex((index)=>index + 1)
        }
    }

    const handleprev = () => {
        if (index > 0) {
            setIndex((index)=>index - 1)
        }
    }




 
    const handleoption = (val, id) => {
        console.log(val, id);
        const qid = currentQustions._id

        if (answer[qid]) return;

      setAnswer((prev)=>({
        ...prev,[qid]:true
      }))   

    setCurrentAnswer((prev)=>({
        ...prev,[qid]:val
    }))

    //for got next question when use click option
    if (index < Question.length - 1) {
            setIndex((index)=>index + 1)
        }

        const quizcontendata = Question.find((v) =>v?._id === id);
        console.log(quizcontendata);


        if (quizcontendata?.Answer === val) {
            setScore((prev) => prev + 1)
            
        }

     
    }

   


    return (
        <>
            {
                // showScore ? ('ok'):
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