import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFactory } from '../state/actions';
import { useTypedSelector } from '../helpers/useTypedSelector';
import { types } from '../state/enums';

const useAnnouncements = () => {
  const announcements = useTypedSelector(state => state.announcements);
  const setAnnouncements = useDispatch();
  const projectId = localStorage.getItem('PROJECT_ID');
  const { FETCH_ANNOUNCEMENTS, ANNOUNCEMENTS } = types;

  useEffect(() => {
    setAnnouncements(fetchFactory(projectId, FETCH_ANNOUNCEMENTS, ANNOUNCEMENTS));
  }, [projectId, FETCH_ANNOUNCEMENTS, ANNOUNCEMENTS, setAnnouncements]);

  return announcements;
};

export default useAnnouncements;
