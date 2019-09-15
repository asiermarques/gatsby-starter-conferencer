import Speaker from "./Speaker"
import agendaSlotType from "../../src/lib/agendaSlotTypes"

export default {
    "visible": true,
    "time_slots": ["10:00-11:00", "11:00-12:00"],
    "tracks":[
        {
            "name": "Olympia Room",
            "content_in_slots": [
                {
                    "type": agendaSlotType.SPEAKER,
                    "content": Speaker.slug
                },
                {
                    "type": agendaSlotType.TEXT,
                    "content": "test"
                }
            ]
        },
        {
            "name": "Niza",
            "content_in_slots": [
                {
                    "type": agendaSlotType.SPEAKER,
                    "content": Speaker.slug
                },
                {
                    "type": agendaSlotType.TEXT,
                    "content": "test"
                }
            ]
        }
    ]
}