const Job = require('../models/Job');
const moment = require('moment');

exports.getJobs = (req,res,next) => {
    const userId = req.userId;
    Job.find({ createdBy: userId})
        .then( jobs => {
            return res.status(200).json({
                jobs: jobs
            })
        })
        .catch(err => next(err) );
};

exports.getJob = (req,res,next) => {
    const jobId = req.params.jobId;
    Job.findById(jobId)
        .then(job => {
            if(job.createdBy.toString() !== req.userId){
                const error = new Error('Not Authorized');
                error.statusCode = 401;
                throw error;
            }
            return res.status(200).json({
                job: job
            });
        })
        .catch(err => {
            if(!err.statusCode){
                const error = new Error('No result found.');
                error.statusCode = 404;
                next(error);
            } else {
                next(err);
            }
        });
}

exports.postJob = (req,res,next) => {
    const title = req.body.title;
    const company = req.body.company;
    const address = req.body.address;
    const appliedOn = req.body.appliedOn;
    const status = req.body.status;

    let job = new Job({
        createdBy: req.userId,
        title: title,
        company: company,
        address: address,
        appliedOn: appliedOn,
        status: status
    });

    job.save()
        .then(job => {
            return res.status(201).json({
                message: 'Job created successfully.',
                job: job
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
                err.message = 'Server Error';
            }
            next(err);
        });
};

exports.editJob = (req,res,next) => {
    const jobId = req.params.jobId;

    const title = req.body.title;
    const company = req.body.company;
    const address = req.body.address;
    const appliedOn = req.body.appliedOn;
    const status = req.body.status;

    Job.findById(jobId)
        .then(job => {
            if(!job){
                const error = new Error('No result found.');
                error.statusCode = 404;
                throw error;
            }
            if(job.createdBy.toString() !== req.userId){
                const error = new Error('Not Authorized');
                error.statusCode = 402;
                throw error;
            }
            job.title = title;
            job.company = company;
            job.address = address;
            job.appliedOn = appliedOn;
            job.status = status;
            return job.save();
        })
        .then( updatedJob => {
            return res.status(201).json({
                message: "Job updated successfully.",
                job: updatedJob
            });
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
                err.message = 'Server Internal Error.';
                next(err);
            }
        });
};

exports.deleteJob = (req,res,next) => {
    const jobId = req.params.jobId;

    Job.findById(jobId)
        .then(job => {
            if(!job){
                const error = new Error('No result found.');
                error.statusCode = 404;
                throw error;
            }
            if(job.createdBy.toString() !== req.userId){
                const error = new Error('Not Authorized');
                error.statusCode = 402;
                throw error;
            }
            return job.remove();
        })
        .then( deletedJob => {
            return res.status(200).json({
                message: "Job deleted successfully.",
                job: deletedJob
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
                err.message = 'Server Internal Error.';
                next(err);
            }
        });
}