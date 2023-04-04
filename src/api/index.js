import axios from './service';

const courses = {
  fetch: () => axios.get('/Courses').then((data) => data),
  queryFetch: (search) => axios.get(`/Courses?course=${search}`).then((data) => data),
};

export { courses };