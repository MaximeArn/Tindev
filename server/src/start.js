const { server, http } = require("./server");

const PORT = process.env.PORT || 7000;
const SOCKET = process.env.SOCKET || 6000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
http.listen(SOCKET, () => console.log(`Socket listening on port ${SOCKET}`));
