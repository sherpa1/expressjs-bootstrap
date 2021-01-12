class Error405 {

    static allowed_http_verbs = [];

    //explore router configured verbs
    explore(router) {
        router.stack.forEach(route => {
            try {
                const verb = route.route.stack[0].method;

                if (!Error405.allowed_http_verbs.includes(verb)) Error405.allowed_http_verbs.push(verb);

            } catch (error) {
                throw new Error(error);
            }
        })

    }
}

const error_handler = (req, res, next) => {

    //set allowed verbs
    res.append('Allow', Error405.allowed_http_verbs.toString());

    //if current http verb is allowed, it's a 404 error
    if (Error405.allowed_http_verbs.includes(req.method.toLowerCase())) return res.sendStatus(404);

    //if current http verb is not allowed, it's a 405 error
    return res.status(405).json({ message: "Method Not Allowed" });

}

module.exports = { Error405, error_handler };