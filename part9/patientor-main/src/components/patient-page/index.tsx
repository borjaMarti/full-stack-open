import GenderedIcon from "./gendered-icon";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { Patient } from "../../types";
import patientService from "../../services/patients";

const PatientPage = () => {
  const { id = "" } = useParams();
  const [patient, setPatient] = useState<Patient>();
  useEffect(() => {
    const fetchPatientList = async () => {
      const patientCall = await patientService.getPatient(id);
      setPatient(patientCall);
    };
    void fetchPatientList();
  }, [id]);
  if (!patient) return <></>;

  return (
    <Stack>
      <Stack direction="row">
        <h1>{patient.name}</h1>
        <GenderedIcon gender={patient.gender} />
      </Stack>
      <p>{patient.dateOfBirth}</p>
      <p>Occupation: {patient.occupation}</p>
      <p>SSN: {patient.ssn}</p>
    </Stack>
  );
};

export default PatientPage;
