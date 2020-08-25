const router = require('express').Router();


router.post('/test001', (req, res) => {

    let samples = req.body;

    const solution = (str) => {
        var answer = true;

        // logic

        return answer;
    };

    const result = samples.map( (testcase) => {
        testcase.output = solution(testcase.input);
        return testcase;
    });

    res.send(result);
});

router.post('/test002', (req, res) => {

    let samples = req.body;

    const solution = (str) => {
        var answer = [];
    
        // logic

        return answer;
    };

    const result = samples.map( (testcase) => {
        testcase.output = solution(testcase.input);
        return testcase;
    });

    res.send(result);
});

router.post('/test003', (req, res) => {

    let samples = req.body;

    const solution = (m, tree) => {
        var answer = "";
    
        // logic

        return answer;
    };

    const result = samples.map( (testcase) => {
        testcase.output = solution(testcase.m, testcase.tree.sort());
        return testcase;
    });

    res.send(result);
});

router.post('/test004', (req, res) => {

    let samples = req.body;

    const solution = (n, budget, m) => {
        var answer = 0;

       // logic

        return answer;
    };

    const result = samples.map( (testcase) => {
        testcase.output = solution(testcase.n, testcase.budget, testcase.m);
        return testcase;
    });

    res.send(result);
});

router.post('/test005', (req, res) => {
    
    let samples = req.body;

    const solution = (n, times) => {
        var answer = 0;
    
        // logic

        return answer;
    };

    const result = samples.map( (testcase) => {
        testcase.output = solution(testcase.n, testcase.times);
        return testcase;
    });

    res.send(result);
});

module.exports = router;