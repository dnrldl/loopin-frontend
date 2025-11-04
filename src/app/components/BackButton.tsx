import { useNavigate } from 'react-router-dom';
import IconButton from '@/shared/components/IconButton';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton size={24} icon="chevronLeft" onClick={() => navigate(-1)} />
  );
};

export default BackButton;
