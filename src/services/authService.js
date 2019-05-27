import http from "./httpService";
import jwtDecode from 'jwt-decode';
import { apiUrl } from "../config.json";
//import { getCurrentUser, getJwt } from './authService';

const apiEndPoint = apiUrl + "/auth"; 

http.setJwt(getJwt());

export  async function login(email, password){
  const {data: jwt}= await  http.post(apiEndPoint, {email, password})
  localStorage.setItem("token", jwt);
}  

export function loginWithJwt(jwt){

    localStorage.setItem("token", jwt);
}


export function logout(){
    localStorage.removeItem("token");

} 

export function getCurrentUser(){

    try{
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
      
      } 
      catch (ex){
          return null
      }
} 

export function getJwt(){
  return localStorage.getItem('token')  
}

export default{
    login,
    logout,
    loginWithJwt,
    getCurrentUser,
    getJwt
}