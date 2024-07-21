'use client'

import { useState } from 'react';
import { namesDataTypes } from "@/types/namesDataTypes";
import { NamesData } from "./NamesData";
import { CircleArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

const Table: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');

  const filteredNames = NamesData.filter((row: namesDataTypes) => {
    const matchesName = row.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === 'All' || row.gender === genderFilter;

    return matchesName && matchesGender;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center my-4 space-x-4">
        <button 
          onClick={() => router.push('/')} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center"
        >
          <CircleArrowLeft className="mr-2" />
          <span>Back</span>
        </button>

        <input
          type="text"
          placeholder="Search name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-auto px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-white bg-opacity-80"
        />

        {/* Spacer to push filter to the right */}
        <div className="flex-grow"></div>

        {/* Filter dropdown */}
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-white bg-opacity-80"
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-black bg-opacity-100">
        <table className="min-w-full border">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4 border-r font-bold text-xl">Name</th>
              <th className="py-2 px-4 border-r font-bold text-xl">Gender</th>
              <th className="py-2 px-4 border-r font-bold text-xl">High Rate</th>
              <th className="py-2 px-4 font-bold text-xl">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {filteredNames.map((row: namesDataTypes, index: number) => (
              <tr key={index} className="bg-transparent bg-opacity-75 border-b text-white">
                <td className="py-2 px-4 border-r">{row.name}</td>
                <td className="py-2 px-4 border-r">{row.gender}</td>
                <td className="py-2 px-4 border-r">{row.prominentCity}</td>
                <td className="py-2 px-4 border">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;