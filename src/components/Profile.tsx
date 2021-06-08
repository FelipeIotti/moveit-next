import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer} >
            <img src="https://scontent.fbau1-1.fna.fbcdn.net/v/t1.6435-9/75552857_2484983544903262_2152073340246818816_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rWQ0zrxQTeoAX8GJWgC&_nc_ht=scontent.fbau1-1.fna&oh=8b9c81c7c000d28a3798d5b9afe10339&oe=60E51AD3"/>
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