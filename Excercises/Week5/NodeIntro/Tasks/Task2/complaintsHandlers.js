import complaints from "./consts.js";

function handleComplaint(complaint) {
  let complaintType = complaint.type;
  if (complaintType === complaints.FINANCE) {
    console.log("Money doesn't grow on trees, you know.");
  } else if (complaintType === complaints.WEATHER) {
    console.log("It is the way of nature. Not much to be done.");
  } else if (complaintType === complaints.EMOTIONS) {
    console.log("It'll pass, as all things do, with time.");
  }
}

export { handleComplaint };
