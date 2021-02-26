import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengesContext";


interface CountdownContextData {
  minutes:number;
  seconds:number;
  hasFinished:boolean;
  IsActive:boolean;
  startCountdown: ()=> void;
  ressetCountdown: ()=> void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps) {
  
  const {startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25*60);
  const [IsActive,setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time % 60;


  function startCountdown () {
    setIsActive(true);
  }
  function ressetCountdown () {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setHasFinished(false)
      setTime(25*60);
  }

  useEffect(()=>{
      if (IsActive && time > 0) {
          countdownTimeout = setTimeout(()=>{
              setTime(time-1);
          },1000)
      }
      else if(IsActive && time===0){
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
      }
  }, [IsActive,time])


  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      IsActive,
      startCountdown,
      ressetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  );
}