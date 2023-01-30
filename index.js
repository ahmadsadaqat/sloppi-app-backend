// eslint-disable-next-line no-unused-vars
const path = require("path");
const express = require("express");
// eslint-disable-next-line no-unused-vars
const colors = require("colors");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/spaces", require("./routes/spacesRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/journal", require("./routes/journalRoutes"));
app.use("/api/ideas", require("./routes/ideasRoutes"));
app.use("/api/gifts", require("./routes/giftsRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// // Serve frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   );
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'));
// }

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
