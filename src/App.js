
import Section from './components/Section';
import Profile from './components/Profile'
import Statastics from './components/Statistics';
import userDataForProfile from './datasource/social-profile/user.json';
import statisticalData from './datasource/statistics/statistical-data.json';



import './App.css';

function App() {
  return ( 
    <div>
    <h1>React HW 001</h1>
    <Section title="Task 001">
      <Profile 
          avatar={userDataForProfile.avatar}
          name={userDataForProfile.name}
          tag={userDataForProfile.tag}
          location={userDataForProfile.location}
          followers={userDataForProfile.stats.followers}
          views={userDataForProfile.stats.views}
          likes={userDataForProfile.stats.likes}
      />
    </Section>
    <Section title="Task 002">
      <Statastics 
      title="Upload stats" stats={statisticalData} 
      />
    </Section>
    <Section title="Task 003"></Section>
    <Section title="Task 004"></Section>
    </div>

 );
}

export default App;




