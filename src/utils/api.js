import axios from 'axios';

const BASE_URL = 'https://www.mocky.io/v2';
const team_uid = null;
const employee_uid = null;

function getTeams() {
  const url = `${BASE_URL}/5c9d99d133000056003f2385`;
  return axios.get(url).then(response => response.data);
}

function getEmployee(team_uid) {
  const url = `${BASE_URL}/5ca00c403300006e00a87dba?team=${team_uid}`;
  return axios.get(url).then(response => response.data);
}

function getEmployees(employee_uid) {
	console.log("employee_uid: ", employee_uid);
  const url = `${BASE_URL}/5c9d99b13300005b003f2382?employee=${employee_uid}`;
  return axios.get(url).then(response => response.data);
}


export { getTeams, getEmployee, getEmployees };