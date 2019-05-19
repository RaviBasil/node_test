exports.getSequence = (req, res) => {
    let start = req.query.start ? parseInt(req.query.start) : 1;
    let end = req.query.end ? parseInt(req.query.end) : 1000000;

    try {
        let response = []
        for (let i = start; i <= end; i++) {
            if (i % 4 == 0 && i % 7 == 0) {
                response.push("marcopolo");
            } else if (i % 4 == 0) {
                response.push("marco");
            } else if (i % 7 == 0) {
                response.push("polo");
            } else {
                response.push(i);
            }
        }

        res.send(response.toString())
    } catch (error) {
        res.send("Oops! Some Error occured")
    }

}