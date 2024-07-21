'use client'

import Table from '../Table';

const Hausa: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: "url('/Hausa.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      <div className="relative z-10 w-full p-4">
        <Table />
      </div>
    </div>
  );
}

export default Hausa;