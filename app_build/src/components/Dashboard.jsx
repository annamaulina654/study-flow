import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import StudyScheduleForm from './StudyScheduleForm';
import ScheduleList from './ScheduleList';
import { CheckSquare, BookOpen } from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <section className="dashboard-section">
        <div className="card">
          <h2 className="section-header">
            <CheckSquare size={24} />
            Daily Tasks
          </h2>
          <TaskForm />
          <TaskList />
        </div>
      </section>

      <section className="dashboard-section">
        <div className="card">
          <h2 className="section-header">
            <BookOpen size={24} />
            Study Schedule
          </h2>
          <StudyScheduleForm />
          <ScheduleList />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
