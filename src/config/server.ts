import express from "express";

const client_id = "CLIENT_ID";
const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/login", function (req, res) {
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      })
  );
});
