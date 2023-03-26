import React, { Component } from "react";
import axios from "axios";
import { 
    Box,
    Grid,
} from "@mui/material";
import QuizItem from "../components/QuizItem";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get("https://63f9f88abeec322c57eae484.mockapi.io/Courses")
            .then(response => {
                this.setState({
                    courses: response.data
                })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Box sx={{ 
                flexGrow: 1,
            }}>
                <Grid container 
                    spacing={1}
                    sx={{ 
                        minHeight: '100vh',
                        paddingTop: '110px',
                        justifyContent: 'center',
                        backgroundImage: 'linear-gradient(to right bottom, #726cf8, #9a67f2, #ba63e9, #d45edf, #ea5bd4)',
                        
                    }}>
                    {this.state.courses.map((course, index) => (
                            <QuizItem 
                                item xs={8} md={4}
                                key={index}
                                course={course.course}
                                descr={course.description}
                                about={course.about}
                                img={course.avatar}
                                baner={course.baner}
                                id={index}
                                margin='20px'
                            />
                        ))} 
                </Grid>
            </Box>
        );
    }
}
