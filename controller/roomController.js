const Post = require("../modal/post");

const CHANGE_PEOPLE_ROOM_TYPE = {
  LEAVE: "LEAVE",
  JOIN: "JOIN",
};

const rooms = [
  {
    name: "Metting Room",
    peopleNumber: 1,
    devices: [
      {
        name: "Ceiling lights",
        active: true,
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
    peopleNumber: 1,
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

  async changePeopleRoom(req, res) {
    const { roomName, quanlity, type } = req.body;
    const room = rooms.find((r) => r.name === roomName);
    // console.log( room.peopleNumber)

    if (!room) {
      return res.status(400).json({
        message: "Can not find the room !",
      });
    }

    let message = "";

    if (type === CHANGE_PEOPLE_ROOM_TYPE.JOIN) {
      message = `New ${quanlity} people is joined to ${room.name}.`;
      room.peopleNumber = room.peopleNumber + quanlity;
    } else if (type === CHANGE_PEOPLE_ROOM_TYPE.LEAVE) {
      if (quanlity >= room.peopleNumber) {
        message = `All people in ${room.name} is left.`;
        room.peopleNumber = 0;
      } else {
        message = `${quanlity} people is left ${room.name}.`;
        room.peopleNumber = room.peopleNumber - quanlity;
      }
    }

    // console.log(global._io)
    global._io.emit("people_event", {
      rooms: rooms,
      message,
    });

    return res.status(200).json({
      message: "success",
    });
  }

  changeStatusDevice(req, res) {
    const { roomName, deviceName } = req.body;
    let message;
    rooms.forEach((r) => {
      if (r.name.trim() === roomName.trim()) {
        r.devices?.map((d) => {
          if (d.name?.trim() === deviceName.trim()) {
            d.active = !d.active;
            if (d.active) {
              message = `${d.name} is turned on !!!`;
            } else {
              message = `${d.name} is turned off !!!`;
            }
          }
          return d;
        });
      }
      return r;
    });

    global._io.emit("reload_rooms", {
      rooms: rooms,
      message,
    });

    return res.status(200).json("success");
  }
}

module.exports = new roomController();
