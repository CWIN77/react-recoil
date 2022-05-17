import React, { useEffect } from 'react'
import { cookieState } from './state';
import { useRecoilState, useRecoilValue } from 'recoil';

const Cookie = () => {
	// const [cookie, setCookie] = useRecoilState(cookieState);
	const cookie = useRecoilValue(cookieState);
  useEffect(()=>{
    console.log(cookie)
  },[cookie])
  return(
    <h2>
      {cookie}
    </h2>
  );
}
export default Cookie;