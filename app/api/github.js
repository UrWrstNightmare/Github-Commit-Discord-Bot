import axios from "axios";
import {GITHUB_CREDENTIALS} from "../config/config.js";

const oAuthHeader = { headers: { "Authorization": `token ${ GITHUB_CREDENTIALS.TOKEN }`} };

const fGetUserCommits = async (username, dateOffset) => {
    const apiRes = await axios.get(`https://api.github.com/users/${ username }/events`, oAuthHeader );
    // TODO: Add custom date filter options
    const lEvents = apiRes.data;
    const lFilteredEvents = lEvents.filter( (elem) => {
        const eventDate = new Date(elem.created_at);
        const compareDate = new Date();

        compareDate.setDate(compareDate.getDate() - dateOffset);

        eventDate.setHours(0,0,0,0);
        compareDate.setHours(0,0,0,0);

        console.log(eventDate, compareDate, eventDate.toDateString() === compareDate.toDateString());

        return (eventDate.toDateString() === compareDate.toDateString());
    } );
    console.log(lFilteredEvents);
    return lFilteredEvents;
}

export { fGetUserCommits };