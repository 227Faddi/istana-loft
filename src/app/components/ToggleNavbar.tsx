'use client';

import { IoMenu } from 'react-icons/io5';

type Props = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const ToggleNavbar = ({ isOpen, setIsOpen }: Props) => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      onClick={handleToggle}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md"
    >
      <IoMenu size={25} />
    </button>
  );
};

export default ToggleNavbar;
