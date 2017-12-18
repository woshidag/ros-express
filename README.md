# ros-express
use express with ros

# how to use
$git clone https://github.com/woshidag/ros_expressjs.git

$cd ros_expressjs

$npm install express roslib

$roslaunch rosbridge_server rosbridge_websocket.launch

$rosrun rospy_tutorials add_two_ints_server

start server

$node ./index.js

open another terminal

$curl -d "data={\"a\":1,\"b\":2}&name=/add_two_ints&rospy_tutorials/AddTwoInts" http://localhost:9001/hop/common_api
