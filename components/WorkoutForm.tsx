import React, { useState } from 'react';
import { WorkoutFormData } from '../types';

interface WorkoutFormProps {
  onSubmit: (data: WorkoutFormData) => void;
  onCancel: () => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<WorkoutFormData>({
    name: '',
    daysPerWeek: '4',
    durationPerDay: '60',
    focus: 'Mix'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-red-600">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Create Workout Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Field */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Your Name (Namaskar) 🙏</label>
          <input 
            required type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors" placeholder="e.g. Rahul Kumar"
          />
        </div>

        {/* Days Per Week */}
        <div>
          <label className="block text-lg font-bold text-gray-800 mb-2">How many days do you workout per week?</label>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
            <input 
              type="range" name="daysPerWeek" min="1" max="7" step="1"
              value={formData.daysPerWeek} onChange={handleChange}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <span className="ml-4 text-2xl font-bold text-red-600 w-12 text-center">{formData.daysPerWeek}</span>
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-lg font-bold text-gray-800 mb-2">Session Duration (Minutes)</label>
          <input 
            type="number" name="durationPerDay" 
            value={formData.durationPerDay} onChange={handleChange}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none text-lg"
            placeholder="e.g. 45"
          />
        </div>

        {/* Focus */}
        <div>
          <label className="block text-lg font-bold text-gray-800 mb-2">Primary Focus</label>
          <select 
            name="focus" value={formData.focus} onChange={handleChange}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none bg-white text-lg"
          >
            <option value="Mix">Mix (Cardio + Strength)</option>
            <option value="Strength">Strength Training / Muscle Building</option>
            <option value="Cardio">Cardio / Endurance</option>
          </select>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            type="button" onClick={onCancel}
            className="flex-1 py-3 px-6 rounded-lg border-2 border-gray-300 text-gray-600 font-bold hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="flex-1 py-3 px-6 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 shadow-lg transform active:scale-95 transition-all"
          >
            Generate Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
