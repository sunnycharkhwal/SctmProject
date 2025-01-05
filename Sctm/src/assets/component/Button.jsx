import {Button} from '@mui/material';
import {useNavigate} from 'react-router';

export const BlueButton = ({title = 'add title', link, onClick}) => {
  const LinkButton = () => {
    const navigate = useNavigate();
    return (
      <Button
        className="pageTopBar_btn"
        variant="contained"
        onClick={() => navigate(link)}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  const NormalButton = () => {
    return (
      <Button className="pageTopBar_btn" variant="contained" onClick={onClick}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  return link ? <LinkButton /> : <NormalButton />;
};
