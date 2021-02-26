import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-1/p200x200/53613560_10214307561387705_1841310049536835584_n.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_ohc=tyUh1XZwgUoAX8P33dQ&_nc_ht=scontent.fcgh37-1.fna&tp=6&oh=9bb35f9183a767ed9c54371efd0299a5&oe=605CD307" alt="Yuri Cunha Coelho" />
      <div>
        <strong>Yuri Coelho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>  
          Level {level}
        </p>
      </div>
    </div>
  );
}