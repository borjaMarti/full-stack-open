import express from 'express';
import patientService from '../services/patient-service';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

export default router;
