import Link from 'next/link';
import { FC } from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <Link className="bg-blue-600 hover:bg-blue-700 text-white 
    font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform 
    transform hover:scale-105" href={href}>
     
        {children}
  
    </Link>
  );
};

export default LinkButton;