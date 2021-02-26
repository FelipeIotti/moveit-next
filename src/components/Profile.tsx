import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer} >
            <img src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/75552857_2484983544903262_2152073340246818816_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=qWdUM8tlokMAX_k8FZj&_nc_ht=scontent.fgru6-1.fna&oh=a945afe2ebfc1e06402bff6e6f87a721&oe=605E1281" alt="Iotti"/>
            <div>
                <strong>Felipe Iotti</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}