const responseMiddleware = (req, res, next) => {
  if (res.err) {
    const { message } = res.err;

    return res.status(404).json({ error: true, message });
  }

  if (res.data) {
    return res.status(200).json({ body: res.data });
  }

  return res.status(200);
};

exports.responseMiddleware = responseMiddleware;
