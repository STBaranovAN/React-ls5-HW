var router = require("express").Router();
var fs = require("fs");
var uuid = require("node-uuid");
var data = require("./data.json");
var msg = require("./msgs.json");


// router.get("/", function(req, res){
// 	console.log(data.chats);
// 	res.render("index", {
// 		title: "Chats page",
// 		chatsArr: data.chats
// 	});
// });


router.get("/api", function(req, res){
	console.log(req.url);
	res.send(data);
});

router.get("/api/:roomId/messages", function(req, res){
	var roomId = req.params.roomId;
	if( msg.messages.findIndex(function(room){
		return room.roomId === roomId
	}) !== -1 ) {
		var roomMessages = msg.messages.filter(function(item){
			return item.roomId === roomId;
		});	
		res.json(roomMessages);
	}
	else {
		res.sendStatus(404);
	}
});

router.post("/api/addmessage", function(req, res){
	var newMsgObj = {
		text: req.body.text,
		roomId: req.body.roomId,
		userId: req.body.userId
	};
	var arr = [...msg.messages];
	arr.push(newMsgObj);
	msg.messages = arr;
	fs.writeFile("./msgs.json", JSON.stringify(msg), function(err){
		if(!err){
			res.json(msg.messages);
		}
	});	
	
});

router.get("/api/allmessages", function(req, res){
	var roomMessages = msg.messages;
	res.json(roomMessages);
}
);

module.exports = router;
