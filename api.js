console.log("OI gente")
const domain = 'meet.jit.si';
const options = {
    roomName: 'JitsiMeetAPIExample',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#iframe')
};
const api = new JitsiMeetExternalAPI(domain, options);