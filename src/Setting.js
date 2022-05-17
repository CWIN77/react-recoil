import React from 'react'
import { cookieState } from './state';
import { useSetRecoilState,useRecoilState } from 'recoil';

const Setting = () => {
  // const [cookie, setCookie] = useRecoilState(cookieState);
	const setCookie = useSetRecoilState(cookieState);
  return(
    <button onClick={()=>{setCookie("Change Cookie!!")}}>
      Change
    </button>
  );
}
export default Setting;