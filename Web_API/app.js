const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/dbConfig");
const { authenticateToken } = require('./middlewere/authMiddleware');
var multer = require('multer')
const path = require("path");

//geting routes

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyOwnerRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: '50mb'}));


const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
// Use the authRoutes for the root URL
app.get("/", (req, res) => {
  res.send(`Backend server is Up and running At port ${PORT}`);
});

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/user', authenticateToken, userRoutes);
app.use("/api/property", authenticateToken, propertyRoutes);



//save Profile Image
app.use(express.static(__dirname));
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/users")
    },
    filename: function (req, file, cb) {
      cb(null,  "user_" + Date.now() + ".png")
    }
  })
})
const uploadProperty = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/Property")
    },
    filename: function (req, file, cb) {
      cb(null,  "property_" + Date.now() + ".png")
    }
  })
})

const uploadVIdeo = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/PropertyVideo")
    },
    filename: function (req, file, cb) {
      cb(null,  "video_" + Date.now() + ".mp4")
    }
  })
})

const uploadDocument = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/Documents")
    },
    filename: function (req, file, cb) {
      cb(null,  "document_" + Date.now() + path.extname(file.originalname).toLowerCase())
    }
  })
})

app.post('/api/savePicture', upload.single('upload'), async (req, res) => {
  console.log('The filename is ' + res.req.file.filename);
  try {
  res.status(200).json({ message: "File Uploaded", filename: res.req.file.filename,  status: 200 });
  } catch (error) {
  console.log(error)
  res.status(400).send(error)
  }
  })

  app.post('/api/savePropertyImage', uploadProperty.single('upload'), async (req, res) => {
    try {
    res.status(200).json({ message: "File Uploaded", filename: res.req.file.filename,  status: 200 });
    } catch (error) {
    console.log(error)
    res.status(400).send(error)
    }
    })

    app.post('/api/savePropertyVideo', uploadVIdeo.single('upload'), async (req, res) => {
      try {
      res.status(200).json({ message: "File Uploaded", filename: res.req.file.filename,  status: 200 });
      } catch (error) {
      console.log(error)
      res.status(400).send(error)
      }
      })
      app.post('/api/savePropertyDocument', uploadDocument.single('upload'), async (req, res) => {
        try {
        res.status(200).json({ message: "File Uploaded", filename: res.req.file.filename,  status: 200 });
        } catch (error) {
        console.log(error)
        res.status(400).send(error)
        }
        })
  



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
