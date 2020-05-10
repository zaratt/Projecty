import React from 'react';
import { Router } from '@reach/router';
import Layout from '../Layout/Layout';
import Team from '../components/organisms/Team';
import Announcements from '../components/organisms/Announcements';
import Statistics from '../components/organisms/Statistics';
import Backlog from '../components/organisms/Backlog';
import Sprints from '../components/organisms/Sprints';
import SelectRole from '../components/organisms/SelectRole';
import MemberDetails from '../components/organisms/MemberDetails';
import AnnouncementsDetails from '../components/organisms/AnnouncementsDetails';
import BacklogDetail from '../components/organisms/BacklogDetails';
import SprintDetail from '../components/organisms/SprintDetails';
import Account from '../components/organisms/Account';
import JoinProject from './JoinToProject';
import NewProject from './StartNewProject';
import Projects from './Projects';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Home';
import NotFoundPage from './404';
import { routes } from '../routes/index';
import PrivateRoute from '../components/atoms/PrivateRoute';

const App: React.FC = () => {
  const {
    signIn,
    signUp,
    joinProject,
    startProject,
    projects,
    team,
    memberDetails,
    announcements,
    announcementsDetails,
    statistics,
    backlog,
    backlogDetails,
    sprints,
    sprintDetails,
    selectRole,
    account,
  } = routes;
  return (
    <Layout>
      <Router>
        <PrivateRoute as={JoinProject} path={joinProject} />
        <PrivateRoute as={NewProject} path={startProject} />
        <PrivateRoute as={Projects} path={projects} />
        <PrivateRoute as={Team} path={team} />
        <PrivateRoute as={MemberDetails} path={memberDetails} />
        <PrivateRoute as={Announcements} path={announcements} />
        <PrivateRoute as={AnnouncementsDetails} path={announcementsDetails} />
        <PrivateRoute as={Statistics} path={statistics} />
        <PrivateRoute as={Backlog} path={backlog} />
        <PrivateRoute as={BacklogDetail} path={backlogDetails} />
        <PrivateRoute as={Sprints} path={sprints} />
        <PrivateRoute as={SprintDetail} path={sprintDetails} />
        <PrivateRoute as={SelectRole} path={selectRole} />
        <PrivateRoute as={Account} path={account} />
        <NotFoundPage default />
        <SignIn path={signIn} />
        <SignUp path={signUp} />
        <Main path="/" />
      </Router>
    </Layout>
  );
};

export default App;
