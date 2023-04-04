import React, { useEffect, useState } from "react";
import { 
    Box,
    Grid,
    styled,
    InputBase
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import QuizItem from "../components/QuizItem";
import { courses } from "../api"

const SearchWarp = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '100px',
}));

const Search = styled('div')(() => ({
    position: 'relative',
    backgroundColor: 'rgba(0, 139, 240, 0.2)',
    borderRadius: '15px',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: 'rgba(0, 139, 240, 0.4)',
      boxShadow: '3px 3px 20px -7px rgba(0,0,0,0.75)',
    },
}));
  
const SearchIconWrapper = styled('div')(() => ({
    padding: '0px 5px 0px 5px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
}));
  
const StyledInputBase = styled(InputBase)(() => ({
    color: '#ffffff',
    paddingLeft: '30px',
}));

export default function UsersList() {

    const [coursesData, setCourses] = useState([]);
    const [search, setSerch] = useState('');

    const handleSearch = (input) => {
        setSerch(input);
    };
    
    useEffect(() => {
        (async () => {
            try {
                const { data } = search ? await courses.queryFetch(search) : await courses.fetch();
                setCourses(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [search]);

    return (
        <>
        <Box sx={{ 
            flexGrow: 1,
            backgroundImage: 'linear-gradient(to right bottom, #726cf8, #9a67f2, #ba63e9, #d45edf, #ea5bd4)',
        }}>
            
            <SearchWarp>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Пошук…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => handleSearch(e.target.value)}
                    />
                </Search>
            </SearchWarp>
            <Grid container 
                spacing={1}
                sx={{ 
                    minHeight: '100vh',
                    paddingTop: '30px',
                    justifyContent: 'center',
                    
                    
                }}>
                    {coursesData.map((course, index) => (
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
        </>
    );
}