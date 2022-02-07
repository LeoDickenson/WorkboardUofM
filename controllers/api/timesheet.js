const router = require('express').Router();
const { response } = require('express');
const Time = require('../../models/Time');

router.post('/clockin', async (req, res) => {
    try {
        const dbtimesheetData = await Time.create({
            clockin_time: req.body.clockin_time,
        });
        console.log(dbtimesheetData);
        res.status(200).json(dbtimesheetData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.put('/clockout', async (req, res) => {
    try {
        const dbtimesheetData = await Time.update({
            clockout_time: req.body.clockout_time,
        },
        {
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json(dbtimesheetData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;