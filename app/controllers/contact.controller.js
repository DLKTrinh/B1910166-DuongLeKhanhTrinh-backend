exports.create = (req, res) => {
    res.send({ message: "create handeler"});
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler"});
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handeler"});
};

exports.update = (req, res) => {
    res.send({ message: "update handeler"});
};

exports.delete = (req, res) => {
    res.send({ message: "delete handeler"});
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handeler"});
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handeler"});
};