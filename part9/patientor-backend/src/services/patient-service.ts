import patients from "../../data/patients";
import { Patient, NewPatient, NonSensitivePatient } from "../types";
import { v1 as uuid } from "uuid";

const getPatient = (id: string): Patient => {
  const patient = patients.find((patient) => {
    return patient.id === id;
  });
  if (patient) return patient;
  else throw new Error("Patient not found.");
};

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatient,
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
