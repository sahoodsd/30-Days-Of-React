import React from 'react';
import ReactDOM from 'react-dom/client';
import sdLogo from './logo192.png'



const UserCard = (userDetails) =>  {
  const {
    profilePicture,
    name: { firstName, lastName },
    designation,
    place,
    skills,
    joinedDate
  } = userDetails


  console.log(profilePicture)
}

const App = () => {
  const userDetails = {
    profile_picture : sdLogo,
    name : {
      first_name : 'Sahood',
      Last_name : 'SD'
    },
    designation : 'Senior Developer',
    place : 'Dubai',
    skills : ['HTML', 'CSS' , 'Sass','js','react','redux'],
    joined_date : 'Aug 30, 2025'

  }

  return (
  <div className='app'>
    <UserCard userDetails= {userDetails}>

    </UserCard>
  </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
