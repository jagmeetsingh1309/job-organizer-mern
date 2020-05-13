const express = require('express');

const jobController = require('../controllers/jobController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.get('/jobs', isAuthenticated, jobController.getJobs);

router.get('/job/:jobId',isAuthenticated, jobController.getJob);

router.put('/job/:jobId/edit', isAuthenticated, jobController.editJob);

router.post('/add-job',isAuthenticated, jobController.postJob);

router.delete('/delete/:jobId', isAuthenticated, jobController.deleteJob);

module.exports = router;