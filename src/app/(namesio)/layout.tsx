import { FC, ReactNode } from 'react';

interface NamesiaLayoutProps {
  children: ReactNode;
}

const NamesiaLayout: FC<NamesiaLayoutProps> = ({ children }) => {
  return <div className='bg-slate-200 p-10 rounded-md'>{children}</div>;
};

export default NamesiaLayout