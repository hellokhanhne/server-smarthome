class SocketService {
  //connection socket
  connection(socket) {
    socket.on("disconnect", () => {
      console.log(`User disconnect id is ${socket.id}`);
    });
  }
}

module.exports = new SocketService();
