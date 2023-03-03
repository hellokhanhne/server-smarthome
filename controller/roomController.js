const Post = require("../modal/post");

const rooms = [
  {
    name: "Metting Room",
    peopleNumber: 2,
    devices: [
      {
        name: "Ceiling lights",
        active: false,
        type: "light",
      },
      {
        name: "Air condition",
        active: true,
        type: "aircondition",
      },
    ],
  },
  {
    name: "Kitchen",
    peopleNumber: 0,
  },
  {
    name: "Bedroom 1",
    peopleNumber: 0,
    devices: [
      {
        name: "Ceiling lights",
        active: true,
        type: "light",
      },
    ],
  },
  {
    name: "Bedroom 2",
    peopleNumber: 0,
  },

  {
    name: "Living Room",
    peopleNumber: 0,
    devices: [
      {
        name: "Television",

        active: true,
        type: "televison",
      },
    ],
  },
];

class roomController {
  // get read post
  // private
  async getRooms(req, res, next) {
    try {
      res.json({
        success: true,
        rooms,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}

module.exports = new roomController();
