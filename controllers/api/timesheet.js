const router = require('express').Router();
const { response } = require('express');
const Time = require('../../models/Time');

router.post('/clockin', async (req, res) => {
    try {
        const dbtimesheetData = await Time.create({
            clockin_time: req.body.clockin_time,
            employee_id: req.session.employee_id,
        });
        console.log(dbtimesheetData);
        res.status(200).json(dbtimesheetData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.put('/clockout/', async (req, res) => {
    console.log(req.body);
    try {
        const timesheetData = await Time.findAll();
        const timesheet = timesheetData[timesheetData.length-1].get({ plain: true });
        const dbtimesheetData = await Time.update({
            clockout_time: req.body.clockout_time,
        },
        {
            where: {
                id: timesheet.id
            }
        })
        res.status(200).json(dbtimesheetData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;