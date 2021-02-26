import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentRoNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentRoNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentRoNextLevel}%` }}>
          {currentExperience} px
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}