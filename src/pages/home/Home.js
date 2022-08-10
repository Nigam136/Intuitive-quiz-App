import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import Categories from '../../data/Categories';
import './Home.css';
import { useNavigate } from 'react-router';
import ErrorMessage from '../../components/errormessage/ErrorMessage';

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit=()=>{
        if(!category || !difficulty || !name){
            setError(true);
        }else{
            setError(false);
            navigate('/quiz');
            fetchQuestions(category,difficulty);
        }
    };


    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Qiuz Setting </span>
                <div className='settings__select'>
                    {error && <ErrorMessage>Please Fil all the fields</ErrorMessage>}

                    <TextField
                        style={{ marginBottom: 25 }}
                        label='Enter Your Name'
                        varient='outlined' 
                        onChange={(e)=>setName(e.target.value)}
                        
                        />
                    <TextField
                        select
                        label='select category'
                        varient='outlined'
                        style={{ marginBottom: 30 }}
                        onChange={(e) =>setCategory(e.target.value)}
                        value={category}
                        >

                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>

                </div>
            </div>
            {/* <img src='/quiz.svg' className='banner' alt='Qiuz image' /> */}
            <img src='/online_test.svg' className='banner' alt='Qiuz image' />
        </div >

    )
}

export default Home;
