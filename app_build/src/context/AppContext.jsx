import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [studySessions, setStudySessions] = useState(() => {
    const savedSessions = localStorage.getItem('studySessions');
    return savedSessions ? JSON.parse(savedSessions) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('studySessions', JSON.stringify(studySessions));
  }, [studySessions]);

  const addTask = (task) => {
    setTasks([{ ...task, id: Date.now().toString(), completed: false }, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addStudySession = (session) => {
    setStudySessions([{ ...session, id: Date.now().toString(), completed: false }, ...studySessions]);
  };

  const toggleStudySession = (id) => {
    setStudySessions(studySessions.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
  };

  const deleteStudySession = (id) => {
    setStudySessions(studySessions.filter(s => s.id !== id));
  };

  return (
    <AppContext.Provider value={{
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      studySessions,
      addStudySession,
      toggleStudySession,
      deleteStudySession
    }}>
      {children}
    </AppContext.Provider>
  );
};
