import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Trash2, CalendarX2, Clock } from 'lucide-react';

const ScheduleList = () => {
  const { studySessions, toggleStudySession, deleteStudySession } = useContext(AppContext);

  if (studySessions.length === 0) {
    return (
      <div className="empty-state">
        <CalendarX2 size={48} />
        <p>No study sessions scheduled. Plan your success!</p>
      </div>
    );
  }

  // Sort by start time
  const sortedSessions = [...studySessions].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div className="list-container">
      {sortedSessions.map((session) => (
        <div key={session.id} className={`list-item ${session.completed ? 'completed' : ''}`}>
          <div className="item-content">
            <input
              type="checkbox"
              className="item-checkbox"
              checked={session.completed}
              onChange={() => toggleStudySession(session.id)}
            />
            <div className="item-details">
              <span className="item-title">{session.subject}</span>
              <div className="item-meta">
                <span className="category-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} />
                  {session.startTime} ({session.duration} mins)
                </span>
              </div>
            </div>
          </div>
          <button 
            className="btn-icon"
            onClick={() => deleteStudySession(session.id)}
            aria-label="Delete session"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
