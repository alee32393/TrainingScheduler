const Users = require('../models').event;
const validator = require('validator');

const createEvent = async function (req, res) {
  res.setHeader('ContentType', 'application/json');
  const body = req.body;

  if (!body.eventName) {
    return ReE(res, 'Please enter the event name', 422);
  } else if (!body.eventLocation) {
    return ReE(res, 'Please enter the event location', 422);
  } else if(!body.eventDate){
    return ReE(res, 'Please enter the event date', 422);
  }else {
    let err, user

    [err, user] = await to(createEvent(body));
    if (err) return ReE(res, err, 422);

    return ReS(res, user, 201);
  }
}
module.exports.create = createEvent;
const updateEvent = async function(req, res) {
  let err, Event, data;
  Event = req.Event;
  data = req.body;
  Event.set(data);
  [err, Event] = await to(Event.save());
  if (err) {
    if (typeof err == "object" && typeof err.message != "undefined") {
      err = err.message;
    }

    if (typeof code !== "undefined") res.statusCode = code;
    res.statusCode = 422;
    return res.json({ success: false, error: err });
  }

  return res.json(Event);
};
module.exports.update = updateEvent;
const getEvent = async function(req, res) {
  let err, Event;
  let Event = parseInt(req.params.EventName);
  res.setHeader("Content-Type", "application/json");
  [err, Event] = await to(Events.findByPk(EventName));
  if (!Event) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
  return res.json(Event);
};
module.exports.get = getEvent;
const deleteEvent = async function(req, res) {
  let err, Event;
  Event = req.Event;
  [err, Event] = await to(Event.delete());
  if (!Event) {
    res.statusCode = 404;
    return res.json({ success: false, error: err });
  }
};
module.exports.delete = deleteEvent;