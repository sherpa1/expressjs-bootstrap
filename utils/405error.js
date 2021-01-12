const allowed_http_verbs = [];

router.stack.forEach(route => {
    try {
        const verb = route.route.stack[0].method;

        if (!allowed_http_verbs.includes(verb)) allowed_http_verbs.push(verb);

    } catch (error) {

    }
})

router.use(function (req, res, next) {
    res.append('Allow', allowed_http_verbs.toString());
    return res.status(405).json({ message: "Method Not Allowed" });
});