// CreateOrganization.jsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

const CreateOrganization = () => {
  const [organizationName, setOrganizationName] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('Organization Created:', organizationName);
    setOrganizationName(''); // Reset form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Create Organization</h2>

        {/* Create Organization Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Name Input */}
          <div>
            <Label
              htmlFor="organizationName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Organization Name
            </Label>
            <Input
              type="text"
              id="organizationName"
              name="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter organization name"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Create Organization
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrganization;
