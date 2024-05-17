//          This error is shown when the route is not present
const routeNotFound = (req, res) => {
    res.status(404).json({ message: "Page Not Found" })
}

module.exports = routeNotFound;
