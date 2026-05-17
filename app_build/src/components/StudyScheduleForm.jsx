import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Plus } from 'lucide-react';

const StudyScheduleForm = () => {
  const [subject, setSubject] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');
  const { addStudySession } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim() || !startTime || !duration) return;
    
    addStudySession({
      subject,
      startTime,
      duration: parseInt(duration),
      date: new Date().toISOString()
    });
    
    setSubject('');
    setStartTime('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <div className="form-group">
        <input
          type="text"
          className="input-field"
          placeholder="Subject or Topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
          <input
            type="time"
            className="input-field"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
          <input
            type="number"
            className="input-field"
            placeholder="Mins"
            min="1"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
};

export default StudyScheduleForm;
