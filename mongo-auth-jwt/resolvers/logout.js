const Logout = (req,res) => {
    res.clearCookie('token');
    res.send('cookie has been cleared')
}

export default Logout;